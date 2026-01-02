// server.js
import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

app.get("/api/semantic", async (req, res) => {
  try {
    const q = req.query.q;
    if (!q) return res.status(400).json({ error: "Missing query" });

    const url =
      `https://api.semanticscholar.org/graph/v1/paper/search` +
      `?query=${encodeURIComponent(q)}` +
      `&limit=100&fields=title,authors,year,venue,url`;

    const r = await fetch(url);
    const data = await r.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: "Semantic Scholar fetch failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
