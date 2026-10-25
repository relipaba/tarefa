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

    let escuro = document.body.classList.contains("escuro");

    document.querySelector("#btnTema").innerText =
        escuro ? "Modo Claro" : "Modo Escuro";

    localStorage.setItem("temaEscuro", escuro);
}

function mudarCor(cor) {
    document.body.style.backgroundColor = cor;
    localStorage.setItem("corFundo", cor);
}

function resetarPersonalizacao() {
    document.body.classList.remove("escuro");
    document.body.style.backgroundColor = "beige";

    document.querySelector("#btnTema").innerText = "Modo Escuro";

    localStorage.removeItem("temaEscuro");
    localStorage.removeItem("corFundo");
}

window.addEventListener("DOMContentLoaded", function () {
    let temaSalvo = localStorage.getItem("temaEscuro");
    let corSalva = localStorage.getItem("corFundo");

    if (temaSalvo === "true") {
        document.body.classList.add("escuro");
        document.querySelector("#btnTema").innerText = "Modo Claro";
    }

    if (corSalva) {
        document.body.style.backgroundColor = corSalva;
    }
});

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
    let formulario = document.querySelector("#formCadastro");

    let nome = document.querySelector("#nome").value.trim();
    let email = document.querySelector("#email").value.trim();
    let idade = Number(document.querySelector("#idade").value);
    let usuario = document.querySelector("#userNameInput").value.trim();

    let genero = document.querySelector('input[name="genero"]:checked');
    let plataforma = document.querySelector("#plataforma").value;

    let senha = document.querySelector("#password").value;
    let confirmaSenha = document.querySelector("#passwordCheck").value;

    let mensagem = document.querySelector("#mensagem");

    // Validação dos campos obrigatórios
    if (
        nome === "" ||
        email === "" ||
        !document.querySelector("#idade").value ||
        usuario === "" ||
        !genero ||
        plataforma === "" ||
        senha === "" ||
        confirmaSenha === ""
    ) {
        mensagem.innerText = "Preencha todos os campos obrigatórios!";
        mensagem.style.color = "red";
    }
    else if (!email.includes("@") || !email.includes(".")) {
        mensagem.innerText = "Digite um e-mail válido!";
        mensagem.style.color = "red";
    }
    else if (idade < 1 || idade > 120 || !Number.isInteger(idade)) {
        mensagem.innerText = "Digite uma idade válida!";
        mensagem.style.color = "red";
    }
    else if (senha.length < 8) {
        mensagem.innerText = "A senha deve ter no mínimo 8 caracteres!";
        mensagem.style.color = "red";
    }
    else if (senha !== confirmaSenha) {
        mensagem.innerText = "As senhas devem ser iguais!";
        mensagem.style.color = "red";
    }
    else {
        document.querySelector("#userName").innerText = usuario;

        mensagem.innerText = "Cadastro realizado com sucesso!";
        mensagem.style.color = "green";

        alert("Cadastro realizado com sucesso!");

        formulario.reset();
    }
}

function alternarFaq(botao) {
    let resposta = botao.nextElementSibling;

    if (resposta.style.display === "block") {
        resposta.style.display = "none";
    } else {
        resposta.style.display = "block";
    }
}
