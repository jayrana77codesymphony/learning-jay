import 'dotenv/config';
import express from 'express';

const app = express();
app.use(express.json())

let items = [
    { id: 1, name: 'jay' },
    { id: 2, name: 'xyz' }
]

app.get('/display', (req, res) => {
    res.send(items);
});

app.get('/findone/:id', (req, res) => {
    const item = items.find(item => item.id === parseInt(req.params.id))
    res.send(item);
})

app.post('/add', (req, res) => {
    const name = req.query.name
    const newItem = { id: items.length + 1, name }
    items.push(newItem);
    res.send(items);
})

app.put('/update/:id', (req, res) => {
    const { name } = req.body;
    const item = items.find(i => i.id === +req.params.id)
    console.log(item);
    item.name = name
    res.send(item);
})

app.delete('/delete/:id', (req, res) => {
    const index = items.findIndex(item => item.id === parseInt(req.params.id))
    items.splice(index, 1)
    res.send(index);
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});