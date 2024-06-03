const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const PORT=3000;

app.use(bodyParser.json());

let news=[];

app.post('/api/news', (req, res) => {
    const newNewsItem=req.body;
    newNewsItem.id=news.length+1; // simple id assignment for example
    news.push(newNewsItem);
    res.status(201).json(newNewsItem);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
