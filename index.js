function valuate() {
    document.getElementById("textThing").value = document.getElementById("textThing").value + JSON.parse(eval(document.getElementById("textThing").value));
}
