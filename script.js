function pegarTamanho() {
  var tamanho = parseInt(document.getElementById("tamanho").value);
  var digitos = "0123456789";
  var letras_min = "abcdefghijklmnopqrstuvwxyz";
  var letras_mai = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var caracteres_esp = "!@#$%^&*()_-+={[}]|\\:;<,>.?/";

  var valores = digitos + letras_min + letras_mai + caracteres_esp;
  var senha = "";

  if (tamanho >= 1 && tamanho <= 100) {
    for (var i = 0; i < tamanho; i++) {
      var numeroSorteado = Math.floor(Math.random() * valores.length);
      senha += valores.charAt(numeroSorteado);
    }
    document.getElementById("resultado").innerHTML = " " + senha;
  } else {
    document.getElementById("resultado").innerHTML = "Tamanho inválido!";
  }
}

var tamanhoInput = document.getElementById("tamanho");
var tamanhoOutput = document.getElementById("tamanho-atual");

tamanhoInput.addEventListener("input", function () {
  tamanhoOutput.textContent = tamanhoInput.value;
});

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    var btn = document.querySelector("#btn");
    btn.click();
  }
});
