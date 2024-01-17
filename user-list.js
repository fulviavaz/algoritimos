// const listaDeUsuarios = [{
//     name: 'fulvia',
//     username: 'fulviavaz',
// }];

// const newUser = {
//     name: 'fulvia',
//     username: 'angelofgrief',
// };

// const hasUser = listaDeUsuarios.find((user) => {
//     return user.username === newUser.username
// });
// if (!hasUser) {
//     listaDeUsuarios.push(newUser);
//     }

//evitando nome de usuario duplicado agora com o Map do JavaScript

const listaDeUsuarios = new Map();

listaDeUsuarios.set('fulviavaz', {
    name: 'fulvia',
    username: 'fulviavaz',
})

listaDeUsuarios.set("fulviavaz", {
  name: "fulvia",
  username: "fulviavaz",
});


const result = listaDeUsuarios

console.log(result)