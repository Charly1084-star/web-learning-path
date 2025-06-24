var segundos = 0;
var minutos = 1;
var segundosTexto;
var minutostexto;
var cronometro;


function iniciaCrono(){
     function actualizaCont(){
          console.log(segundos)
          segundos --;
          if(segundos < 0){
               segundos = 59 ;
               minutos--; 
          }

          if(minutos < 0){
               segundos = 0;
               minutos = 0;
               // limpiar el cronometro 
               clearInterval(cronometro);
          }
          segundosTexto = segundos;
          minutostexto = minutos;
          if(segundos < 10){
               segundosTexto = '0' + segundos;
          }
          if(minutos < 10) {
               minutostexto = '0' + minutos;
          }

          document.querySelector('#minutos').innerHTML = minutostexto;
          document.querySelector('#segundos').innerHTML = segundosTexto;
     }

     cronometro = setInterval(actualizaCont, 1000);
}
