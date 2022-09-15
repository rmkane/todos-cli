import { log } from '../utils/logging.js';
import { retrieve, save } from '../utils/presistence.js';

const remove = (taskIndex, { all }) => {
  // Get the current todo-list
  let todoList = retrieve('todo-list', []);

  if (todoList) {
    // Loop over the todo list tasks
    todoList = todoList.reduce((acc, task, index) => {
      // Check if the user specified the tasks to mark done
      if (all || taskIndex === index.toString()) {
        // Do not keep task
        return acc;
      }
      return [...acc, task];
    }, []);

    // Set the new todo-list
    save('todo-list', todoList);
  }

  // Display message to user
  log('Task has been removed successfully!', ['green', 'bold']);
};

export default remove;
