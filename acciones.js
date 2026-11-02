const pantalla = document.getElementById("pantalla");
const boton = document.querySelectorAll(".btn");
const botonIgual = document.getElementById("btn-igual");


function presionar(valor) {
     pantalla.value = pantalla.value + valor;
 }

function borrarUltimo() {
    pantalla.value = pantalla.value.slice(0, -1);
}


function borrarTodo() {
    pantalla.value = '';
}
 function calcular() {
    try{
     pantalla.value = eval(pantalla.value);
}
catch(Error){
    pantalla.value = "Error";
}
}
