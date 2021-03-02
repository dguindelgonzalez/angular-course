// function sumar(a, b){
//     return a + b;
// }
const sumar = function (a, b) {
    return a + b;
};
const sumar2 = function (a, b) {
    return a + b;
};
const sumar3 = function (a, b) {
    return a + b;
};
// Parámetros Opcionales y valores por defecto
function nombreCompleto(nombre, apellido = 'Gómez') {
    if (apellido)
        return nombre + " " + apellido;
    else
        return nombre;
}
console.log(nombreCompleto('Pedro'));
console.log(nombreCompleto('Pedro', 'Romero'));
// Parámetrso REST
function nombreCompleto2(nombre, ...restoNombre) {
    return nombre + "  " + restoNombre.join(' ');
}
console.log(nombreCompleto2('Ana', 'María', 'García', 'Martín'));
