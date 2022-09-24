console.log("Bienvenidos a la consola mas elegante e inteligente del mundo! :D");
console.log(" ");
console.log(" ");
console.log("NOTA: Esta es una prueba, aun no esta terminada al 100%");
console.log(" ");
console.log("Acontinuacion se muetra como funciona el modulo para calcular el area geoetrica del rectangulo, triangulo y circulo, seguido de eso se mostrara el funcionamiento del modulo para calcular la tabla de cualquier numero.");
console.log(" ");
//Seccion para areas geometricas.

function rectangulo(altura, base) {
 var area = altura * base;
 console.log("area del rectangulo:" +
  " " + area);
}

function triangulo(base, altura) {
 var area = base * altura / 2;
 console.log("area del triangulo:" +
  " " + area);
}

function cuadrado(lado) {
 var area = lado * lado
 console.log("area del cuadrado:" +
  " " + area);
}

function circulo(radio) {
 var potencia = radio * radio
 var pi = potencia * 3.1416
 console.log("area del circulo:" +
  " " + pi);
}

function rombo(D, d) {
 var area = D * d / 2;
 console.log("area del rombo" + " " + area);
}

function trapecio(B, b, h) {
 var area = B + b;
 var m = area * h / 2;
 console.log("area del trapecio" + " " + area);
}

function hexagono(P, A) {
 var area = P * A / 2;
 console.log("area del hexagono" + " " + area);
}

function pentagono(P, A) {
 var area = P * A / 2;
 console.log("area del pentagono" + " " + area);
}
 
 //Modulo para la tabla de multiplicar.

function tabla (n) {
 for (i = 1; i <= 10; i++) {
   console.log(i * n);
 }
}
