export let tasks: string[] = [];

export const addTask = (task: string) => {
  tasks.push(task);
  return tasks;
};

export const deleteTask = (task: string) => {
  tasks = tasks.filter((t) => t !== task);
  return tasks;
};

export const markTaskAsDone = (task: string) => {
  return `Task "${task}" is marked as done.`;
};

export const getTasks = () => {
  return tasks;
};
