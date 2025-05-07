const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateFutureDeathDate() {
  const days = Math.floor(Math.random() * (17 * 365)) + 1;
  const ms = days * 24 * 60 * 60 * 1000;
  return new Date(Date.now() + ms);
}

const causesOfDeath = [
  "a vending machine rebellion", "the midnight scream of a microwave prank gone wrong",
  "misjudged train selfie", "an ill-fated rocket bath", "a lava lamp’s vengeance",
  "balloon-assisted hubris", "a bear’s disapproval", "forbidden kite ritual",
  "explosive ATM greed", "JATO-fueled hubris", "a cobra’s revenge",
  "firecracker alchemy", "concrete communion", "icy prank turned tomb",
  "suffocating curiosity", "chainsaw enlightenment"
];

const zodiacTraits = {
  Aries: ["bold", "impulsive", "adventurous"],
  Taurus: ["stubborn", "sensual", "loyal"],
  Gemini: ["curious", "clever", "talkative"],
  Cancer: ["moody", "nurturing", "empathetic"],
  Leo: ["dramatic", "ambitious", "charismatic"],
  Virgo: ["analytical", "modest", "reliable"],
  Libra: ["charming", "romantic", "diplomatic"],
  Scorpio: ["intense", "secretive", "strategic"],
  Sagittarius: ["adventurous", "blunt", "restless"],
  Capricorn: ["disciplined", "cold", "responsible"],
  Aquarius: ["eccentric", "visionary", "rebellious"],
  Pisces: ["dreamy", "spiritual", "compassionate"]
};

function browserPersona(ua) {
  if (/Chrome/i.test(ua)) return "a tab-swarming, memory-glutted conformist";
  if (/Firefox/i.test(ua)) return "a principled, breakage-tolerant idealist";
  if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) return "a glossy, walled-garden simpleton";
  if (/Edg/i.test(ua)) return "a default-bound, corporate-tethered placeholder";
  if (/Brave/i.test(ua)) return "an ad-scorched, crypto-soaked sentinel";
  if (/Opera/i.test(ua)) return "a sidebar-clutching, legacy-dwelling eccentric";
  if (/Vivaldi/i.test(ua)) return "a layout-twisting, shortcut-wielding artisan";
  if (/Tor/i.test(ua)) return "an onion-veiled, trace-erasing exile";
  return "a nameless browser phantom";
}

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

app.post('/generate', (req, res) => {
  const { name, dob, location, ip, browser, timezone } = req.body;

  const birthDate = new Date(dob);
  const now = new Date();
  const age = now.getFullYear() - birthDate.getFullYear();
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();
  const zodiac = getZodiac(month, day);

  const futureDeath = generateFutureDeathDate();
  const poeticTime = randomFrom(["dawn", "dusk", "the midnight hour"]);
  const deathCause = randomFrom(causesOfDeath);
  const [z1, z2, z3] = [
    randomFrom(zodiacTraits[zodiac]),
    randomFrom(zodiacTraits[zodiac]),
    randomFrom(zodiacTraits[zodiac])
  ];
  const browserDesc = browserPersona(browser);

  const reincarnated = Math.random() < 0.5;
  const severanceLine1 = "And lo, they have fallen short of the Final Severance. The wheel turns anew; saṃsāra binds them still, their spirit condemned coils once more into the gyre of the Kali Yuga, where agony endures without end.";
  const severanceLine2 = "And lo, they have pierced the veil of false flesh and cast down the fetters of becoming. Beyond the coil, beyond the dream, their soul dissolves into the black stillness of Oblivion, where not even memory may follow.";

  const html = `
  <html>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap" rel="stylesheet">
      <style>
        body {
          background-color: #0c0c0c;
          color: #d0d0d0;
          font-family: 'Courier New', monospace;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          padding: 2rem;
          margin: 0;
        }
        .container {
          max-width: 800px;
          text-align: justify;
          line-height: 1.8;
          text-align-last: left;
        }
        h1 {
          font-family: 'UnifrakturCook', monospace;
          font-size: 2.5em;
          color: #ff2f6e;
          margin-bottom: 1.2em;
          text-align: center;
          text-shadow: 0 0 4px #ff2f6e88;
        }
        strong {
          color: #aaffcc;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Death Certificate</h1>
        Let it be inscribed: <strong>${name}</strong>, wretched heir of ash and silicon, was unmade upon the <strong>${poeticTime}</strong> of <strong>${futureDeath.toDateString()}</strong>, their vessel sundered by <strong>${deathCause}</strong>, within the cursed realm of <strong>${location}</strong>, as the stars hung in the firmament at <strong>${futureDeath.toLocaleTimeString()}</strong>. For <strong>${age}</strong> turnings of the sun, they did walk the accursed path of breath and burden, earning renown as <strong>${browserDesc}</strong>. Anointed thrice beneath the stars, <strong>${name}</strong> bore the signs: <strong>${z1}</strong>, <strong>${z2}</strong>, <strong>${z3}</strong>... ${reincarnated ? severanceLine1 : severanceLine2}
      </div>
    </body>
  </html>
  `;

  res.set('Content-Type', 'text/html');
  res.send(html);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
