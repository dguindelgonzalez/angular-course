interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
}

function mostrarPersona(pPersona: Persona) {
    console.log(pPersona);
}

mostrarPersona({ nombre: 'Rosa', apellido: 'Garcia', edad: 45});

//Propiedades opcionales
interface Coche{
    marca: string;
    modelo: string;
    color?: string;
}

function mostrarCoche(pCoche: Coche) {
    console.log(`Marca: ${pCoche.marca}. Modelo: ${pCoche.marca}`);
    if(pCoche.color){
        console.log(`Color: ${pCoche.color}`)
    } else{
        console.log('El coche no tiene color');
    }
}

mostrarCoche({ marca: 'BMW', modelo: 'M3'});
mostrarCoche({ marca: 'BMW', modelo: 'M3', color: 'blanco'});

//Propiedades de solo lectura
interface Punto{
    readonly x: number;
    readonly y: number;
}

let p1: Punto = {x: 121, y: 84}
// p1.x = 45

//Definir una función
interface Busqueda{
    (valor: string, buscar: string): boolean;
}

const miBusqueda: Busqueda = (v: string, b:string): boolean =>{
    const result = v.search(b);
    return result > -1;
}

console.log(miBusqueda('hola', 'ola'));

//Interfaz en una clase
interface Humano{
    nombre: string;
    edad: number;
}

class Adulto implements Humano{
    
    nombre: string;
    edad: number;
    coche: boolean;

    constructor(pNmbre: string, pEdad: number, pCoche: boolean){
        this.coche = pCoche;
        this.edad = pEdad;
        this.coche =pCoche;
    }
}

class Ninio implements Humano{
    nombre: string;
    edad: number;
    colegio: string;
}