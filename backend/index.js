const express = require('express');
const app = express();
const port = 3000; 

app.post('/google-form-webhook', (req, res) => {
  res.send('google-form-webhook test response'); 
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
