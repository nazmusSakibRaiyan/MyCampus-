import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from '../models/User';

// Load environment variables
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/brac-university-connect';

const seedData = {
  students: [
    {
      email: 'john.doe@g.bracu.ac.bd',
      password: 'password123',
      firstName: 'John',
      lastName: 'Doe',
      studentId: '20101001',
      userType: 'student',
      department: 'Computer Science and Engineering',
      program: 'Bachelor of Science',
      semester: 8,
      enrollmentYear: 2020,
      cgpa: 3.75,
      isActive: true,
      isVerified: true
    },
    {
      email: 'jane.smith@g.bracu.ac.bd',
      password: 'password123',
      firstName: 'Jane',
      lastName: 'Smith',
      studentId: '20101002',
      userType: 'student',
      department: 'Business Administration',
      program: 'Bachelor of Business Administration',
      semester: 6,
      enrollmentYear: 2021,
      cgpa: 3.85,
      isActive: true,
      isVerified: true
    }
  ],
  faculty: [
    {
      email: 'dr.rahman@bracu.ac.bd',
      password: 'password123',
      firstName: 'Dr. Abdul',
      lastName: 'Rahman',
      employeeId: 'FAC001',
      userType: 'faculty',
      department: 'Computer Science and Engineering',
      designation: 'Professor',
      isActive: true,
      isVerified: true
    },
    {
      email: 'ms.ahmed@bracu.ac.bd',
      password: 'password123',
      firstName: 'Ms. Fatima',
      lastName: 'Ahmed',
      employeeId: 'FAC002',
      userType: 'faculty',
      department: 'Business Administration',
      designation: 'Assistant Professor',
      isActive: true,
      isVerified: true
    }
  ],
  staff: [
    {
      email: 'admin.office@bracu.ac.bd',
      password: 'password123',
      firstName: 'Admin',
      lastName: 'Officer',
      employeeId: 'STF001',
      userType: 'staff',
      department: 'Administration',
      designation: 'Administrative Officer',
      isActive: true,
      isVerified: true
    }
  ],
  admin: [
    {
      email: 'super.admin@bracu.ac.bd',
      password: 'admin123',
      firstName: 'Super',
      lastName: 'Admin',
      employeeId: 'ADM001',
      userType: 'admin',
      department: 'IT Department',
      designation: 'System Administrator',
      isActive: true,
      isVerified: true
    }
  ]
};

async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...');
    
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing users
    await User.deleteMany({});
    console.log('🗑️  Cleared existing users');

    // Hash passwords and create users
    const allUsers = [...seedData.students, ...seedData.faculty, ...seedData.staff, ...seedData.admin];
    
    for (const userData of allUsers) {
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      const user = new User({
        ...userData,
        password: hashedPassword
      });
      await user.save();
      console.log(`👤 Created user: ${userData.email} (${userData.userType})`);
    }

    console.log('🎉 Database seeding completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`   Students: ${seedData.students.length}`);
    console.log(`   Faculty: ${seedData.faculty.length}`);
    console.log(`   Staff: ${seedData.staff.length}`);
    console.log(`   Admins: ${seedData.admin.length}`);
    console.log(`   Total Users: ${allUsers.length}`);
    
    console.log('\n🔑 Test Login Credentials:');
    console.log('Student: john.doe@g.bracu.ac.bd / password123');
    console.log('Faculty: dr.rahman@bracu.ac.bd / password123');
    console.log('Staff: admin.office@bracu.ac.bd / password123');
    console.log('Admin: super.admin@bracu.ac.bd / admin123');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
    process.exit(0);
  }
}

// Run the seeder
seedDatabase();
