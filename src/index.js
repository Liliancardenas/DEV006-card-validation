import validator from './validator.js';

console.log(validator);

// Obtener los elementos HTML
const numeroTarjetaInput = document.getElementById('numero-tarjeta');
const verificarTarjetaButton = document.getElementById('verificar-tarjeta');
const nombre = document.getElementById('inputname');




//funcion maskify
/*numeroTarjetaInput.addEventListener("input", function(){
    maskify(numeroTarjetaInput);
});

function maskify(input) { // tomamos el elemento o campo de entrada Input
    let cambio = input.value; // Obtener el valor del campo de entrada y lo ponemos en una variable
    input.value = cambio.slice(0,-4).replace(/./g,"#") + cambio.slice(-4)// aqui concatenamos;
    //SLICE sirve para obtener los caracteres y decirle cuantos no queremos 
    //REPLACE Sirve para reemplazar los caracter se debe usar con una expresion regular 
}
*/



//Algoritmo de Luhn
function validarTarjeta(numeroTarjeta) {
    let suma = 0;
    let multiplicador = 1;
     for (let i = numeroTarjeta.length - 1; i >= 0; i--) {  // Recorrer los dígitos de la tarjeta de crédito de derecha a izquierda
    let digito = parseInt(numeroTarjeta.charAt(i));
    
    if (multiplicador % 2 == 0) {   // Multiplicar los dígitos pares por 2
      digito *= 2;
     
      if (digito > 9) {  // Si el resultado de la multiplicación es mayor a 9, sumar los dígitos del número resultante
        digito -= 9;
      }
    } 
    suma += digito;   // Sumar el dígito actual a la suma total
    multiplicador = multiplicador == 1 ? 2 : 1;   // Cambiar el multiplicador para alternar entre 1 y 2
  }
  return suma % 10 == 0;   // La tarjeta de crédito es válida si la suma total es un múltiplo de 10
} 


// Evento de escuchar o llamar al botón para validar tarjeta
    verificarTarjetaButton.addEventListener('click', function() 
    {

    const esValida = validarTarjeta(numeroTarjetaInput.value);
   
   if(numeroTarjetaInput.value == "" || nombre.value == "" )
        {
            alert('numero de tarjeta o nombre vacio');
        }
 else{

    if (esValida) 
    {        
        alert('Tarjeta Valida!');
        document.getElementById("gracias").style.display ='block' 
        document.getElementById("contenedor").style.display ='none' // debo cambiar el alert por un mensaje en pantalla (con otro html?) 
    } 
    else 
    {
      
        alert('Ingrese un número de tarjeta valido');
    }
  }

}

,);


  

    

    


 

  

  

  

  
   
  