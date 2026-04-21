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