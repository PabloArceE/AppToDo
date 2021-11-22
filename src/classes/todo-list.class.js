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

       this.arrTodos = this.arrTodos.filter( todo => todo.id != id); // se filtra el todo con el id pasado como argumeto y se lo asigna al array 

    }

    // marcar todo como completado

    marcarCompletado(id){
        for(const todo of this.arrTodos){
            if(todo.id == id){
                todo.completado = !todo.completado;
                break;
            }
        }
    }

    // eliminar ctodos completados

    eliminarCompletados(){
        
    }


}