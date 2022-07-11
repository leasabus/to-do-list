/*vamos a hacer un windom addevent, como parametro
le vamos a pasar load y una arrow funcion.
dentro de ellea vamos a crear las constantes para recuperar elementos
tenemos q recuperar el newtaskform,elnewtaskinput y el tasks
para probar q esten todos bien hacemos un console.log(form)

--FORM 
le vamos a dar un evento submit con parametro e
le sacamos el preventdefault
creamos una const task y le pasamos el input value

establecemos un cond y le decimos q si no hay tarea return un alert
"por favor ingresar tarea", y si esta todo bien "sucess"
probamos que vaya bien y luego borramos el sucess*/

/*tenemos que crear dos div guardandolos en una constante tasklist y otro en la const
task_content , a cada una le tenemos q agregar una clase (task al primero, content al segundo)*/
/*al task content le tenemos q decir q edite el texto con una task como valor
luego tenemos que crear un hijo de tasklist para q se vaya agregando a la lista, como parametro
recibe a task_content_el

lo mismo con la list_el y como parametro va a recibir los elementos de la task_el*/
/*en este punto las tareas se deberian agregar*/

/*creamos una nueva const task_input_el , le damos una class "list" , le decimos q sea tipo texto
como valor recibe a task , y le damos un setattribute para q saque el readonly
creamos un nuevo hijo para el task_content_el y le pasamos el task_input_el*/

window.addEventListener('load', () => {
const form = document.querySelector('#new-task-form');
const input = document.querySelector('#new-task-input') ;
const list_el = document.querySelector('#tasks');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;

   const task_el = document.createElement('div');
   task_el.classList.add('task');
  
   const task_content_el = document.createElement('div');
   task_content_el.classList.add('content');
   
   const task_input_el = document.createElement('input');
   task_input_el.classList.add('text');
   task_input_el.type= 'text';
   task_input_el.value= task;
   task_input_el.setAttribute('readonly', 'readonly');

   task_content_el.appendChild(task_input_el);

  /*crear 3 documentos, el task_actions_el (div), el task_edit_el(button) y el task_delete_el(btn)*/
  const task_actions_el = document.createElement('div') ;
  task_actions_el.classList.add('actions');
  /*hay que darle un innerHTML con su nombre a cada uno(edit y delete)*/
  const task_edit_el = document.createElement('button') ;
  task_edit_el.classList.add('edit') ;
  task_edit_el.innerHTML= 'Editar' ;

  const task_delete_el = document.createElement('button') ;
  task_delete_el.classList.add('delete') ;
  task_delete_el.innerHTML= 'Eliminar' ;

  //tenemos que crear dos hijos para actions el, uno recibe el edit y el otro el delete
  task_actions_el.appendChild(task_edit_el);
  task_actions_el.appendChild(task_delete_el);
  
  //task el debe recibir dos hijos, el task content y el task actions para los botones
  task_el.appendChild(task_content_el);
  task_el.appendChild(task_actions_el);
  //list el recibe como hijo a task el
  list_el.appendChild(task_el) ;
  //dejamos el valor del input vacio para ingresar el nuevo dato
  input.value= "";

  //Creando la funcionalidad de los botones
  //vamos a crear el boton delete con un evento click , y le tenemos
  //q decir q remueva el hijo de list_el y como parametro recibe el task_el
  task_edit_el.addEventListener('click', (e) => {
    if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_edit_el.innerText = "Save";
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
    } else {
        task_edit_el.innerText = "Edit";
        task_input_el.setAttribute("readonly", "readonly");
    }
});

task_delete_el.addEventListener('click', () => {
    list_el.removeChild(task_el);

});

})

});