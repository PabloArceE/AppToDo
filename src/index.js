import './style.css';
import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

const tarea1 = new Todo('aprender JavaScript');

todoList.nuevoTodo(tarea1);

console.log(todoList);

crearTodoHtml(tarea1);
 

