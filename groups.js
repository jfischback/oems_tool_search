// The three tool groups. Colors and graphics match the top info card on each OEMS Squarespace page.

const GROUPS = {
  IH: {
    slug: "ih",
    tag: "OEMS · PRACTICAL TOOLS",
    title: ["Industrial hygiene.", "Made practical."],
    blurb: "Tools to support clearer decisions about workplace exposures and controls.",
    colors: { bg: "#101d30", tag: "#77baff", line2: "#9da2aa", text: "#d0d9e4", button: "#153d74", label: "#1761a8", border: "#dbe3ec" },
    art: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none">
<defs>
<linearGradient id="oemsFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#77baff" stop-opacity=".28"/><stop offset="1" stop-color="#77baff" stop-opacity="0"/></linearGradient>
<linearGradient id="oemsLine" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2c5f99"/><stop offset="1" stop-color="#77baff"/></linearGradient>
<radialGradient id="oemsGlow"><stop offset="0" stop-color="#77baff" stop-opacity=".55"/><stop offset="1" stop-color="#77baff" stop-opacity="0"/></radialGradient>
</defs>
<line x1="20" y1="180" x2="300" y2="180" stroke="#2c5f99" stroke-opacity=".5"/>
<line x1="20" y1="58" x2="300" y2="58" stroke="#9da2aa" stroke-width="1.5" stroke-dasharray="6 6"/>
<text x="300" y="48" fill="#9da2aa" font-family="Arial" font-size="11" letter-spacing="2" text-anchor="end">OEL</text>
<path d="M20 170 C 70 168, 95 150, 130 125 S 200 92, 240 90 S 285 88, 290 88 L 290 180 L 20 180 Z" fill="url(#oemsFill)"/>
<path d="M20 170 C 70 168, 95 150, 130 125 S 200 92, 240 90 S 285 88, 290 88" stroke="url(#oemsLine)" stroke-width="2.5" stroke-linecap="round"/>
<circle cx="290" cy="88" r="16" fill="url(#oemsGlow)"/>
<circle cx="290" cy="88" r="4.5" fill="#77baff"/>
</svg>`
  },
  Environmental: {
    slug: "environmental",
    tag: "OEMS · ENVIRONMENTAL TOOLS",
    title: ["Environmental compliance.", "Made easy."],
    blurb: "Tools to support clearer decisions about emissions, discharges, and environmental compliance.",
    colors: { bg: "#0f2a1f", tag: "#6fdc9c", line2: "#9fb0a7", text: "#d2e4da", button: "#1f5c3d", label: "#2f7a52", border: "#d6e6dc" },
    art: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none">
<defs>
<linearGradient id="envBack" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6fdc9c" stop-opacity=".30"/><stop offset="1" stop-color="#6fdc9c" stop-opacity="0"/></linearGradient>
<linearGradient id="envFront" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f7a52" stop-opacity=".75"/><stop offset="1" stop-color="#2f7a52" stop-opacity=".15"/></linearGradient>
<linearGradient id="envLine" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2f7a52"/><stop offset="1" stop-color="#6fdc9c"/></linearGradient>
<radialGradient id="envGlow"><stop offset="0" stop-color="#6fdc9c" stop-opacity=".45"/><stop offset="1" stop-color="#6fdc9c" stop-opacity="0"/></radialGradient>
</defs>
<circle cx="240" cy="62" r="40" fill="url(#envGlow)"/>
<circle cx="240" cy="62" r="13" fill="#6fdc9c" fill-opacity=".9"/>
<path d="M20 180 C 60 130, 105 112, 150 140 S 245 112, 300 132 L 300 180 Z" fill="url(#envBack)"/>
<path d="M20 180 C 60 130, 105 112, 150 140 S 245 112, 300 132" stroke="url(#envLine)" stroke-width="2.5" stroke-linecap="round"/>
<path d="M20 180 C 80 158, 140 166, 190 168 S 270 154, 300 160 L 300 180 Z" fill="url(#envFront)"/>
<path d="M88 104 L 72 146 L 104 146 Z" fill="#2f7a52" fill-opacity=".55" stroke="#6fdc9c" stroke-width="1.5" stroke-linejoin="round"/>
<line x1="88" y1="146" x2="88" y2="162" stroke="#6fdc9c" stroke-width="1.5"/>
<path d="M118 122 L 106 152 L 130 152 Z" fill="#2f7a52" fill-opacity=".45" stroke="#6fdc9c" stroke-opacity=".7" stroke-width="1.5" stroke-linejoin="round"/>
<line x1="118" y1="152" x2="118" y2="164" stroke="#6fdc9c" stroke-opacity=".7" stroke-width="1.5"/>
<line x1="20" y1="180" x2="300" y2="180" stroke="#2f7a52" stroke-opacity=".6"/>
</svg>`
  },
  Safety: {
    slug: "safety",
    tag: "OEMS · SAFETY TOOLS",
    title: ["Workplace safety.", "Made clear."],
    blurb: "Tools to support better decisions about injury rates, fall protection, and lifting.",
    colors: { bg: "#2a1012", tag: "#ff8a80", line2: "#b5a3a3", text: "#ecd9d8", button: "#8f1d1d", label: "#b3261e", border: "#ecd6d6" },
    art: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none">
<defs>
<linearGradient id="safFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff8a80" stop-opacity=".30"/><stop offset="1" stop-color="#ff8a80" stop-opacity=".02"/></linearGradient>
<linearGradient id="safLine" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8f1d1d"/><stop offset="1" stop-color="#ff8a80"/></linearGradient>
<radialGradient id="safGlow"><stop offset="0" stop-color="#ff8a80" stop-opacity=".35"/><stop offset="1" stop-color="#ff8a80" stop-opacity="0"/></radialGradient>
</defs>
<circle cx="160" cy="100" r="95" fill="url(#safGlow)"/>
<path d="M160 22 L222 44 V98 C222 138 196 164 160 180 C124 164 98 138 98 98 V44 Z" fill="url(#safFill)" stroke="url(#safLine)" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M134 102 L152 120 L188 82" stroke="#ff8a80" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<line x1="20" y1="180" x2="300" y2="180" stroke="#8f1d1d" stroke-opacity=".6"/>
</svg>`
  }
};

function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

function matches(tool, query) {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  const text = (tool.name + ' ' + tool.description + ' ' + tool.category + ' ' + tool.group + ' ' + tool.keywords).toLowerCase();
  return words.every(w => text.includes(w));
}

function toolRow(t, showGroup) {
  const c = GROUPS[t.group].colors;
  const label = showGroup ? '<small style="color:' + c.label + '">' + esc(t.group === 'IH' ? 'Industrial Hygiene' : t.group) + ' · ' + esc(t.category) + '</small>' : '';
  const btn = t.url
    ? '<a class="open" style="background:' + c.button + '" href="' + esc(t.url) + '">Open →</a>'
    : '<span class="soon">Coming soon</span>';
  return '<div class="row" style="border-left-color:' + c.label + '"><div>' + label + '<h3>' + esc(t.name) + '</h3><p>' + esc(t.description) + '</p></div>' + btn + '</div>';
}
