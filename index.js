const express = require('express');
const port = 5000;
const app = express();
const parser= require('body-parser');

app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))

app.get('/multiply/:id1/:id2', (req,res)=>{
    let id1 = req.params['id1'];
    let id2 = req.params['id2'];
    res.json({response: parseInt(id1)*parseInt(id2)});
});

app.get('/hello/:id', (req,res)=>{
    let name = req.params['id'];
    res.attachment("Hello.txt");
    res.type('txt');
    res.send('Hello ' + name + '!');
});

app.post('/multiply', (req,res)=>{
    let numbers = req.body.numbers;
    let prod=1;
    for(let num of numbers)
        prod*=num;
    res.json({result:prod});
});

app.listen(port, function() {
    console.log(`Server deschis pe portul ${port}`)
}); 
