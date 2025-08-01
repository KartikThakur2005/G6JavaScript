const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set the view engine to hbs
app.set('view engine', 'hbs');

// Set views directory (optional, default is './views')
app.set('views', path.join(__dirname, 'views'));

// Static files (like CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        message: 'Welcome to HBS with Express!'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us',
        description: 'We are learning Handlebars with Express.'
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
