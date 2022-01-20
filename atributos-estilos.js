let $titulo = document.querySelector('#titulo');
let $texto = document.querySelector('.texto');
$texto.id = ('texto');
//esto para agregar un estilo al texto
/*$texto.style = 'color: red; font-size: 24px';^*/
//para agregar estilo al texto desde css
$texto.className = 'bg-purple h3';
//si se coloca otra clase para texto remplaza la anterior
/* $texto.className = 'h3'; */
//para agrear una clase del css al texto
$texto.classList.add('text-center');
//para remover una clase del css del texto
$texto.classList.remove('bg-purple');