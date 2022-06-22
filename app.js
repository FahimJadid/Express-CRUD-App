import express from "express";
import connectDB from "./db/connectdb.js";
import { join } from "path";
import web from './routes/web.js';

const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.PORT || 'mongodb://localhost:27017';

// Database Connection
connectDB(DATABASE_URL);

// middleware
app.use(express.urlencoded({ extended: false }))


// Static Files
app.use('/student', express.static(join(process.cwd(), 'public')));
app.use('/student/edit', express.static(join(process.cwd(), 'public')));

// Set Engine
app.set('view engine', 'ejs');

// Load Routes
app.use("/student", web);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
