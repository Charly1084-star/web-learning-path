// escribir niveles dinamicamente

escribeNiveles();

// asignar Events
document.querySelectorAll(".reiniciar").forEach(function(e){
     e.addEventListener("click", reiniciar);
});

//juego normal
document
     .querySelector("#juego-normal")
     .addEventListener("click", iniciaJuegoNormal);

// juego relax
document
     .querySelector("#juego-relax")
     .addEventListener("click", iniciaJuegoRelax);

// control de nivel (mostrar)
document
     .querySelector("#control-nivel")
     .addEventListener("click", muestraMenuNiveles);

// control de nivel (ocultar)
document
     .querySelector("#cierra-niveles")
     .addEventListener("click", ocultaMenuNiveles);

// modula cada nivel
document.querySelectorAll(".nivel").forEach(function(e){
     e.addEventListener("click", cambiaNivel)
})

document.querySelector("#subir").addEventListener("click", cargaNuevoNivel);
document.querySelector("body").addEventListener("click", clickFueraMenu);
document.addEventListener("keydown", teclaEscCierraMenu);

// mostrar pantalla de bienvenida
document.querySelector("#bienvenida").classList.add("visible");