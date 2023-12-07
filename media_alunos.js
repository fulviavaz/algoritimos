console.log("Inicio da aplicação");

const avaliacao1 = 1;
const avaliacao2 = 6;
let avaliacaoOptativa;

if (avaliacaoOptativa == undefined) {
  avaliacaoOptativa = -1;
  console.log(avaliacaoOptativa);
}

function calcularMedia(nota1, nota2, notaOptativa) {
  if (nota1 < nota2) {
    nota1 = nota1 < notaOptativa ? notaOptativa : nota1;
  } else if (nota2 < nota1) {
    nota2 = nota2 < notaOptativa ? notaOptativa : nota2;
  }
  const media = (nota1 + nota2) / 2;
  return media;
}

const mediaAluno1 = calcularMedia(avaliacao1, avaliacao2, avaliacaoOptativa);
const mediaAluno2 = calcularMedia(2, 7);

function escreverMensagemMedia(media) {
  if (media >= 6) {
    console.log(`Aprovado: ${media}`);
  } else if (media < 3) {
    console.log(`Reprovado: ${media}`);
  } else {
    console.log(`Exame: ${media}`);
  }
}

escreverMensagemMedia(mediaAluno1);
escreverMensagemMedia(mediaAluno2);
