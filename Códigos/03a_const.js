function testConst() {
    const const01 = "const 01";

    {
        const const02 = "const 02";
        console.log("01a." + const01);
        console.log("01b." + const02);
    }

    const01 = "novo valor";
    console.log("02a." + const01);
    console.log("02b." + const02);
}

testConst();

/*
01a.const 01
01b.const 02
C:\Users\mattc\OneDrive\PUCRS\Pós-graduação\03-Programação Orientada a Objetos\Aula 3\Codigos\03a_const.js:10
    const01 = "novo valor";
            ^

TypeError: Assignment to constant variable.
    at testConst (C:\Users\mattc\OneDrive\PUCRS\Pós-graduação\03-Programação Orientada a Objetos\Aula 3\Codigos\03a_const.js:10:13)
    at Object.<anonymous> (C:\Users\mattc\OneDrive\PUCRS\Pós-graduação\03-Programação Orientada a Objetos\Aula 3\Codigos\03a_const.js:15:1)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.14.2
*/