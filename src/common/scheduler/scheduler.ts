import schedule from 'node-schedule';

// Schedule a job to run at a specific time
const job = schedule.scheduleJob('*/1 * * * *', function(){
    console.log('The job runs every minute');
});

// Schedule a job to run at a specific date
const date = new Date(2023, 10, 1, 12, 0, 0);
const job2 = schedule.scheduleJob(date, function(){
    console.log('The job runs at the specified date and time');
});