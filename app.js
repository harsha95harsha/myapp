const { request, response } = require('express');
const express = require('express')
const app = express()

// declaring a variable and storing the express framework in it

// this is a base api with path '/'
// this is a GET API

app.get('/', (request, response) => {
    response.send('Hello World')


})

//this is user data api

app.get('/user', (req, res) => {
    console.log(req.query)
    const userobj = {
        "username": req.query.username,
        "password": req.query.password
    }
    res.status(200).send(userobj)


})


const PORT_NUMBER = 5000;

app.listen(PORT_NUMBER, () => {
    console.log('App started at port: ', PORT_NUMBER)


})
