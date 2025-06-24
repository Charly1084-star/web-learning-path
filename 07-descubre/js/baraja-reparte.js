function bajaraTarjetas(tarjetas) {
     var resultado;
     var totalTarjetas = tarjetas.concat(tarjetas);
     resultado = totalTarjetas.sort(function() {
          return 0.5 - Math.random();
     });
     return resultado;
}

function reparteTarjetas(tarjetas){
     var mesa = document.querySelector("#mesa");
     var tarjetasBarajadas = bajaraTarjetas(tarjetas);
     mesa.innerHTML = "";

     tarjetasBarajadas.forEach(function(e) {
          var tarjeta = document.createElement("div");
          tarjeta.innerHTML = 
          "<div class='tarjeta' data-valor= "+ e +">" +
               "<div class='tarjeta-contenido'>"+ e +"</div>" +
          "</div>";

          mesa.appendChild(tarjeta);
          
     })
}    