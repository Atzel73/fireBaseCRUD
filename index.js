
import {saveTask}  from './firebase.js'


window.addEventListener('DOMContentLoaded', () => {
    console.log("works!");
})

const taskForm =   document.getElementById("task-form");

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("submitted");

    const title = taskForm['task-title'];
    const description = taskForm['task-description'];
    const name = taskForm['task-user'];
        saveTask(title.value, description.value, name.value);
    taskForm.reset();

})