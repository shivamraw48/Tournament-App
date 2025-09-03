const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS so frontend can fetch from backend
app.use(cors());

// Define the root route
app.get('/', (req, res) => {
  res.send('Welcome to the Tournament App!');
});
app.get('/api/tournaments', (req, res) => {
    const tournaments = [
      {
        id: 1,
        name: "Summer Slam",
        date: "2025-05-10",
        prize: "₹5,000",
        status: "Open"
      },
      {
        id: 2,
        name: "Night Knockout",
        date: "2025-05-15",
        prize: "₹3,000",
        status: "Closed"
      },
      {
        id: 3,
        name: "Gold Cup",
        date: "2025-06-01",
        prize: "₹10,000",
        status: "Upcoming"
      }
    ];
  
    res.json(tournaments);
  });
  
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
