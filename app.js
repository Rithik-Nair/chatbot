// Import required modules
const express = require('express');
const path = require('path');
const logger = require('morgan');  // For logging HTTP requests
const cookieParser = require('cookie-parser');  // For parsing cookies
const bodyParser = require('body-parser');  // For parsing form data

const app = express();

// Set the view engine (Pug in this example)
app.set('view engine', 'jade');
app.set('views', path.join(__dirname,'app_server', 'views'));  // The views folder


// Other routes or middleware
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

var indexRouter = require('./app_server/routes/index');
app.use('/', indexRouter);

var helpRouter = require('./app_server/routes/help');
app.use('/', helpRouter);

var indexRouter = require('./app_server/routes/index');
app.use('/', indexRouter);


// Uncomment if you want to serve a favicon
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Use middleware for logging, parsing cookies, and form data
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static files from the 'public' directory (e.g., images, CSS, JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/', (req, res) => {
  res.render('welcome', { title: 'Chatbot Application' });
});
  

app.get('/chat', (req, res) => {
  res.render('chat', { title: 'Chat Page' });
});

app.get('/help', (req, res) => {
  res.render('help', { title: 'Help Page' });
});

app.get('/help/faq', (req, res) => {
  res.render('faq', { title: 'FAQ' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'about us' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});


// Handle 404 errors (if no route is matched)
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
      title: 'Error Page'  // Ensure 'title' is passed to the view
      });
});
  

// Error handling middleware (development)
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Error handling middleware (production)
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.set('view cache', false);


// Export the app for use in `bin/www`
module.exports = app;
