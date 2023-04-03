const express = require('express');
const { default: axios } = require('axios');
const app = require('express')();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to our application.' });
});

app.post('/test', async (req, res) => {
  // await axios.post('',{
  //   "name": "test",
  // })
  res.json({ message: 'This is a test route.' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});

module.exports = app;