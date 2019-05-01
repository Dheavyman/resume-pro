import buildEmployeeData from './employees';
import buildDepartmentsData from './departments';
import buildTitlesData from './titles';
import buildJobsHistoriesData from './job-history';

import models from '../models'

const Employee = models.Employee;
const Departments = models.Departments;
const Title = models.Title;
const JobHistory = models.Job_History

const seedDatabase = async () => {
  const employeesData = buildEmployeeData();
  const departmentData = buildDepartmentsData();
  const titleData = buildTitlesData();
  const jobsData = buildJobsHistoriesData();

  try {
    const employees = await Employee.bulkCreate(employeesData);

    if (employees.length === 5 ) {
      console.log('Employees seeded successfully: ', employees.length);
      const departments = await Departments.bulkCreate(departmentData);

      if (departments.length === 10) {
        console.log('Departments seeded successfully: ', departments.length);
        const titles = await Title.bulkCreate(titleData);

        if (titles.length === 6) {
          console.log('Titles seeded successfully: ', titles.length);
          const jobsHistories = await JobHistory.bulkCreate(jobsData)

          if (jobsHistories.length === 3) {
            console.log('Jobs histories seeded successfully: ', jobsHistories.length)
          }
        }
      }
    }
  } catch(error) {
    console.log('Error seeding database: ', error.message)
  }
};

  seedDatabase();
