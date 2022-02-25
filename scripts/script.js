const listaImagemPets = document.querySelectorAll('.animals-list.js-tabmenu li');
const listaDescricaoPets = document.querySelectorAll('.description-animals.js-tabcontent section');

function tornarVisivelDescricaoAnimalSelecionado(indice) {
    listaDescricaoPets.forEach((descricaoPet) => {
        descricaoPet.classList.remove('ativo');
    });    
    
    listaDescricaoPets[indice].classList.add('ativo');
}

listaImagemPets.forEach((imagemPet, indice) => {
    imagemPet.onmouseover = () => tornarVisivelDescricaoAnimalSelecionado(indice)
}); 

