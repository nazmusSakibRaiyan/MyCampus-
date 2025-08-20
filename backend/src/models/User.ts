import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  userType: 'student' | 'faculty' | 'staff' | 'admin';
  studentId?: string;
  employeeId?: string;
  department: string;
  phone?: string;
  profilePicture?: string;
  isActive: boolean;
  isVerified: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
  
  // Student specific fields
  semester?: number;
  cgpa?: number;
  enrollmentYear?: number;
  
  // Faculty/Staff specific fields
  designation?: string;
  joinDate?: Date;
  
  // Additional profile fields
  dateOfBirth?: Date;
  address?: string;
  emergencyContact?: {
    name: string;
    phone: string;
    relationship: string;
  };
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  userType: {
    type: String,
    required: true,
    enum: ['student', 'faculty', 'staff', 'admin']
  },
  studentId: {
    type: String,
    sparse: true,
    unique: true
  },
  employeeId: {
    type: String,
    sparse: true,
    unique: true
  },
  department: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    trim: true
  },
  profilePicture: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  lastLogin: {
    type: Date
  },
  
  // Student specific fields
  semester: {
    type: Number,
    min: 1,
    max: 12
  },
  cgpa: {
    type: Number,
    min: 0,
    max: 4
  },
  enrollmentYear: {
    type: Number
  },
  
  // Faculty/Staff specific fields
  designation: {
    type: String
  },
  joinDate: {
    type: Date
  },
  
  // Additional profile fields
  dateOfBirth: {
    type: Date
  },
  address: {
    type: String
  },
  emergencyContact: {
    name: String,
    phone: String,
    relationship: String
  }
}, {
  timestamps: true
});

// Indexes for better performance
userSchema.index({ email: 1 });
userSchema.index({ studentId: 1 });
userSchema.index({ employeeId: 1 });
userSchema.index({ userType: 1, department: 1 });

const User = mongoose.model<IUser>('User', userSchema);

export default User;
