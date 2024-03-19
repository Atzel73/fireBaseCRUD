
import { saveTask, getTasks, onGetTasks, deleteTask, getTask, updateTask } from './firebase.js'



const taskForm = document.getElementById("task-form");

const taskContainer = document.getElementById("task-container");

let editStatus = false;

let id = "";
window.addEventListener('DOMContentLoaded', async () => {

    onGetTasks((querySnapshot) => {
        let html = "";

        querySnapshot.forEach(doc => {
            const task = doc.data();

            html += `
            <div class="card" style="width: 18rem;">
            <img src="${task.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${task.name}</h5>
              <p class="card-text">${task.title}</p>
              <p class="card-text">${task.description}</p>
              <button class='btn-delete' data-id="${doc.id}">Delete</button>
              <button class='btn-edit' data-id="${doc.id}">Edit</button>
            </div>
          </div>
          
    `;
        });
        taskContainer.innerHTML = html;

        const btnsDelete = taskContainer.querySelectorAll('.btn-delete');
        btnsDelete.forEach(btn => {
            btn.addEventListener('click', ({ target: { dataset } }) => {
                deleteTask(dataset.id);
                console.log("Datos borrados!");
            })
        })

        const btnsEdit = taskContainer.querySelectorAll('.btn-edit');
        btnsEdit.forEach(btn => {
            btn.addEventListener('click', async (e) => {

                const doc = await getTask(e.target.dataset.id);
                const task = doc.data();

                ///Se le regresa al formulario el contenido del snapshot ya creado
                taskForm['task-title'].value = task.title;
                taskForm['task-description'].value = task.description;
                taskForm['task-user'].value = task.name;

                editStatus = true;
                id = e.target.dataset.id;

                taskForm['btn-task-save'].innerText = "Update";
            })
        })

    });
});


////Esta funcion toma los datos del formulario y se envian como parametro a la funcion saveTask
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("submitted");

    const title = taskForm['task-title'];
    const description = taskForm['task-description'];
    const name = taskForm['task-user'];
    const image = taskForm['task-photo'];


    if (!editStatus) {
        saveTask(title.value, description.value, name.value, image.value);

    } else {
        updateTask(id, {title: title.value, description: description.value, name: name.value, image: image.value});
            editStatus = false;
    }
    taskForm.reset();

})