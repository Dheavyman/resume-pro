const faker = require('faker');

const generateEmployee = () => faker.fake(
  "{{name.lastName}}, {{name.firstName}}, {{name.firstName}}, {{address.streetAddress}}," +
  "{{address.city}}, {{address.state}}, {{address.zipCode}}, {{phone.phoneNumber}}," +
  "{{phone.phoneNumber}}, {{address.streetAddress}}, {{random.number}}, {{random.number}}")

const employees = [];
for (let i = 0; i < 5; i += 1) {
  const employee = generateEmployee();
  employees.push(employee);
}

const buildEmployeeData = () => {
  const employeesData = [];
  employees.forEach((employee, index) => {
    const data = employee.split(',');
    const employeeData = {
      manager_id: Math.floor(Math.random() * index) + 1,
      first_name: data[0].trim(),
      last_name: data[1].trim(),
      middle_initial: data[2].trim().charAt(0).toUpperCase(),
      sex: Math.round(Math.random()) === 1 ? 'male': 'female',
      address: data[3].trim(),
      city: data[4].trim(),
      region: data[5].trim(),
      postal_code: data[6].trim(),
      home_phone: data[7].split('x')[0].trim(),
      office_phone: data[8].split('x')[0].trim(),
      office_location: data[9].trim(),
      vacation_hours: data[10].trim(),
      sick_leave_hours: data[11].trim()
    }
    employeesData.push(employeeData)
  });
  return employeesData;
}

module.exports = buildEmployeeData;