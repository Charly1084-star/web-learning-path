function iniciar() {
     movimientos = 0;
     reparteTarjetas(niveles[nivelActual].tarjetas);
     document.querySelector("#mov").innerHTML = "00";
     maxContador();
     document.querySelector(".selecciona-nivel").classList.remove("visible");
     document.querySelector("#endGame").classList.remove("visible");
     document.querySelector("#timeOver").classList.remove("visible");
     document.querySelector("#gameOver").classList.remove("visible");
     document.querySelector("#subeNivel").classList.remove("visible");
     //document.querySelector("#feedback").classList.remove("visible")

     document.querySelectorAll(".tarjeta").forEach(function(e){
          e.addEventListener("click", descubir)
     });
     
     if(!modoRelax) {
          iniciaCrono();
     } else {
          document.querySelector("#cronometro").classList.add("cronometro-oculto");
     }
}

function reiniciar() {
     nivelActual = 0;
     actualizarNivel();
     iniciar();
}

function iniciaJuegoNormal() {
     modoRelax = false;
     document.querySelector("#bienvenida").classList.remove("visible");
     iniciar();
     document.querySelector(".control-nivel").classList.add("control-oculto");
}

function iniciaJuegoRelax() {
     modoRelax = true;
     document.querySelector("#bienvenida").classList.remove("visible");
     iniciar();
}


/*

iniciar();
document.querySelectorAll(".reiniciar").forEach(function(e){
     e.addEventListener("click", reiniciar);
});

document.querySelector("#subir").addEventListener("click", cargaNuevoNivel) 
*/