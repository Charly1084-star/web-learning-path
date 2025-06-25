var modoRelax = false;
var movimientos = 0;
var cronometro;
var grupoTarjetas1= [
     ["🐦‍🔥","🐲"],
     ["🌈","🦁"],
     ["🦓","🦛","🦞","🕷️"],
     ["🙉","🍌","🐨","🐰"],
     ["🐀","🦫","🦨","🦔"]
];

var grupoTarjetas2 = ["🙉","🍌"];
var grupoTarjetas3 = ["🦞","🕷️","🐨","🐰","🐀","🦫","🦨","🦔",["🦍","🐒"]];

var nivelActual = 0;
var niveles = [
     {
          // lv1
          tarjetas: grupoTarjetas1[0],
          movimientosMax: 3
     },
     {
          //lv2
          tarjetas: grupoTarjetas1[0].concat(grupoTarjetas1[1]),
          movimientosMax: 8
     },
     {
          //lv3
          tarjetas: grupoTarjetas1[0].concat(grupoTarjetas1[1],grupoTarjetas1[2]),
          movimientosMax: 12
     },
     {
          // lv4
          tarjetas: grupoTarjetas1[0].concat(
               grupoTarjetas1[1],
               grupoTarjetas1[2],
               grupoTarjetas1[3]
          ),
          movimientosMax: 25
     },
     {
          // lv5
          tarjetas: grupoTarjetas1[0].concat(
               grupoTarjetas1[1],
               grupoTarjetas1[2],
               grupoTarjetas1[3],
               grupoTarjetas1[4]
          ),
          movimientosMax: 50
     }

];