//Bolean
let esValido: boolean = true;
esValido = true;

//Number
let edad: number = 12;


//String
let nombre: string = 'Daniel';
let apellido: string = 'Guindel';

let nombre_completo: string = `${nombre} ${apellido}`;

//Array
let numeros: number[] = [12, 2, 4, 5];
let numeros2: Array<number> = [12, 2, 4, 5];

let sitio: [string, number] = ['casa', 29800]

//Enum
enum Estado{
    Offline = -1,
    Indefinido = 0,
    Online = 1
}

let stat: Estado =Estado.Online;
console.log(stat);

//Unknown
let sinTipo: unknown = 'Hola';
sinTipo = 19

let nuevaCadena: string = 'esto es otra cadena';
// nuevaCadena = sinTipo;

// Any
let tipoIndefinido: any = 'esto es un mensaje';
nuevaCadena = tipoIndefinido;

// Void
function logger(): void{
    console.log('Logger');
}