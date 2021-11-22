import { Todo } from '../classes';
import { todoList } from '../index';


// referencias al Html

const divTodoList    = document.querySelector('.todo-list'); // selecciona el div que contiene la lista de todos en el html
const txtInput       = document.querySelector('.new-todo'); // selecciona el input donde el usuario ingresa las nuevas tareas en el html
const clearCompleted = document.querySelector('.clear-completed'); // selección del botón borrar completados del html


// crear elemento html

export const  crearTodoHtml = (todo) => {

    // la const htmlTodo contiene el string que será insertado en el html de forma dinámica mediante el metodo innerHTML de un nuevo elemento div
    const htmlTodo = `
    <li class="${ ( todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">
    <div class="view">
        <input class="toggle" type="checkbox" ${ ( todo.completado) ? 'checked' : '' }>
        <label>${ todo.tarea }</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    </li>
    `

    // se crea un nuevo elemento html de tipo div para asignarle mediante el innerHTML el código html con la nueva tarea
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    // se crea un elemento div para poder contener la nueva lista de todos pero solo es necesario retornar la li para inyectarla en el DOM
    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;

}

// escuchar nuevos eventos

// se crea un eventListener en el input txtInput para extraer el texto que el usuario ingrese y convertirlo en un elemento html mediante el método crearTodoHtml
txtInput.addEventListener('keyup', ( event ) => {
    
    if(event.keyCode === 13 && txtInput.value.length > 0){
        const todo = new Todo(txtInput.value);
        todoList.nuevoTodo(todo);
        crearTodoHtml(todo);
        txtInput.value = '';       
    }
})

// se crea un eventListener click en el div que contiene las tareas donde hay tres elementos si se selecciona input marca y desmarca la tarea y si se selecciona el button se elimina el todo. Ambos eventos actuan sobre el array todoList creado en el index.js y en el html mediante la manipulación del DOM 
divTodoList.addEventListener('click', (event)=>{

    const nombreElemento = event.target.localName;
    const todoElemento   = event.target.parentElement.parentElement;
    const todoId         = todoElemento.getAttribute('data-id');

    if(nombreElemento.includes('input')){

        todoList.marcarCompletado(todoId); 
        todoElemento.classList.toggle('completed');     

    }else if(nombreElemento.includes('button')){
        
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }
   
    console.log(todoList);
    console.log(todoElemento);
})

//
clearCompleted.addEventListener('click', ()=>{
    todoList.eliminarCompletados();

    for(let i =divTodoList.children.length-1; i >= 0; i--){
        const element = divTodoList.children[i];
        if (element.classList.contains('completed')){
            divTodoList.removeChild(element);
        }
    }


})