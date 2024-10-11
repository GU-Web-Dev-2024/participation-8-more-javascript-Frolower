"use strict";

import { addTask, clearInput } from "./todo";
import { saveTasks, loadTasks } from "./storage";

const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");

const tasks = loadTasks();

tasks.forEach(task => {
    addTask(task, taskList);
})

addTaskButton.addEventListener("click", ()=>{
    const task = newTaskInput.value.trim();

    if (task) {
        addTask(task, taskList);
        tasks.push(task);
        saveTasks(tasks);
        clearInput(newTaskInput);
    }
});