const images = document.querySelectorAll('.animals-list li img');

images.forEach((image) => {
    image.onmouseover = () => {
        console.log('passou o mouse')
    };
});
