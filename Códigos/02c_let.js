function testVar() {
    let let01 = "let 01"

    {
        console.log("01a." + let01);

        let let01 = "let 02"
        console.log("02a." + let01);
    }

    console.log("03a." + let01);
}

testVar();

/*
console.log("01a." + let01);
                     ^

ReferenceError: Cannot access 'let01' before initialization
    at testVar (C:\Users\mattc\OneDrive\PUCRS\Pós-graduação\03-Programação Orientada a Objetos\Aula 3\Codigos\02c_let.js:5:30)
    at Object.<anonymous> (C:\Users\mattc\OneDrive\PUCRS\Pós-graduação\03-Programação Orientada a Objetos\Aula 3\Codigos\02c_let.js:14:1)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.14.2
*/