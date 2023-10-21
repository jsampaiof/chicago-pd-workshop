import express from "express";
import { Subscribers } from "./database.js";
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
    res.status(StatusCodes.OK).render('home');
});

app.post('/newsub', async(req, res) => {
    const name = req.body.fullName;
    const email = req.body.userEmail;
    const phone = req.body.userPhone;

    const setSub = new Subscribers(name, email, phone);
    const result = await setSub.setSubscribers()

    res.send(`OBRIGADO, ${name} <3`);
})