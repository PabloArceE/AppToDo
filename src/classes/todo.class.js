// creamos la clase Todo con export para poder instanciar en objetos de esta clase en otros archivos .js
// esta clase tiene un método constructor que recibe una tarea y le asigna un nombre, un id, una variable booleana para conocer el estado de la tarea y por último los datos de la fecha en la que fue creada.
// más adelante esta clase nos permitirá crear tareas que recibirán del usuario un nombre y un estado.

export class Todo{

    constructor(tarea){

        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();

    }


}