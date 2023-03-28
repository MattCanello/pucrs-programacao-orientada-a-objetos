function testVar() {
    var var01 = "var 01"
    {
        var var02 = "var 02"
        console.log("01a." + var01);
        console.log("01b." + var02);
    }
    console.log("02a." + var01);
    console.log("02a." + var02);
}

testVar();

/* 
01a.var 01
01b.var 02
02a.var 01
02a.var 02
*/