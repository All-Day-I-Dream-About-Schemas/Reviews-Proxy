const express = require('express');
const app = express();
const axios = require('axios');
const PORT = 3535;
const path = require('path')

app.use(express.static(__dirname + '/../client/dist'));

// app.use(express.json());

app.get('/sidebar/summary', function (req, res) {
  axios.get('http://127.0.0.1:3380/sidebar/summary')
    .then(response => {
      // console.log(response.data);
      res.send(response.data)
    })
    .catch((response) => {console.log('catch', response.data)})
})

app.get('/kix', function (req, res) {
  axios.get('http://127.0.0.1:5291/kix')
    .then(response => {
      // console.log(response.data);
      res.status(200).send(response.data)
    })
    .catch((response) => {console.log('catch', response.data)})
})

app.get('/api/reviews', function (req, res) {
  axios.get('http://127.0.0.1:3001/api/reviews')
    .then(response => {
      // console.log(response.data);
      res.status(200).send(response.data)
    })
    .catch((response) => {console.log('catch', response.data)})
})


// app.post('/sidebar/summary', (req, res) => {

// })

app.listen(PORT, () => console.log('Server is listening at port', PORT))