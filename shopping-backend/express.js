const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;

app.use(cors());
app.use(express.json());

// In-memory user store
let users = [];

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to My API');
});

// Get all users (optional for testing)
app.get('/Signup', (req, res) => {
    res.json(users);
});

// Handle user signup
app.post('/Signup', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please provide name, email, and password' });
    }

    const newUser = { id: users.length + 1, name, email, password };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Handle user login
app.post('/Login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.json({ message: 'Login successful', user });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



// const express = require('express');
// const app = express();
// const cors = require('cors');
// const PORT = 5000;

// // Middleware to parse JSON
// app.use(cors());
// app.use(express.json());

// // Sample data
// let users = [
   
// ];

// // Routes
// app.get('/', (req, res) => {
//     res.send('Welcome to My API');
// });

//     // Get all users
//     app.get('/Signup', (req, res) => {
//         res.json(users);

//     });

// // // Get a single user by ID
// // app.get('/users/:id', (req, res) => {
// //     const user = users.find(u => u.id === parseInt(req.params.id));
// //     user ? res.json(user) : res.status(404).send('User not found');
// // });

// // Create a new user
// app.post('/Signup', (req, res) => {
//     const newUser = {name: req.body.username, email: req.body.email, password: req.body.password};
//     users.push(data);
//     res.status(201).json(newUser);
// });

// // // Update a user
// // app.put('/users/:id', (req, res) => {
// //     const user = users.find(u => u.id === parseInt(req.params.id));
// //     if (!user) return res.status(404).send('User not found');
// //     user.name = req.body.name;
// //     res.json(user);
// // });

// // // Delete a user
// // app.delete('/users/:id', (req, res) => {
// //     users = users.filter(u => u.id !== parseInt(req.params.id));
// //     res.send('User deleted');
// // });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });