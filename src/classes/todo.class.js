/**esta clase la utilizaremos fuera de este archivo */
export class Todo{
    
    /**reconstruyendo instancias de todos */
    static fromJson ( {id, tarea, completado, creado} ) {

        const tempTodo = new Todo( tarea );

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;

    }

    constructor( tarea ){ /**recibimos la tarea, lo que tenemos que hacer */

        this.tarea = tarea; //la tarea es lo que recibimos del argumento

        this.id = new Date().getTime(); //12331321 representacion hora min seg
        this.completado = false; //para validar propiedades etiqueta li
        this.creado = new Date();

    }

    imprimirClase(){
        
        console.log(` ${ this.tarea } - ${ this.id } `);
    }
}