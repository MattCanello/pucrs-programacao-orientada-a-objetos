array = [ 4, 5, 6, 7, 8, 9, 10 ]

var newArray = array.map((item) => item * 2)
console.log(newArray) // [ 8, 10, 12, 14, 16, 18, 20]

newArray = array.map((item) => { return { x: item, y: 2 * item}})
console.log(newArray)
    // [ { x: 4, y: 8 }, { x: 5, y: 10 }, { x: 6, y: 12 }, { x: 7, y: 14 }, { x: 8, y: 16 }, { x: 9, y: 18 }, { x: 10, y: 20 } ]