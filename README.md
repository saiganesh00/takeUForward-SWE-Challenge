# Dynamic One-Page Website with React and Node.js

This project is a dynamic one-page website built with React and Node.js. It features a banner that can be controlled via an internal dashboard, with data stored in a MySQL database. The website includes a countdown timer on the banner, which shows the remaining time before the banner disappears.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Demo Video](#demo-video)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Banner with Countdown Timer**: Display a banner with customizable content and a countdown timer.
- **Internal Dashboard**: Control the banner’s visibility, description, timer, and link through an internal dashboard.
- **Database Integration**: Store and retrieve banner data from a MySQL database.
- **Automatic Banner Refresh**: Automatically refresh the banner on the main page after an update from the dashboard.
- **Responsive Design**: The website is styled using Tailwind CSS for a clean and responsive design.

## Tech Stack
- **Front-End**: React, Tailwind CSS
- **Back-End**: Node.js, Express.js, MySQL
- **Database**: MySQL
- **Dependencies**:
  - `axios`: For making HTTP requests from the front-end.
  - `mysql2`: For interacting with the MySQL database.
  - `cors`: For handling cross-origin requests.

## Installation

### Prerequisites
- Node.js and npm installed on your machine.
- MySQL installed and running.

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Set Up the Back-End

1. Navigate to the `backend` directory and install the necessary dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Set up the MySQL database:

   - Log into your MySQL server and create a database and table:
   ```sql
   CREATE DATABASE banner_db;
   USE banner_db;

   CREATE TABLE banner (
       id INT PRIMARY KEY AUTO_INCREMENT,
       description VARCHAR(255),
       timer INT,
       link VARCHAR(255),
       isVisible BOOLEAN
   );

   INSERT INTO banner (description, timer, link, isVisible) VALUES ('This is your banner message!', 60, 'https://example.com', TRUE);
   ```

3. Start the back-end server:
   ```bash
   node server.js
   ```

   The server will run on `http://localhost:5000`.

### 3. Set Up the Front-End

1. Navigate to the `frontend` directory and install the front-end dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

2. Start the React development server:
   ```bash
   npm start
   ```

   The front-end will run on `http://localhost:3000`.

## Project Structure
```
├── backend
│   ├── node_modules
│   ├── server.js            # Node.js server with Express.js
│   └── package.json         # Back-end dependencies
├── frontend
│   ├── node_modules
│   ├── public
│   │   └── index.html       # HTML file for React
│   ├── src
│   │   ├── components
│   │   │   ├── Banner.js    # Banner component with countdown timer
│   │   │   └── Dashboard.js # Dashboard component for updating banner
│   │   ├── App.js           # Main React component
│   │   └── index.js         # React entry point
│   └── package.json         # Front-end dependencies
└── README.md                # This file
```

## Usage

### 1. Access the Application
- Open your browser and go to `http://localhost:3000` to view the main page with the banner.
- Access the dashboard by scrolling down to update the banner's content.

### 2. Update the Banner
- In the dashboard, fill in the form to update the banner’s description, timer, link, and visibility.
- Click "Update Banner" to save the changes.
- The banner on the main page will automatically refresh to reflect the updates.

## Demo Video
Check out the demo video of this project to see it in action: [Demo Video](https://drive.google.com/file/d/1a_fEGGgkfE0z9vBp0fEFqFwkgKmsj66c/view?usp=drive_link)

[Youtube Link](https://youtu.be/8ti3h5yWXgo)

## Deployment

### Front-End Deployment
You can deploy the React app using services like Vercel, Netlify, or GitHub Pages.

### Back-End Deployment
Deploy the Node.js server and MySQL database using a cloud service like Heroku, AWS, or DigitalOcean. Make sure to update the API endpoints in the React app to point to the deployed back-end server.
