import axios from 'axios';

// Base API configuration
const API_BASE_URL = __DEV__ ? 'http://localhost:5000/api' : 'https://your-production-api.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    // Token will be added by the auth slice when making requests
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      console.log('Unauthorized access');
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  
  register: async (userData: any) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
  
  getProfile: async (token: string) => {
    const response = await api.get('/auth/profile', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },
  
  refreshToken: async (token: string) => {
    const response = await api.post('/auth/refresh', {}, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },
};

// Academic API
export const academicAPI = {
  getSchedule: async (token: string) => {
    const response = await api.get('/academic/schedule', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },
  
  getGrades: async (token: string) => {
    const response = await api.get('/academic/grades', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },
  
  getAssignments: async (token: string) => {
    const response = await api.get('/academic/assignments', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },
  
  getAttendance: async (token: string) => {
    const response = await api.get('/academic/attendance', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },
};

// Campus API
export const campusAPI = {
  getEvents: async (token: string) => {
    const response = await api.get('/campus/events', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },
  
  getCafeteriaMenu: async (token: string) => {
    const response = await api.get('/campus/cafeteria/menu', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },
  
  getLibraryBooks: async (token: string, search?: string) => {
    const response = await api.get('/campus/library/books', {
      headers: { Authorization: `Bearer ${token}` },
      params: { search }
    });
    return response.data;
  },
};

export default api;
