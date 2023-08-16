const express = require('express');
const app = express();
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

// teamplate engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.send('Welcome to my blog!'));

app.listen(port, () => console.log(`Listen example at http://localhost:${port}`));