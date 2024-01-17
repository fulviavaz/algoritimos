// trabalhando com listas

const tags = [];
 
tags.push('js');
tags.push('ts');
tags.push('ts');

 const result = tags;

console.log(result);
 
//impedir que sejam adicionados valores repetidos à lista

const tagsNew = new Set([]); // cria uma lista de objetos

tagsNew.add('js');
tagsNew.add('ts');
tagsNew.add("ts");

const resultNew = Array.from(tagsNew); //convertendo a lista em array

console.log(resultNew);