const express = require('express');
const app = express();
const axios = require('axios');
const PORT = 3005;
const path = require('path')

app.use(express.static(__dirname + '/../client/dist'));

app.use(express.json());

app.get('/sidebar/summary', function (req, res) {
  axios.get('http://13.57.255.31:3380/sidebar/summary')
    .then(response => {
      // console.log(response.data);
      res.send(response.data)
    })
    .catch((response) => {console.log('catch', response.data)})
})

app.get('/kix', function (req, res) {
  axios.get('http://ec2-13-52-180-39.us-west-1.compute.amazonaws.com/kix')
    .then(response => {
      // console.log(response.data);
      res.status(200).send(response.data)
    })
    .catch((response) => {console.log('catch', response.data)})
})

app.get('/api/reviews', function (req, res) {
  axios.get('http://13.59.80.115:3001/api/reviews')
    .then(response => {
      res.status(200).send(response.data)
    })
    .catch((response) => {console.log('catch', response.data)})
})


app.post('/sidebar/summary', (req, res) => {
  console.log(req.body)
  axios.post('http://13.57.255.31:3380/sidebar/summary', req.body)
    .then((response) => res.send(response.data) )
    .catch((error) => res.send(error));

})

app.post('/kix', (req, res) => {
  console.log(req.body)
  axios.post('http://ec2-13-52-180-39.us-west-1.compute.amazonaws.com/kix', req.body)
  .then((response) => res.send(response.data))
  .catch((error) => res.send(error));

})

app.post('/api/helpful', (req, res) => {
  axios.post('http://13.59.80.115:3001/api/reviews', req.body)
    .then((response) => res.send(response.data) )
    .catch((error) => res.send(error));

})

app.listen(PORT, () => console.log('Server is listening at port', PORT))
