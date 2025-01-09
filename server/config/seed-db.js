/* Initialize the data in the DB */
import { pool } from './database.js';

const dropTables = async () => {
    try {
        const dropTablesQuery = `
            DROP TABLE IF EXISTS tour_dates;
        `;
        await pool.query(dropTablesQuery);
        console.log('Dropped table successfully');
    } catch (error) {
        console.log('Error dropping table:', error);
    }
};

const createTables = async () => {
    try {
        console.log('Creating tour_dates table...');
        const createQuery = `
            CREATE TABLE IF NOT EXISTS tour_dates (
                id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                date TEXT,
                status TEXT NOT NULL,
                location TEXT NOT NULL
            );
        `;
        await pool.query(createQuery);
        console.log('Created tour_dates table');
    } catch (error) {
        console.log('Error creating table:', error);
    }
};

const insertData = async () => {
    try {
        console.log('Adding initial data...');
        const insertQuery = `
            INSERT INTO tour_dates (date, status, location) VALUES 
            ('DEC 1, 2024', 'To Be Determined', 'San Francisco, CA'),
            ('DEC 3, 2024', 'To Be Determined', 'San Jose, CA'),
            ('DEC 6, 2024', 'To Be Determined', 'Santa Cruz, CA'),
            ('DEC 10, 2024', 'To Be Determined', 'Los Gatos, CA'),
            ('DEC 15, 2024', 'To Be Determined', 'Holister, CA'),
            ('DEC 26, 2024', 'To Be Determined', 'Palo Alto, CA'),
            ('TBA', 'To Be Determined', 'Fresno, CA'),
            ('TBA', 'To Be Determined', 'Stockton, CA');
        `;
        await pool.query(insertQuery);
        console.log('Added initial tour dates');
    } catch (error) {
        console.log('Error inserting data:', error);
    }
};

const setup = async () => {
    await dropTables();
    await createTables();
    await insertData();
};

setup();

// This script initializes a PostgreSQL database with tour dates for the webpage.
