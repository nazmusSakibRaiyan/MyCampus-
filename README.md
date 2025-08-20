# MyCampus - BRAC University Connect

All-in-one university super-app with academics, campus life, financials, communication, and digital services.

## 🚀 Quick Start

### 1. Install MongoDB (Required)
1. Download MongoDB Community Edition from: https://www.mongodb.com/try/download/community
2. Install with default settings
3. Ensure MongoDB service is running

### 2. Setup and Run Applications

#### Option A: Automated Setup (Recommended)
1. Double-click `setup.bat` to install all dependencies
2. Double-click `seed-database.bat` to populate test data
3. Double-click `start-all.bat` to start both backend and mobile app

#### Option B: Manual Setup
```bash
# 1. Setup Backend
cd "backend"
npm install
npm run build

# 2. Setup Mobile App
cd "../mobile"
npm install

# 3. Seed Database (after MongoDB is running)
cd "../backend"
npx ts-node src/seeders/database-seeder.ts

# 4. Start Backend
npm run dev

# 5. Start Mobile App (in new terminal)
cd "../mobile"
npx expo start
```

## 🔑 Test Credentials

### Students
- Email: `john.doe@g.bracu.ac.bd`
- Password: `password123`

### Faculty
- Email: `dr.rahman@bracu.ac.bd`
- Password: `password123`

### Staff
- Email: `admin.office@bracu.ac.bd`
- Password: `password123`

### Admin
- Email: `super.admin@bracu.ac.bd`
- Password: `admin123`

## 🌐 URLs
- Backend API: http://localhost:5000
- Mobile App: Use Expo QR code or device emulator

## ✨ Features Available
- User Authentication (JWT)
- Role-based Access Control
- Academic Management
- Campus Services
- Real-time Messaging
- Profile Management
- 100+ API Endpoints

- ✅ iOS (iPhone & iPad)
- ✅ Android
- ✅ Web (Progressive Web App)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (v5 or higher)
- Expo CLI
- Git

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd brac-university-connect
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the backend server**
   ```bash
   npm run dev
   ```

   The API will be available at `http://localhost:5000`

### Mobile App Setup

1. **Install mobile dependencies**
   ```bash
   cd mobile
   npm install
   ```

2. **Start the development server**
   ```bash
   npm start
   ```

3. **Run on device/simulator**
   ```bash
   # For iOS (requires macOS)
   npm run ios
   
   # For Android
   npm run android
   
   # For web
   npm run web
   ```

## 📁 Project Structure

```
brac-university-connect/
├── backend/                 # Node.js API server
│   ├── src/
│   │   ├── models/         # MongoDB schemas
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Custom middleware
│   │   ├── utils/          # Utility functions
│   │   ├── app.ts          # Express app setup
│   │   └── server.ts       # Server entry point
│   ├── .env.example        # Environment variables template
│   ├── tsconfig.json       # TypeScript configuration
│   └── package.json
├── mobile/                 # React Native app
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── screens/        # Screen components
│   │   ├── navigation/     # Navigation configuration
│   │   ├── services/       # API services
│   │   ├── store/          # State management
│   │   └── utils/          # Utility functions
│   ├── App.tsx             # App entry point
│   ├── app.json            # Expo configuration
│   └── package.json
└── README.md
```

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `POST /api/auth/refresh` - Refresh JWT token

### Academic
- `GET /api/academic/schedule` - Get class schedule
- `GET /api/academic/grades` - Get grades
- `POST /api/academic/register` - Course registration
- `GET /api/academic/assignments` - Get assignments
- `GET /api/academic/attendance` - Get attendance

### Campus Services
- `GET /api/campus/events` - Get campus events
- `POST /api/campus/events/:id/register` - Register for event
- `GET /api/campus/cafeteria/menu` - Get cafeteria menu
- `POST /api/campus/cafeteria/order` - Place food order
- `GET /api/campus/library/books` - Search library books
- `GET /api/campus/map/locations` - Get campus locations

### Administrative (Admin only)
- `GET /api/admin/users` - Get all users
- `POST /api/admin/users` - Create user
- `PUT /api/admin/users/:id` - Update user
- `DELETE /api/admin/users/:id` - Delete user
- `GET /api/admin/analytics` - Get system analytics

## 🔒 Authentication

The API uses JWT tokens for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## 🌐 Environment Variables

Create a `.env` file in the backend directory:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/brac-university-connect
JWT_SECRET=your-super-secret-jwt-key
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:19006
```

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test

# Mobile app tests
cd mobile
npm test
```

## 📦 Deployment

### Backend Deployment

1. Build the TypeScript code:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

### Mobile App Deployment

1. Build for production:
   ```bash
   expo build:android  # For Android
   expo build:ios      # For iOS
   ```

2. Submit to app stores using Expo's submission service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Project Lead**: BRAC University IT Department
- **Developers**: Student Development Team
- **UI/UX**: Design Team

## 📞 Support

For support, email support@bracuniversity.edu.bd or create an issue in this repository.

## 🔄 Version History

- **v1.0.0** - Initial release with core features
  - User authentication and profiles
  - Basic academic management
  - Campus services integration
  - Administrative dashboard

## 🎯 Roadmap

- [ ] Integration with university ERP system
- [ ] Advanced analytics dashboard
- [ ] AI-powered chatbot for student support
- [ ] Offline mode for mobile app
- [ ] Integration with Learning Management System (LMS)
- [ ] Advanced notification system
- [ ] Multi-language support
