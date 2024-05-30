# Employee Management Application - Backend

This is the backend service for the Employee Management System, built with Node.js, Express, and MongoDB. The backend provides a RESTful API for managing employee data.

## Live App
Access the live app here - [Live](https://employeemanagement-kunalvjs-projects.vercel.app/)

## Demo
Landing page/All Employee data
![image](https://github.com/kunalVj/Employee-Management-Application/assets/106743611/4f59aaa0-ff13-472c-9943-79b1d004e9a4)

Filter
![image](https://github.com/kunalVj/Employee-Management-Application/assets/106743611/42a1ad07-6143-499e-9092-a110364f3be2)

Average Salary
![image](https://github.com/kunalVj/Employee-Management-Application/assets/106743611/affe3c1b-f3c0-441a-90eb-3e0e86142233)


## Features

- Create, read, update, and delete employee records
- Filter employees based on criteria such as salary, department, age, and date of birth
- Search for an employee

## Bonus Task Completed

- Get Average Salary of a Department
- Get Average Salary of a Department

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/employee-management-backend.git
   cd employee-management
   cd backend
   ```
2. Install Dependencies:
   ```bash
   npm install
   ```
3. Create a .env file in the root directory and add your MongoDB connection string:
   ```bash
   MONGODB_URI=your_mongodb_connection_string
   ```
4. Start server
   ```bash
   node server.js
   ```
   The server will start on http://localhost:5000.

## API Endpoints
- Get all employees
  ```bash
  GET /api/employees
  ```
- Create a new employee
  ```bash
  GET /api/employees
  ```
- Update an existing employee
  ```bash
  PUT /api/employees/:id
  ```
- Delete an employee
  ```bash
  DELETE /api/employees/:id
  ```

## Frontend

The frontend for this application is deployed separately on Vercel using the CLI.
