const form = document.getElementById("toDoListForm");

/* ORA FACCIAMO IN MODO CHE LA PAGINA NON FA IL REFRESH */

form.addEventListener("ADD_TASK", function (add) {
  add.preventDefault();

  /* ORA RECUPERIAMO I DATI DEI NOSTRI INPUT*/

  const nameOfTask = document.getElementById("task");

  /* ORA PRENDIAMO LE VALUE DEL TASK E LI METTIAMO IN UN OBJECT DA USARE SUCESSIVAMENTE */

  const newTask = nameOfTask.value;

  const addedTask = {
    addedTask: newTask,
  };

  console.log(addedTask);

  /* ADESSO FACCIAMO IN MODO CHE IL TASK INSERITO VENGA MOSTRATO */

  const button = document.getElementById("myButton");

  // Add a class to the element
  button.classList.add("myClass");

  const addTask = document.createElement("div");
  addTask.classList.add("ListOfTasks");

  addTask.innerHTML = `
  <input type="checkbox" /><p> ${addedTask}</p>

  `;
});
