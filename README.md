ResumePro is an application to manage company employee data.

## Application features
* Get all employees: `GET: localhost:8000/employee`
* Get one employee: `GET: localhost:8000/employee/<employee_id>`
* Create an employee: `POST: localhost:8000/employee`

### Prerequisites
* Install NodeJs and Postgresql locally

## Getting Started
Follow the steps below to get the app running locally:
```
# Clone the repository
> $ git clone https://github.com/Dheavyman/resume-pro.git

# Change directory into it
> $ cd resume-pro

# Install all dependencies
> $ npm install

# Create a postgres database
> $ createdb resume-pro(or any name you wish)

# Create a .env file and fill it with the sample provided in .env.sample file
> $ touch .env

# Start the application in development mode
> $ npm run migrate
> $ npm seed:database
> $ npm run start:dev

# Open running application on browser
> http://localhost:8000/

```