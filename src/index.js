import './styles.css';

import { Todo, TodoList } from './classes/index';
import { crearTodoHtml } from './js/componentes';

// instancia todoList
export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml( todo ) );
/**o
 *todoList.todos.forEach(crearTodoHtml) );
 */

// /**probando nuestra clase Todo agregando una nueva tarea, esto lo podemos visibilizar por consola*/
// const tarea = new Todo( 'Aprender Javascript' );

// todoList.nuevoTodo( tarea );
// console.log(todoList);

// crearTodoHtml( tarea );

/**reconstruyendo.... */

// const newTodo = new Todo('Tarea 116');

// todoList.todos[0].imprimirClase();
// newTodo.imprimirClase();

console.log('todos ', todoList.todos);
