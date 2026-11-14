// How each field is organized into topics.
//
// blurb:  one line on the topic card (taken from the OEMS Squarespace category cards).
// subs:   optional sub-groups on the topic page. Any tool not listed in a sub-group shows under "More tools".
//
// COVERED_BY: single calculators that a combined page already includes.
// They move into the collapsed "Individual calculators" list on the topic page,
// but only while the combined page is live. They always stay in search.

const TOPICS = {
  IH: {
    "Noise": {
      blurb: "Calculate exposure and dose, compare hearing protection options, and share sampling results with employees.",
      subs: {
        "Exposure and Hearing Conservation": ["Noise Exposure and Employee Notification", "Noise Exposure Calculator", "Hearing Protection Picker", "Noise Sampling Notification Template", "Standard Threshold Shift (STS) with Age Correction"],
        "Sound Levels": ["Sound Pressure, Intensity and Power Level", "Decibel Addition Calculator", "Equivalent Continuous Sound Level (Leq)", "Sound Pressure Level Calculator", "Sound Intensity Level Calculator", "Sound Power Level Calculator"],
        "Distance, Barriers and Directivity": ["Sound Pressure Level from Sound Power Level (feet or meters)", "Sound Level Change with Distance", "Transmission Loss Calculator", "Directivity Index Calculator", "Sound Pressure Level from Sound Power Level (feet)", "Sound Pressure Level from Sound Power Level (meters)"],
        "Frequency": ["Octave Band Frequencies", "Frequency from Rotational Speed", "Frequency from Wavelength", "Octave Band Upper Frequency", "Band Center Frequency", "One-Third Octave Band Upper Frequency"]
      }
    },
    "Ventilation": {
      blurb: "Evaluate local exhaust and general ventilation, check capture velocities and airflow, and estimate air changes.",
      subs: {
        "Hoods and Capture": ["Capture Hood Airflow Calculator", "Hood Pressure and Flow", "USEPA Method 204", "Booth", "Canopy Hood", "Plain Opening Hood", "Flanged Opening Hood", "Plain Slot Hood", "Flanged Slot Hood", "Plain Multiple Slot Hood", "Flanged Multiple Slot Hood", "Coefficient of Entry", "Hood Entry Loss", "Hood Flow from SPh", "Hood Static Pressure"],
        "Ducts and Fans": ["Duct Airflow Basics", "Duct Junctions", "Fan Laws Calculator", "Fan Pressure", "Energy Balance", "Volumetric Flow Rate", "Velocity and Velocity Pressure", "Total Pressure", "Continuity", "Junction Balancing", "Junction Resultant VP", "Fan Law 1: Flow", "Fan Law 2: Pressure", "Fan Law 3: Power", "Fan Static Pressure", "Fan Total Pressure"],
        "Room Air and Dilution": ["Room Concentration", "Air Changes per Hour", "Effective Ventilation Rate", "Dilution Air", "Hummel Generation Rate", "Purge", "Concentration Buildup from Zero", "Concentration Buildup or Decay with Generation", "Steady-State Concentration"]
      }
    },
    "Respiratory Protection": { blurb: "Support respirator selection and respiratory protection program decisions." },
    "Radiation": {
      blurb: "Evaluate occupational radiation exposure: shielding, decay and dose, RF and UV.",
      subs: {
        "Shielding": ["Shielding Calculator HVL / TVL", "Inverse Square Law", "Shielding with Buildup Factor", "Half-Value Layer Shielding", "Tenth-Value Layer Shielding", "Shielding by Number of Half-Value Layers", "Shielding by Number of Tenth-Value Layers", "Shield Thickness from HVL"],
        "Decay and Dose": ["Radioactive Decay and Half-Life", "Dose Equivalent", "Gamma Dose Rate from a Point Source", "Dose Summation (TEDE)", "DAC from ALI", "Radioactive Decay", "Activity from Number of Atoms", "Effective Half-Life"],
        "RF": ["RF Antenna Hazard", "RF Spatial Average", "RF Exposure Time Above the EL", "Power Density from Electric Field", "Power Density from Magnetic Field", "Maximum Power Density at Antenna", "RF Distance to Exposure Limit", "Antenna Gain from dB"],
        "UV": ["UV Permissible Exposure Time"]
      }
    },
    "Lasers": { blurb: "Evaluate laser hazards and select laser eye protection." },
    "Conversions": { blurb: "Convert between common industrial hygiene units, such as ppm and mg/m³." },
    "Statistics": { blurb: "Statistical analysis of exposure data." },
    "Exposure Assessment": { blurb: "Evaluate workplace exposures and compare results against occupational exposure limits." }
  },
  Environmental: {
    "Compliance": { blurb: "See which federal environmental programs apply to your site, all in one place." },
    "Air Emissions": { blurb: "Estimate emission rates from stack data, emission factors and mass balance, and check potential to emit." },
    "Greenhouse Gas & Refrigerant": { blurb: "Calculate Scope 1 and Scope 2 emissions and track refrigerant leak rates against repair triggers." },
    "Water & Spill Prevention": { blurb: "Check SPCC applicability, size secondary containment, and estimate wastewater loading and stormwater runoff." },
    "Waste & Chemical Reporting": { blurb: "Determine hazardous waste generator status and check EPCRA Tier II and TRI reporting thresholds." },
    "Noise": { blurb: "Estimate how sound levels drop with distance from a source." }
  },
  Safety: {
    "Injury & Illness Rates": { blurb: "Calculate TRIR, DART and lost time case rates from case counts and hours worked." },
    "Fall Protection": { blurb: "Calculate the clearance needed below an anchor point for a personal fall arrest system." },
    "Lifting & Rigging": { blurb: "Calculate sling leg tension, a combined load's center of gravity, and the percent of crane capacity used." },
    "Recordkeeping": { blurb: "Determine whether an injury or illness is OSHA recordable and what to enter on the 300 log." }
  }
};

const COVERED_BY = {
  // Noise
  "Sound Pressure Level Calculator": "Sound Pressure, Intensity and Power Level",
  "Sound Intensity Level Calculator": "Sound Pressure, Intensity and Power Level",
  "Sound Power Level Calculator": "Sound Pressure, Intensity and Power Level",
  "Sound Pressure Level from Sound Power Level (feet)": "Sound Pressure Level from Sound Power Level (feet or meters)",
  "Sound Pressure Level from Sound Power Level (meters)": "Sound Pressure Level from Sound Power Level (feet or meters)",
  "Octave Band Upper Frequency": "Octave Band Frequencies",
  "Band Center Frequency": "Octave Band Frequencies",
  "One-Third Octave Band Upper Frequency": "Octave Band Frequencies",
  // Ventilation
  "Booth": "Capture Hood Airflow Calculator",
  "Canopy Hood": "Capture Hood Airflow Calculator",
  "Plain Opening Hood": "Capture Hood Airflow Calculator",
  "Flanged Opening Hood": "Capture Hood Airflow Calculator",
  "Plain Slot Hood": "Capture Hood Airflow Calculator",
  "Flanged Slot Hood": "Capture Hood Airflow Calculator",
  "Plain Multiple Slot Hood": "Capture Hood Airflow Calculator",
  "Flanged Multiple Slot Hood": "Capture Hood Airflow Calculator",
  "Coefficient of Entry": "Hood Pressure and Flow",
  "Hood Entry Loss": "Hood Pressure and Flow",
  "Hood Flow from SPh": "Hood Pressure and Flow",
  "Hood Static Pressure": "Hood Pressure and Flow",
  "Volumetric Flow Rate": "Duct Airflow Basics",
  "Velocity and Velocity Pressure": "Duct Airflow Basics",
  "Total Pressure": "Duct Airflow Basics",
  "Continuity": "Duct Airflow Basics",
  "Junction Balancing": "Duct Junctions",
  "Junction Resultant VP": "Duct Junctions",
  "Fan Law 1: Flow": "Fan Laws Calculator",
  "Fan Law 2: Pressure": "Fan Laws Calculator",
  "Fan Law 3: Power": "Fan Laws Calculator",
  "Fan Static Pressure": "Fan Pressure",
  "Fan Total Pressure": "Fan Pressure",
  "Steady-State Concentration": "Room Concentration",
  "Concentration Buildup from Zero": "Room Concentration",
  "Concentration Buildup or Decay with Generation": "Room Concentration",
  "Purge": "Room Concentration",
  // Respiratory
  "Respirator Selection Tool": "Respirator Protection Tool",
  "Assigned Protection Factor Calculator": "Respirator Protection Tool",
  "Maximum Use Concentration (MUC) Calculator": "Respirator Protection Tool",
  // Radiation
  "Half-Value Layer Shielding": "Shielding Calculator HVL / TVL",
  "Tenth-Value Layer Shielding": "Shielding Calculator HVL / TVL",
  "Shielding by Number of Half-Value Layers": "Shielding Calculator HVL / TVL",
  "Shielding by Number of Tenth-Value Layers": "Shielding Calculator HVL / TVL",
  "Shield Thickness from HVL": "Shielding Calculator HVL / TVL",
  "Radioactive Decay": "Radioactive Decay and Half-Life",
  "Activity from Number of Atoms": "Radioactive Decay and Half-Life",
  "Effective Half-Life": "Radioactive Decay and Half-Life",
  "Power Density from Electric Field": "RF Antenna Hazard",
  "Power Density from Magnetic Field": "RF Antenna Hazard",
  "Maximum Power Density at Antenna": "RF Antenna Hazard",
  "RF Distance to Exposure Limit": "RF Antenna Hazard",
  "Antenna Gain from dB": "RF Antenna Hazard",
  // Environmental
  "Emission Rate from Stack Concentration (ppm)": "Emission Rate from Stack Concentration (ppm or mg/m³)",
  "Emission Rate from Stack Concentration (mg/m³)": "Emission Rate from Stack Concentration (ppm or mg/m³)",
  "GHG Fuel Combustion (Scope 1)": "GHG Emissions (Scope 1 and Scope 2)",
  "GHG Purchased Electricity (Scope 2)": "GHG Emissions (Scope 1 and Scope 2)",
  "SPCC Plan Applicability": "SPCC: Applicability and Secondary Containment",
  "SPCC Secondary Containment": "SPCC: Applicability and Secondary Containment",
  // Safety
  "Total Recordable Incident Rate (TRIR)": "Injury and Illness Rates (TRIR, DART, LTCR)",
  "DART Rate": "Injury and Illness Rates (TRIR, DART, LTCR)",
  "Lost Time Case Rate (LTCR)": "Injury and Illness Rates (TRIR, DART, LTCR)"
};

// A single calculator is tucked away only while the combined page that includes it is live.
function isTucked(t) {
  const parent = COVERED_BY[t.name];
  if (!parent) return false;
  const p = TOOLS.find(x => x.name === parent);
  return !!(p && p.url);
}

function topicSlug(cat) { return cat.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
function topicHref(group, cat) { return 'topic.html?g=' + GROUPS[group].slug + '&t=' + topicSlug(cat); }

// Industrial Hygiene home: the IH workflow, in order. Each step opens its own page.
// items:  exact tool names, in the order shown.
// topic:  a whole topic (its sub-groups become sections), minus tools already placed in another step.
// sub:    [topic, sub-group] from TOPICS above.
// rest:   everything not placed in another step.
// A tool listed by name in two steps (like Exposure Statistics Tool in Analyze and Control) shows in both.
const STEPS = {
  IH: [
    { slug: "assess", name: "Assess", kicker: "Exposure assessments", cta: "Start an assessment", includes: ["Manufacturing", "Non-manufacturing", "Noise"],
      blurb: "Run a workplace exposure assessment and find out who is exposed, to what, and how much.",
      sections: [
        { name: "Exposure Assessments", items: ["Manufacturing Exposure Assessment", "Non-Manufacturing Exposure Assessment"] },
        { name: "Noise", items: ["Noise Exposure and Employee Notification", "Noise Exposure Calculator"] }
      ],
      // The Assess page shows these as big "pick your assessment" cards
      cards: [
        { tool: "Manufacturing Exposure Assessment", title: "Manufacturing" },
        { tool: "Non-Manufacturing Exposure Assessment", title: "Non-Manufacturing" },
        { tool: "Noise Exposure and Employee Notification", title: "Noise", topic: "Noise", kicker: "Exposure assessment",
          desc: "Calculate each employee's noise exposure, then produce the notification of the result.",
          outputs: ["8-hour TWA and percent dose", "Time allowed and task-by-task dose", "Employee notification of the result"],
          also: "Noise Exposure Calculator" }
      ] },
    { slug: "plan", name: "Plan", kicker: "Sampling plans", cta: "Plan sampling", includes: ["Sampling plans", "Exposure modeling"],
      blurb: "Build a sampling plan and model expected exposures before you go to the field.",
      sections: [
        { name: "Sampling", items: ["Sampling Plan Creator"] },
        { name: "Exposure Modeling", items: ["Room Concentration", "Hummel Generation Rate", "Steady-State Concentration", "Concentration Buildup from Zero", "Concentration Buildup or Decay with Generation", "Purge"] }
      ] },
    { slug: "analyze", name: "Analyze", kicker: "Sampling results", cta: "Analyze results", includes: ["Exposure statistics", "Employee notification"],
      blurb: "Run statistics on your sample results, make the call against the OEL, and notify employees.",
      sections: [
        { name: "Sampling Results", items: ["Exposure Statistics Tool", "Noise Sampling Notification Template"] }
      ] },
    { slug: "control", name: "Control", kicker: "Exposure controls", cta: "Choose controls", includes: ["Ventilation", "Shielding", "Respirators", "Hearing protection", "Confirm it's working"],
      blurb: "Design the controls that bring exposures down, then confirm they are working.",
      sections: [
        { name: "Ventilation", topic: "Ventilation" },
        { name: "Radiation Shielding", sub: ["Radiation", "Shielding"] },
        { name: "Respiratory Protection", topic: "Respiratory Protection" },
        { name: "Hearing Protection", items: ["Hearing Protection Picker"] },
        { name: "Confirm It's Working", items: ["Hood Pressure and Flow", "Exposure Statistics Tool"] }
      ] },
    { slug: "tools", name: "Tools", blurb: "Reference calculators: noise math, radiation, lasers and unit conversions.", rest: true }
  ]
};

// Turns a step into sections: [{ eyebrow, name, tools }]
function stepSections(group, step) {
  const all = TOOLS.filter(t => t.group === group);
  const byName = n => all.find(t => t.name === n);
  const claimed = new Set();
  // explicit items in every step are claimed first
  STEPS[group].forEach(st => (st.sections || []).forEach(sec => (sec.items || []).forEach(n => claimed.add(n))));
  const subsOf = topic => ((TOPICS[group] || {})[topic] || {}).subs;
  const topicSections = (topic, eyebrowName, skip) => {
    const subs = subsOf(topic), out = [];
    const tools = all.filter(t => t.category === topic && !skip.has(t.name));
    if (subs) {
      const placed = new Set();
      for (const [sub, names] of Object.entries(subs)) {
        const list = names.map(byName).filter(t => t && t.category === topic && !skip.has(t.name));
        list.forEach(t => placed.add(t.name));
        if (list.length) out.push({ eyebrow: eyebrowName, name: sub, tools: list });
      }
      const left = tools.filter(t => !placed.has(t.name));
      if (left.length) out.push({ eyebrow: eyebrowName, name: "More " + topic.toLowerCase() + " tools", tools: left });
    } else if (tools.length) out.push({ eyebrow: "", name: eyebrowName, tools });
    return out;
  };
  // tools claimed by sub / topic sections of non-rest steps
  const claimedByStructure = new Set(claimed);
  STEPS[group].forEach(st => (st.sections || []).forEach(sec => {
    if (sec.sub) ((subsOf(sec.sub[0]) || {})[sec.sub[1]] || []).forEach(n => claimedByStructure.add(n));
    if (sec.topic) all.filter(t => t.category === sec.topic).forEach(t => claimedByStructure.add(t.name));
  }));
  if (step.rest) {
    const left = all.filter(t => !claimedByStructure.has(t.name));
    const cats = [...new Set(left.map(t => t.category))];
    return cats.flatMap(c => topicSections(c, c, claimedByStructure));
  }
  const out = [];
  for (const sec of step.sections) {
    if (sec.items) { const list = sec.items.map(byName).filter(Boolean); if (list.length) out.push({ eyebrow: "", name: sec.name, tools: list }); }
    else if (sec.sub) { const list = ((subsOf(sec.sub[0]) || {})[sec.sub[1]] || []).map(byName).filter(t => t && !claimed.has(t.name)); if (list.length) out.push({ eyebrow: "", name: sec.name, tools: list }); }
    else if (sec.topic) out.push(...topicSections(sec.topic, sec.name, claimed));
  }
  return out;
}

// Icons for the workflow steps
const STEP_ICONS = {
  assess: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M1 12h4M19 12h4"/>',
  plan: '<circle cx="5" cy="18" r="2"/><circle cx="19" cy="6" r="2"/><path d="M7 18h4a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3h0"/><path d="M12 3h-2M4 9V7"/>',
  analyze: '<path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 6-7"/><circle cx="20" cy="6" r="1.5"/>',
  control: '<path d="M12 2l8 3v6c0 5-3.4 9.3-8 11-4.6-1.7-8-6-8-11V5z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  tools: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>'
};
function stepIcon(slug, color) { return '<svg viewBox="0 0 24 24" fill="none" stroke="' + color + '" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + (STEP_ICONS[slug] || '') + '</svg>'; }

// Programs row on the IH home. Each opens a program page: featured tools in big cards, then all of the topic's tools.
const PROGRAMS = {
  IH: [
    { slug: "hearing", name: "Hearing Conservation", topic: "Noise", blurb: "Noise exposure, hearing protection, audiograms and employee notification.",
      featured: ["Noise Exposure and Employee Notification", "Hearing Protection Picker", "Standard Threshold Shift (STS) with Age Correction"] },
    { slug: "respiratory", name: "Respiratory Protection", topic: "Respiratory Protection", blurb: "Respirator selection, assigned protection factors and maximum use concentrations.",
      featured: ["Respirator Selection Tool", "Maximum Use Concentration (MUC) Calculator", "Assigned Protection Factor Calculator"] },
    { slug: "radiation", name: "Radiation", topic: "Radiation", blurb: "Shielding, decay and dose, RF antenna hazards and UV exposure.",
      featured: ["Shielding Calculator HVL / TVL", "RF Antenna Hazard", "Radioactive Decay and Half-Life"] },
    { slug: "lasers", name: "Lasers", topic: "Lasers", blurb: "Laser hazard evaluation, hazard zones and laser eyewear.",
      featured: ["Laser Hazard Evaluation", "Laser Eyewear Optical Density", "Laser NHZ, Direct Beam"] }
  ]
};

// Big card used on the Assess page and for program featured tools
function bigCard(t, o, th) {
  o = o || {};
  if (!t) return '';
  const kick = o.kicker || t.category;
  const title = o.title || t.name;
  const outs = (o.outputs || []).map(x => '<li>' + esc(x) + '</li>').join('');
  const also = o.also ? TOOLS.find(x => x.name === o.also) : null;
  const btn = t.url ? '<a class="bbtn" href="' + esc(t.url) + '">' + esc(o.cta || 'Start') + ' <i>→</i></a>' : '<span class="bbtn soon">Coming soon</span>';
  return '<div class="bcard' + (t.url ? '' : ' is-soon') + '">' +
    '<span class="sic">' + icon(o.topic || t.category, th.label) + '</span>' +
    '<small class="kick">' + esc(kick) + '</small><h3>' + esc(title) + '</h3>' +
    (o.title && o.title !== t.name ? '<div class="bsub">' + esc(t.name) + '</div>' : '') +
    '<p>' + esc(o.desc || t.description) + '</p>' + (outs ? '<ul class="inc">' + outs + '</ul>' : '') +
    '<div class="bfoot">' + btn + (also && also.url ? '<a class="balso" href="' + esc(also.url) + '">Or open the ' + esc(also.name) + ' on its own →</a>' : '') + '</div></div>';
}
