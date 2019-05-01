import buildEmployeeData from './employees';
import buildDepartmentsData from './departments';
import buildTitlesData from './titles';
import buildJobsHistoriesData from './job-history';

import { db, sequelize } from '../models'

const Employee = db.Employee;
const Departments = db.Departments;
const Title = db.Title;
const JobHistory = db.Job_History

const seedEmployees = () => {
  const employeesData = buildEmployeeData();
  Employee.bulkCreate(employeesData)
    .then(() => Employee.findAll())
    .then(newEmployees => {
      console.log('New employees: ', newEmployees.length)
    })
    .catch(error => {
      console.log('Error creating employees: ', error.message)
    });
};

const seedDepartments = () => {
  const departmentData = buildDepartmentsData();
  Departments.bulkCreate(departmentData)
    .then(() => Departments.findAll())
    .then(newDepartments => {
      console.log('New departments: ', newDepartments.length)
    })
    .catch(error => {
      console.log('Error creating departments: ', error.message)
    });
};

const seedTitle = () => {
  const titleData = buildTitlesData();
  Title.bulkCreate(titleData)
    .then(() => Title.findAll())
    .then(newTitles => {
      console.log('New titles: ', newTitles.length)
    })
    .catch(error => {
      console.log('Error creating titles: ', error.message)
    });
};

const seedJobs = () => {
  const jobsData = buildJobsHistoriesData();
  JobHistory.bulkCreate(jobsData)
    .then(() => JobHistory.findAll())
    .then(newJobs => {
      console.log('New jobs: ', newJobs.length)
    })
    .catch(error => {
      console.log('Error creating jobs: ', error)
    });
};

  seedEmployees();
  seedDepartments();
  seedTitle();
  seedJobs();
