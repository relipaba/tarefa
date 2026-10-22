function esconderTodas() {
    document.querySelector("#aba1").style.display = "none";
    document.querySelector("#aba2").style.display = "none";
    document.querySelector("#aba3").style.display = "none";
    document.querySelector("#aba4").style.display = "none";
    document.querySelector("#aba5").style.display = "none";
    document.querySelector("#aba6").style.display = "none";
    }

    function mostrarAba(numero) {
      // Primeiro esconde todas
    esconderTodas();

      // Depois exibe apenas a aba correspondente ao número recebido
    let abaEscolhida = document.querySelector("#aba" + numero);
    abaEscolhida.style.display = "block";
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

