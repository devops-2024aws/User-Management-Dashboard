# User Management System - Quick Start Guide

A full-stack user management application built with Angular frontend and GraphQL/Node.js backend.

## 🚀 Quick Start

### Prerequisites
- Node.js v16+ and npm
- Git (optional)

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/usermanagement.git
cd usermanagement
```

### 2. Install Dependencies

**Backend:**
```bash
npm install
```

**Frontend:**
```bash
cd user-management-frontend
npm install
cd ..
```

### 3. Run the Application

**Terminal 1 - Start Backend Server:**
```bash
npm start
```
Backend will run at: `http://localhost:4000/graphql`

**Terminal 2 - Start Frontend Server:**
```bash
cd user-management-frontend
npm start
```
Frontend will run at: `http://localhost:4200`

### 4. Open in Browser
Navigate to: `http://localhost:4200`

## 📁 Project Structure

```
usermanagement/
├── src/                           # Backend source code
│   ├── index.js                  # Server setup
│   ├── schema.js                 # GraphQL schema
│   ├── resolvers.js              # GraphQL resolvers
│   ├── data.js                   # Sample data
│   └── package.json              # Backend dependencies
│
├── user-management-frontend/      # Angular frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── app.ts           # Main component
│   │   │   ├── app.html         # Template
│   │   │   ├── services/        # Services
│   │   │   └── graphql/         # GraphQL queries & mutations
│   │   ├── main.ts              # Entry point
│   │   └── index.html           # HTML file
│   └── package.json             # Frontend dependencies
│
├── README.md                      # Full documentation
├── GITHUB_SETUP.md               # GitHub setup guide
└── .gitignore                    # Git ignore rules
```

## ✨ Features

- ✅ View all users in a table
- ✅ Add new users with validation
- ✅ Edit existing user information
- ✅ Delete users with confirmation
- ✅ Real-time data updates
- ✅ Form validation (4+ characters for names, valid email)
- ✅ Responsive Bootstrap design
- ✅ GraphQL API backend

## 🔧 Default Users

The application comes with two sample users:

1. **John Doe**
   - Email: john@example.com
   - Role: Admin
   - Status: Active

2. **Jane Smith**
   - Email: jane@example.com
   - Role: User
   - Status: Active

## 📝 Form Validation Rules

When adding/editing users:
- **First Name:** Minimum 4 characters
- **Last Name:** Minimum 4 characters
- **Email:** Valid format (example@domain.com)
- **Role:** Minimum 2 characters
- **Active:** Checkbox (optional)

## 🛠️ Technologies

### Backend
- Node.js - JavaScript runtime
- Express - Web framework
- Apollo Server - GraphQL server
- CORS - Cross-origin requests

### Frontend
- Angular 20+ - Web framework
- Apollo Client - GraphQL client
- Bootstrap 5 - UI framework
- TypeScript - Type-safe JavaScript

## 📚 Documentation

- [Full README](./README.md) - Comprehensive documentation
- [GitHub Setup](./GITHUB_SETUP.md) - GitHub push instructions
- [API Documentation](./README.md#-api-documentation) - GraphQL API details

## 🐛 Troubleshooting

**Frontend shows "Cannot GET /"**
- Ensure Angular server is running on port 4200

**GraphQL connection error**
- Check backend is running on port 4000
- Visit http://localhost:4000/graphql in browser

**Error adding user**
- Ensure both servers are running
- Check browser console (F12) for error details
- Verify form data meets validation requirements

**Port already in use**
```bash
# Kill process on port 4000
netstat -ano | findstr :4000
taskkill /PID <PID> /F

# Kill process on port 4200
netstat -ano | findstr :4200
taskkill /PID <PID> /F
```

## 📈 Next Steps

To enhance this project:

1. **Add Database** - Replace in-memory storage with MongoDB/PostgreSQL
2. **Authentication** - Implement login/signup
3. **Authorization** - Add role-based access control
4. **Tests** - Create unit and integration tests
5. **Deployment** - Deploy to Heroku, AWS, or Azure
6. **Documentation** - Add API documentation with Swagger

## 🤝 Contributing

To contribute to this project:

1. Create a feature branch (`git checkout -b feature/name`)
2. Commit your changes (`git commit -m "Add feature"`)
3. Push to branch (`git push origin feature/name`)
4. Create a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created as a full-stack learning project.

## 📧 Support

For issues or questions, please:
1. Check the [README](./README.md) documentation
2. Review the [GitHub Setup](./GITHUB_SETUP.md) guide
3. Check browser console (F12) for error messages

---

**Happy developing! 🎉**

For detailed information, see [README.md](./README.md)
