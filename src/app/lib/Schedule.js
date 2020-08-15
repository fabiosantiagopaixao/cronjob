import schedule from 'node-schedule';

import SendMessage from '../jobs/SendMessage';

import Queue from './Queue';

const agendamentosSupervisor = [];
const agendamentosProdutosVencer = [];

/**
 * O formato cron consiste em:
        *    *    *    *    *    *
        ┬    ┬    ┬    ┬    ┬    ┬
        │    │    │    │    │    |
        │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
        │    │    │    │    └───── month (1 - 12)
        │    │    │    └────────── day of month (1 - 31)
        │    │    └─────────────── hour (0 - 23)
        │    └──────────────────── minute (0 - 59)
        └───────────────────────── second (0 - 59, OPTIONAL)
 */

/**
 * Execute a cron job one time per day
 */
schedule.scheduleJob('* * 1 * *', () => {
});

/**
 * Execute a cron job every minute
 */
schedule.scheduleJob('*/1 * * * *', async () => {
    console.log("Passou aqui");
});

/**
 * Execute a cron job every 5 Minutes
 */
schedule.scheduleJob('*/5 * * * *', async () => {
});

/**
 * More config
 *
 * second (0-59)
* minute (0-59)
* hour (0-23)
* date (1-31)
* month (0-11)
* year
* dayOfWeek (0-6)

* Example:
const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(0 - 6)];
rule.hour = "10";
rule.minute = "0"

*/