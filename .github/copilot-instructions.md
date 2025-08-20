<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# BRAC University Connect App Development Guidelines

## Project Overview
This is a comprehensive university management system built with the MERN stack (MongoDB, Express.js, React Native, Node.js) for BRAC University. The app serves students, faculty, staff, and administrators with a unified platform for all university-related activities.

## Architecture
- **Backend**: Node.js with Express.js and TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: React Native with Expo for cross-platform mobile development
- **Authentication**: JWT-based authentication with role-based access control
- **Real-time**: Socket.IO for real-time messaging and notifications

## Code Standards

### Backend (Node.js/Express)
- Use TypeScript for all backend code
- Follow RESTful API conventions
- Implement proper error handling and validation
- Use middleware for authentication and authorization
- Follow the existing project structure:
  - `src/models/` - MongoDB schemas
  - `src/routes/` - API route handlers
  - `src/middleware/` - Custom middleware
  - `src/utils/` - Utility functions

### Frontend (React Native)
- Use TypeScript for type safety
- Follow React Native best practices
- Use Expo for cross-platform development
- Implement proper state management
- Follow component-based architecture

### Security Best Practices
- Always validate input data
- Use parameterized queries to prevent injection attacks
- Implement rate limiting on API endpoints
- Use HTTPS in production
- Store sensitive data in environment variables
- Implement proper CORS policies

### Database Guidelines
- Use appropriate indexes for performance
- Follow MongoDB naming conventions
- Implement proper data validation in schemas
- Use aggregation pipelines for complex queries

## Features Categories
1. **Authentication & User Management** - Multi-role auth, profiles, directory
2. **Academic Management** - Courses, grades, assignments, attendance
3. **Campus Services** - Events, cafeteria, library, maintenance
4. **Communication** - Messaging, notifications, announcements
5. **Administrative** - User management, analytics, system logs

## Development Workflow
1. Create feature branches from main
2. Write comprehensive tests for new features
3. Follow conventional commit messages
4. Update documentation for API changes
5. Ensure mobile responsiveness for all features

## API Design
- Use clear, descriptive endpoint names
- Follow HTTP status code conventions
- Implement consistent error response format
- Include proper API documentation
- Use middleware for common functionality

## Testing
- Write unit tests for utility functions
- Test API endpoints with proper test data
- Test authentication and authorization flows
- Verify mobile app functionality on both platforms

## Performance Considerations
- Implement pagination for large data sets
- Use caching where appropriate
- Optimize database queries
- Minimize API response sizes
- Use lazy loading for mobile components
