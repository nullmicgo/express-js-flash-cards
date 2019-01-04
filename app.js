const express = require('express');
const app = express();


//define
app.set('view engine','pug');


app.get('/',(req, res) =>{
    //res.send('<h1>I LOVE HSBC</h1>');
    res.render('index');
});

app.get('/card',(req, res) =>{
   // res.locals.prompt = "What'sasdasdasdsadasd";  
   // res.render('card');  
  res.render('card',{ prompt:"Who is buried in xxx?", hint:"Think about asdasdasdasd"})
    //    res.send('<h1>Hello Javascript HAHA</h1>');
});

app.listen(3000, () =>{
    console.log("The application is running on localhost:3000!");
});