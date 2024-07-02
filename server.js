const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const quote = require('./quotes.json');
console.log(quote.length);
let quotelength = quote.length;

app.get('/', (req, res) => {
    let randomIndex = Math.floor(Math.random() * quotelength);
    res.send(quote[randomIndex]);
});

const PORT = 4041; 
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
