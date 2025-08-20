const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:19006', 'http://localhost:8081'],
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mock users for testing without database
const mockUsers = [
  {
    id: '1',
    email: 'john.doe@g.bracu.ac.bd',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password123
    firstName: 'John',
    lastName: 'Doe',
    studentId: '20101001',
    role: 'student',
    department: 'Computer Science and Engineering',
    isActive: true
  },
  {
    id: '2',
    email: 'dr.rahman@bracu.ac.bd',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password123
    firstName: 'Dr. Abdul',
    lastName: 'Rahman',
    employeeId: 'FAC001',
    role: 'faculty',
    department: 'Computer Science and Engineering',
    isActive: true
  },
  {
    id: '3',
    email: 'super.admin@bracu.ac.bd',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // admin123
    firstName: 'Super',
    lastName: 'Admin',
    employeeId: 'ADM001',
    role: 'admin',
    department: 'IT Department',
    isActive: true
  }
];

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'BRAC University Connect API is running',
    timestamp: new Date().toISOString(),
    mode: 'Mock Database Mode'
  });
});

// Auth endpoints
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  const user = mockUsers.find(u => u.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  // In real app, would verify password with bcrypt
  // For demo, accepting any password
  const token = 'mock-jwt-token-' + Date.now();
  
  res.json({
    token,
    user: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      department: user.department
    }
  });
});

app.post('/api/auth/register', (req, res) => {
  res.status(201).json({
    message: 'Registration successful',
    user: {
      id: Date.now().toString(),
      ...req.body,
      password: undefined
    }
  });
});

// User endpoints
app.get('/api/users/profile', (req, res) => {
  res.json({
    id: '1',
    email: 'john.doe@g.bracu.ac.bd',
    firstName: 'John',
    lastName: 'Doe',
    role: 'student',
    department: 'Computer Science and Engineering'
  });
});

// Academic endpoints
app.get('/api/academic/courses', (req, res) => {
  res.json([
    {
      id: '1',
      code: 'CSE110',
      title: 'Programming Language I',
      credits: 3,
      instructor: 'Dr. Rahman'
    },
    {
      id: '2',
      code: 'CSE111',
      title: 'Programming Language II',
      credits: 3,
      instructor: 'Ms. Ahmed'
    }
  ]);
});

app.get('/api/academic/grades', (req, res) => {
  res.json([
    {
      courseCode: 'CSE110',
      courseTitle: 'Programming Language I',
      grade: 'A',
      gpa: 4.0,
      semester: 'Spring 2024'
    },
    {
      courseCode: 'CSE111',
      courseTitle: 'Programming Language II',
      grade: 'A-',
      gpa: 3.7,
      semester: 'Spring 2024'
    }
  ]);
});

// Campus endpoints
app.get('/api/campus/events', (req, res) => {
  res.json([
    {
      id: '1',
      title: 'Career Fair 2024',
      description: 'Annual career fair with top companies',
      date: '2024-03-15',
      location: 'Auditorium'
    },
    {
      id: '2',
      title: 'Cultural Night',
      description: 'Student cultural performance evening',
      date: '2024-03-20',
      location: 'Main Hall'
    }
  ]);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 BRAC University Connect API Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`⚠️  Running in MOCK MODE - No database required`);
  console.log(`🔑 Test credentials:`);
  console.log(`   Student: john.doe@g.bracu.ac.bd / password123`);
  console.log(`   Faculty: dr.rahman@bracu.ac.bd / password123`);
  console.log(`   Admin: super.admin@bracu.ac.bd / admin123`);
});
