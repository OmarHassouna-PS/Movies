const express = require('express');
const axios = require("axios")
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
const options = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '876fcc926amshca139838ad15f97p190a44jsn29fa796d7fd5',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

// app.get('/movies', (req, res) => {
//   fetch('https://reqres.in/api/users?page=2')
//     .then(resp => resp.json())
//     .then(data => res.send(data))
//     .catch(err => res.status(500).send({ error: 'Something went wrong' }));
// });
app.get("/movies", (req, res) => {
  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    });
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});