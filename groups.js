// The four tool groups. Colors and graphics match the top info card on each OEMS Squarespace page.

const GROUPS = {
  IH: {
    slug: "ih",
    tag: "OEMS · PRACTICAL TOOLS",
    title: ["Industrial hygiene.", "Made practical."],
    blurb: "Tools to support clearer decisions about workplace exposures and controls.",
    theme: { hero: "#070d18", bg: "#101d30", deep: "#2c5f99", tag: "#77baff", line2: "#9da2aa", label: "#1761a8", glow: "rgba(56,132,255,.35)", iconbg: "#e8f1fb", fstart: "#13243d" },
    featured: ["Non-Manufacturing Exposure Assessment", "Exposure Statistics Tool", "Sampling Plan Builder"],
    noun: "industrial hygiene",
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
  OH: {
    slug: "oh",
    tag: "OEMS · OCCUPATIONAL HEALTH TOOLS",
    title: ["Occupational health.", "Made manageable."],
    blurb: "Tools for respiratory protection and hearing conservation programs.",
    theme: { hero: "#0c0818", bg: "#1c1433", deep: "#5b44a8", tag: "#b39dff", line2: "#aaa3bd", label: "#5b44a8", glow: "rgba(179,157,255,.3)", iconbg: "#efeaff", fstart: "#2a1f47" },
    featured: [],
    noun: "occupational health",
    colors: { bg: "#1c1433", tag: "#b39dff", line2: "#aaa3bd", text: "#ddd6ef", button: "#5b44a8", label: "#5b44a8", border: "#e2dcf2" },
    art: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round">
<defs><radialGradient id="ohGlow"><stop offset="0" stop-color="#b39dff" stop-opacity=".4"/><stop offset="1" stop-color="#b39dff" stop-opacity="0"/></radialGradient></defs>
<circle cx="190" cy="102" r="74" fill="url(#ohGlow)"/>
<path d="M180 52 C 214 38, 248 62, 241 98 C 236 120, 217 125, 214 144 C 212 163, 192 170, 180 158" stroke="#b39dff" stroke-width="3"/>
<path d="M192 76 C 211 69, 225 86, 215 100 C 208 109, 196 104, 201 92" stroke="#b39dff" stroke-width="2.6"/>
<path d="M92 86 Q 102 102 92 118" stroke="#aaa3bd" stroke-width="2.4" stroke-opacity=".3"/>
<path d="M108 76 Q 124 102 108 128" stroke="#aaa3bd" stroke-width="2.4" stroke-opacity=".5"/>
<path d="M124 66 Q 146 102 124 138" stroke="#aaa3bd" stroke-width="2.4" stroke-opacity=".75"/>
<path d="M140 56 Q 168 102 140 148" stroke="#aaa3bd" stroke-width="2.4"/>
</svg>`
  },
  Environmental: {
    slug: "environmental",
    tag: "OEMS · ENVIRONMENTAL TOOLS",
    title: ["Environmental compliance.", "Made easy."],
    blurb: "Tools to support clearer decisions about emissions, discharges, and environmental compliance.",
    theme: { hero: "#06120d", bg: "#0f2a1f", deep: "#2f7a52", tag: "#6fdc9c", line2: "#9fb0a7", label: "#2f7a52", glow: "rgba(111,220,156,.28)", iconbg: "#e6f4ec", fstart: "#163a2b" },
    featured: ["Environmental Compliance Checker"],
    noun: "environmental",
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
    theme: { hero: "#120708", bg: "#2a1012", deep: "#8f1d1d", tag: "#ff8a80", line2: "#b5a3a3", label: "#b3261e", glow: "rgba(255,138,128,.28)", iconbg: "#fdeceb", fstart: "#3a1719" },
    featured: [],
    noun: "safety",
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

// Section icons, taken from the category cards on the OEMS Squarespace pages.
const ICONS = {
  "Noise": '<path d="M2 12h2l2-5 3 10 3-14 3 14 3-10 2 5h2"/>',
  "Ventilation": '<path d="M3 8h11a3 3 0 1 0-3-3"/><path d="M3 12h16a3 3 0 1 1-3 3"/><path d="M3 16h7"/>',
  "Respiratory Protection": '<path d="M5 9c0-3 3-5 7-5s7 2 7 5v3c0 4-3 7-7 7s-7-3-7-7z"/><circle cx="9" cy="14" r="1.5"/><circle cx="15" cy="14" r="1.5"/><path d="M5 10H3M19 10h2"/>',
  "Radiation": '<circle cx="12" cy="12" r="2"/><path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M4.9 4.9a10 10 0 0 0 0 14.2M19.1 4.9a10 10 0 0 1 0 14.2"/>',
  "Lasers": '<circle cx="4" cy="12" r="2"/><path d="M6 12h12"/><path d="M20 9v6M17.5 10l5 4M17.5 14l5-4"/>',
  "Conversions": '<path d="M4 8h14l-3-3M20 16H6l3 3"/>',
  "Exposure Assessment": '<path d="M3 3v18h18"/><path d="M3 8h18" stroke-dasharray="2 3"/><path d="M6 17l4-5 3 3 5-7"/>',
  "Statistics": '<path d="M3 3v18h18"/><path d="M7 16v-4"/><path d="M12 16V8"/><path d="M17 16v-7"/>',
  "Compliance": '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 14l2 2 4-4"/>',
  "Air Emissions": '<path d="M2 21h20"/><path d="M4 21V11l5 3v-3l5 3V7h4v14"/><path d="M15 4c0-1.1.9-2 2-2s2 .9 2 2"/>',
  "Greenhouse Gas & Refrigerant": '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>',
  "Water & Spill Prevention": '<path d="M12 2.7l5.7 5.7a8 8 0 1 1-11.3 0z"/>',
  "Waste & Chemical Reporting": '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 14l2 2 4-4"/>',
  "PPE": '<path d="M4 15a8 8 0 0 1 16 0"/><path d="M2 15h20v3H2z"/><path d="M10 7V5h4v2"/>',
  "Heat": '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/><path d="M11.5 9v8"/><path d="M18 4l2-1M19 8h2M18 12l2 1"/>',
  "Injury & Illness Rates": '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>',
  "Fall Protection": '<circle cx="12" cy="4" r="2"/><path d="M12 6v6"/><path d="M8 9h8"/><path d="M12 12l-3 5"/><path d="M12 12l3 5"/><path d="M4 21h16"/>',
  "Lifting & Rigging": '<path d="M12 2v4"/><path d="M9 6h6"/><path d="M12 6l-7 9"/><path d="M12 6l7 9"/><rect x="4" y="15" width="16" height="6" rx="1"/>',
  "Recordkeeping": '<path d="M9 4h6l1 2h3v15H5V6h3z"/><path d="M9 14l2 2 4-4"/>'
};
function icon(cat, color) { return '<svg viewBox="0 0 24 24" fill="none" stroke="' + color + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[cat] || '') + '</svg>'; }

function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }


// Featured (badge + top of search): each field's featured picks and every combined tool (keyword "combined"), once live.
function isCombined(t) { return /\bcombined\b/.test(t.keywords); }
function isFeatured(t) { return !!t.url && (GROUPS[t.group].featured.includes(t.name) || isCombined(t)); }

function matches(tool, query) {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  const text = (tool.name + ' ' + tool.description + ' ' + tool.category + ' ' + tool.group + ' ' + tool.keywords).toLowerCase();
  return words.every(w => text.includes(w));
}

// Search order: featured tools first, then live tools (name matches before description-only matches), then "coming soon".
function rank(list, query) {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  const score = t => {
    const name = t.name.toLowerCase();
    let s = 0;
    if (isFeatured(t)) s += 8;
    if (t.url && GROUPS[t.group].featured.includes(t.name)) s += 2; // the field's own picks first
    if (words.length && words.every(w => name.includes(w))) s += 2;
    if (t.url) s += 3;
    return s;
  };
  return list.map((t, i) => [t, i]).sort((a, b) => score(b[0]) - score(a[0]) || a[1] - b[1]).map(x => x[0]);
}

function featuredBadge(t) { return isFeatured(t) ? '<b class="feat" style="color:' + GROUPS[t.group].colors.label + ';background:' + GROUPS[t.group].theme.iconbg + '">★ Featured</b>' : ''; }

function toolRow(t, showGroup) {
  const c = GROUPS[t.group].colors;
  const label = showGroup ? '<small style="color:' + c.label + '">' + esc(t.group === 'IH' ? 'Industrial Hygiene' : t.group) + ' · ' + esc(t.category) + '</small>' : '';
  const btn = t.url
    ? '<a class="open" style="background:' + c.button + '" href="' + esc(t.url) + '">Open →</a>'
    : '<span class="soon">Coming soon</span>';
  return '<div class="row" style="border-left-color:' + c.label + '"><div>' + label + '<h3>' + esc(t.name) + featuredBadge(t) + '</h3><p>' + esc(t.description) + '</p></div>' + btn + '</div>';
}
