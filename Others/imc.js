//crie uma função que calcule o índice de massa corporal(IMC) de uma pessoa
// a partir de sua altura em metros e peso em quilogramas, que serão recebidos por parâmetro.

// IMC = peso / altura2

let peso = 79;
let altura = 1.68;

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

let resultadoIMC = calcularIMC(peso, altura);
console.log("O seu IMC é:", resultadoIMC);

