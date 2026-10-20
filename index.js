const previousCalculations = [];
function valuate() {
    document.getElementById("output").textContent = JSON.parse(eval(document.getElementById("textThing").value));
    previousCalculations.push(document.getElementById("textThing").value);
}
function hello(numVal) {
    document.getElementById("textThing").value = (document.getElementById("textThing").value + numVal);
}
function cleary() {
    document.getElementById("textThing").value = "";
}
function upArrow() {

}
function downArrow() {

}