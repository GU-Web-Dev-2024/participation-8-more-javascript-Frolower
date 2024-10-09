"use strict";

function addTask(task, taskList) {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
}

function clearInput(inputField) {
    inputField.value = ""
}

export {addTask, clearInput};