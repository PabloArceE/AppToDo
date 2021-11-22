// Esta clase es creada con la finalidad de contener todas las tareas que se necesiten crear y almacenar utilizando un array
// Posteriormente los objetos del array pueden ser manejados mediantes los métodos del mismo.

export class TodoList{

    constructor(){

        this.arrTodos = [];

    }

    // agregar una tarea .push()
    nuevoTodo(todo){
        this.arrTodos.push(todo);
    }

    // eliminar todo
    eliminarTodo(id){

    }

    // marcar todo como completado

    marcarCompletado(id){

    }

    // eliminar ctodos completados

    eliminarCompletados(){
        
    }


}