// Esta clase es creada con la finalidad de contener todas las tareas que se necesiten crear y almacenar utilizando un array
// Posteriormente los objetos del array pueden ser manejados mediantes los métodos del mismo.

import { Todo } from "./todo.class";

export class TodoList{

    constructor(){

       this.cargarLocalStorage();
    }

    // agregar una tarea .push()
    nuevoTodo(todo){
        this.arrTodos.push(todo);
        this.guardarLocalStorage();
    }

    // eliminar todo
    eliminarTodo(id){

        this.arrTodos = this.arrTodos.filter( todo => todo.id != id); 
    // se filtra el todo con el id pasado como argumeto y se lo asigna al array 
        this.guardarLocalStorage();
    }

    // marcar todo como completado

    marcarCompletado(id){
        for(const todo of this.arrTodos){
            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    // eliminar todos completados

    // en este método se le aplica un filtro al array arrTodos que devuelve en un nuevo array los elementos que no estan completados y lo asigna al arrTodos, dejando de lado de esta manera, los elementos que ya han sido completados. En otras palabras elimina del arreglo los elementos que han sido completados. 
    eliminarCompletados(){
        this.arrTodos = this.arrTodos.filter( todo => !todo.completado);
        this.guardarLocalStorage();
    }


    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.arrTodos)); 
    }

    cargarLocalStorage(){

    this.arrTodos = (localStorage.getItem('todo')) 
                  ? JSON.parse(localStorage.getItem('todo')) 
                  : [];

    this.arrTodos = this.arrTodos.map(Todo.fromJson);
   
    // el método map() que poseen todos los arrays llama a una función definida en cada elemento del array, y retorna un nuevo array que contiene los resultados.    
    }

}