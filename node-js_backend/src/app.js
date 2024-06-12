import {router} from './router.js';
import express from 'express';

const app = express();

app.use(express.json());
app.use(router);




app.get('/bluebirds', (req, res) => {   
    return res.json("hello");
});

app.post('/bluebirds', (req, res) => {
    res.json("hello");
});


app.patch('/bluebirds', (req, res) => {
    res.json("hello");
});

app.delete('/bluebirds', (req, res) => {
    res.json("hello");
});

//-------------------------------------------------------------
//-------------------------------------------------------------


app.get('/impressoras', (req, res) => {
    res.json('pong');
});


app.post('/impressoras', (req, res) => {
    res.json('pong');
});


app.patch('/impressoras', (req, res) => {
    res.json('pong');
});


app.delete('/impressoras', (req, res) => {
    res.json('pong');
});



//-------------------------------------------------------------
//-------------------------------------------------------------



app.get('/toners', (req, res) => {
    res.json('pong');
});


app.post('/toners', (req, res) => {
    res.json("hello")
});



app.patch('/toners', (req, res) => {
    res.json('pong');
});


app.delete('/toners', (req, res) => {
    res.json('pong');
});




//-------------------------------------------------------------
//-------------------------------------------------------------

app.get('/computadores', (req, res) => {
    res.json('pong');
});


app.post('/computadores', (req, res) => {
    res.json('pong');
});

app.patch('/computadores', (req, res) => {
    res.json('pong');
});


app.delete('/computadores', (req, res) => {
    res.json('pong');
});




app.get('/tas', (req, res) => {
    res.json('pong');
});

app.post('/tas', (req, res) => {
    res.send(req.body);
});


app.patch('/tas', (req, res) => {
    res.json('pong');
});


app.delete('/tas', (req, res) => {
    res.json('pong');
});



app.patch('/userRegister', (req, res) => {
    res.json('pong');
});


app.delete('/userLlogin', (req, res) => {
    res.json('pong');
});



const port = 3000;


app.listen(`${port}`, ()=>{console.log(`Running on port ${port}`)});



