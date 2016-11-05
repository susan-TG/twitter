window.addEventListener("load", init);
 
var todos = [];
 
function init()
{
	var add = document.querySelector("#agregar-tarea");
	add.addEventListener("click", addTodo);
}
 
function addTodo(event)
{
	//prevenimos el evento del enlace
	event.preventDefault();
	//comprobamos que tenga texto
	if(document.querySelector("#todo").value === "") return;
 
	//creamos el objeto con la información del li
	var li = 
	{
		index: todos.length + 1,
		value: document.querySelector("#todo").value
	};
	todos.push(li);
	displayTodos(li);
}
 
function displayTodos(li)
{
	//creamos el elemento li
    var node = document.createElement("li");  
    node.classList.add("list-group-item");   
    node.id = "todo"+li.index;
 
    //creamos el contenido del elementi li
	var textnode = document.createTextNode(li.value);    
	node.appendChild(textnode);   
	document.querySelector(".list-group").appendChild(node); 
	document.querySelector("#todo").value = "";
 
	//añadimos el botón
	var deleteButton = createButton(li);
    node.appendChild(deleteButton);
}

function createButton(li)
{
	//creamos un link
	var todo = document.createElement("a");
	//href
    todo.href = "#";
    //añadimos varias clases
    todo.classList.add("pull-right");
    //añadimos el evento click para que sea eliminado
    todo.onclick = function() 
    { 
        var toDelete = document.querySelector('#todo'+li.index);
		toDelete.parentNode.removeChild(toDelete);
    };
    //devolvemos el nuevo elemento
    
    var i = document.createElement("i");
	i.className = 'fa fa-trash fa-2x'; 

	todo.appendChild(i);

    return todo;
}
