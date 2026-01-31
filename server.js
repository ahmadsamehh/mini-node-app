require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 6800;

// Small helper to generate a full HTML document with consistent styling
function pageTemplate({ title, bodyHtml, extraCss = "" }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <style>
    :root {
      --bg1: #0b1020;
      --bg2: #1a0b2e;
      --card: rgba(255, 255, 255, 0.08);
      --border: rgba(255, 255, 255, 0.12);
      --text: rgba(255, 255, 255, 0.92);
      --muted: rgba(255, 255, 255, 0.70);
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      color: var(--text);
      background: radial-gradient(1200px 800px at 20% 10%, #3a1c71 0%, transparent 60%),
                  radial-gradient(900px 700px at 80% 20%, #d76d77 0%, transparent 55%),
                  radial-gradient(900px 700px at 50% 80%, #ffaf7b 0%, transparent 55%),
                  linear-gradient(135deg, var(--bg1), var(--bg2));
      overflow-x: hidden;
      padding: 24px;
    }

    .wrap {
      width: min(920px, 100%);
      display: grid;
      gap: 18px;
    }

    .card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 22px;
      backdrop-filter: blur(10px);
      box-shadow: 0 20px 60px rgba(0,0,0,0.35);
    }

    h1, h2 { margin: 0 0 10px; }
    p { margin: 0 0 10px; color: var(--muted); line-height: 1.5; }

    .btns {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 12px;
    }

    a.btn {
      text-decoration: none;
      color: var(--text);
      border: 1px solid var(--border);
      background: rgba(255,255,255,0.08);
      padding: 10px 14px;
      border-radius: 12px;
      transition: transform 0.12s ease, background 0.12s ease;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-weight: 600;
    }

    a.btn:hover {
      transform: translateY(-2px);
      background: rgba(255,255,255,0.14);
    }

    .badge {
      display: inline-block;
      padding: 6px 10px;
      border-radius: 999px;
      border: 1px solid var(--border);
      background: rgba(255,255,255,0.06);
      color: var(--muted);
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    ${extraCss}
  </style>
</head>
<body>
  ${bodyHtml}
</body>
</html>`;
}

app.get("/", (req, res) => {
  const bodyHtml = `
    <div class="wrap">
      <div class="card">
        <span class="badge">Mini Node App</span>
        <h1>Choose a page</h1>
        <p>This is a simple Express app with styled pages.</p>
        <div class="btns">
          <a class="btn" href="/Boyfriend">👤 Boyfriend</a>
          <a class="btn" href="/Girlfriend">💖 Girlfriend</a>
        </div>
      </div>
      <div class="card">
        <h2>What you learned</h2>
        <p>Routes → HTML responses → environment variables → server ports.</p>
      </div>
    </div>
  `;
  res.send(pageTemplate({ title: "Home", bodyHtml }));
});

app.get("/Boyfriend", (req, res) => {
  const bodyHtml = `
    <div class="wrap">
      <div class="card">
        <span class="badge">/Boyfriend</span>
        <h1>Boyfriend 👋</h1>
        <p>Welcome, Boyfriend. This is your page.</p>
        <div class="btns">
          <a class="btn" href="/">🏠 Home</a>
          <a class="btn" href="/Girlfriend">💖 Girlfriend</a>
        </div>
      </div>
    </div>
  `;
  res.send(pageTemplate({ title: "Boyfriend", bodyHtml }));
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/time", (req, res) => {
  res.json({
    time: new Date().toISOString(),
  });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});


app.get("/Girlfriend", (req, res) => {
  const extraCss = `
    .love {
      text-align: center;
      padding: 34px 22px;
      position: relative;
      overflow: hidden;
    }

    .love h1 {
      font-size: clamp(34px, 5vw, 56px);
      letter-spacing: 0.5px;
      margin-bottom: 10px;
    }

    .love .subtitle {
      font-size: 16px;
      margin-bottom: 18px;
    }

    .heartline {
      font-size: clamp(22px, 3.5vw, 34px);
      filter: drop-shadow(0 10px 30px rgba(0,0,0,0.35));
      animation: floaty 2.2s ease-in-out infinite;
      margin: 14px 0 6px;
    }

    @keyframes floaty {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }

    .big {
      display: inline-block;
      font-weight: 900;
      background: linear-gradient(90deg, #ff6aa2, #ffcf5a, #7cffc2);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    /* Floating hearts */
    .hearts {
      pointer-events: none;
      position: absolute;
      inset: 0;
      opacity: 0.85;
    }

    .hearts span {
      position: absolute;
      bottom: -40px;
      font-size: 22px;
      animation: rise 6s linear infinite;
      filter: drop-shadow(0 10px 20px rgba(0,0,0,0.25));
    }

    @keyframes rise {
      0%   { transform: translateY(0) translateX(0) scale(0.9); opacity: 0; }
      10%  { opacity: 1; }
      100% { transform: translateY(-520px) translateX(60px) scale(1.2); opacity: 0; }
    }

    /* Different heart positions + delays */
    .hearts span:nth-child(1)  { left: 10%;  animation-delay: 0s; }
    .hearts span:nth-child(2)  { left: 22%;  animation-delay: 1.2s; font-size: 26px; }
    .hearts span:nth-child(3)  { left: 35%;  animation-delay: 0.6s; }
    .hearts span:nth-child(4)  { left: 48%;  animation-delay: 1.8s; font-size: 28px; }
    .hearts span:nth-child(5)  { left: 60%;  animation-delay: 0.9s; }
    .hearts span:nth-child(6)  { left: 72%;  animation-delay: 2.2s; font-size: 24px; }
    .hearts span:nth-child(7)  { left: 84%;  animation-delay: 1.5s; }
    .hearts span:nth-child(8)  { left: 92%;  animation-delay: 2.6s; font-size: 30px; }

    .note {
      margin-top: 14px;
      color: rgba(255,255,255,0.78);
      font-weight: 600;
    }
  `;

  const bodyHtml = `
    <div class="wrap">
      <div class="card love">
        <span class="badge">/Girlfriend</span>
        <h1><span class="big">Love you Girlfrienda</span> 💖</h1>
        <p class="subtitle">To my fiancée — you make everything better.</p>
        <div class="heartline">💗 💞 💘 💓 💖 💕 💝</div>
        <p class="note">— Boyfriend</p>

        <div class="btns" style="justify-content:center; margin-top: 18px;">
          <a class="btn" href="/">🏠 Home</a>
          <a class="btn" href="/Boyfriend">👤 Boyfriend</a>
        </div>

        <div class="hearts" aria-hidden="true">
          <span>💖</span><span>💘</span><span>💕</span><span>💝</span>
          <span>💗</span><span>💞</span><span>💓</span><span>💟</span>
        </div>
      </div>
    </div>
  `;

  res.send(pageTemplate({ title: "Girlfriend", bodyHtml, extraCss }));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
