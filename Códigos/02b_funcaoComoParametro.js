function decision(question, doOK, doCancel) {
    if (question == "OK") {
        doOK();
    } else {
        doCancel();
    }
}

decision(
    "OK",
    function() { console.log("You agreed."); },
    function() { console.log("You canceled the execution."); }
); // You agreed

decision(
    "Cancel",
    function() { console.log("You agreed."); },
    function() { console.log("You canceled the execution."); }
); // You canceled the execution.