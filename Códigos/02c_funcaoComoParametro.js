function decision(question, doOK, doCancel) {
    if (question == "OK") {
        doOK();
    } else {
        doCancel();
    }
}

let beOK = function showOk() { console.log("You agreed."); }
let beCancel = function showOk() { console.log("You canceled the execution."); }

decision("OK", beOK, beCancel); // You agreed
decision("Cancel", beOK, beCancel); // You canceled the execution.