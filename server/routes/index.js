import EmployeeController from '../controllers/employees';

export default (app) => {
  app.get('/', (req, res) => {
    return res.status(200).json({
      status: 'Success',
      message: 'Welcome to resume pro'
    })
  });
  app.get('/employee', EmployeeController.getEmployees);
  app.post('/employee')
  app.get('/employee/:employee_id', EmployeeController.getEmployee);
};
