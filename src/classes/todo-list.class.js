/**agrupar toda nuestra lista de todos(tareas) */

import { Todo } from ".";

export class TodoList {  //para las clases siempre UpperCammelCase
    constructor() {
        
        //this.todos = [];
        this.cargarLocalStorage();
    }

    /**metodo para crear un nuevo todo */
    nuevoTodo(todo) {
        
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    /**metodo eliminar todo */
    eliminarTodo(id) {

        /**metodo filter */
        this.todos = this.todos.filter(todo => todo.id != id)

    }

    /**check box completado */
    marcarCompletado(id) {

        for (const todo of this.todos) {

            if (todo.id == id) {
                //valor del todo negado
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    /**eliminar todos los completados */
    eliminarCompletados() {

        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    /**metodos para utilizar el local storage, podemos tener un local storage por dominio */
    /** guardar*/
    guardarLocalStorage() {

        //localStorage -> palabra 'reservada'
        localStorage.setItem('todo', JSON.stringify( this.todos )); //transformando a json perfecto
    }
    /**cargar */
    cargarLocalStorage() {

        // /**verificamos si la informacion existe*/
        // if( localStorage.getItem('todo')){ 

        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        //     console.log( 'cargar local: ', this.todos );
        //     //console.log(typeof this.todos);

        // }
        // else{

        //     this.todos = [];

        // }
        this.todos = ( localStorage.getItem('todo'))  
                   ? JSON.parse(localStorage.getItem('todo')) 
                   : [];
        
        //map permite barrer los elementos del arreglo y los muta(?)
        this.todos = this.todos.map( obj => Todo.fromJson( obj ));
        /**o
         * this.todos = this.todos.map(Todo.fromJson);
         */
    }
}