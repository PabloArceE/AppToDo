import './style.css';
import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.arrTodos.forEach(crearTodoHtml);

