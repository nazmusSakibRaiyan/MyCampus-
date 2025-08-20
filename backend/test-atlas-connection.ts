import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI!;

async function testConnection() {
  try {
    console.log('🔌 Testing MongoDB Atlas connection...');
    console.log('📍 Connection URI:', MONGODB_URI.replace(/\/\/[^:]+:[^@]+@/, '//***:***@'));
    
    // Connect to MongoDB Atlas
    await mongoose.connect(MONGODB_URI);
    
    console.log('✅ Successfully connected to MongoDB Atlas!');
    console.log('📊 Database:', mongoose.connection.db.databaseName);
    console.log('🌐 Host:', mongoose.connection.host);
    
    // Test a simple operation
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log(`📁 Available collections: ${collections.length}`);
    
    console.log('🎉 MongoDB Atlas is ready for BRAC University Connect!');
    
  } catch (error) {
    console.error('❌ MongoDB Atlas connection failed:');
    console.error(error);
    
    if (error instanceof Error) {
      if (error.message.includes('authentication failed')) {
        console.log('💡 Check your username and password in the connection string');
      } else if (error.message.includes('network')) {
        console.log('💡 Check your network access settings in MongoDB Atlas');
      }
    }
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB Atlas');
    process.exit(0);
  }
}

// Run the test
testConnection();
