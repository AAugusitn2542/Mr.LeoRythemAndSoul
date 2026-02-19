import { pool } from './database.js';

const dropTables = async () => {
    try {
        await pool.query(`
            DROP TABLE IF EXISTS booking_inquiries;
            DROP TABLE IF EXISTS tour_dates;
        `);
        console.log('Dropped tables successfully');
    } catch (error) {
        console.log('Error dropping tables:', error);
    }
};

const createTables = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS tour_dates (
                id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                date TEXT,
                status TEXT NOT NULL,
                location TEXT NOT NULL
            );
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS booking_inquiries (
                id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                phone TEXT,
                event_date TEXT,
                event_type TEXT,
                venue TEXT,
                message TEXT NOT NULL,
                submitted_at TIMESTAMP DEFAULT NOW()
            );
        `);

        console.log('Tables created successfully');
    } catch (error) {
        console.log('Error creating tables:', error);
    }
};

const insertData = async () => {
    try {
        await pool.query(`
            INSERT INTO tour_dates (date, status, location) VALUES 
            ('DEC 3, 2024', 'To Be Determined', 'San Jose, CA'),
            ('DEC 6, 2024', 'To Be Determined', 'Santa Cruz, CA'),
            ('DEC 10, 2024', 'To Be Determined', 'Los Gatos, CA'),
            ('DEC 15, 2024', 'To Be Determined', 'Holister, CA'),
            ('DEC 26, 2024', 'To Be Determined', 'Palo Alto, CA')
        `);
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