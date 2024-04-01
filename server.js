const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3002;

app.use(bodyParser.json());

// similar to flask rerouting type this is being used 
app.get('/', (req, res) => {
  res.send('Express API is running');
});

// api end point creation for the data to be displayed
app.post('/api/submitform', (req, res) => {
  const patientData = req.body;
  console.log('Received patient data:', patientData);
  res.status(200).json({ message: 'Received patient data successfully' });
});

// I am running server
app.listen(port, () => {
  console.log('Server is listening on port ${port}');
});
