//01a_Parseobjeto.js
let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// propriedade ainda não existe, logo teremos erro
console.log(user.friends[0] ?? "Propriedade inexistente");
    // Cannot read properties of undefined (reading '0')

user = JSON.parse(user);
console.log(user.friends[0]); // 0