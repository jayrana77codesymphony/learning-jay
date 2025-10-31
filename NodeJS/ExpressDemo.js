import 'dotenv/config';
import data from "./data.json" with { type: 'json' };
import express from "express";
const app = express();
app.get('/users/:id', (req, res) => {
    try {
        const userID = Number(req.params.id);
        const user = data.find(user => user.id === userID);
        if (user) {
            res.json({ status: 200, message: 'User found...', user: user });
        } else {
            res.json({ status: 404, error: 'User not found...' });
        }
    } catch (err) {
        res.json({ status: 400, message: 'Error Fetching User Data...' });
    }
});

app.get('/users', (req, res) => {
    try {
        const pageNumber = Number(req.query.pageNumber);
        const recordLimit = 10;
        if (pageNumber) {
            const startIndex = (pageNumber - 1) * recordLimit;
            const pagedData = data.slice(startIndex, startIndex + recordLimit);
            if (pagedData.length > 0) {
                res.json({ status: 200, message: 'Paged Users fetched...', users: pagedData });
            } else {
                res.json({ status: 404, error: 'Paged Users not found...' });
            }
        } else {
            res.json({ status: 200, message: 'All Users fetched...', users: data });
        }
    } catch (err) {
        res.json({ status: 400, message: 'Error Fetching Paged Data...' });
    }
});

app.listen(process.env.PORT, () => console.log('Server Running on PORT', process.env.PORT));
