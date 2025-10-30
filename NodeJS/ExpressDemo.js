import 'dotenv/config';
import data from "./data.json" with { type: 'json' }
import express from "express"
const app = express()
app.get('/users/:id', (req, res) => {
    const userID = parseInt(req.params.id);
    const user = data.find(user => user.id === userID);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(400).send('Error Finding User...')
    }
})

app.get('/users', (req, res) => {
    const pageNumber = parseInt(req.query.pageNumber);
    try {
        if (pageNumber) {
            const recordLimit = 10;
            const startingIndex = (pageNumber - 1) * recordLimit;
            const pagedData = data.slice(startingIndex, startingIndex + recordLimit);
            res.status(200).json(pagedData);
        } else {
            res.status(200).send(data);
        }
    } catch (err) {
        res.status(400).send('Error Fetching Data')
        console.log(err.message);
    }
})

app.listen(process.env.PORT, () => console.log('Server Running on PORT', process.env.PORT))