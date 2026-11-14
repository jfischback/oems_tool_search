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
