const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.post('/generate', (req, res) => {
  const { name, dob, location, ip, browser, timezone } = req.body;

  const birthDate = new Date(dob);
  const now = new Date();
  const age = now.getFullYear() - birthDate.getFullYear();

  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();
  const zodiac = getZodiac(month, day);

const html = `
  <html>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap" rel="stylesheet">
     <style>
  @font-face {
    font-family: 'UnifrakturCook';
    src: url('/fonts/UnifrakturCook.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    background-color: #0c0c0c;
    color: #d0d0d0;
    font-family: 'Courier New', monospace;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }

  h1 {
    font-family: 'UnifrakturCook', monospace;
    font-size: 2.8em;
    color: #ff2f6e;
    margin-bottom: 0.5em;
    text-shadow: 0 0 4px #ff2f6e88;
  }

  p {
    margin: 0.4em 0;
    font-size: 1.1em;
    color: #d0d0d0;
  }

  strong {
    color: #aaffcc;
  }
</style>
    </head>
    <body>
      <h1>${name}'s Death Certificate</h1>
      <p><strong>Born on:</strong> ${dob}</p>
      <p><strong>Died on:</strong> ${now.toLocaleString()} (${timezone})</p>
      <p><strong>Age at Death:</strong> ${age}</p>
      <p><strong>Zodiac Sign:</strong> ${zodiac}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>IP Address:</strong> ${ip}</p>
      <p><strong>Browser:</strong> ${browser}</p>
    </body>
  </html>
`;

  res.set('Content-Type', 'text/html');
  res.send(html)
});

function getZodiac(month, day) {
  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius";
  if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces";
  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
  if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus";
  if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini";
  if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer";
  if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
  if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
  if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
  if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio";
  if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius";
  return "Capricorn";
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
