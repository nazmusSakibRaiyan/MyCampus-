// Simple test script to check if the backend API is working
const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

async function testAPI() {
  console.log('🔍 Testing BRAC University Connect API...\n');

  try {
    // Test health endpoint
    console.log('1. Testing health endpoint...');
    const healthResponse = await axios.get(`${BASE_URL}/health`);
    console.log('✅ Health check:', healthResponse.data);
  } catch (error) {
    console.log('❌ Health check failed:', error.message);
    console.log('💡 Make sure the backend server is running on port 5000');
    return;
  }

  try {
    // Test login endpoint (should fail with validation error)
    console.log('\n2. Testing login endpoint with invalid data...');
    const loginResponse = await axios.post(`${BASE_URL}/api/auth/login`, {
      email: '',
      password: ''
    });
    console.log('Unexpected success:', loginResponse.data);
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.log('✅ Login validation working:', error.response.data);
    } else {
      console.log('❌ Login test failed:', error.message);
    }
  }

  try {
    // Test user registration endpoint
    console.log('\n3. Testing registration endpoint...');
    const registerResponse = await axios.post(`${BASE_URL}/api/auth/register`, {
      email: 'test@bracuniversity.edu.bd',
      password: 'testpassword123',
      firstName: 'Test',
      lastName: 'User',
      userType: 'student',
      studentId: 'TEST001',
      department: 'Computer Science & Engineering'
    });
    console.log('✅ Registration test:', registerResponse.data);
  } catch (error) {
    if (error.response) {
      console.log('⚠️  Registration response:', error.response.data);
    } else {
      console.log('❌ Registration test failed:', error.message);
    }
  }

  try {
    // Test protected endpoint without auth
    console.log('\n4. Testing protected endpoint without authentication...');
    const protectedResponse = await axios.get(`${BASE_URL}/api/users/profile`);
    console.log('Unexpected success:', protectedResponse.data);
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.log('✅ Authentication protection working:', error.response.data);
    } else {
      console.log('❌ Protected endpoint test failed:', error.message);
    }
  }

  console.log('\n🎉 API testing completed!');
}

// Run the test
testAPI().catch(console.error);
