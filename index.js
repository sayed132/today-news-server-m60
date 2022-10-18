const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require('./Data/Category.json')

app.get('/', (req, res)=>{
    res.send('hello world')
})

app.get('/news-categories', (req, res) => {
    res.send(categories)
})
app.listen(port, () => {
    console.log(`Today News server running on port ${port}`)
  })