// creamos la clase Todo con export para poder instanciar en objetos de esta clase en otros archivos .js
// esta clase tiene un método constructor que recibe una tarea y le asigna un nombre, un id, una variable booleana para conocer el estado de la tarea y por último los datos de la fecha en la que fue creada.
// más adelante esta clase nos permitirá crear tareas que recibirán del usuario un nombre y un estado.

export class Todo{

    // crear una instancia de Todo en base a objetos recuperados del local storage, utilizando la desestructuración de objetos para recuperar los atributos e incluirlos en la nueva instancia de Todo. Esto permite entonces obtener un objeto Todo con sus métodos y con los atributos recuperados del objeto almacenado en el local storage 
    static fromJson({tarea, id, completado, creado }) {
        const tempTodo = new Todo( tarea );

        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;
    }
    // se supone que el objeto que se recibe desde el local storage posee el atributo tarea que se utilizará como argumento del constructor de la nueva instancia de tipo Todo

    constructor(tarea){

        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();

    }


}