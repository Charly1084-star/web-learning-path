function subeNivel(){
     nivelActual++;
}

function actualizarNivel() {
     var nivelTexto = nivelActual + 1;
     if(nivelTexto < 10) {
          nivelTexto = "0" + nivelTexto;
     }
     document.querySelector("#nivel").innerText = nivelTexto;

}

function cargaNuevoNivel() {
     subeNivel();
     actualizarNivel();
     iniciar();
}