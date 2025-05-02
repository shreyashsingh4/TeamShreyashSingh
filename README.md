# Student Team Members Management Application

A full-stack web application that allows users to manage student profiles, assign them to teams, and perform essential CRUD operations. This project was developed as part of the SRM Full Stack Development assessment.

## 🔧 Tech Stack

### Frontend:
- React.js
- React Router DOM
- Axios
- CSS

### Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Body-Parser
- dotenv

### Tools & Platforms:
- Visual Studio Code
- MongoDB Atlas (Cloud Database)
- Git & GitHub
- Postman (for API testing)
- Google Chrome (for testing frontend)

---

## ✨ Features

- View all student members.
- Add new student members.
- Edit existing student member details.
- Delete student members.
- View detailed information of individual members.
- Seamless frontend-backend integration using RESTful APIs.

---

## 🚀 Live Demo

Since the project runs locally, access it using the following local URLs after setup:

- Home: [http://localhost:3002/](http://localhost:3002/)
- Add Member: [http://localhost:3002/add](http://localhost:3002/add)
- View Members: [http://localhost:3002/view](http://localhost:3002/view)
- Individual Member Views:
  - [Member 1](http://localhost:3002/member/6812f0bf197ad97027671ec4)
  - [Member 2](http://localhost:3002/member/6812f690197ad97027671ed4)
  - [Member 3](http://localhost:3002/member/6812f76a197ad97027671edc)

---

## ⚙️ Installation & Setup Instructions

### Prerequisites:
- Node.js and npm
- MongoDB Atlas account
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/shreyashsingh4/student-team-members-app.git
cd student-team-members-app

2. Backend Setup
cd backend
npm install

Create a .env file inside the backend directory with the following:
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=5000

npm start

The backend server should now run on: http://localhost:5000/

3. Frontend Setup
cd ../frontend
npm install
npm start

The frontend should now run on: http://localhost:3002/

👤 Author
Shreyash Singh - RA2211027010159
Himanshu Gupta - RA2211027010136
Sayantan Sarkar - RA2211027010138
GitHub: @shreyashsingh4
