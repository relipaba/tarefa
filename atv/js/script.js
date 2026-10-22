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

    function mostrarCadastro(){
      if (document.querySelector(".cadastro").style.display = "none"){
        document.querySelector(".cadastro").style.display = "block";
      } else {
        document.querySelector(".cadastro").style.display = "none";
      }
    }

    