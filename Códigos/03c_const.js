function testConst() {
    const const01 = { propriedade: "valor" }
    console.log("01a." + const01.propriedade)

    const01 = { propriedade: "novo valor" }
    console.log("02a." + const01.propriedade)
}

testConst();

/*
const01 = { propriedade: "novo valor" }
        ^

TypeError: Assignment to constant variable.
    at testConst (C:\Users\mattc\OneDrive\PUCRS\Pós-graduação\03-Programação Orientada a Objetos\Aula 3\Codigos\03c_const.js:5:13)
    at Object.<anonymous> (C:\Users\mattc\OneDrive\PUCRS\Pós-graduação\03-Programação Orientada a Objetos\Aula 3\Codigos\03c_const.js:9:1) 
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.14.2
*/