#! /usr/bin/env node

import { program } from 'commander';

import { add, clean, list, markDone, remove } from './commands/index.js';

program.command('list').description('List all the TODO tasks').action(list);

program.command('add <task>').description('Add a new TODO task').action(add);

program
  .command('mark-done')
  .description('Mark commands done')
  .option(
    '-t, --tasks <tasks...>',
    'The tasks to mark done. If not specified, all tasks will be marked done.'
  )
  .action(markDone);

program
  .command('remove [task]')
  .description('Remove a TODO task')
  .option('--all', 'If specified, all tasks will be removed.')
  .action(remove);

program.command('clean').description('Delete the conf JSON file').action(clean);

program.parse();
