const faker = require('faker');

const generateJobsHistory = () => faker.fake(
  "{{finance.amount}}, {{date.recent}}"
)

const jobsHistories = [];
for(let i = 0; i < 3; i += 1) {
  const jobsHistory = generateJobsHistory();
  jobsHistories.push(jobsHistory);
}

const buildJobsHistoriesData = () => {
  const jobsHistoriesData = [];
  jobsHistories.forEach((job, index) => {
    const data = job.split(',')
    const jobData = {
      employee_id: index + 1,
      department_id: Math.floor(Math.random() * 10) + 1,
      title_id: Math.floor(Math.random() * 6) + 1,
      pay: data[0],
      date: data[1].split('(')[0].trim()
    }
    jobsHistoriesData.push(jobData)
  })
  return jobsHistoriesData;
}

module.exports = buildJobsHistoriesData;
