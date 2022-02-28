lidarComDescricaoAoCliqueNoPet();
manipularAccordionList();
lidarComScrollDaPagina();

function lidarComDescricaoAoCliqueNoPet() {
    //Pegar lista de imagem dos pets e outra da descrição deles
    //Adicionar a classe "ativo" na descrição do pet selecionado (que o usuário passou com o mouse em cima)
    //Desabilitar no CSS todas as descrições que não estiverem com a classe "ativo"
    //Deixar habilitado somente a descrição vinculada ao animal selecionado (que o usuário passou com o mouse em cima)
    //Adicionar uma animação para quando selecionado outro pet a troca do texto ficar mais suave

    const listaImagemPets = document.querySelectorAll('.js-tabmenu li');
    const listaDescricaoPets = document.querySelectorAll('.js-tabcontent section');

    function tornarVisivelDescricaoAnimalSelecionado(indice) {
        listaDescricaoPets.forEach((descricaoPet) => {
            descricaoPet.classList.remove('ativo');
        });    
        
        listaDescricaoPets[indice].classList.add('ativo');
    }

    listaImagemPets.forEach((imagemPet, indice) => {
        imagemPet.addEventListener('mousemove', () => {
            tornarVisivelDescricaoAnimalSelecionado(indice);
        }); 
    }); 
}

function manipularAccordionList() {
    //Deixar o texto e a descrição com a classe "ativo", desativando quando for clicado novamente
    //Adicionar display:none em todas as descrições que não tiverem sido clicadas
    //Adicionar seta indicado se aquele item está desdobrado ou não 
    //Adicionar animação para desdobrar mais suave
    
    const listaAccordion = document.querySelectorAll('.js-accordion dt');

    function lidarComCliqueNoAccordion() {
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo');
    }

    listaAccordion.forEach(itemAccordion => itemAccordion.addEventListener('click', lidarComCliqueNoAccordion));
}

function lidarComScrollDaPagina() {
    //Scroll Suave da página ao clicar no menu:
    //Pegar a lista de links do menu e adicionar evento de clique
    //Ao clicar, fazer um scroll suave até o início da section vinculada ao item do menu que foi clicado.

    const cabecalho = document.querySelectorAll('.js-menu a[href^="#"]');

    function ativarScrollSuave(event) {
        event.preventDefault();
        const itemMenuClicado = event.target.getAttribute('href');
        const secaoClicada = document.querySelector(itemMenuClicado);

        secaoClicada.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    cabecalho.forEach(itemCabecalho => itemCabecalho.addEventListener('click', ativarScrollSuave));

    //Animar Sections ao "Scrollar" pela página:
    //Adicionar um evento de scroll no window que fique observando a movimentação da página
    //Pegar todas as sections da página
    //Ocultar todas as sections com o "opacity"
    //Quando o scroll chegar na section, adicionar a classe ativo e trazer a section
    //Ao passar pelas sections, animar igual a animação da descrição dos pets
    
    //Ajuste: Assim que a tela atingir 60% de "espaço em branco" da proxima section, já trazer a próxima section para não ficar um espaço em branco muito grande, fica feio para o usuário.

    const secoes = document.querySelectorAll('.js-scroll');
    const metadeDaTela = window.innerHeight * 0.6;

    function animarScroll() {
        secoes.forEach(secao => {
            const topoDaSecao = secao.getBoundingClientRect().top;
            const habilitarVisibilidadeDaSecao = (topoDaSecao - metadeDaTela) < 0;

            if(habilitarVisibilidadeDaSecao) {
                secao.classList.add('ativo');
            }
        });
    }

    animarScroll();
    window.addEventListener('scroll', animarScroll);
}