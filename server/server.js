import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { pool } from './config/database.js'; // Import pool for database connection
import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });


//Import Crew & Tour data & Gallery data & performance data
import theCrewData from '../data/theCrewData.js';
import toursData from '../data/tourdata.js';
import theGalleryData from '../data/galleryData.js';
import {performanceData} from '../data/performance.js';
import nodemailer from 'nodemailer';
//import { getSystemErrorMessage } from 'util';

const app = express();
const PORT = process.env.PORT || 3008;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//const theGalleryData = require('./data/galleryData.js');


//inoke the static middle ware | Pros: being able to re use code over again without re writing it 
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.get("/performance", (req, res) => {
  res.render("performance", { performanceData });
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

// Contact form routes
app.get('/contact', (req, res) => {
  res.render('contact', { 
    successMessage: null, 
    errorMessage: null     
  });
});

const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post('/contact', async (req, res) => {
  const { name, email, phone, eventDate, eventType, venue, message } = req.body;

  try {
    // 1. Save to database
    await pool.query(
      'INSERT INTO booking_inquiries (name, email, phone, event_date, event_type, venue, message) VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [name, email, phone || null, eventDate || null, eventType || null, venue || null, message]
    );

    // 2. Send email to your booking manager
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'augustinandre010@gmail.com', // Your email
      subject: `New Booking Inquiry from ${name}`,
      html: `
        <h2>New Booking Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Event Date:</strong> ${eventDate || 'Not specified'}</p>
        <p><strong>Event Type:</strong> ${eventType || 'Not specified'}</p>
        <p><strong>Venue:</strong> ${venue || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 3. Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your booking inquiry!',
      html: `
        <h2>Thanks for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>We received your booking inquiry and will get back to you within 24-48 hours.</p>
        <p>Best regards,<br>Mr. Leo Rhythm & Soul Band</p>
      `,
    });

    res.render('contact', { 
      successMessage: "Thanks for reaching out! We'll get back to you within 24-48 hours.",
      errorMessage: null 
    });
  } catch (error) {
    console.error('Error:', error);
    res.render('contact', { 
      successMessage: null,
      errorMessage: 'Failed to submit inquiry. Please try again.' 
    });
  }
});


// Setting up the port for our local server using the listen request
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



