import { Todo } from "../classes";
import { todoList } from '../index'

//**Referencias en el HTML */
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

/**Construir tareas en el html  */

export const crearTodoHtml = (todo) => {

    const htmlTodo =
        /**back tics para interpolacion de strings */
        /**se establece el valor del id que rescatamos de la clase todo.class.js */
        `<li class=" ${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}"> 
            <div class="view">
                <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
                <label>${todo.tarea}</label>
                <button class="destroy"></button>
            </div>
        <input class="edit" value="Create a TodoMVC template">
        </li> `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    /**para retornar solo el elemento */
    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;

}

/**Eventos */
/**Para agregar un todo */
//evento de cuando la persona suelta la tecla
txtInput.addEventListener('keyup', (event) => {
    /**keyCode y value para poder rescatar el n tecla y el texto agregado*/
    //console.log(event);
    if (event.keyCode === 13 && txtInput.value.length > 0) {

        const nuevoTodo = new Todo(txtInput.value);
        //console.log(txtInput.value);

        todoList.nuevoTodo(nuevoTodo);
        console.log(todoList);

        crearTodoHtml(nuevoTodo);
        /**Limpiando caja texto */
        txtInput.value = '';

    }

});

divTodoList.addEventListener('click', (event) => {

    //console.log('click');

    //que elemento le damos click
    //console.log(event.target.localName);
    const nombreElemento = event.target.localName; //puede ser un input, label button

    //que elemento necesitaremos eliminar
    const todoElemento = event.target.parentElement.parentElement;
    //console.log( todoElemento );
    const todoId = todoElemento.getAttribute('data-id');
    //console.log(todoId);

    //console.log(nombreElemento);

    if (nombreElemento.includes('input')) {
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    }
    else if (nombreElemento.includes('button')) {
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }
    //console.log(todoList);
});

btnBorrar.addEventListener('click', () => {

    todoList.eliminarCompletados();

    /**ciclo for inverso para eliminar de abajo hacia arriba */
    for (let i = divTodoList.children.length - 1; i >= 0; i--) {

        const elemento = divTodoList.children[i];
        // console.log(elemento);
        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento);
        }
    }

});

/**filtros */
ulFiltros.addEventListener('click', (event) => {

    //console.log( event.target.text ); // nombre filtro
    const filtro = event.target.text;

    if (!filtro) { return; } /** o if ( !filtro ) return */

    anchorFiltros.forEach( elem => elem.classList.remove('selected'));
    //console.log( event.target );
    event.target.classList.add('Selected');

    for (const elemento of divTodoList.children) {

        //console.log(elemento);
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden');
                }
                break;
        }

    }
});
