/*1) Realizar una funcion que nos permita hacer las 4 funciones aritmeticas,la
     funcion debe recibir 3 parametros, dos de ellos deben ser los valores, (a y b)
     ademas de el parametro de la operacion, (en minuscula) (.toLower). Si no es valido
     que mande un error personalizado de que esta mal.
*/

function aritmetics(a,b,operation) {
     switch(operation){
          case "suma": 
               return console.log(a+b)
          case "resta": 
               return console.log(a+b)
          case "multiplicacion":
               return console.log(a*b)
          case "division": 
               return console.log(a/b)
          

     }
}