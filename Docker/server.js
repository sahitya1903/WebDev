import express from 'express';
import { MongoClient } from 'mongodb';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;
const MONGODB_URI = "mongodb://admin:password@localhost:27017";

// Middleware
app.use(express.json());

// Resolve directory paths for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

let db = null;
const client = new MongoClient(MONGODB_URI);

async function connectDB() {
  try {
    await client.connect();
    db = client.db();
    console.log('Successfully connected to MongoDB.');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err.message);
    console.error('Make sure your MongoDB instance is running.');
  }
}
connectDB();

// API Routes
app.get('/api/status', (req, res) => {
  const isConnected = !!db;
  res.json({
    status: isConnected ? 'connected' : 'disconnected',
    connected: isConnected
  });
});

app.post('/api/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    if (!db) {
      return res.status(500).json({ success: false, message: 'Database connection is not ready.' });
    }

    const usersCollection = db.collection('users');

    // Check if user already exists
    const existingUser = await usersCollection.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Username is already taken.' });
    }

    // Save the new user directly in plaintext
    await usersCollection.insertOne({ username, password });

    res.status(201).json({ success: true, message: 'Registration successful!' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ success: false, message: 'Server error during registration.' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    if (!db) {
      return res.status(500).json({ success: false, message: 'Database connection is not ready.' });
    }

    const usersCollection = db.collection('users');

    // Find user with exact username and password matches
    const user = await usersCollection.findOne({ username, password });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid username or password.' });
    }

    res.status(200).json({ success: true, message: `Welcome back, ${user.username}!` });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'Server error during login.' });
  }
});

app.get('/api/getuser', async (req, res) => {
  try {
    if (!db) {
      return res.status(500).json({ success: false, message: 'Database connection is not ready.' });
    }
    const usersCollection = db.collection('users');
    const users = await usersCollection.find({}).toArray();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ success: false, message: 'Server error fetching users.' });
  }
});

// Fallback to serve landing page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
});
