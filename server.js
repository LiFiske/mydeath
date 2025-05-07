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
