const express = require('express');
const { default: axios } = require('axios');
const app = require('express')();

// configure dotenv
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  console.log('GET / got invoked')
  return res.json({ message: 'Welcome to our application.' });
});

app.post('/test', async (req, res) => {
  // await axios.post('',{
  //   "name": "test",
  // })
  console.log('POST /test got invoked')
  return res.json({ message: 'This is a test route.' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});

module.exports = app;