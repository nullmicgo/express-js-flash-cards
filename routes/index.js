const express = require('express');
const router = express.Router();

router.get('/',(req, res) =>{
    const name = req.cookies.username;
    res.render('index',{name});
});

router.get('/hello',(req,res) => {
    //res.json(req.body);
     res.render('hello',{name: req.cookies.username});
});

router.post('/goodbye', (req, res) =>{
    res.clearCookie('username');
    res.redirect('/hello');
});

router.post('/hello',(req,res) => {
    res.cookie('username',req.body.username);
    res.render('hello',{name:req.body.username});
});

router.post('/goodbye',(req,res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});


module.exports = router;