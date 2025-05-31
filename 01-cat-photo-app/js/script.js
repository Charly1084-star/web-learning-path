document.getElementById("gatoBtn").addEventListener("click", function (){
     alert("Hola! soy un gato michi miau");
});

const botonGato = document.getElementById("gatoBtn");
botonGato.addEventListener("click", function(){
     botonGato.textContent = "!Gracias¡ ahora soy muy feliz";
     botonGato.style.backgroundColor = "#0001";
     botonGato.style.color = "none";
     botonGato.style.border = "10px 20px";
     botonGato.style.padding = "10px";
     botonGato.style.borderRadius = "10px";
     botonGato.style.fontWeight = "bold";
});


