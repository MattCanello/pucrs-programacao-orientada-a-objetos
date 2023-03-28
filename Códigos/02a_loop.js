var a = []
a[0] = Math.random()
a[1] = Math.random()
a[9] = Math.random()
console.log(a.length)

// ...Primeiro for
console.log(" -for .. in- ")
console.log(" -=-=-=- ")

for (let val in a) {
    console.log(" --> " + val) // Imprime o índice (apenas os atribuídos)
}

console.log(" -=-=-=- \n")

// ...Segundo for
console.log(" -for .. of- ")
console.log(" -=-=-=- ")

for (let val of a) {
    console.log(" --> " + val) // Imprime os valores (inclusive os não-definidos)
}

console.log(" -=-=-=- \n")

// Terceiro for
console.log(" -for (;;)-")
console.log(" -=-=-=- ")
for (let i = 0; i < a.length; i++) {
    console.log(" --> " + i + ": " + a[i])
}

/*
10
 -for .. in- 
 -=-=-=- 
 --> 0
 --> 1
 --> 9
 -=-=-=- 

 -for .. of- 
 -=-=-=- 
 --> 0.6733639046305233
 --> 0.19348446351080328
 --> undefined
 --> undefined
 --> undefined
 --> undefined
 --> undefined
 --> undefined
 --> undefined
 --> 0.8714399649750209
 -=-=-=-

 -for (;;)-
 -=-=-=-
 --> 0: 0.6733639046305233
 --> 1: 0.19348446351080328
 --> 2: undefined
 --> 3: undefined
 --> 4: undefined
 --> 5: undefined
 --> 6: undefined
 --> 7: undefined
 --> 8: undefined
 --> 9: 0.8714399649750209
 */


console.log(a.toString()); 
    // 0.41898733488633244,0.1992203887985149,,,,,,,,0.8630533836329117
console.log(a.join(" - ")); 
    // 0.41898733488633244 - 0.1992203887985149 -  -  -  -  -  -  -  - 0.8630533836329117

let a2 = a.concat(["X", "Y"]);
console.log(a2.toString());
    // 0.41898733488633244,0.1992203887985149,,,,,,,,0.8630533836329117,X,Y

let b = [ "A", "B", "C" ];
let b1 = b.slice(1); // b[1], b[2]
let b2 = b.slice(0, 2); // b[0], b[1]

console.log(b1);
console.log(b2);