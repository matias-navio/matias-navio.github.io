const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir-nav");
const cerrar = document.querySelector("#cerrar-nav");

/*
    funcion que agrega un evento
    al hacer click en el menu se abre
*/
abrir.addEventListener('click', ()=>{
    nav.classList.add("visible")
})

/*
    funcion que agrega un evento
    al hacer click en la X se cierra
*/
cerrar.addEventListener('click', ()=>{
    nav.classList.remove("visible")
})

inicio.addEventListener('mouseover', () =>{
    inicio.classList.add(".btn-inicio-hover");
})

inicio.addEventListener('mouseout', () =>{
    prueba.classList.add(".btn-inicio-hover");
})

