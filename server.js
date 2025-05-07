app.post('/generate', (req, res) => {
  const { name, dob } = req.body;

  const birthDate = new Date(dob);
  const now = new Date();
  const age = now.getFullYear() - birthDate.getFullYear();

  // Zodiac sign logic
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();
  const zodiac = getZodiac(month, day);

  const html = `
    <h1>Death Certificate</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Date of Birth:</strong> ${dob}</p>
    <p><strong>Date of Death:</strong> ${now.toLocaleString()}</p>
    <p><strong>Age at Death:</strong> ${age}</p>
    <p><strong>Zodiac Sign:</strong> ${zodiac}</p>
  `;

  res.send(html);
});

// Zodiac helper
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
