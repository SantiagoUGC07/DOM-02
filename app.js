/*let titulo =  document.getElementById('titulo');

console.log(titulo.textContent);
titulo.textContent = 'Titulo escrito desde JS';*/

/*PARA ACCEDER AL HTML CON QUERY */
let $titulo = document.querySelector('#titulo'); /*si queremos acceder a una etique p ('p') para una clase ('.nombreclase') y para un id ('#titulo')  funciona igual que getelementby(#id , tag, name o .class)*/
$titulo.textContent = 'Titulo escrito desde JS'

//con esto podemos accedor al primer parrafo
let $parrafo = document.querySelector('p');
console.log($parrafo.textContent);
//para acceder a todos los parrafor usar querySelectorAll
let $parrafos = document.querySelectorAll('p');
console.log($parrafos);
//para acceder al parrafo dos se usa en forma de arreglo
console.log($parrafos[1].textContent);

/*para crear elementos en memoria y despues agregarlos al html*/
let subtitulo = document.createElement('h3');
subtitulo.textContent = ('Este es un subtitulo desde JS');
//con esto insertamos el elemento al html, pero el elemento se agrega despues del ultimo titulo
document.body.append(subtitulo);
//para indicar la posicion del elemento, y coloca el subtitulo despues del titulo.
$titulo.insertAdjacentElement("afterend",subtitulo);
//para eliminar un titulo
$titulo.remove();

/*para cambiar el contenido de texto y html.... innerHTML outerHTML*/
let $contenido = document.querySelector('#contenido');
/*//con este metodo remplazas el contenido del html en la consola y en la pagina
console.log($contenido.textContent = 'hola');
//el text content solo se puede escribir texto para remplazar en html, solo se modifica lo que esta dentro
console.log($contenido.textContent = '<br>');
//el innerhtml si puede sustituir etiquetas html en el documento aparte del textpo, solo modifica lo que esta dentro
console.log($contenido.innerHTML = '<br>');
//ouuter modifica todo hasta el nodo desaparece hasta el div creado 
console.log($contenido.outerHTML = 'hola');*/

//para agregar contenido a un parrafo, pero no aparece en el html solo en la pagina como el hijo del parrafo ya que coloca el texto hasta el final
let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'contenido de mi nuevo parrafo';
$contenido.appendChild(contenidoParrafo);

//

