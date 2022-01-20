let $titulo = document.querySelector('#titulo');
let $mensaje = document.querySelector("#mensaje");
let $btnMensaje = document.querySelector('#btnMensaje');
let $spanError = document.querySelector("span");

//de esta manera se agrega un evento en JS para el id btnMensaje del boton
$btnMensaje.addEventListener("click",function()
{
    console.log("No me presiones")
});/*esta e suna funcion anonima sin nombre */

//evento JS saber si se presiona una tecla
$mensaje.addEventListener("keydown",()=>{
    console.log("Escribiste algo");

}); //funcion anonima tipo flecha, puede colocarse una funcion con nombre pero sin los parentesis

//evento JS ppara saber que tecla se presiono, e hace referencia al evento.
$mensaje.addEventListener("keyup",(e)=>{
    //apuntar al valor de la tecla presionada
    console.log(e.target.value);
    //para agregar un mensaje que diga que la cadena debe tener 3 caracter
    if(e.target.value.length < 3)
    {
        $spanError.classList.remove('hide');
        $spanError.classList.add('error');
    }
    else
    {
        $spanError.classList.add('hide');
        $spanError.classList.remove('error');
    }
    //length es para ver el valor del tamaño del texto
});
