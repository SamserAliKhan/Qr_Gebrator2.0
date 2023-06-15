const express = require("express");
const bodyParser = require('body-parser');

const app = express();



app.use(bodyParser.urlencoded({extended: true}))

console.log('pass 1');

app.get('/',function(req,res){
    console.log('pass 2');
    res.sendFile(__dirname +"/views"+"/index.html")
});

console.log('pass 3');

var rl;

app.post('/',function(req,res){
     console.log('pass 4');
     rl=req.body.Url;
     res.send('The entred URL is: '+rl);
     const qr = require('./modules/qr')
     console.log(rl);
     
});
console.log(rl);
// app.post('/qr', (req, res) => {
//     qr.create({ful: req.body.fullUrl})
//     res.redirect('/')
// })

app.listen(5000,function(){})