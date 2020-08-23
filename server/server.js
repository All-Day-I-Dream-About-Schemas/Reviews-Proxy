const express = require('express');
const app = express();
const axios = require('axios');
const PORT = 3002;
const path = require('path')

app.use(express.static(__dirname + '/../client/dist'));

app.get('/sidebar/summary', function (req, res) {
  axios.get('http://13.57.255.31:3380/sidebar/summary')
    .then(response => {
      res.send(response.data)
    })
    .catch((response) => {console.log('catch', response.data)})
})

app.get('/kix', function (req, res) {
  axios.get('http://ec2-13-52-180-39.us-west-1.compute.amazonaws.com//kix')
    .then(response => {
      res.status(200).send(response.data)
    })
    .catch((response) => {console.log('catch', response.data)})
})

app.get('/api/reviews', function (req, res) {
  axios.get('http://52.14.202.194:3001/api/reviews')
    .then(response => {
      res.status(200).send(response.data)
    })
    .catch((response) => {console.log('catch', response.data)})
})

app.listen(PORT, () => console.log('Server is listening at port', PORT))