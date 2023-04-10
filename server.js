const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log(req.params);
    res.send('<h1>99 Bottles of Beer On the Wall...</h1><h3><a href="/98">Take one Down, Pass it Around</a></h3>')
})

app.get('/0', (req, res) => {
    res.send('<h1>0 Bottles Of Beer On the Wall</h1><h3><a href="/">Back to Home</a></h3>')
})

app.get('/:number_of_bottles', (req, res) => {
    console.log(req.params);
    const bottles = req.params
    
    const nextAmt = bottles.number_of_bottles - 1

    console.log(nextAmt);
    res.send(`<h1>${bottles.number_of_bottles} Bottles of Beer On the Wall...</h1><h3><a href="/${nextAmt}">Take one Down, Pass it Around</a></h3>`)
})



app.listen(4000, () => {
    console.log('Listening...');
})