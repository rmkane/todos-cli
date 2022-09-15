import { log } from '../utils/logging.js';
import { retrieve, save } from '../utils/presistence.js';

const add = (task) => {
  // Get the current todo-list
  const todoList = retrieve('todo-list', []);

  // Push the new task to the todos-list
  todoList.push({
    text: task,
    done: false,
  });

  // Set todos-list in conf
  save('todo-list', todoList);

  // Display message to user
  log('Task has been added successfully!', ['green', 'bold']);
};

export default add;
