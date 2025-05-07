app.post('/generate', (req, res) => {
  console.log("FORM DATA", req.body); // <-- this will show exactly what came through
  const { name, dob, location, ip, browser, timezone } = req.body;

  const birthDate = new Date(dob);
  const now = new Date();
  const age = now.getFullYear() - birthDate.getFullYear();

  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();
  const zodiac = getZodiac(month, day);

  const html = `
    <h1>Death Certificate</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Date of Birth:</strong> ${dob}</p>
    <p><strong>Date of Death:</strong> ${now.toLocaleString()} (${timezone})</p>
    <p><strong>Age at Death:</strong> ${age}</p>
    <p><strong>Zodiac Sign:</strong> ${zodiac}</p>
    <p><strong>Location:</strong> ${location}</p>
    <p><strong>IP Address:</strong> ${ip}</p>
    <p><strong>Browser:</strong> ${browser}</p>
  `;

  res.send(html);
});
