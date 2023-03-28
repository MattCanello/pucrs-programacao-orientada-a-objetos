function decision(question, doOK, doCancel) {
    if (question == "OK") {
        doOK();
    } else {
        doCancel();
    }
}

function showOk() { console.log("You agreed."); }

function showCancel() { console.log("You canceled the execution."); }

decision("OK", showOk, showCancel); // You agreed.
decision("Cancel", showOk, showCancel); // You canceled the execution.