import express from 'express';
import { auth } from '../middleware/auth';

const router = express.Router();

// Get campus events
router.get('/events', auth, async (req, res) => {
  try {
    const events = [
      {
        id: '1',
        title: 'BRAC University Tech Fest 2025',
        description: 'Annual technology festival featuring competitions, workshops, and exhibitions',
        date: '2025-09-20T10:00:00Z',
        endDate: '2025-09-22T18:00:00Z',
        location: 'Main Campus Auditorium',
        category: 'Academic',
        organizer: 'Computer Science Department',
        isRegistrationRequired: true,
        maxParticipants: 500,
        currentRegistrations: 245
      }
    ];
    
    res.json({ events });
  } catch (error) {
    console.error('Events error:', error);
    res.status(500).json({ error: 'Failed to get events' });
  }
});

// Register for event
router.post('/events/:id/register', auth, async (req, res) => {
  try {
    const { id } = req.params;
    
    res.json({ 
      message: 'Event registration successful',
      eventId: id,
      registeredAt: new Date()
    });
  } catch (error) {
    console.error('Event registration error:', error);
    res.status(500).json({ error: 'Failed to register for event' });
  }
});

// Get cafeteria menu
router.get('/cafeteria/menu', auth, async (req, res) => {
  try {
    const menu = {
      today: {
        date: new Date().toISOString().split('T')[0],
        meals: {
          breakfast: [
            { item: 'Paratha with Curry', price: 25 },
            { item: 'Bread with Jam', price: 15 }
          ],
          lunch: [
            { item: 'Rice with Chicken Curry', price: 80 },
            { item: 'Rice with Dal', price: 40 }
          ],
          dinner: [
            { item: 'Fried Rice', price: 60 },
            { item: 'Chicken Biriyani', price: 120 }
          ]
        }
      }
    };
    
    res.json({ menu });
  } catch (error) {
    console.error('Menu error:', error);
    res.status(500).json({ error: 'Failed to get menu' });
  }
});

// Place cafeteria order
router.post('/cafeteria/order', auth, async (req, res) => {
  try {
    const { items, totalAmount } = req.body;
    
    res.json({ 
      message: 'Order placed successfully',
      orderId: Math.random().toString(36).substr(2, 9),
      items,
      totalAmount,
      estimatedTime: '15-20 minutes'
    });
  } catch (error) {
    console.error('Order error:', error);
    res.status(500).json({ error: 'Failed to place order' });
  }
});

// Get library resources
router.get('/library/books', auth, async (req, res) => {
  try {
    const { search, category } = req.query;
    
    const books = [
      {
        id: '1',
        title: 'Introduction to Algorithms',
        author: 'Thomas H. Cormen',
        isbn: '978-0262033848',
        category: 'Computer Science',
        available: 3,
        total: 5,
        location: 'CS Section - Shelf A-23'
      }
    ];
    
    res.json({ books });
  } catch (error) {
    console.error('Library search error:', error);
    res.status(500).json({ error: 'Failed to search library' });
  }
});

// Reserve book
router.post('/library/reserve/:bookId', auth, async (req, res) => {
  try {
    const { bookId } = req.params;
    
    res.json({ 
      message: 'Book reserved successfully',
      bookId,
      reservationId: Math.random().toString(36).substr(2, 9),
      pickupDeadline: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
    });
  } catch (error) {
    console.error('Book reservation error:', error);
    res.status(500).json({ error: 'Failed to reserve book' });
  }
});

// Get campus map/locations
router.get('/map/locations', auth, async (req, res) => {
  try {
    const locations = [
      {
        id: '1',
        name: 'Library',
        category: 'Academic',
        building: 'UB1',
        floor: '2nd Floor',
        coordinates: { lat: 23.7801, lng: 90.4077 },
        openHours: '08:00 - 22:00',
        facilities: ['Study Rooms', 'Computer Lab', 'Printing Service']
      },
      {
        id: '2',
        name: 'Cafeteria',
        category: 'Dining',
        building: 'UB2',
        floor: 'Ground Floor',
        coordinates: { lat: 23.7805, lng: 90.4075 },
        openHours: '07:00 - 21:00',
        facilities: ['Dining Area', 'Food Court', 'Beverage Station']
      }
    ];
    
    res.json({ locations });
  } catch (error) {
    console.error('Map error:', error);
    res.status(500).json({ error: 'Failed to get campus locations' });
  }
});

// Submit maintenance request
router.post('/maintenance/request', auth, async (req, res) => {
  try {
    const { location, issue, priority, description } = req.body;
    
    res.json({ 
      message: 'Maintenance request submitted successfully',
      ticketId: Math.random().toString(36).substr(2, 9),
      location,
      issue,
      priority,
      status: 'Pending',
      submittedAt: new Date()
    });
  } catch (error) {
    console.error('Maintenance request error:', error);
    res.status(500).json({ error: 'Failed to submit maintenance request' });
  }
});

export default router;
