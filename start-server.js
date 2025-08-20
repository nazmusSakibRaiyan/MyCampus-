// Simple Node.js server starter to avoid npm path issues
const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting BRAC University Connect Backend Server...\n');

// Change to backend directory
const backendDir = path.join(__dirname, 'backend');
process.chdir(backendDir);

console.log('📁 Working directory:', process.cwd());

// Start the server using the built JavaScript files
const serverProcess = spawn('node', ['./dist/server.js'], {
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    NODE_ENV: 'development',
    PORT: '5000',
    MONGODB_URI: 'mongodb://localhost:27017/brac-university-connect',
    JWT_SECRET: 'your-secret-key-for-development'
  }
});

serverProcess.on('error', (error) => {
  console.error('❌ Failed to start server:', error);
});

serverProcess.on('close', (code) => {
  console.log(`\n📴 Server process exited with code ${code}`);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down server...');
  serverProcess.kill('SIGINT');
  process.exit(0);
});

console.log('💡 Server should start on http://localhost:5000');
console.log('💡 Press Ctrl+C to stop the server\n');
