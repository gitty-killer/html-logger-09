function tokenize(text) {
  const matches = text.toLowerCase().match(/[A-Za-z0-9]+/g);
  return matches ? matches : [];
}

function computeStats(text) {
  const lines = text.length === 0 ? 0 : text.split("\n").length;
  const words = tokenize(text);
  const counts = new Map();
  for (const w of words) {
    counts.set(w, (counts.get(w) || 0) + 1);
  }
  return { lines, words: words.length, chars: text.length, counts };
}

function render(stats, top) {
  const sorted = Array.from(stats.counts.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, top);

  const lines = [
    `lines: ${stats.lines}`,
    `words: ${stats.words}`,
    `chars: ${stats.chars}`,
    `top words:`
  ];
  for (const [word, count] of sorted) {
    lines.push(`  ${word}: ${count}`);
  }
  return lines.join("\n");
}

document.getElementById("run").addEventListener("click", () => {
  const text = document.getElementById("input").value;
  const top = parseInt(document.getElementById("top").value, 10) || 10;
  const stats = computeStats(text);
  document.getElementById("output").textContent = render(stats, top);
});
