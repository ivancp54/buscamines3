let rows = document.querySelector("tbody").children
let matrix = []

function erase() {
    for (let i = 0; i < matrix.length; i++) { // afegir codi
        for (let j = 0; j < matrix[i].length; j++) { // afegir codi
            matrix[i][j].style.backgroundColor = "white";
        }
    }
}

function inicialitzaJoc() {
    let filas = document.getElementById("fila").valueAsNumber;
    let columnas = document.getElementById("columna").valueAsNumber;
    let minas = document.getElementById("minas").valueAsNumber;

    for (let i = 0; i < filas; i++) {
        let filaActual = document.getElementById('tblDatos').insertRow(i);

        for (let j = 0; j < columnas; j++) {
            let celda = filaActual.insertCell(j);

            celda.innerHTML = `&nbsp;`;
            celda.setAttribute("id", "fila:" + i  + "columna:" + j)
        }
    }
    rows = document.querySelector("tbody").children
    matrix = []
    for (var i = 0; i < rows.length; i++) {
        matrix.push(rows[i].children)
    }

    let numMinasEsparcidas = 0;
    
    while (numMinasEsparcidas<minas){
        //numero aleatorio en el intervalo [0,numFilas-1]
        let filamina = Math.floor(Math.random() * filas);
 
        //numero aleatorio en el intervalo [0,numColumnas-1]
        let columnamina = Math.floor(Math.random() * columnas);
 
        //si no hay bomba en esa posicion
        if (matrix[filamina][columnamina] != "B"){
            //la ponemos

            matrix[filamina][columnamina] = "B";
            matrix[filamina][columnamina].style.backgroundColor = "red";

 
            //y sumamos 1 a las bombas esparcidas
            numMinasEsparcidas++;
        }
    }
}

// Ejercicio 2
function matriuBinaria(matrix) {
    var matrix2 = [];
    for (var i = 0; i < matrix.length; i++) {
        var fila = [];
        for (var j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j].style.backgroundColor == "red") {
                fila.push(1);
            } else {
                fila.push(0);
            }
        }
        matrix2.push(fila);
    }
    return matrix2;
}

document.getElementById("tblDatos").addEventListener("click", (posiblemina) => {
    console.log(posiblemina.target.id)
    if (posiblemina.target.style.backgroundColor == "red") {
        console.log("Hay mina")}
    else {
        console.log("no hay mina")}

})



function paintCheckerboard() {
    erase();
    let rows = document.querySelector("tbody").children
    let matrix = []
    for (var i = 0; i < rows.length; i++) {
        matrix.push(rows[i].children)
    }
    for (let i = 0; i < matrix.length; i++) {
        let j = 1;
        if (i % 2 != 0) j = 0
        for (j; j < matrix[i].length; j += 2) {
            matrix[i][j].style.backgroundColor = "red";
        }
    }
    rows = document.querySelector("tbody").children
    matrix = []
    for (var i = 0; i < rows.length; i++) {
        matrix.push(rows[i].children)
    }
}
