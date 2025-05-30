import chalk from 'chalk';
import express from 'express';

import { BuildConfig, SET_CONFIG } from 'src/build/BuildConfig';
import { PreSite } from 'src/build/group/PreSite';
import { Page_Task } from 'src/build/process/site/Page_Task';
//import { Page_Test } from 'src/build/process/test/Page_Test';
import { DB } from 'src/db/Db';
import { IO } from 'src/util/IO';
import { fillDatabase } from './filldb';

// Parse command line arguments to find --task parameter
const taskArg = process.argv.find(arg => arg.startsWith('--task='));

if (!taskArg) {
    console.error(chalk.red('Error: --task parameter is required. Format: --task=1,2,3'));
    process.exit(1);
}

const taskValue = taskArg.split('=')[1];
const taskNumbers = taskValue.split(',').map(Number).filter(num => !isNaN(num) && num > 0);

if (taskNumbers.length === 0) {
    console.error(chalk.red('Error: No valid task numbers provided. Format: --task=1,2,3'));
    process.exit(1);
}


let port = 3000;
let server = express();
server.use(express.static('dist'));
server.listen(port, () =>
{
    console.log(`Сервер запущен! Адрес: http://localhost:${port}`);
});

console.log(chalk.blue(`Processing tasks: ${taskNumbers.join(', ')}`));

IO.watch(['data/tasks'], () =>
{
    let config = new BuildConfig;
        config.devMode = true;
        config.tasksToProcess = taskNumbers;

    SET_CONFIG(config);

    console.log('\n' + chalk.bold.magenta('Запуск `watch` сборки!'));

    fillDatabase();

    (new PreSite).run();
    (new Page_Task).run();

    //(new Page_Test).run();

    console.log('\n' + chalk.magenta('Сборка завершена!'));
});