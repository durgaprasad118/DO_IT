# Do_IT

- [Do\_IT](#do_it)
  - [Description](#description)
  - [Tech Stack Used](#tech-stack-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Contributing](#contributing)

## Description

This is a full-stack ToDo application that allows users to create and manage their tasks. Users can register, log in, add, update, mark tasks as done, delete tasks, and see the percentage of completed tasks.

## Tech Stack Used

- **Frontend**: React, Redux, React Query, Axios, Tailwind CSS

- **Backend**: Node.js, Express.js, MongoDB, JSON Web Tokens (JWT) for authentication

- **Others**: react-icons, react-toastify


## Installation

Follow these steps to set up the ToDo App on your local environment:

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd Do_IT
   ```

2. **Backend Setup**:

   - Navigate to the `backend` directory:

     ```bash
     cd Backend
     ```

   - Install the required dependencies:

     ```bash
     npm install
     ```

   - Configure the environment variables:

     - Create a `.env` file in the `backend` directory.
     - Define the following variables:

       ```env
       PORT= 3000
       DATABASE_URL=<your-database-url
       SECRET_KEY=<your-secret-key>
       ```

   - Start the backend server:

     ```bash
     npm start
     ```

3. **Frontend Setup**:

   - Navigate to the `frontend` directory:

     ```bash
     cd Frontend
     ```

   - Install the required dependencies:

     ```bash
     npm install
     ```

   - Start the frontend application:

     ```bash
     npm run dev
     ```

4. **Access the App**:

   - Open a web browser and go to `http://localhost:5173` to access the Do_IT App.

## Usage

1. **Registration and Login**:

   - Create a new account by clicking on the "Register" link on the login page.
   - Log in with your credentials.

2. **Managing Tasks**:

   - Add a new task by clicking the "Add Task" button.
   - Update the task name by clicking the "Edit" button.
   - Mark a task as done by clicking the checkbox.
   - Delete a task by clicking the "Delete" button.

3. **Percentage of Completed Tasks**:

   - You can see the percentage of completed tasks on the dashboard.

## Features

- User registration and login.
- CRUD operations for tasks (Create, Read, Update, Delete).
- Task completion tracking.
- Dashboard displaying the percentage of completed tasks.

## Contributing

We welcome contributions to improve this project. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b yourgithubUserName`.
3. Make your changes and commit them: `git commit -m 'Add feature'`.
4. Push to your fork: `git push origin feature-name`.
5. Create a pull request to the `main` branch of the original repository.
