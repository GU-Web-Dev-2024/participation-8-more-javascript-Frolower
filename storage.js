"use strict";

function saveTasks(tasks) {
    localStorage.set("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

export {saveTasks, loadTasks};