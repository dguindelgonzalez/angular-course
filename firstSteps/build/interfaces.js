function mostrarPersona(pPersona) {
    console.log(pPersona);
}
mostrarPersona({ nombre: 'Rosa', apellido: 'Garcia', edad: 45 });
function mostrarCoche(pCoche) {
    console.log(`Marca: ${pCoche.marca}. Modelo: ${pCoche.marca}`);
    if (pCoche.color) {
        console.log(`Color: ${pCoche.color}`);
    }
    else {
        console.log('El coche no tiene color');
    }
}
mostrarCoche({ marca: 'BMW', modelo: 'M3' });
mostrarCoche({ marca: 'BMW', modelo: 'M3', color: 'blanco' });
let p1 = { x: 121, y: 84 };
const miBusqueda = (v, b) => {
    const result = v.search(b);
    return result > -1;
};
console.log(miBusqueda('hola', 'ola'));
class Adulto {
    constructor(pNmbre, pEdad, pCoche) {
        this.coche = pCoche;
        this.edad = pEdad;
        this.coche = pCoche;
    }
}
class Ninio {
}
