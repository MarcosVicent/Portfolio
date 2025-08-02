document.addEventListener('DOMContentLoaded', function() {

    const secoes = document.querySelectorAll('.secao-portifolio');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
            } else {
            }
        });
    }, { threshold: 0.1 });

    secoes.forEach(secao => {
        observer.observe(secao);
    });

    const linksMenu = document.querySelectorAll('.menu-navegacao a');
    linksMenu.forEach(link => {
        link.addEventListener('click', function(evento) {
            evento.preventDefault();
            const idSecao = this.getAttribute('href').substring(1);
            const secaoAlvo = document.getElementById(idSecao);

            if (secaoAlvo) {
                secaoAlvo.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

     const conteudoCarregavel = document.getElementById('conteudo-carregavel');
    if (conteudoCarregavel) {
        window.onload = function() {
            conteudoCarregavel.classList.add('aparecer');
        };
    }

});