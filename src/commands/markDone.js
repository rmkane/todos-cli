import { log } from '../utils/logging.js';
import { retrieve, save } from '../utils/presistence.js';

const markDone = ({ tasks }) => {
  // Get the current todo-list
  let todoList = retrieve('todo-list', []);

  if (todoList) {
    // Loop over the todo list tasks
    todoList = todoList.map((task, index) => {
      // Check if the user specified the tasks to mark done
      if (tasks) {
        // Check if this task is one of the tasks the user specified
        if (tasks.indexOf(index.toString()) !== -1) {
          // Mark only specified tasks by user as done
          // eslint-disable-next-line no-param-reassign
          task.done = true;
        }
      } else {
        // If the user didn't specify tasks, mark all as done
        // eslint-disable-next-line no-param-reassign
        task.done = true;
      }
      return task;
    });

    // Set the new todo-list
    save('todo-list', todoList);
  }

  // show the user a message
  log('Tasks have been marked as done successfully', ['green', 'bold']);
};

export default markDone;
