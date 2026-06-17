import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { pool } from './config/database.js'; // Import pool for database connection



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
app.get('/', (req, res) => {
    res.render('home', { tours: toursData });
});

// Serve the static HTML file
app.get('/Tour', (req, res) => {
  res.render('tourdate', { tours: toursData });
});

app.get("/Video", (req,resp) => { /* Define the GET route for the URL | when visited its triggerd */
    resp.sendFile(path.join(__dirname, 'public', 'Video.html')); /* Tells Express to send the file as resp to the browers aka client */
});

app.get('/Gallery', (req, res) => {
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

app.get("/BookingManager", (req, res) => {
  const manager = theCrewData.find(b => b.page === '/BookingManager');
  res.render('bookingManager', { manager });
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
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

app.post('/contact', async (req, res) => {
  const { name, email, phone, eventDate, eventType, venue, message } = req.body;

  try {
    // 1. Save to database (non-blocking — emails still send if DB fails)
    try {
      await pool.query(
        'INSERT INTO booking_inquiries (name, email, phone, event_date, event_type, venue, message) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [name, email, phone || null, eventDate || null, eventType || null, venue || null, message]
      );
    } catch (dbErr) {
      console.error('DB save failed:', dbErr.message);
    }

    // 2. Send email to your booking manager
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'augustinandre010@gmail.com', // Your email
      subject: `New Booking Inquiry from ${name}`,
      html: `
        <h2>New Booking Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone) || 'Not provided'}</p>
        <p><strong>Event Date:</strong> ${escapeHtml(eventDate) || 'Not specified'}</p>
        <p><strong>Event Type:</strong> ${escapeHtml(eventType) || 'Not specified'}</p>
        <p><strong>Venue:</strong> ${escapeHtml(venue) || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message)}</p>
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
        <p>Thanks for your message! We'll get back to you within 24-48 hours.</p>
        <p>Best Regards,<br>MrLeoRhythmAndSoul</p>
      `,
    });

    res.render('contact', { 
      successMessage: "Thanks for reaching out! We'll get back to you within 24-48 hours.",
      errorMessage: null 
    });
  } catch (error) {
    console.error('Full Error:', error);
    const errorMsg = error.message || error.code || 'Failed to send email. Please try again or contact us directly.';
    res.render('contact', { 
      successMessage: null,
      errorMessage: errorMsg
    });
  }
});


// Setting up the port for our local server using the listen request
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



