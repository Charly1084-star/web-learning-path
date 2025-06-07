let aumentarBtn = document.getElementById("aumentar")
let disminuirBtn = document.getElementById("disminuir")
let restablecerBtn = document.getElementById("restablecer")
let mostrarContador = document.getElementById("contador")
let contador = 0

// f(aumentar)
function aumentar() {
     contador = contador + 1;
     actualizar();
}

// f(disminuir)
function disminuir() {
     contador = contador - 1;
     actualizar();
}

function actualizar(){
     mostrarContador.textContent = contador;
}

function restablecer() {
     contador = 0;
     actualizar();
}

document.getElementById("aumentar").addEventListener("click", aumentar);
document.getElementById("disminuir").addEventListener("click", disminuir);
document.getElementById("restablecer").addEventListener("click", restablecer);
