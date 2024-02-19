//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}