import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { pool } from './config/database.js'; // Import pool for database connection


//Import Crew & Tour data & Gallery data & performance data
import theCrewData from './data/theCrewData.js';
import toursData from './data/tourdata.js';
import theGalleryData from './data/galleryData.js';
import thePerformancesData from './data/performance.js';

const app = express();
const PORT = process.env.PORT || 3008;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//const theGalleryData = require('./data/galleryData.js');


//inoke the static middle ware | Pros: being able to re use code over again without re writing it 
app.use(express.static(path.join(__dirname, 'public'))); 

// set up view engine for ejs template
app.set("view engine", "ejs"); /*Tells express to use EJS for rendering views */

app.set("views", path.join(__dirname, 'views')); /*Look for the EJS TEMPLATES in views folder*/

// Setting the paths for each file
app.get('/', (req, resp) => { /* Define the GET route for the URL | when visited its triggerd */
    resp.sendFile(path.join(__dirname, 'public', 'Home.html')); /* Tells Express to send the file as resp to the browers aka client */
});

// Serve the static HTML file
app.get('/Tour', (req, res) => {
  res.render('tourdate', { tours: toursData });
});

app.get("/Video", (req,resp) => { /* Define the GET route for the URL | when visited its triggerd */
    resp.sendFile(path.join(__dirname, 'public', 'Video.html')); /* Tells Express to send the file as resp to the browers aka client */
});

app.get('/gallery', (req, res) => {
  res.render("gallery", { gallery: theGalleryData});
});


app.get('/performance', (req, res) => {
  res.render('performance', {
    performances: thePerformancesData
  });
});

app.get("/Mic", (req,resp) => { /* Define the GET route for the URL | when visited its triggerd */
    resp.sendFile(path.join(__dirname, 'public', 'Mic.html')); /* Tells Express to send the file as resp to the browers aka client */
});

app.get("/Bee", (req,resp) => { /* Define the GET route for the URL | when visited its triggerd */
    resp.sendFile(path.join(__dirname, 'public', 'Bee.html')); /* Tells Express to send the file as resp to the browers aka client */
});

app.get("/BookManager", (req,resp) => { /* Define the GET route for the URL | when visited its triggerd */
    resp.sendFile(path.join(__dirname, 'public', 'BookingManager.html')); /* Tells Express to send the file as resp to the browers aka client */
});

app.get("/Cody", (req,resp) => { /* Define the GET route for the URL | when visited its triggerd */
    resp.sendFile(path.join(__dirname, 'public', 'Cody.html')); /* Tells Express to send the file as resp to the browers aka client */
});

app.get("/Tay", (req,resp) => { /* Define the GET route for the URL | when visited its triggerd */
    resp.sendFile(path.join(__dirname, 'public', 'Tay.html')); /* Tells Express to send the file as resp to the browers aka client */
});

app.get("/juan", (req,resp) => { /* Define the GET route for the URL | when visited its triggerd */
    resp.sendFile(path.join(__dirname, 'public', 'juan.html')); /* Tells Express to send the file as resp to the browers aka client */
});

app.get("/miyah", (req,resp) => { /* Define the GET route for the URL | when visited its triggerd */
    resp.sendFile(path.join(__dirname, 'public', 'miyah.html')); /* Tells Express to send the file as resp to the browers aka client */
});
app.get('/tour-dates', async (req, res) => {
    console.log('GET /tour-dates triggered');
    try {
        const result = await pool.query('SELECT * FROM tour_dates');
        res.json(result.rows); // Sends the database rows as JSON to the frontend
    } catch (error) {
        console.error('Error fetching tour dates:', error);
        res.status(500).send('Server error');
    }
});

app.get('/theCrew', (req, res) => {
    console.log(theCrewData);
    res.render('theCrewData', { Bands: theCrewData });
  });



// Setting up the port for our local server using the listen request
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


