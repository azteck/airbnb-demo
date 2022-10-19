import express from 'express';
import cors from 'cors';
import csrf from 'csurf';
import cookieParser from 'cookie-parser';
import { readdirSync } from 'fs';
import mongoose from 'mongoose';

const csrfProtection = csrf({ cookie: true });

const morgan = require('morgan');
require('dotenv').config();

// create express app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log('DB connected'))
  .catch((err) => console.log('DB Error => ', err));

// apply middlewares
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(cookieParser());
app.use(morgan('dev'));

// routes are loaded at start-up from the "routes" folder
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));
// csrf
app.use(csrfProtection);

app.get('/api/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
