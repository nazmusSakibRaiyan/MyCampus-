import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

// Extend Express Request interface
declare global {
  namespace Express {
    interface Request {
      userId?: string;
      userType?: string;
    }
  }
}

export const auth = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      res.status(401).json({ error: 'Access denied. No token provided.' });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as any;
    req.userId = decoded.userId;
    req.userType = decoded.userType;
    
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Role-based authorization middleware
export const authorize = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.userType || !roles.includes(req.userType)) {
      res.status(403).json({ 
        error: 'Access forbidden. Insufficient permissions.' 
      });
      return;
    }
    next();
  };
};

// Admin only middleware
export const adminOnly = authorize(['admin']);

// Faculty and admin middleware
export const facultyAndAdmin = authorize(['faculty', 'admin']);

// Staff and admin middleware
export const staffAndAdmin = authorize(['staff', 'admin']);
