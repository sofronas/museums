function checkMap() {
    // alert("t");
    var arkadia = document.getElementById("arkadiaId").checked;
    var argolida = document.getElementById("argolidaId").checked;
    var axaia = document.getElementById("axaiaId").checked;
    var ileia = document.getElementById("ilieiaId").checked;
    var kori = document.getElementById("korId").checked;
    var lakonia = document.getElementById("lakoniaId").checked;
    var mes = document.getElementById("messiniaId").checked;

    // Debug Purposes
    console.log("Arkadia:" + arkadia);
    console.log("Argolida:" + argolida);
    console.log("Axaia:" + axaia);
    console.log("Ileia:" + ileia);
    console.log("Korinthos:" + kori);
    console.log("Lakonia:" + lakonia);
    console.log("Mes:" + mes);

    if(arkadia === true){
        window.location.href = "arkadia.html";
    }
    else if (argolida === true) {
        window.location.href = "argolida.html";
    }
    else if (axaia === true) {
        window.location.href = "axaia.html";
    }
    else if (ileia === true) {
        window.location.href = "ileia.html";
    }
    else if (kori === true) {
        window.location.href = "korinthos.html";
    }
    else if (lakonia === true) {
        window.location.href = "lakonia.html";
    }
    else if (mes === true) {
        window.location.href = "messinia.html";
    }
}