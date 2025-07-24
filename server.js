const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// MongoDB Connection (optional - you can add your MongoDB URI)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

// MongoDB Connection (optional - gracefully handle connection failures)
let isMongoConnected = false;

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    isMongoConnected = true;
  })
  .catch(err => {
    console.log('MongoDB connection failed - running without database:', err.message);
    console.log('Contact form will not persist messages to database');
    isMongoConnected = false;
  });

// Contact Message Schema
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', ContactSchema);

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    if (!isMongoConnected) {
      console.log('Contact form submission received (not saved - no DB connection):', req.body);
      return res.json({ 
        success: true, 
        message: 'Message received! (Note: Database not available for persistence)' 
      });
    }
    
    const { name, email, subject, message } = req.body;
    
    const newContact = new Contact({
      name,
      email,
      subject,
      message
    });
    
    await newContact.save();
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ success: false, message: 'Error sending message' });
  }
});

// Get all contact messages (for admin purposes)
app.get('/api/contacts', async (req, res) => {
  try {
    if (!isMongoConnected) {
      return res.json([]);
    }
    
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ success: false, message: 'Error fetching contacts' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit: http://localhost:${PORT}`);
});