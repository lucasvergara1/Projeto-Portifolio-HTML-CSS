//usado para fazer comentarios no JS
//Queremos fazer mover o carousel, logica por de trás 

//1 Acessar a Janela (browser)
//2 Pegar HTML 
//3 Pegar botão
//4 Saber que está sendo clicado no botão

//5 Acessar a Janela
//6 PEgar HTML todo
//7 Pegar o elements
//8 Mover o Elements
//9


const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 10;

btnRight.addEventListener('click', function() {
    pixels = pixels + 10;
    elements.style.transform = `translateX(${pixels}px)`;
});

btnLeft.addEventListener('click', function(){
    pixels = pixels - 10;
    elements.style.transform = `translateX(${pixels}px)`;

});