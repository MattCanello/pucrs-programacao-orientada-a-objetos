function testVar() {
    let let01 = "let 01"

    {
        let let02 = "let 02"
        console.log("01a." + let01);
        console.log("01b." + let02);
    }

    console.log("02a." + let01);
    console.log("02b." + let02);
}

testVar();

/*
console.log("02b." + let02);
                     ^

ReferenceError: let02 is not defined
    at testVar (C:\Users\mattc\OneDrive\PUCRS\Pós-graduação\03-Programação Orientada a Objetos\Aula 3\Codigos\02b_let.js:11:26)
    at Object.<anonymous> (C:\Users\mattc\OneDrive\PUCRS\Pós-graduação\03-Programação Orientada a Objetos\Aula 3\Codigos\02b_let.js:14:1)  
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.14.2
*/