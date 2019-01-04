const express = require('express');
const app = express();
const colors = [
    'red',
    'oragne',
    'yellow',
    'green',
    'blue',
    'purple'
]

//define
app.set('view engine','pug');


app.get('/',(req, res) =>{
    //res.send('<h1>I LOVE HSBC</h1>');
    res.render('index');
});


app.get('/hello',(req,res) => {
    res.render('hello');
});


app.post('/hello',(req,res) => {
    res.render('hello');
});



app.get('/card',(req, res) =>{
   // res.locals.prompt = "What'sasdasdasdsadasd";  
   // res.render('card');  
   res.render('card',{ prompt:"Who is buried in xxx?",colors});
  // res.render('card',{ prompt:"Who is buried in xxx?", hint:"Think about asdasdasdasd"});
  
    //    res.send('<h1>Hello Javascript HAHA</h1>');
});

// /sandbox



app.listen(3000, () =>{
    console.log("The application is running on localhost:3000!");
});