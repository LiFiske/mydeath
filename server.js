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
          position: relative;
          z-index: 1;
        }
        .glitch {
          position: relative;
          color: #ff2f6e;
          font-family: 'UnifrakturCook', monospace;
          font-size: 2.5em;
          text-align: center;
          margin-bottom: 1.2em;
          text-shadow: 0 0 4px #ff2f6e88;
          z-index: 3;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          color: #ff79c6;
          background: transparent;
          z-index: -1;
        }
        .glitch::before {
          animation: glitchTop 2s infinite linear alternate-reverse;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
        }
        .glitch::after {
          animation: glitchBottom 2s infinite linear alternate-reverse;
          clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
        }
        @keyframes glitchTop {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, -2px); }
          40% { transform: translate(2px, 0); }
          60% { transform: translate(-1px, 1px); }
          80% { transform: translate(1px, -1px); }
          100% { transform: translate(0); }
        }
        @keyframes glitchBottom {
          0% { transform: translate(0); }
          20% { transform: translate(1px, 1px); }
          40% { transform: translate(-2px, 0); }
          60% { transform: translate(2px, -1px); }
          80% { transform: translate(-1px, 1px); }
          100% { transform: translate(0); }
        }
        body::after {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          background-image: repeating-linear-gradient(
            rgba(255, 255, 255, 0.03) 0px,
            rgba(255, 255, 255, 0.03) 1px,
            transparent 1px,
            transparent 4px
          );
          z-index: 0;
        }
        strong {
          color: #aaffcc;
        }

    .veil {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(ellipse at center, rgba(20, 20, 20, 0.9) 0%, rgba(5, 5, 5, 1) 100%);
  backdrop-filter: blur(8px);
  z-index: 1000;
  animation: fadeVeil 2.5s ease forwards;
}

@keyframes fadeVeil {
  0% { opacity: 1; }
  100% { opacity: 0; pointer-events: none; }
}
    .crt::before {
  content: "";
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  pointer-events: none;
  background-image: repeating-linear-gradient(
    rgba(255, 255, 255, 0.03) 0px,
    rgba(255, 255, 255, 0.03) 1px,
    transparent 1px,
    transparent 4px
  );
  z-index: 999;
  animation: flicker 1.5s infinite alternate;
}

@keyframes flicker {
  0% { opacity: 0.1; }
  50% { opacity: 0.15; }
  100% { opacity: 0.05; }
}

.typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #ff2f6e;
  animation: typing 4s steps(80, end), blink 0.5s step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  50% { border-color: transparent; }
}

form button {
  background-color: #1a1a1a;
  color: #ff2f6e;
  border: 1px solid #ff2f6e;
  padding: 0.5em 1em;
  font-family: 'Courier New', monospace;
  border-radius: 4px;
  transition: background-color 0.3s, border-color 0.3s;
}
form button:hover {
  background-color: #2a2a2a;
}

      </style>
    </head>
    <body>
      <div class="container">
        <h1 class="glitch" data-text="Death Certificate">Death Certificate</h1>
       <p class="typewriter">
  Let it be inscribed: <strong>${name}</strong>, wretched heir of ash and silicon, was unmade upon the <strong>${poeticTime}</strong> of <strong>${futureDeath.toDateString()}</strong>, their vessel sundered by <strong>${deathCause}</strong>, within the cursed realm of <strong>${location}</strong>, as the stars hung in the firmament at <strong>${futureDeath.toLocaleTimeString()}</strong>. For <strong>${age}</strong> turnings of the sun, they did walk the accursed path of breath and burden, earning renown as <strong>${browserDesc}</strong>. Anointed thrice beneath the stars, <strong>${name}</strong> bore the signs: <strong>${z1}</strong>, <strong>${z2}</strong>, <strong>${z3}</strong>... ${reincarnated ? severanceLine1 : severanceLine2}
</p>

     <div class="veil"></div>
<form action="/" method="GET" style="margin-top: 2rem;">
  <button type="submit">Summon Another</button>
</form>

      </div>
    </body>
  </html>
  `;

  res.set('Content-Type', 'text/html');
  res.send(html);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
