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
        imagemPet.onmouseover = () => tornarVisivelDescricaoAnimalSelecionado(indice)
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

lidarComDescricaoAoCliqueNoPet();
manipularAccordionList();