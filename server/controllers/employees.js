import models from '../models';

const Employee = models.Employee

class EmployeeController {
  static createEmployee(req, res) {
    Employee.create(req.body)
      .then(newEmployee => res.status(201).json({
        status: 'Success',
        message: 'Employee created',
        data: {
          employee: newEmployee
        },
      }))
      .catch(error => res.status(500).json({
        status: 'Error',
        message: error.message
      }))
  }

  static getEmployees(req, res) {
    Employee.findAll()
      .then(employees => res.status(200).json({
        status: 'Success',
        message: 'Employees retrieved',
        data: {
          employees
        }
      }))
      .catch(error => res.status(500).json({
        status: 'Error',
        message: error.message
      }));
  }

  static getEmployee(req, res) {
    Employee.findByPk(req.params.employee_id)
      .then(employee => {
        if (!employee) {
          return res.status(404).json({
            status: 'Error',
            message: 'Employee not found',
          });
        }
        return res.status(200).json({
          status: 'Success',
          message: 'Employee retrieved',
          data: {
            employee
          }
        });
      })
      .catch(error => res.status(500).json({
        status: 'Error',
        message: error.message
      }));
  }
};

export default EmployeeController;
