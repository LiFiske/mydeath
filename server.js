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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    text-align: center;
  }

  h1 {
    font-family: 'UnifrakturCook', serif;
    font-size: 3em;
    margin-bottom: 0.5em;
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
