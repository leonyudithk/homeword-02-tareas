
//Pendientes
//Limpiar filtros, acortar el codigo, poder marcar o desmarcar si una actividad se realizo o no y editar la fecha

let taskList = [
    {
      id: 0,
      title: "Base de datos",
      date: "2022-09-13",
      check: true,
    },
    {
      id: 1,
      title: "Ingles",
      date: "2022-10-30",
      check: true,
    },
    {
      id: 2,
      title: "Lógica",
      date: "2022-09-29",
      check: true,
    },
    {
      id: 3,
      title: "Ingles 2",
      date: "2022-11-01",
      check: false,
    },
  ];
  
// Contenedor de la lista de trareas

const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");
const lista = document.getElementById("lista");
// Tasks Container
const tasksContainer = document.getElementById("tasksContainer");

const setDate = () => {
  const date = new Date();
  dateNumber.textContent = date.toLocaleString("es", { day: "numeric" });
  dateText.textContent = date.toLocaleString("es", { weekday: "long" });
  dateMonth.textContent = date.toLocaleString("es", { month: "short" });
  dateYear.textContent = date.toLocaleString("es", { year: "numeric" });
};

setDate();



//Evento que ejecuta una funcion apenas carge el DOM
window.addEventListener("DOMContentLoaded", () => {
  //Recorremos el arreglo de objetos con un forech
  taskList.forEach((task) => {
    const { id, title, date } = task; //Desestructuramos el objeto

    //Insetamos HTML con contenido dinamico que traemos del array
    lista.innerHTML += `
        <div class="card contTask" style="width: 20rem;">
        <div class="card-body ">
                <h5>${title}</h5>
                <p>${date}</p>
                <button onClick="deleteTaks(${id})" class="btnDelete">X</button>
      </div>
</div>
        `;
  });
});


//Borrar Tareas
function deleteTaks(id) {
  //borramos indicando la pocion
  taskList.splice(id, 1);

  lista.innerHTML = ""; //vaciamos nuesta caja de listas

  //Llenamos nuestra caja de listas con las que ya se realizaron
  taskList.forEach((task) => {
    const { id, title, date } = task; //Desestructuramos el objeto
    //Insetamos HTML con contenido dinamico que traemos del array
    lista.innerHTML += `

    <div class="card contTask" style="width: 30rem;">
    <div class="card-body contTask">
            <h5>${title}</h5>
            <p>${date}</p>
            <button onClick="deleteTaks(${id})" class="btnDelete">X</button>
  </div>
</div>
    `;
  });
}

//añadir tareas
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); //Prevenimos el evento por defecto de los formularios

  //Capturamos los datos
  const titleTask = document.getElementById("titleTask").value;
  const dateTask = document.getElementById("dateTask").value;

  //Creamos un objeto con la nueva tarea
  let newTask = {
    id: taskList.length,
    title: titleTask,
    date: dateTask,
    check: false,
  };
  //añadimos la tarea al arreglo
  taskList.push(newTask);
  console.log(newTask);
  console.log(taskList);
  lista.innerHTML = ""; //vaciamos nuesta caja de listas

  //Llenamos nuestra caja de listas con las que ya se realizaron
  taskList.forEach((task) => {
    const { id, title, date } = task; //Desestructuramos el objeto
    //Insetamos HTML con contenido dinamico que traemos del array
    lista.innerHTML += `

    <div class="card contTask" style="width: 20rem;">
    <div class="card-body contTask">
            <h5>${title}</h5>
            <p>${date}</p>
            <button onClick="deleteTaks(${id})" class="btnDelete">X</button>
  </div>
</div>
    `;
  });
});
