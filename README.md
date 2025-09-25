# 🎓 School Management System (SM-System)

A comprehensive full-stack web application for managing school operations, built with React.js frontend and Node.js/Express backend.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![Material-UI](https://img.shields.io/badge/Material--UI-5.12.1-blue)
![Redux](https://img.shields.io/badge/Redux-Toolkit-purple)

## 🌟 Features

### 👨‍💼 Admin Portal
- **Student Management**: Add, view, edit, and manage student records
- **Teacher Management**: Manage teacher profiles and assignments
- **Class Management**: Create and organize classes and subjects
- **Attendance Tracking**: Monitor student attendance across subjects
- **Grade Management**: Record and manage student exam marks
- **Notice Board**: Create and manage school announcements
- **Complaint System**: Handle and resolve student/teacher complaints
- **Reports & Analytics**: View comprehensive school statistics

### 👨‍🏫 Teacher Portal
- **Student View**: Access assigned student information
- **Attendance Management**: Mark and update student attendance
- **Grade Entry**: Record student exam marks and assessments
- **Class Management**: View assigned classes and subjects
- **Complaint Submission**: Submit complaints or feedback

### 👨‍🎓 Student Portal
- **Profile Management**: View and update personal information
- **Attendance Check**: Monitor personal attendance records
- **Grade View**: Access exam results and academic progress
- **Subject Information**: View enrolled subjects and schedules
- **Complaint Submission**: Submit complaints or feedback

## 🚀 Tech Stack

### Frontend
- **React.js 18.2.0** - Modern UI library
- **Material-UI 5.12.1** - Beautiful component library
- **Redux Toolkit** - State management
- **React Router DOM** - Navigation
- **Axios** - HTTP client
- **Styled Components** - CSS-in-JS styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development server

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (v4.4 or higher) - [Download here](https://www.mongodb.com/try/download/community)
- **Git** - [Download here](https://git-scm.com/)

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/sokoo69/SM-system.git

# Navigate to the project directory
cd SM-system
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install backend dependencies
npm install

# Create environment file
cp .env.example .env

# Edit the .env file with your MongoDB connection string
# MONGO_URL=mongodb://localhost:27017/school-management-system
# PORT=5000
# JWT_SECRET=your-jwt-secret-key-here
# NODE_ENV=development

# Start the backend server
npm start
```

The backend server will start on `http://localhost:5000`

### 3. Frontend Setup

```bash
# Open a new terminal and navigate to frontend directory
cd frontend

# Install frontend dependencies
npm install

# Start the React development server
npm start
```

The frontend application will start on `http://localhost:3000`

### 4. Database Setup

Make sure MongoDB is running on your system:

```bash
# For macOS (using Homebrew)
brew services start mongodb-community

# For Windows
net start MongoDB

# For Linux
sudo systemctl start mongod
```

## 🎯 Usage

### Access the Application

1. **Open your browser** and navigate to `http://localhost:3000`
2. **Choose your role** (Admin, Teacher, or Student)
3. **Login** with your credentials or register as an Admin

### Default Admin Account

For testing purposes, you can create an admin account through the registration page.

### Role-Based Access

- **Admin**: Full access to all features and management capabilities
- **Teacher**: Access to assigned students, attendance, and grading
- **Student**: View personal information, attendance, and grades

## 📁 Project Structure

```
SM-system/
├── backend/
│   ├── controllers/          # Route controllers
│   ├── models/              # Database schemas
│   ├── routes/              # API routes
│   ├── index.js             # Server entry point
│   └── package.json
├── frontend/
│   ├── public/              # Static files
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── redux/           # State management
│   │   ├── assets/          # Images and icons
│   │   └── App.js           # Main app component
│   └── package.json
└── README.md
```

## 🔧 Available Scripts

### Backend Scripts

```bash
npm start          # Start the server with nodemon
npm run build      # Install dependencies
```

### Frontend Scripts

```bash
npm start          # Start the development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from Create React App
```

## 🌐 API Endpoints

### Authentication
- `POST /api/login` - User login
- `POST /api/register` - Admin registration
- `POST /api/logout` - User logout

### Students
- `GET /api/students` - Get all students
- `POST /api/students` - Create new student
- `PUT /api/students/:id` - Update student
- `DELETE /api/students/:id` - Delete student

### Teachers
- `GET /api/teachers` - Get all teachers
- `POST /api/teachers` - Create new teacher
- `PUT /api/teachers/:id` - Update teacher

### Classes & Subjects
- `GET /api/classes` - Get all classes
- `POST /api/classes` - Create new class
- `GET /api/subjects` - Get all subjects
- `POST /api/subjects` - Create new subject

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   ```bash
   # Make sure MongoDB is running
   brew services start mongodb-community  # macOS
   net start MongoDB                      # Windows
   sudo systemctl start mongod           # Linux
   ```

2. **Port Already in Use**
   ```bash
   # Kill process using port 3000 or 5000
   lsof -ti:3000 | xargs kill -9
   lsof -ti:5000 | xargs kill -9
   ```

3. **Node Modules Issues**
   ```bash
   # Clear npm cache and reinstall
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Shawon Ahmed**
- GitHub: [@sokoo69](https://github.com/sokoo69)
- LinkedIn: [Connect with me on LinkedIn](https://linkedin.com/in/shawon-ahmed)

## 📞 Contact

For any questions, suggestions, or collaboration opportunities:

- **Email**: [Your Email Address]
- **LinkedIn**: [Connect with me on LinkedIn](https://linkedin.com/in/shawon-ahmed)
- **GitHub**: [@sokoo69](https://github.com/sokoo69)

## 🙏 Acknowledgments

- Material-UI team for the amazing component library
- React team for the powerful frontend framework
- MongoDB team for the flexible database solution
- All contributors and testers of this project

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/sokoo69/SM-system)
![GitHub forks](https://img.shields.io/github/forks/sokoo69/SM-system)
![GitHub issues](https://img.shields.io/github/issues/sokoo69/SM-system)
![GitHub license](https://img.shields.io/github/license/sokoo69/SM-system)

---

⭐ **If you found this project helpful, please give it a star!** ⭐

## 🔮 Future Enhancements

- [ ] Mobile responsive design improvements
- [ ] Real-time notifications
- [ ] Advanced reporting and analytics
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Email integration
- [ ] File upload for assignments
- [ ] Calendar integration
- [ ] SMS notifications
- [ ] Advanced search functionality

---

**Made with ❤️ by Shawon Ahmed**