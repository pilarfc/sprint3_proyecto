
function mostrarDatos () {
 var datos = document.getElementById("seccionDatos"); 
    
   datos.style.display = "block";   
}

function ocultarPlaceHolder () {
  var texto= document.getElementById("numeroTelefono"); // cuadro en blanco 
    
    texto.style.display = "none";
    addEventListener("click", mostrarTextoVacio); 
}

function mostrarPlaceHolder () {
    var mostrar =  document.getElementById("numeroTelefono"); 
    
    mostrar.style.display = "block"; 
}

function mostrarTextoVacio () {
 var mostrar = document.getElementById("numeroChiquito"); 
    
    mostrar.style.display = "block"; 
    removeEventListener("click", mostrarTextoVacio);
    ocultarCajita(); 
}

function ocultarCajita () {
    var x = document.getElementById("numeroTelefono"); 
    
    x.style.display = "none"; // Aquí ocultamos texto con place holder.
}

function ocultarCajitaBlanca () {
    var divBlanco = document.getElementById("numeroChiquito"); 
    
    divBlanco.style.display = "none"; // ocultamos caja vacia 
}

function reiniciarPhoneNumber () {
     var x = document.getElementById("numeroTelefono"); 
    
    x.style.display = "block"; 
    ocultarCajitaBlanca(); 
    mostrarPlaceHolder(); 
    addEventListener("click", mostrarTextoVacio); 
}


addEventListener("click", mostrarDatos);
addEventListener("click", mostrarTextoVacio); 
addEventListener("dblclick", reiniciarPhoneNumber); 