"use strict";

import { addTask, clearInput } from "./todo";
import { saveTasks, loadTasks } from "./storage";

const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");

const tasks = loadTasks();

addTaskButton.addEventListener("click", ()=>{
    const task = newTaskInput.value.trim();
    tasks.push(task);
    saveTasks(tasks);
    clearInput(newTaskInput);
});