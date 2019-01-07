const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

app.use((req,res,next) =>{
    console.log('Hello');
    const err = new Error('Oh noes!');
    err.status = 500;
    next(err);
});

app.use((req,res,next) =>{
    console.log('world');
    next(); 
});



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
    const name = req.cookies.username;
    res.render('index',{name});

    
    //res.send('<h1>I LOVE HSBC</h1>');
    //res.render('index');
});



app.get('/hello',(req,res) => {
    //res.json(req.body);
     res.render('hello',{name: req.cookies.username});
 
 });

 

 app.post('/goodbye', (req, res) =>{
    res.clearCookie('username');
    res.redirect('/hello');
 });


app.post('/hello',(req,res) => {
    res.cookie('username',req.body.username);
    res.render('hello',{name:req.body.username});
});


app.post('/goodbye',(req,res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});




app.get('/card',(req, res) =>{
   // res.locals.prompt = "What'sasdasdasdsadasd";  
   // res.render('card');  
   res.render('card',{ prompt:"Who is buried in xxx?",colors});
  // res.render('card',{ prompt:"Who is buried in xxx?", hint:"Think about asdasdasdasd"});
  
    //    res.send('<h1>Hello Javascript HAHA</h1>');
});

// /sandbox



app.use((err, req, res, next) =>{
    res.locals.error = err;
    //res.status(err.status);
    //res.status(500);
    res.status(err.status);
    res.render('error');
});


app.listen(3000, () =>{
    console.log("The application is running on localhost:3000!");
});