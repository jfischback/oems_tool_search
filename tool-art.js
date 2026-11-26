// 25 Nov 2026 (Jonathan): a picture on every featured tool card.
const TOOL_ART = (() => {
  let C = '#77baff', D = '#2c5f99', G = '#9da2aa';
  const wrap = (id, body) => '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round"><defs><radialGradient id="' + id + '"><stop offset="0" stop-color="' + C + '" stop-opacity=".35"/><stop offset="1" stop-color="' + C + '" stop-opacity="0"/></radialGradient></defs><circle cx="160" cy="100" r="95" fill="url(#' + id + ')"/>' + body + '</svg>';
  const t = (x, y, s, a) => '<text x="' + x + '" y="' + y + '" fill="' + G + '" font-family="Inter, Arial" font-size="10" letter-spacing="1.5"' + (a ? ' text-anchor="' + a + '"' : '') + '>' + s + '</text>';
  const A = {
    // Ventilation (25 Nov 2026)
    'Duct Airflow Basics': () => wrap('v1',
      '<path d="M30 80h200M30 120h200" stroke="' + C + '" stroke-width="3"/><path d="M230 80l30-22M230 120l30 22" stroke="' + C + '" stroke-width="3"/>' +
      '<path d="M60 100h40M110 100h40M160 100h40" stroke="' + C + '" stroke-width="2"/><path d="M92 94l8 6-8 6M142 94l8 6-8 6M192 94l8 6-8 6" stroke="' + C + '" stroke-width="2"/>' + t(130, 160, 'Q = V × A', 'middle')),
    'Hood Pressure and Flow': () => wrap('v2',
      '<path d="M70 150l40-50h100l40 50z" stroke="' + C + '" stroke-width="3"/><path d="M140 100V50h40v50" stroke="' + C + '" stroke-width="3"/>' +
      '<circle cx="230" cy="58" r="16" stroke="' + C + '" stroke-width="2.5"/><path d="M230 58l8-8" stroke="' + C + '" stroke-width="2.5"/><path d="M180 70h34" stroke="' + D + '" stroke-width="1.5"/>' + t(230, 92, 'SP', 'middle') + t(160, 178, 'Ce', 'middle')),
    'Duct Junctions': () => wrap('v3',
      '<path d="M30 90h260M30 120h120l60 60M190 120h100" stroke="' + C + '" stroke-width="3"/><path d="M180 150l30 30" stroke="' + C + '" stroke-width="0"/>' +
      '<path d="M60 105h40M220 105h40" stroke="' + C + '" stroke-width="2"/><path d="M92 99l8 6-8 6M252 99l8 6-8 6" stroke="' + C + '" stroke-width="2"/>' + t(160, 70, 'BRANCH ENTRY', 'middle')),
  };
  const pal = (c, d, g, list) => { const o = {}; Object.keys(list).forEach(k => { o[k] = () => { const s0 = [C, D, G]; C = c; D = d; G = g; const r = list[k](); [C, D, G] = s0; return r; }; }); return o; };
  const ENV = pal('#6fdc9c', '#2f7a52', '#9fb0a7', {
    'Environmental Compliance Checker': () => wrap('e1',
      '<rect x="110" y="36" width="100" height="130" rx="10" stroke="' + C + '" stroke-width="3"/><rect x="138" y="28" width="44" height="16" rx="5" stroke="' + C + '" stroke-width="3"/>' +
      [70, 100, 130].map(y => '<path d="M128 ' + y + 'l7 7 12-13" stroke="' + C + '" stroke-width="3"/><path d="M158 ' + (y + 3) + 'h36" stroke="' + D + '" stroke-width="2"/>').join('')),
    'Emission Rate from Stack Concentration (ppm or mg/m³)': () => wrap('e2',
      '<path d="M120 170V70h30v100" stroke="' + C + '" stroke-width="3"/><path d="M100 170h120" stroke="' + D + '" stroke-width="1.5"/>' +
      '<path d="M135 60c-10-12 6-20 0-32M150 56c10-14 30-10 30-28M180 46c14-6 30 0 40-10" stroke="' + C + '" stroke-width="2.5"/>' + t(230, 120, 'lb/hr', 'start')),
    'GHG Emissions (Scope 1 and Scope 2)': () => wrap('e3',
      '<path d="M60 160h200" stroke="' + D + '" stroke-width="1.5"/><g stroke="' + C + '" stroke-width="3"><rect x="100" y="70" width="40" height="90" rx="4"/><rect x="180" y="100" width="40" height="60" rx="4"/></g>' +
      t(120, 180, 'SCOPE 1', 'middle') + t(200, 180, 'SCOPE 2', 'middle') + t(160, 50, 'CO₂e', 'middle')),
    'SPCC: Applicability and Secondary Containment': () => wrap('e4',
      '<path d="M70 110v50h180v-50" stroke="' + D + '" stroke-width="2.5"/><rect x="110" y="60" width="100" height="90" rx="14" stroke="' + C + '" stroke-width="3"/>' +
      '<path d="M110 85h100" stroke="' + C + '" stroke-width="2"/><path d="M80 150c20-8 40 8 60 0s40-8 60 0 30 8 40 0" stroke="' + C + '" stroke-width="2"/>' + t(160, 190, '110%', 'middle')),
  });
  const SAF = pal('#ff8a80', '#8f1d1d', '#b5a3a3', {
    'Injury and Illness Rates (TRIR, DART, LTCR)': () => wrap('s1',
      '<path d="M60 40v120h210" stroke="' + D + '" stroke-width="1.5"/><path d="M70 140l50-30 40 16 50-50 50 10" stroke="' + C + '" stroke-width="3"/>' +
      '<circle cx="120" cy="110" r="4" fill="' + C + '"/><circle cx="160" cy="126" r="4" fill="' + C + '"/><circle cx="210" cy="76" r="4" fill="' + C + '"/>' + t(165, 182, 'PER 200,000 HRS', 'middle')),
    'Recordability Determination Tool': () => wrap('s2',
      '<rect x="80" y="40" width="160" height="120" rx="10" stroke="' + C + '" stroke-width="3"/><path d="M80 70h160M80 100h160M80 130h160M130 40v120" stroke="' + D + '" stroke-width="1.5"/>' +
      '<path d="M190 108l10 10 22-24" stroke="' + C + '" stroke-width="3.5"/>' + t(160, 182, 'OSHA 300', 'middle')),
  });
  const out = {};
  Object.keys(A).forEach(k => { out[k] = A[k](); });
  Object.keys(ENV).forEach(k => { out[k] = ENV[k](); });
  Object.keys(SAF).forEach(k => { out[k] = SAF[k](); });
  return Object.assign(out, {
    // Noise
    'Sound Pressure Level from Sound Power Level (Feet or Meters)': wrap('a1',
      '<rect x="40" y="80" width="36" height="44" rx="6" stroke="' + C + '" stroke-width="3"/><circle cx="58" cy="102" r="9" stroke="' + C + '" stroke-width="2.5"/>' +
      '<path d="M92 82c10 12 10 28 0 40M108 72c16 18 16 42 0 60M124 62c22 24 22 52 0 76" stroke="' + C + '" stroke-width="3"/>' +
      '<path d="M84 160h180" stroke="' + D + '" stroke-width="1.5" stroke-dasharray="5 6"/><path d="M84 154v12M264 154v12" stroke="' + D + '" stroke-width="1.5"/>' + t(174, 182, 'DISTANCE', 'middle') +
      '<circle cx="258" cy="102" r="14" stroke="' + C + '" stroke-width="3"/><path d="M258 116v22" stroke="' + C + '" stroke-width="3"/>' + t(258, 74, 'Lp', 'middle')),
    'Sound Pressure, Intensity and Power Level': wrap('a2',
      '<path d="M50 150h220" stroke="' + D + '" stroke-width="1.5"/>' +
      '<g stroke="' + C + '" stroke-width="3"><rect x="80" y="100" width="34" height="50" rx="4"/><rect x="143" y="70" width="34" height="80" rx="4"/><rect x="206" y="40" width="34" height="110" rx="4"/></g>' +
      t(97, 170, 'Lp', 'middle') + t(160, 170, 'LI', 'middle') + t(223, 170, 'LW', 'middle') + t(270, 34, 'dB', 'end')),
    'Octave Band Frequencies': wrap('a3',
      '<path d="M40 150h240" stroke="' + D + '" stroke-width="1.5"/>' +
      '<g stroke="' + C + '" stroke-width="2.5">' + [60, 90, 70, 110, 95, 80, 55, 40].map((h, i) => '<rect x="' + (52 + i * 28) + '" y="' + (150 - h) + '" width="20" height="' + h + '" rx="3"/>').join('') + '</g>' +
      ['63', '125', '250', '500', '1k', '2k', '4k', '8k'].map((f, i) => t(62 + i * 28, 168, f, 'middle')).join('') + t(160, 188, 'HZ', 'middle')),
    // Lasers
    'Laser Hazard Evaluation': wrap('b1',
      '<rect x="40" y="88" width="60" height="28" rx="6" stroke="' + C + '" stroke-width="3"/><path d="M100 102h120" stroke="' + C + '" stroke-width="4"/>' +
      '<path d="M100 102l170-40M100 102l170 40" stroke="' + D + '" stroke-width="1.5" stroke-dasharray="5 6"/>' +
      '<path d="M220 70a40 40 0 0 1 0 64" stroke="' + C + '" stroke-width="2.5"/>' + t(250, 106, 'NHZ', 'start') + t(70, 140, 'MPE', 'middle')),
    'Laser Eyewear Optical Density': wrap('b2',
      '<path d="M60 92c0-14 10-22 26-22h44c10 0 14 8 30 8s20-8 30-8h44c16 0 26 8 26 22v14c0 22-16 34-40 34s-40-14-48-30h-24c-8 16-24 30-48 30s-40-12-40-34z" stroke="' + C + '" stroke-width="3"/>' +
      '<path d="M20 104h40" stroke="' + C + '" stroke-width="4"/><path d="M20 104h28" stroke="#ff7a7a" stroke-width="4"/>' + t(160, 172, 'OD 7+', 'middle')),
    'Laser NHZ, Direct Beam': wrap('b3',
      '<rect x="36" y="92" width="50" height="24" rx="5" stroke="' + C + '" stroke-width="3"/>' +
      '<path d="M86 104L280 80M86 104L280 128" stroke="' + C + '" stroke-width="2.5"/><path d="M86 104h194" stroke="' + C + '" stroke-width="1.5" stroke-dasharray="4 5"/>' +
      '<path d="M86 150h150" stroke="' + D + '" stroke-width="1.5"/><path d="M86 144v12M236 144v12" stroke="' + D + '" stroke-width="1.5"/>' + t(161, 172, 'NOHD', 'middle')),
    // Radiation
    'Shielding Calculator HVL / TVL': wrap('c1',
      '<circle cx="60" cy="100" r="12" stroke="' + C + '" stroke-width="3"/><path d="M72 100h70" stroke="' + C + '" stroke-width="4"/>' +
      '<g stroke="' + C + '" stroke-width="2.5"><rect x="142" y="50" width="16" height="100" rx="2"/><rect x="164" y="50" width="16" height="100" rx="2"/><rect x="186" y="50" width="16" height="100" rx="2"/></g>' +
      '<path d="M202 100h70" stroke="' + C + '" stroke-width="1.5" stroke-dasharray="4 5"/>' + t(172, 172, 'HVL · TVL', 'middle')),
    'RF Antenna Hazard': wrap('c2',
      '<path d="M110 170l50-110 50 110M128 130h64M140 104h40" stroke="' + C + '" stroke-width="3"/><circle cx="160" cy="56" r="6" stroke="' + C + '" stroke-width="3"/>' +
      '<path d="M180 40a30 30 0 0 1 0 32M196 28a50 50 0 0 1 0 56M140 40a30 30 0 0 0 0 32M124 28a50 50 0 0 0 0 56" stroke="' + C + '" stroke-width="2.5"/>' + t(270, 180, 'mW/cm²', 'end')),
    'Radioactive Decay and Half-Life': wrap('c3',
      '<path d="M60 40v120h210" stroke="' + D + '" stroke-width="1.5"/>' +
      '<path d="M62 50C100 110 140 140 260 154" stroke="' + C + '" stroke-width="3"/>' +
      '<path d="M100 98v62M140 128v32" stroke="' + G + '" stroke-width="1.5" stroke-dasharray="4 5"/>' + t(100, 178, 'T½', 'middle') + t(140, 178, '2T½', 'middle')),
  });
})();
