# 🎵 Momsband — Mr. Leo Rhythm & Soul Band

> A passion project built for my mom's band.

My mom has beenan booking manager with Mr. Leo Rhythm & Soul Band for years — playing events and local venues. But when people wanted to book them, there was no easy way to reach out, no place to see the band in action, and no professional online presence to point clients to.

So I built one.

I present a full-stack booking website designed to give the band a professional home on the web — complete with member profiles, a performance gallery, and a real booking inquiry system that notifies the band and confirms to the client.

---

## ✨ Features

- **Hero Section** — Bold landing page that sets the tone for the band's brand
- **Band Member Profiles** — Showcasing each member with photos and descriptions
- **Performance Gallery** — Video modal player with hover effects for showcasing live performances
- **Booking Inquiry Form** — Clients can submit event details directly through the site
- **Email Notifications** — Band receives instant notification of new inquiries; clients receive an automatic confirmation
- **Database Storage** — Every booking inquiry is stored in PostgreSQL for reliable record keeping
- **Responsive Design** — Works across desktop and mobile devices

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express |
| Templating | EJS |
| Database | PostgreSQL (hosted on Railway) |
| Email | Nodemailer + Gmail App Passwords |
| Deployment | Render |
| Dev Tools | Nodemon, Concurrently, BrowserSync |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- A PostgreSQL database (local or Railway)
- A Gmail account with an App Password enabled

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/momsband.git

# Navigate into the server directory
cd momsband/server

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the **root** of the project (alongside the `server/` folder):

```env
DATABASE_URL=your_postgresql_connection_string
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASSWORD=your_16_character_app_password
```

> **Note:** For Gmail, you need to generate an **App Password** — not your regular account password.  
> Go to: Google Account → Security → 2-Step Verification → App Passwords

### Run Locally

```bash
npm run dev
```

This starts the Express server with Nodemon (auto-restart) and BrowserSync (auto-refresh) running concurrently.

The app will be available at `http://localhost:3008`

---

## 📁 Project Structure

```
Momsband/
├── .env                  # Environment variables (not committed)
├── package.json
└── server/
    ├── config/
    │   ├── database.js   # PostgreSQL pool setup
    │   └── seed-db.js    # Database seeding
    ├── migrations/       # Database migrations
    ├── public/           # Static assets (CSS, images, videos)
    ├── routes/
    │   └── api.js        # API routes
    ├── views/            # EJS templates
    └── server.js         # Main Express application
```

---

## 📬 How Booking Works

1. A potential client fills out the booking form with their event details
2. The inquiry is saved to the PostgreSQL database
3. The band receives an email notification with all the client's details
4. The client receives an automatic confirmation email
5. The band follows up within 24-48 hours

---

## 🌐 Deployment

- **Frontend + Backend:** Deployed on [Render](https://render.com)
- **Database:** PostgreSQL hosted on [Railway](https://railway.app)

Environment variables are configured directly in the Render service settings.

---

## 🔮 Future Plans

- [ ] Admin dashboard for the band to view and manage all booking inquiries
- [ ] Calendar integration to show available dates
- [ ] Online payment or deposit system for confirmed bookings
- [ ] SEO optimization to help the band get discovered locally
- [ ] Migrate frontend to React for a more dynamic experience

---

## 💡 What I Learned

This project pushed me through real-world full-stack challenges:

- Configuring **ES module imports** with proper dotenv loading order
- Managing **environment variables** across local development and cloud deployment
- Integrating **Gmail App Passwords** for transactional email with Nodemailer
- Debugging **PostgreSQL connection issues** between local machines and Railway
- Setting up **multi-process development** with Nodemon and BrowserSync running concurrently
- Deploying a Node.js app on Render with a separate cloud database

---

## 👩‍🎤 About the Band

Mr. Leo Rhythm & Soul Band brings high-energy rhythm and soul performances to events of all kinds — weddings, corporate events, private parties, and local venues. With years of live performance experience, the band delivers an unforgettable experience every time.

---

*Built with love for my mom. 🎶*
