export class Pelicula {
  titulo: string;
  descripcion: string;

  constructor(pTitulo = '', pDescripcion = '') {
    this.titulo = pTitulo;
    this.descripcion = pDescripcion;
  }
}
