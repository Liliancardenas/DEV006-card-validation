const validator = {
  //Algoritmo de Luhn
  isValid: function (numeroTarjeta) {
    let suma = 0; // la suma parte de 0
    let multiplicador = 1; // osea posicion 1

    for (let i = numeroTarjeta.length - 1; i >= 0; i--) {
      // Recorrer los dígitos de la tarjeta de crédito de derecha a izquierda // leng vcuenta posiciones que tienes
      let digito = parseInt(numeroTarjeta.charAt(i)); //parseINT te modifica el texto a un numero, ChatAT accede a un caracter

      if (multiplicador % 2 === 0) {
        // aqui verifico si el multiplicador es uno o dos si es 1 no entra al if
        digito *= 2; //si es 2 lo multiplica por dos

        if (digito > 9) {
          // Si el resultado de la multiplicación es mayor a 9, sumar los dígitos del número resultante
          digito -= 9; // men vez de suma le resto 9 que da lo mismo
        }
      }
      multiplicador = multiplicador === 1 ? 2 : 1; // Cambiar el multiplicador para alternar entre 1 y 2
      suma += digito; // Sumar el dígito actual a la suma total
    }
    return suma % 10 === 0; // La tarjeta de crédito es válida si la suma total es un múltiplo de 10
  },

  maskify: function (input) {
    return input.slice(0, -4).replace(/./g, "#") + input.slice(-4); // maskify
  },
};

export default validator;
11