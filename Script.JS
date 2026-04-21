document.addEventListener("DOMContentLoaded", function() {

    const titulos = document.querySelectorAll(".regioes__principais");

    console.log("Quantidade encontrada:", titulos.length);

    titulos.forEach(titulo => {
        titulo.addEventListener("click", () => {

            console.log("Clique detectado!");

            const todosConteudos = document.querySelectorAll(".regioes__principais__ex");

            todosConteudos.forEach(p => {
                if (p !== titulo.nextElementSibling) {
                    p.style.display = "none";
                }
            });

            const conteudo = titulo.nextElementSibling;

            if (conteudo.style.display === "block") {
                conteudo.style.display = "none";
            } else {
                conteudo.style.display = "block";
            }

        });
    });

});

// Alterna listas principais (sublistas)
function toggleMenu(botao) {
    const lista = botao.nextElementSibling;
    lista.classList.toggle("ativo");
}

// Alterna descrições individuais
function toggleDescricao(botao) {
    const descricao = botao.nextElementSibling;
    descricao.classList.toggle("ativo");
}

function toggleDescricao(botao) {

  const descricao = botao.nextElementSibling;
  const painel = document.getElementById("painel-conteudo");

  // se já estiver mostrando esse conteúdo, volta pro estado neutro
  if (painel.dataset.active === botao.textContent) {
    painel.innerHTML = `
      <img class="mapa" src="img/Mapa LOR.JPG" alt="Mapa da Terra Média" height="377px" width="668px">
    `;
    painel.dataset.active = "";
    return;
  }

  

  // atualiza painel
  painel.innerHTML = descricao.innerHTML;
  painel.dataset.active = botao.textContent;
}