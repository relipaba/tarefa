function esconderTodas() {
  document.querySelector("#aba1").style.display = "none";
  document.querySelector("#aba2").style.display = "none";
  document.querySelector("#aba3").style.display = "none";
  document.querySelector("#aba4").style.display = "none";
  document.querySelector("#aba5").style.display = "none";
  document.querySelector("#aba6").style.display = "none";
}

function mostrarAba(numero) {
  let abaEscolhida = document.querySelector("#aba" + numero);
  if (abaEscolhida.style.display === "block") {
    abaEscolhida.style.display = "none";
  } else {
    esconderTodas();
    abaEscolhida.style.display = "block";
  }
}

function mudarTema() {
  document.body.classList.toggle("escuro");

  let botao = document.querySelector("#btnTema");
  if (document.body.classList.contains("escuro")) {
    botao.innerText = "Modo Claro";
  } else {
    botao.innerText = "Modo Escuro";
  }
}

function mostrarCadastro() {
  if (
    document.querySelector(".cadastro").style.display == "none" ||
    document.querySelector(".cadastro").style.display == ""
  ) {
    document.querySelector(".cadastro").style.display = "block";
  } else {
    document.querySelector(".cadastro").style.display = "none";
  }
}

function mostrarStatus() {
  if (
    document.querySelector(".status").style.display == "none" ||
    document.querySelector(".status").style.display == ""
  ) {
    document.querySelector(".status").style.display = "block";
  } else {
    document.querySelector(".status").style.display = "none";
  }
}

function cadastro() {
  let nome = document.querySelector("#nome").value;
  let senha = document.querySelector("#password").value;
  let confirmaSenha = document.querySelector("#passwordCheck").value;
  let userName = document.querySelector("#userName");
  let mensagem = document.querySelector("#mensagem");
  userName.innerText = nome;
  if (senha !== confirmaSenha) {
    mensagem.innerText = "As senhas devem ser iguais";
    mensagem.style.color = "red";
  } else if (senha.length < 6) {
    mensagem.innerText = "A senha deve ter no minimo 6 digitos!";
    mensagem.style.color = "red";
  } else {
    mostrarCadastro();
  }
}
