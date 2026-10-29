let equations = [];
let equateIndex = 0;

function hello(numVal) {
    document.getElementById("textThing").value = (document.getElementById("textThing").value + numVal);
}

function cleary() {
    document.getElementById("textThing").value = "";
    document.getElementById("output").textContent = "";
}

function onPageLoad() {
    const stored = sessionStorage.getItem("stored");
    if (stored) {
        equations = JSON.parse(stored);
    } else {
        equations = [];
        sessionStorage.setItem("stored", JSON.stringify(equations));
    }
}

function valuate() {
    document.getElementById("output").textContent = JSON.parse(eval(document.getElementById("textThing").value));
    equations.push(document.getElementById("textThing").value);
    sessionStorage.setItem("stored", JSON.stringify(equations));
    equateIndex = equations.length - 1;
}

function upArrow() {
    if (equations[equateIndex] !== document.getElementById("textThing").value) {
        equateIndex = equations.length - 1;
    }
    if (equateIndex > 0) {
        equateIndex--;
        document.getElementById("textThing").value = equations[equateIndex];
        document.getElementById("output").textContent = "";
    } else if (equateIndex === 0) {
        document.getElementById("textThing").value = equations[equateIndex];
    }
}

function downArrow() {
    if (equations[equateIndex] !== document.getElementById("textThing").value) {
        equateIndex = equations.length - 1;
    }
    if (equateIndex >= equations.length - 1) {
        document.getElementById("textThing").value = equations[equations.length - 1];
    } else {
        equateIndex++;
        document.getElementById("textThing").value = equations[equateIndex];
    }
}