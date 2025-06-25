function escribeNiveles() {
     var menuNiveles = document.querySelector(".selecciona-nivel ul");
     niveles.forEach(function(e,i){
          var controlNivel = document.createElement("li");
          controlNivel.innerHTML =
          "<button class='nivel' data-nivel=" 
          + i +    // indice 
          "> Nivel " 
          + (i + 1) + // Nivel (1,2,3...)
          "</button>"
          // donde lo quiero agregar (metodo agregar un hijo a una clase padre)
          menuNiveles.appendChild(controlNivel);
     })
}

function cambiaNivel() {
     var nivel = parseInt(this.dataset.nivel);
     nivelActual = nivel;
     actualizarNivel();
     iniciar();
}

function muestraMenuNiveles(evento) {
     evento.stopPropagation();
     document
     .querySelector(".selecciona-nivel")
     .classList.toggle("visible");
}

function ocultaMenuNiveles() {
     document.querySelector(".selecciona-nivel").classList.remove("visible");
}

function clickFueraMenu(e) {
     if(e.target.closest(".selecciona-nivel")){
          return;
     }
     document.querySelector(".selecciona-nivel").classList.remove("visible");
}

function teclaEscCierraMenu(e) {
     if(e.key == "Escape"){
          ocultaMenuNiveles();
     }
}



