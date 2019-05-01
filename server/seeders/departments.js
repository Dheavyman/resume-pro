const faker = require('faker');

const generateDepartment = () => faker.fake(
  "{{random.word}}"
)

const departments = [];
for(let i = 0; i < 10; i += 1) {
  const department = generateDepartment();
  departments.push(department);
}

const buildDepartmentsData = () => {
  const departmentsData = [];
  departments.forEach(department => {
    const departmentData = {
      name: department,
      employee_id: Math.floor(Math.random() * 5) + 1,
    }
    departmentsData.push(departmentData)
  })
  return departmentsData;
}

module.exports = buildDepartmentsData;
