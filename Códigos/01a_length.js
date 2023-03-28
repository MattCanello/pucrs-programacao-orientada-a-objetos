var a = []
a[0] = Math.random()
console.log(a.length); // 1

for (let val in a) {
    console.log(" --> " + val) //  --> 0
}

console.log(" -=-=-=- "); //  -=-=-=- 

a.push(Math.random())
console.log(a.length); // 2

for (let val in a) {
    console.log(" --> " + val); 
              //  --> 0 
              //  --> 1
}

console.log(" -=-=-=- "); //  -=-=-=- 
a[9] = Math.random();
console.log(a.length); // 10

for(let val in a) {
    console.log(" --> " + val);
              //  --> 0 
              //  --> 1
              //  --> 9
}

console.log(" -=-=-=- "); //  -=-=-=- 

for (let i = 0; i < a.length; i++) {
    console.log(" --> " + i + ": " + a[i]);
    /*
     --> 0: 0.7889162348149039
     --> 1: 0.8702971354149569
     --> 2: undefined
     --> 3: undefined
     --> 4: undefined
     --> 5: undefined
     --> 6: undefined
     --> 7: undefined
     --> 8: undefined
     --> 9: 0.4156352865297226
    */
}

/*
1
 --> 0
 -=-=-=- 
2
 --> 0
 --> 1
 -=-=-=- 
10
 --> 0
 --> 1
 --> 9
 -=-=-=-
 --> 0: 0.7889162348149039
 --> 1: 0.8702971354149569
 --> 2: undefined
 --> 3: undefined
 --> 4: undefined
 --> 5: undefined
 --> 6: undefined
 --> 7: undefined
 --> 8: undefined
 --> 9: 0.4156352865297226
 */