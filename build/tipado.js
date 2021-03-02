//Bolean
let esValido = true;
esValido = true;
//Number
let edad = 12;
//String
let nombre = 'Daniel';
let apellido = 'Guindel';
let nombre_completo = `${nombre} ${apellido}`;
//Array
let numeros = [12, 2, 4, 5];
let numeros2 = [12, 2, 4, 5];
let sitio = ['casa', 29800];
//Enum
var Estado;
(function (Estado) {
    Estado[Estado["Offline"] = -1] = "Offline";
    Estado[Estado["Indefinido"] = 0] = "Indefinido";
    Estado[Estado["Online"] = 1] = "Online";
})(Estado || (Estado = {}));
let stat = Estado.Online;
console.log(stat);
//Unknown
let sinTipo = 'Hola';
sinTipo = 19;
let nuevaCadena = 'esto es otra cadena';
// nuevaCadena = sinTipo;
// Any
let tipoIndefinido = 'esto es un mensaje';
nuevaCadena = tipoIndefinido;
// Void
function logger() {
    console.log('Logger');
}
