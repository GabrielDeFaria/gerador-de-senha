function pegarTamanho() {
    tamanho = parseInt(document.getElementById("input").value);
    document.getElementById("input").value = "";
  
    digitos = "0123456789";
    letras_min = "aãbcçdefghijklmnopqrstuvwxyz";
    letras_mai = "AÃBCÇDEFGHIJKLMNOPQRSTUVWXYZ";
    caracteres_esp = "!#$%&*+,-./:;<=>?@^_`|~";
  
    valores = digitos + letras_min + letras_mai + caracteres_esp;
  
    if (tamanho >= 1) {
      if (tamanho <= 100) {
        var senha = formarSenha();
        exibirNaTela(senha);
      } else {
        document.getElementById("resultado").innerHTML =
          "Senha muito grande (Digite números menores que 100)";
      }
    } else {
      document.getElementById("resultado").innerHTML =
        "Senha nula ou negativa (Digite números maiores que 0)";
    }
  }
  
  function formarSenha() {
    var senha = "";
  
    for (var i = 0; i < tamanho; i++) {
      var numeroSorteado = Math.floor(Math.random() * 89);
      var valor = valores[numeroSorteado];
  
      if (valor == ";") {
        if (senha.indexOf("&") >= 0) {
          while (numeroSorteado == 78) {
            numeroSorteado = Math.floor(Math.random() * 89);
          }
          valor = valores[numeroSorteado];
          console.log("teve & seguido de ; e foi trocado");
        }
      }
  
      senha += valor;
    }
    senha = verificador(senha);
    return senha;
  }
  
  function exibirNaTela(senha) {
    for (var k = 0; k < senha.length; k++) {
      if (senha[k] == "<") {
        senha = senha.replace("<", "&lt;");
      }
    }
    document.getElementById("resultado").innerHTML = "Senha: " + senha;
  }
  function verificador(senha) { 
    var verDigito = 0;
    var verLetraMin = 0;
    var verLetraMai = 0;
    var verChar = 0;
    if (tamanho < 50) {
      var numNec = Math.floor(0.25 * tamanho);
    } else {
      var numNec = 12;
    }
    for (var i = 0; i < senha.length; i++) {
      if (digitos.indexOf(senha[i]) >= 0) {
        verDigito += 1;
      } else if (letras_min.indexOf(senha[i]) >= 0) {
        verLetraMin += 1;
      } else if (letras_mai.indexOf(senha[i]) >= 0) {
        verLetraMai += 1;
      } else if (caracteres_esp.indexOf(senha[i]) >= 0) {
        verChar += 1;
      }
    }
  
    if (
      verDigito < numNec ||
      verLetraMin < numNec ||
      verLetraMai < numNec ||
      verChar < numNec
    ) {
      console.log("Senha fraca trocada: " + senha);
      senha = formarSenha();
    }
    return senha;
  }
  
  document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      var btn = document.querySelector("#btn");
  
      btn.click();
    }
  });
  