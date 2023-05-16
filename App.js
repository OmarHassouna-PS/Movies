const express = require('express');

const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors());

app.get('/movies', (req, res) => {
  fetch('https://reqres.in/api/users?page=2')
    .then(resp => resp.json())
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ error: 'Something went wrong' }));
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});