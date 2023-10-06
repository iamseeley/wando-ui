#!/usr/bin/env node

const { Command } = require('commander');
const initWandoUI = require('../scripts/init');
const add = require('../scripts/add');

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
