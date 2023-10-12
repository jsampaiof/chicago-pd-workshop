import express from "express";
import { getSubscribers, setSubscribers } from "./database.js";
import { StatusCodes } from "http-status-codes";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.status(StatusCodes.OK).render('index');
});

app.post('/newsub', async(req, res) => {
    const name = req.body.fullName;
    const email = req.body.userEmail;
    const phone = req.body.userPhone;
    // console.log(typeof name, typeof email, typeof phone);

    const setSub = setSubscribers(name, email, phone);

    res.send('OBRIGADO <3');
})