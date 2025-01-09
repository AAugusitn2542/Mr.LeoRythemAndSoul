import express from 'express';
import { getTourDates, getTourDate, createTourDate, deleteTourDate } from '../data/tourDate.js'; 
const router = express.Router();

// Add routes here

// Define route to get all TourDates
router.get('/tour-dates', (req, res) => { // setting up a GET request at /restaurants
    const allTourDates = getTourDates(); //store the list in vari. allRestaurants
    res.json(allTourDates);  // recvied the list as a JSON response common practice with api
});

// Define route to get a specific Tour Date by ID
router.get('/tour-dates/:id', (req, res) => { // setting up a GET request to obtain a restaurants id
    const id = parseInt(req.params.id, 10); // retrives the id parameter from the requestURL ie: /restuarants/123 | 10 is base sys. 
    const tourDate = getTourDate(id); // storing the list of rests. and calling id to retrives the id's per request
    if (tourDate) {
        res.json(tourDate);  // Return the specific restaurant data
    } else {
        res.status(404).json({ error: 'Tour Date not found' });
    }
}); // the if statement checks if there a resturant with a asked id exist if true the server returns the data if not return not found

// Define route to create a new Tour Date
router.post('/tour-dates', (req, res) => {
    
    const newTourDate = req.body; // no idea what does this...
    
    const createTourDate = createTourDate(newTourDate);
    
    res.status(201).json(createdTourDate);  // Return the newly created restaurant
});

// Define route to delete a restaurant by ID
router.delete('/restaurants/:id', (req, res) => {
    
    const id = parseInt(req.params.id, 10); // retrives the id parameter from the requestURL ie: /restuarants/123 | 10 is base sys.
    
    try {
        const deleteTourDate = deleteTourDate(id);
        res.json(deleteTourDate);  // Return the deleted restaurant data
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});


export {router as backendRouter};