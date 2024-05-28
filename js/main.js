// El código va aquí -> 

//Definiendo elementos
let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let txtNombre = document.getElementById("Name");
let txtNumber =document.getElementById("Number");

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");


//Función 
function validarcantidad(){
    if(txtNumber.value.length==0){
        return false;
    }
        return true;
}

//BOTÓN AGREGAR
btnAgregar.addEventListener("click", function(event){

    event.preventDefault();
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    txtNombre.style.border="";
    txtNumber.style.border="";

    if(txtNombre.value.length<3){
         alertValidacionesTexto.innerHTML = "El <strong>Nombre</strong> no es correcto<br/>";
         alertValidaciones.style.display = "block";
         txtNombre.style.border = "solid red medium";
    }

    if(!validarcantidad()){
        alertValidacionesTexto.innerHTML+="El <strong>Numero</strong>no es correcto";
        alertValidaciones.style.display="block";
        txtNumber.style.border="solid red medium";
    }

});

//BOTÓN LIMPIAR remover información capturada
btnClear.addEventListener("click", function(event){

    event.preventDefault();

    txtNombre.value = "";     //Limpiar campos
    txtNumber.value ="";
});