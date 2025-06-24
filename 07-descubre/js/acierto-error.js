function acierto(_tarjetaA) {
     _tarjetaA.forEach(function(e){
          e.classList.add("acertada");
     })
     document.querySelector("#sonido-acierto").play();

}


function error(_tarjetaE) {
     _tarjetaE.forEach(function(e){
          e.classList.add("error");
     });

     document.querySelector("#sonido-error").play();

     setTimeout(function(){
          _tarjetaE.forEach(function(e){
               e.classList.remove("descubierta");
               e.classList.remove("error");
          });
     }, 750);  

}
