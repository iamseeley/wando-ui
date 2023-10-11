#!/usr/bin/env node

// Importing modules using ESM syntax
import { Command } from 'commander';
import initWandoUI from '../scripts/init';
import add from '../scripts/add';

const program = new Command();

program
  .command('init')
  .description('Initialize wando-ui with necessary dependencies')
  .action(initWandoUI);

program
  .command('add <componentName>')
  .description('Add a specific component to the project')
  .action(add);

program.parse(process.argv);
