const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/generate', (req, res) => {
  const { name, dob } = req.body;
  // For now, just echo it back
  res.send(`<h1>${name}'s Death Certificate</h1><p>Born on ${dob}</p>`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
