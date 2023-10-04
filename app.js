import express from "express";
import { getSubscribers, setSubscribers } from "./database.js";
import { StatusCodes } from "http-status-codes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.status(StatusCodes.OK).render('index');
})