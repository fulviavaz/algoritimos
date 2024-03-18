// data atual
var data = new Date();
var dia = data.getDate();
var mes = data.getMonth() + 1;
var ano = data.getFullYear();

// estação = [mes]
var outono = 3;
var inverno = 6;
var primavera = 9;
var verao = 12;

var cor; // nenhuma cor definida

// outono
if (mes >= outono && mes < inverno) {
  cor = "#c0dd5d";
}
// inverno
else if (mes >= inverno && mes < primavera) {
  cor = "#9dbce3";
}
// primavera
else if (mes >= primavera && mes < verao) {
  cor = "#ffd6ef";
}
// verão
else if ((mes >= 1 && mes < outono) || mes == 12) {
  cor = "#fdf080";
}

// alterando a cor do background
document.body.style.backgroundColor = cor;
