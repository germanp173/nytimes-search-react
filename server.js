// @ts-check
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;

// Initialize express app.
const app = express();

// Set up middleware to parse request body as JSON.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve React static content for production environment.
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Set up app routes.
app.use(routes);

// Connect to NY Times Articles MongoDB.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytimes-articles");

app.listen(PORT, function() {
    console.log(`API Server now listening on PORT ${PORT}`);
});