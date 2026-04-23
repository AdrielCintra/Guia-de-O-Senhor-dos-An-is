document.addEventListener("DOMContentLoaded", function () {

  const regioes = document.querySelectorAll(".regioes__principais");
  const painel = document.getElementById("painel-conteudo");

  regioes.forEach(regiao => {

    regiao.addEventListener("click", () => {

      const descricao = regiao.nextElementSibling;

      // se clicar na mesma → volta pro mapa
      if (painel.dataset.active === regiao.textContent) {
        painel.innerHTML = `
          <img class="mapa" src="img/Mapa LOR.JPG">
        `;
        painel.dataset.active = "";
        return;
      }

      // joga conteúdo no painel
      painel.innerHTML = descricao.innerHTML;

      painel.dataset.active = regiao.textContent;

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