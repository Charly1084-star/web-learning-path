let listaPalabras = ["tiburon","leon","salamandra","mono","elefante","avestruz","capibara","chiguiro","drilococo", "tortuga", "sapo"];
let paabraSecreta; 
let intentosRestantes = 6;
let letrasUsadas = [];
document.getElementById("jugar").disabled = false;
document.getElementById("validar").disabled = true;
document.getElementById("reiniciar").disabled = true; 

// f(obtener palabra)
function obtenerPalabra (){
     let palabra = "";
     return palabra;
};

// f(mostrar vidas)
function mostrarVidas (){
     const vidasDiv = document.getElementById("vidas");
     let corazones = "";
     for (i = 0; i < intentosRestantes; i++){
          corazones += "☠ ";
     }
     
     vidasDiv.textContent = corazones.trim();
}

// f(iniciar juego)
function jugar (){
     intentosRestantes = 6;
     letrasUsadas = [];
     palabraSecreta = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
     console.log(palabraSecreta);
     document.getElementById("intentos-restantes").textContent = intentosRestantes;
     document.getElementById("letras-usadas").textContent = letrasUsadas;
     document.getElementById("palabra").textContent = obtenerPalabra();
     document.getElementById("jugar").disabled = true;
     document.getElementById("validar").disabled = false; 
     document.getElementById("reiniciar").disabled = false;

     for (let i =0; i < palabraSecreta.length; i++){
          document.getElementById("palabra").textContent += "_ ";
     }
     mostrarVidas();
}



// f(reiniciar)
function reiniciar(){
     document.getElementById("jugar").disabled = true;
     document.getElementById("reiniciar").disabled = false; 
     document.getElementById("palabra").textContent = "";
     jugar();
     mostrarVidas();
}

// f(mostrar mensaje) "exito"
function mostrarMensajeExito (texto, tipo = "exito"){
     const mensajeDiv = document.getElementById("mensaje");
     mensajeDiv.textContent = texto;
     mensajeDiv.className = `mensaje ${tipo}`;
     mensajeDiv.style.display = "block";

     // timer para 3 seg
     setTimeout(() => {
          mensajeDiv.style.display = "none";
     }, 3250);
}

// f(mostrar mensaje) "error"
function mostrarMensajeError (texto, tipo = "error"){
     const mensajeDiv = document.getElementById("mensaje");
     mensajeDiv.textContent = texto;
     mensajeDiv.className = `mensaje ${tipo}`;
     mensajeDiv.style.display = "block";

     // timer 
     setTimeout(() => {
          mensajeDiv.style.display = "none"
     }, 3250);
}


// f(validar letra)

function validarLetra (){
     let letra = document.getElementById("letra").value;
     if(letrasUsadas.includes(letra)){
          mostrarMensajeError("letra ya ha sido usada")
     } else {
          letrasUsadas.push(letra);
          console.log(letrasUsadas);
          // convierte en un array de caracteres 
          document.getElementById("letras-usadas").textContent = letrasUsadas.join(", ");
          
          let temp = document.getElementById("palabra").textContent.split("");
          // recorre la palabra secreta para encontrar similitudes 
          if (palabraSecreta.includes(letra)){
               for(let i = 0; i < palabraSecreta.length; i++){
                    if (palabraSecreta[i] == letra){
                         temp[2*i] = letra;
                         console.log(letra);
                    }
               }

               // actualiza el texto (join(""))
               document.getElementById("palabra").textContent = temp.join("");
               let str = document.getElementById("palabra").textContent.replace(/\s+/g, "");
               console.log(str);

               if (str == palabraSecreta){
                    mostrarMensajeExito("Felicitaciones, la palabra era "+ palabraSecreta);
                    document.getElementById("validar").disabled = true; 
               } 
          }else{
                    mostrarMensajeError('la letra no se encuentra dentro de la palabra');
                    intentosRestantes--;
                    document.getElementById("intentos-restantes").textContent = intentosRestantes;
                    mostrarVidas();
                    if(intentosRestantes == 0){
                         mostrarMensaje('lo siento, has perdido, la palabra era '+palabraSecreta);
                         reiniciar();
                    }
               }
          
     }
}


// clicks 
document.getElementById("jugar").addEventListener("click", jugar);
document.getElementById("validar").addEventListener("click", validarLetra);
document.getElementById("reiniciar").addEventListener("click", reiniciar);

app.listen(3001, () => {
console.log("Servidor corriendo en http://localhost:3001");
});
