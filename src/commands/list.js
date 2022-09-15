import { log } from '../utils/logging.js';
import { retrieve } from '../utils/presistence.js';

const list = () => {
  // Get the current todo-list
  const todoList = retrieve('todo-list', []);

  if (todoList && todoList.length) {
    // User has tasks in todoList
    log('Tasks in green are done. Tasks in yellow are still not done.', ['bold', 'blue']);
    todoList.forEach((task, index) => {
      if (task.done) {
        log(`${index}. ${task.text}`, ['greenBright']);
      } else {
        log(`${index}. ${task.text}`, ['yellowBright']);
      }
    });
  } else {
    // User does not have tasks in todoList
    log("You don't have any tasks yet.", ['red', 'bold']);
  }
};

export default list;
