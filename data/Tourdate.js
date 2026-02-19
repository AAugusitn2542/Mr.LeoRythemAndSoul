/*

import { pool } from '../database.js';

// Get a list of tour dates
const getTourDates = async () => {
    const results = await pool.query('SELECT * FROM tour_dates'); // Obtain the data from tour_dates table
    return results.rows; // Return an array of all tour date objects
};

// Get a single tour date by ID
const getTourDate = async (id) => {
    const result = await pool.query('SELECT * FROM tour_dates WHERE id = $1', [id]);
    console.log("Tour Date ID:", id);

    return result.rows[0]; // Return the specific tour date object
};

// Create a new tour date entry
const createTourDate = async (newTourDate) => {
    const { date, status, location } = newTourDate; // Extract the fields from the input object
    console.log(newTourDate);
    const results = await pool.query(
        'INSERT INTO tour_dates (date, status, location) VALUES ($1, $2, $3) RETURNING *',
        [date, status, location]
    );
    return results.rows[0]; // Return the newly created tour date object
};


const fetchTourDates = async () => {
    try {
        const response = await fetch('/tour-dates'); // Call the updated GET route
        const tourDates = await response.json(); // Parse the JSON response

        renderTourDates(tourDates); // Render the tour dates
    } catch (error) {
        console.error('Error fetching tour dates:', error);
    }
};

const renderTourDates = (tourDates) => {
    const tourContainer = document.getElementById('tour-dates'); // Target a container in your HTML
    tourContainer.innerHTML = ''; // Clear existing content

    tourDates.forEach((tour) => {
        const tourHTML = `
            <div class="tour-item">
                <p>Date: ${tour.date || 'TBA'}</p>
                <p>Status: ${tour.status}</p>
                <p>Location: ${tour.location}</p>
            </div>
        `;
        tourContainer.innerHTML += tourHTML;
    });
};

fetchTourDates(); // Call the function when the page loads




// Export functions for use in your application
export { getTourDates, getTourDate, createTourDate };

*/