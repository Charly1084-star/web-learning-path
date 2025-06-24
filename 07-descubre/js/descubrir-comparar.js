function descubir(){
     var descubiertas;
     var tarjetasPendientes;
     var totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

     

     if(totalDescubiertas.length > 1){
          return;
     }

     this.classList.add("descubierta");

     document.querySelector("#sonido-carta").cloneNode().play();
     descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

     if(descubiertas.length < 2){
          return;
     }

     comparar(descubiertas);
     actualizarCont();

     tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
     if(tarjetasPendientes.length === 0 ){
          setTimeout(finalizar, 1000);
     }
}

function comparar(_tarjetaD){
     if(_tarjetaD[0].dataset.valor === _tarjetaD[1].dataset.valor){
          acierto(_tarjetaD);
     } else {
          error(_tarjetaD);
     }
}