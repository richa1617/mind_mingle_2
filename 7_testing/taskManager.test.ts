import {
  tasks,
  addTask,
  deleteTask,
  markTaskAsDone,
  getTasks,
} from "./taskManager";

test("Check if addtask function adds a task", () => {
  let task = "study";
  let tasks = addTask(task);
  expect(tasks).toContain(task);
});

test("Check if deleteTask function deletes a task", () => {
  let task = "study";
  let tasks = deleteTask(task);
  expect(tasks).not.toContain(task);
});

test("Check if markTAskAsDone function returns a string that contais marked as done", () => {
  let task = "sleep";
  let tasks = markTaskAsDone(task);
  expect(tasks).toMatch(`Task "${task}" is marked as done`);
});

test("Check if getTask function returns all tasks", () => {
  addTask("play");
  let tasks = getTasks();
  expect(tasks).toContain("play");
});
