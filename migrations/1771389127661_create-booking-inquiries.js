export const shorthands = undefined;

export const up = (pgm) => {
  pgm.createTable('booking_inquiries', {
    id: 'id',
    name: { type: 'text', notNull: true },
    email: { type: 'text', notNull: true },
    phone: { type: 'text' },
    event_date: { type: 'date' },
    event_type: { type: 'text' },
    venue: { type: 'text' },
    message: { type: 'text', notNull: true },
    created_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
  });
};

export const down = (pgm) => {
  pgm.dropTable('booking_inquiries');
};
