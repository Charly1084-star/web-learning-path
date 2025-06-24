function iniciar() {
     movimientos = 0;
     reparteTarjetas(niveles[nivelActual].tarjetas);
     document.querySelector("#mov").innerHTML = "00";
     maxContador();
     document.querySelector("#endGame").classList.remove("visible");
     document.querySelector("#gameOver").classList.remove("visible");
     document.querySelector("#subeNivel").classList.remove("visible");
     //document.querySelector("#feedback").classList.remove("visible")

     document.querySelectorAll(".tarjeta").forEach(function(e){
          e.addEventListener("click", descubir)
     });

     iniciaCrono();
}

function reiniciar() {
     nivelActual = 0;
     actualizarNivel();
     iniciar();
}

iniciar();
document.querySelectorAll(".reiniciar").forEach(function(e){
     e.addEventListener("click", reiniciar);
});

document.querySelector("#subir").addEventListener("click", cargaNuevoNivel) 