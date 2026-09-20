/* =============================================
   ZERO DROP DOCUMENTATION — app.js
   SPA navigation, page content, search, TOC
   ============================================= */

// ── PAGE REGISTRY ─────────────────────────────
const PAGES = {

  /* ─── HOME ─────────────────────────────────── */
  'home': {
    title: 'Introduction',
    category: 'Get Started',
    breadcrumb: ['Docs', 'Get Started', 'Introduction'],
    prev: null,
    next: { page: 'what-is-zerodrop', label: 'What is Zero Drop?' },
    content: () => `
<div class="doc-hero">
  <div class="hero-badge">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
    Dairy Health Intelligence Platform
  </div>
  <h1>Zero Drop Documentation</h1>
  <p class="hero-lead">AI-powered early bovine mastitis forecasting and livestock health intelligence for modern dairy operations. Zero Drop unifies animal bio-telemetry, milk electrical conductivity, somatic cell counts, IoT sensor signals, and historical health records into actionable risk predictions up to 14 days before clinical symptoms manifest.</p>
</div>

${callout('note', 'About this Documentation', 'This comprehensive documentation suite details the Zero Drop platform architecture, XGBoost prediction engine, SHAP model explainability, hardware sensor integration, REST APIs, and farm deployment operations. It is designed for software developers, ML engineers, dairy farm managers, and veterinary healthcare professionals.')}

<h2 id="overview">Platform Mission &amp; Scope</h2>
<p>Bovine mastitis is the single largest cause of economic loss in global dairy production, costing the industry over $32 billion annually in reduced milk yield, discarded milk, premature culling, and treatment expenses. Traditional detection relies on visual inspection or reactive somatic cell count testing—by which time permanent udder tissue damage has often occurred.</p>

<p>Zero Drop transforms dairy herd management from reactive treatment to proactive prevention through continuous multi-modal data fusion and gradient-boosted machine learning.</p>

<div class="is-not-grid">
  <div class="is-not-card is-card">
    <div class="is-not-card-header">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      What Zero Drop IS
    </div>
    <ul class="is-not-list">
      <li>Subclinical mastitis risk forecasting 7–14 days in advance</li>
      <li>Explainable AI detailing exact physiological risk drivers per animal</li>
      <li>Multi-sensor IoT integration (rumination, temp, activity, milk EC)</li>
      <li>Actionable, plain-language operational guidance in 9 languages</li>
      <li>Offline-first mobile synchronization for remote dairy farms</li>
    </ul>
  </div>
  <div class="is-not-card not-card">
    <div class="is-not-card-header">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      What Zero Drop IS NOT
    </div>
    <ul class="is-not-list">
      <li>A standalone automated veterinary diagnostic system</li>
      <li>A replacement for licensed veterinary clinical examination</li>
      <li>A prescription generator for antimicrobial drugs</li>
      <li>A proprietary hardware lock-in ecosystem (open sensor REST API)</li>
      <li>A cloud-only platform requiring continuous high-speed internet</li>
    </ul>
  </div>
</div>

<h2 id="explore">Documentation Map</h2>

<div class="card-grid">
  ${docCard('get-started', '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>', 'Get Started', 'Comprehensive onboarding, system architecture, hardware setup, and core concepts.')}
  ${docCard('dashboard', '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>', 'Platform', 'Explore herd dashboards, risk heatmaps, smart belt IoT controls, and alert dispatch.')}
  ${docCard('ai-overview', '<circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>', 'AI &amp; Machine Learning', 'Technical deep-dive into XGBoost feature engineering, SHAP attributions, and Gemini LLM prompts.')}
  ${docCard('hardware-overview', '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>', 'IoT &amp; Hardware', 'Specifications for smart neck belts, inline milk sensors, BLE/LoRaWAN gateways, and ESP32 nodes.')}
  ${docCard('api-authentication', '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>', 'API Reference', 'Complete REST API documentation, OpenAPI 3.0 schemas, authentication, and webhooks.')}
  ${docCard('system-architecture', '<polygon points="12 2 2 7 2 17 12 22 22 17 22 7 12 2"/>', 'Architecture', 'End-to-end data pipeline, TimescaleDB schema, microservices, and security boundaries.')}
</div>

<h2 id="data-sources">Multi-Modal Data Streams</h2>
<p>Zero Drop ingests continuous, periodic, and event-based data streams to form a 360-degree digital twin for every animal in the herd:</p>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Category</th><th>Data Stream</th><th>Collection Frequency</th><th>Primary Signal</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Bio-Telemetry</strong></td><td>Subcutaneous / Surface Temperature</td><td>Every 5 minutes (Bluetooth/LoRa)</td><td>Early inflammatory fever spikes (&gt;39.5°C)</td></tr>
      <tr><td><strong>Behavioral IoT</strong></td><td>Rumination Time &amp; Activity Index</td><td>Continuous 50Hz IMU sampling</td><td>Loss of appetite, lethargy, discomfort</td></tr>
      <tr><td><strong>Milk Diagnostics</strong></td><td>Electrical Conductivity &amp; SCC</td><td>During each milking session</td><td>Ion imbalance caused by udder inflammation</td></tr>
      <tr><td><strong>Farm Records</strong></td><td>Lactation Stage, Parity, Past Disease</td><td>Periodic updates (REST/CSV)</td><td>Base susceptibility risk weighting</td></tr>
      <tr><td><strong>Environment</strong></td><td>Temperature Humidity Index (THI)</td><td>Hourly weather service / sensor</td><td>Heat stress compounding factor</td></tr>
    </tbody>
  </table>
</div>

<h2 id="core-workflow">End-to-End Operational Pipeline</h2>
<p>The platform follows a rigorous 7-stage processing workflow from raw sensor telemetry to farmer action:</p>

${workflowDiagram([
      ['1. Sense', 'IoT smart belts and inline milk monitors sample physiological signals 24/7.'],
      ['2. Ingest', 'Edge gateways compress, encrypt (TLS 1.3), and stream payloads via MQTT/HTTPS.'],
      ['3. Process', 'TimescaleDB pipeline cleans, deduplicates, and aligns asynchronous time-series signals.'],
      ['4. Engineer', 'Feature pipeline computes rolling 12h/24h/72h deltas, baseline ratios, and SCC trends.'],
      ['5. Score', 'XGBoost classifier outputs a normalized 0–100 mastitis probability index.'],
      ['6. Explain', 'SHAP engine isolates top 3 physiological drivers pushing risk above threshold.'],
      ['7. Advise', 'Gemini LLM synthesizes SHAP drivers into plain-language farmer action guides.'],
    ])}

<h2 id="farm-scales">Farm Scale Applicability</h2>
<p>Zero Drop scales flexibly across diverse agricultural environments:</p>
<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Scale Tier</th><th>Herd Size</th><th>Primary Interface</th><th>Recommended Connectivity</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Smallholder Farm</strong></td><td>1 – 10 cows</td><td>Mobile App (Android/iOS) + BLE sync</td><td>Offline storage + periodic cellular sync</td></tr>
      <tr><td><strong>Cooperative / Cluster</strong></td><td>10 – 100 cows</td><td>Web Dashboard + Village Gateway</td><td>LoRaWAN Gateway (2km range)</td></tr>
      <tr><td><strong>Commercial Enterprise</strong></td><td>100 – 5,000+ cows</td><td>Full Cloud API + Edge Server</td><td>Dedicated Wi-Fi / Private Cellular + MQTT</td></tr>
    </tbody>
  </table>
</div>

<h2 id="disclaimer">Important Veterinary Notice</h2>
${callout('warning', 'Not a Veterinary Diagnostic System', 'Zero Drop provides quantitative risk forecasting to support clinical decision-making. It does not issue clinical veterinary diagnoses or authorize therapeutic treatment plans. Always consult a licensed veterinarian when physical symptoms (udder swelling, clot formation, systemic fever) are observed.')}
    `
  },

  /* ─── WHAT IS ZERO DROP ─────────────────────── */
  'what-is-zerodrop': {
    title: 'What is Zero Drop?',
    category: 'Get Started',
    breadcrumb: ['Docs', 'Get Started', 'What is Zero Drop?'],
    prev: { page: 'home', label: 'Introduction' },
    next: { page: 'how-it-works', label: 'How It Works' },
    content: () => `
<h1 id="what-is-zerodrop">What is Zero Drop?</h1>
<p class="lead">Zero Drop is a predictive health intelligence system engineered specifically for dairy livestock. By analyzing subtle physiological anomalies before external signs appear, it empowers farmers to protect herd health and maximize milk yield.</p>

<h2 id="the-problem">The Industry Challenge: Subclinical Mastitis</h2>
<p>Bovine mastitis occurs in two distinct clinical phases:</p>

<ol>
  <li><strong>Clinical Mastitis:</strong> Visible swelling, redness, pain, and obvious clots or flakes in milk. At this stage, severe tissue damage has already occurred, milk production drops precipitously, and costly antibiotic regimens are mandatory.</li>
  <li><strong>Subclinical Mastitis:</strong> Udder inflammation without visible changes in milk or udder appearance. The animal appears outwardly healthy, yet somatic cell count (SCC) rises, milk electrical conductivity increases, rumination drops, and milk yield suffers silent degradation.</li>
</ol>

<p>Subclinical mastitis accounts for <strong>70% to 80% of total financial losses</strong> associated with mastitis. Because smallholder and mid-scale farms rarely perform daily laboratory SCC tests, subclinical infections spread silently across herds.</p>

<h2 id="the-solution">The Zero Drop Solution</h2>
<p>Zero Drop bridges this detection gap through continuous telemetry and machine learning. Rather than relying on a single test, Zero Drop correlates multiple indirect physiological indicators over time.</p>

<div class="arch-diagram">
  <div style="text-align:center;padding:12px 0;">
    <div style="display:inline-flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-bottom:18px;">
      <div class="arch-node primary">Smart Belt IMU (Rumination/Activity)</div>
      <div class="arch-node primary">Infrared Temp Sensor</div>
      <div class="arch-node primary">Milk Electrical Conductivity</div>
      <div class="arch-node primary">Historical Health Logs</div>
    </div>
    <div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>
    <div style="display:flex;justify-content:center;margin:8px 0;"><div class="arch-node primary" style="font-size:15px;padding:14px 36px;background:var(--green-light);border-color:var(--green-primary);color:var(--green-dark);">Zero Drop Machine Learning Pipeline (XGBoost + SHAP)</div></div>
    <div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>
    <div style="display:inline-flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:18px;">
      <div class="arch-node">Early Risk Alert (0-100 Score)</div>
      <div class="arch-node">SHAP Feature Explanation</div>
      <div class="arch-node">Actionable Recommendation</div>
    </div>
  </div>
</div>

<h2 id="key-capabilities">Core Platform Capabilities</h2>

<div class="concept-grid">
  <div class="concept-card">
    <div class="concept-card-term">PREDICTIVE AI</div>
    <div class="concept-card-title">Early Warning Engine</div>
    <p class="concept-card-desc">Forecasting elevated mastitis risk 7 to 14 days prior to clinical onset using calibrated gradient-boosted decision trees.</p>
  </div>
  <div class="concept-card">
    <div class="concept-card-term">EXPLAINABILITY</div>
    <div class="concept-card-title">SHAP Diagnostics</div>
    <p class="concept-card-desc">Transparent feature attribution breakdown explaining why a specific cow received a high-risk score.</p>
  </div>
  <div class="concept-card">
    <div class="concept-card-term">MULTI-SENSOR</div>
    <div class="concept-card-title">IoT Telemetry Integration</div>
    <p class="concept-card-desc">Seamless ingestion of Bluetooth 5.0 and LoRaWAN sensor data from neck belts, ear tags, and inline milk meters.</p>
  </div>
  <div class="concept-card">
    <div class="concept-card-term">LOCALIZATION</div>
    <div class="concept-card-title">9 Indian Languages</div>
    <p class="concept-card-desc">Full voice and text support in English, Hindi, Marathi, Gujarati, Punjabi, Tamil, Telugu, Kannada, and Malayalam.</p>
  </div>
</div>

<h2 id="stage-comparison">Subclinical vs Clinical Stage Detection</h2>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Metric / Aspect</th><th>Subclinical Phase (Zero Drop Target)</th><th>Clinical Phase (Late Detection)</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Udder Appearance</strong></td><td>Normal; no swelling or pain</td><td>Swollen, hot, firm, painful to touch</td></tr>
      <tr><td><strong>Milk Appearance</strong></td><td>Visually normal</td><td>Flakes, clots, watery, blood-tinged</td></tr>
      <tr><td><strong>Milk Conductivity</strong></td><td>Slight elevation (&gt;5.5 mS/cm)</td><td>High elevation (&gt;6.8 mS/cm)</td></tr>
      <tr><td><strong>Somatic Cell Count</strong></td><td>200,000 – 750,000 cells/mL</td><td>&gt;1,000,000 cells/mL</td></tr>
      <tr><td><strong>Rumination Delta</strong></td><td>15% – 30% reduction</td><td>&gt;50% reduction or cessation</td></tr>
      <tr><td><strong>Intervention Window</strong></td><td><span class="tag-supported">Optimal (Pre-Antibiotic)</span></td><td>Late (Antibiotic required)</td></tr>
      <tr><td><strong>Economic Loss</strong></td><td>Minimal (reversible yield impact)</td><td>High (discarded milk &amp; treatment)</td></tr>
    </tbody>
  </table>
</div>

<h2 id="target-ecosystem">Target Deployment Ecosystem</h2>
<p>Zero Drop is tailored for the Indian dairy landscape, which produces over 220 million tonnes of milk annually across 80+ million smallholder farming families. The system accommodates low-bandwidth connectivity, high ambient temperatures, and varied cattle breeds (Bos indicus / Gir, Sahiwal, Red Sindhi, as well as Crossbred HF/Jersey and Murrah Buffaloes).</p>
    `
  },

  /* ─── HOW IT WORKS ─────────────────────────── */
  'how-it-works': {
    title: 'How It Works',
    category: 'Get Started',
    breadcrumb: ['Docs', 'Get Started', 'How It Works'],
    prev: { page: 'what-is-zerodrop', label: 'What is Zero Drop?' },
    next: { page: 'quick-start', label: 'Quick Start' },
    content: () => `
<h1 id="how-it-works">How It Works</h1>
<p class="lead">A deep dive into Zero Drop's end-to-end data processing pipeline, feature extraction windowing, machine learning inference, and explainability layer.</p>

<h2 id="pipeline-architecture">Pipeline Architecture</h2>
<p>Zero Drop converts heterogeneous telemetry into calibrated risk predictions through a sequential 7-step pipeline:</p>

<div class="arch-diagram">
  <div style="font-family:var(--font-mono);font-size:13px;line-height:2.2;">
    <span style="color:var(--green-primary);font-weight:700;">[1. Edge Sensing]</span> Raw IMU (50Hz), Temperature, &amp; Milk EC<br>
    &nbsp;&nbsp;&nbsp;│<br>
    &nbsp;&nbsp;&nbsp;▼<br>
    <span style="color:var(--green-primary);font-weight:700;">[2. Data Cleaning]</span> Range validation, outlier removal, missing value imputation<br>
    &nbsp;&nbsp;&nbsp;│<br>
    &nbsp;&nbsp;&nbsp;▼<br>
    <span style="color:var(--green-primary);font-weight:700;">[3. Feature Engineering]</span> Rolling 12h/24h/72h window aggregations &amp; baseline deltas<br>
    &nbsp;&nbsp;&nbsp;│<br>
    &nbsp;&nbsp;&nbsp;▼<br>
    <span style="color:var(--green-primary);font-weight:700;">[4. XGBoost Inference]</span> Gradient boosted decision tree scoring (0–100 index)<br>
    &nbsp;&nbsp;&nbsp;│<br>
    &nbsp;&nbsp;&nbsp;▼<br>
    <span style="color:var(--green-primary);font-weight:700;">[5. SHAP Explainability]</span> TreeSHAP calculation isolating top 3 risk factors<br>
    &nbsp;&nbsp;&nbsp;│<br>
    &nbsp;&nbsp;&nbsp;▼<br>
    <span style="color:var(--green-primary);font-weight:700;">[6. LLM Synthesis]</span> Gemini generation of localized, non-clinical advice<br>
    &nbsp;&nbsp;&nbsp;│<br>
    &nbsp;&nbsp;&nbsp;▼<br>
    <span style="color:var(--green-primary);font-weight:700;">[7. Alert Dispatch]</span> WebSocket push, SMS, and offline DB update
  </div>
</div>

<h2 id="step1">Step 1 — Edge Sensing &amp; Ingestion</h2>
<p>Sensors attached to the animal smart neck belt and inline milking equipment record physical measurements at fixed intervals:</p>
<ul>
  <li><strong>MPU6050 Accelerometer/Gyroscope:</strong> Samples at 50Hz on-device. An embedded micro-algorithm classifies raw motion into active chewing (rumination), resting, grazing, or head-tossing.</li>
  <li><strong>MLX90614 Infrared Sensor:</strong> Measures surface subcutaneous skin temperature over the carotid artery every 5 minutes.</li>
  <li><strong>Inline Conductivity Cell:</strong> Measures milk electrical conductivity ($mS/cm$) per quarter during milking.</li>
</ul>

<h2 id="step2">Step 2 — Data Cleaning &amp; Validation</h2>
<p>Inbound telemetry passes through hard range checks to reject sensor faults or corrupted wireless packets:</p>

${codeBlock('python', 'def sanitize_telemetry(payload: dict) -> dict:\n    """Validates raw sensor payload boundaries before DB insertion."""\n    temp = payload.get("temperature_c")\n    rumination = payload.get("rumination_minutes_12h")\n    ec = payload.get("milk_conductivity_ms")\n    \n    # Physiologically impossible range rejection\n    if temp and not (35.0 <= temp <= 43.0):\n        payload["temperature_c"] = None\n    if rumination and not (0 <= rumination <= 720):\n        payload["rumination_minutes_12h"] = None\n    if ec and not (1.0 <= ec <= 15.0):\n        payload["milk_conductivity_ms"] = None\n        \n    return payload')}

<h2 id="step3">Step 3 — Feature Engineering Matrix</h2>
<p>Raw values are converted into relative metrics compared against each cow's individual 14-day rolling baseline:</p>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Feature Name</th><th>Window</th><th>Calculation Method</th><th>Clinical Significance</th></tr>
    </thead>
    <tbody>
      <tr><td><code>temp_delta_24h</code></td><td>24 Hours</td><td>Current temp minus 14-day median temp</td><td>Detects low-grade inflammatory fever</td></tr>
      <tr><td><code>rumination_ratio_72h</code></td><td>72 Hours</td><td>72h total rumination / baseline rumination</td><td>Measures digestive slowdown from malaise</td></tr>
      <tr><td><code>ec_quarter_ratio</code></td><td>Milking Session</td><td>Max quarter conductivity / Min quarter conductivity</td><td>High inter-quarter variance indicates focal mastitis</td></tr>
      <tr><td><code>scc_trend_3session</code></td><td>3 Sessions</td><td>Slope of SCC over last 3 tests</td><td>Tracks rapid somatic cell proliferation</td></tr>
      <tr><td><code>yield_drop_pct</code></td><td>24 Hours</td><td>(Baseline yield - Current yield) / Baseline yield</td><td>Monitors loss of secretory tissue efficiency</td></tr>
      <tr><td><code>days_in_milk</code></td><td>Static</td><td>Current Date minus Calving Date</td><td>High-risk periods (peak lactation vs dry-off)</td></tr>
    </tbody>
  </table>
</div>

<h2 id="step4">Step 4 — XGBoost Prediction Engine</h2>
<p>The feature vector is evaluated by a trained XGBoost ensemble model. The output is a probability score scaled from <strong>0 (Optimal Health) to 100 (Severe Imminent Risk)</strong>.</p>

${codeBlock('python', '# Ingestion prediction pipeline execution\nimport xgboost as xgb\n\nfeature_vector = np.array([[temp_delta, rum_ratio, ec_ratio, scc_slope, yield_drop, dim]])\nraw_prob = model.predict_proba(feature_vector)[0][1]\nrisk_score = int(round(raw_prob * 100))')}

<h2 id="step5">Step 5 — SHAP Feature Attribution</h2>
<p>To avoid "black-box" predictions, TreeSHAP calculates the exact contribution of each feature to the final score:</p>

${codeBlock('python', 'import shap\n\nexplainer = shap.TreeExplainer(model)\nshap_values = explainer.shap_values(feature_vector)\n\n# Extract top 3 positive contributors pushing risk score UP\ntop_factors = get_top_positive_shap_features(shap_values, feature_names, top_n=3)')}

<h2 id="step6">Step 6 — LLM Advice Synthesis</h2>
<p>If the risk score exceeds 40 (Moderate Risk threshold), Zero Drop passes the top SHAP attributions to Gemini to generate actionable, localized guidance:</p>

${codeBlock('text', 'INPUT TO GEMINI:\nAnimal Tag: #COW-4029 | Breed: Gir | Risk Score: 68 (Moderate)\nTop SHAP Drivers:\n1. Milk EC Quarter Ratio +28% above baseline (Left Rear quarter highest)\n2. Rumination time dropped 22% over 48h\n3. Subcutaneous temp +0.8°C above baseline\n\nGENERATED OUTPUT:\n"Cow #4029 shows early signs of localized udder inflammation, particularly in the left-rear quarter. Her milk electrical conductivity is elevated and rumination has dropped. Recommended: Perform a California Mastitis Test (CMT) on the left-rear teat during the next milking session and check udder warmth."')}
    `
  },

  /* ─── QUICK START ───────────────────────────── */
  'quick-start': {
    title: 'Quick Start',
    category: 'Get Started',
    breadcrumb: ['Docs', 'Get Started', 'Quick Start'],
    prev: { page: 'how-it-works', label: 'How It Works' },
    next: { page: 'system-requirements', label: 'System Requirements' },
    content: () => `
<h1 id="quick-start">Quick Start</h1>
<p class="lead">Step-by-step developer guide to initializing the Zero Drop local development environment, running backend microservices, launching the ML prediction pipeline, and starting the React web dashboard.</p>

${callout('warning', 'Developer Setup', 'This guide is for developers configuring local development environments or test clusters. Farm operators use hosted dashboards and pre-installed mobile apps.')}

<h2 id="prerequisites">Prerequisites &amp; Environment Setup</h2>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Tool / Component</th><th>Required Version</th><th>Verification Command</th></tr>
    </thead>
    <tbody>
      <tr><td><code>Node.js</code></td><td>18.x LTS or 20.x</td><td><code>node -v</code></td></tr>
      <tr><td><code>Python</code></td><td>3.10.x or 3.11.x</td><td><code>python3 --version</code></td></tr>
      <tr><td><code>PostgreSQL</code> + TimescaleDB extension</td><td>14.x + Timescale 2.11+</td><td><code>psql --version</code></td></tr>
      <tr><td><code>Redis</code></td><td>7.0+</td><td><code>redis-cli ping</code></td></tr>
      <tr><td><code>Docker Desktop</code> (Optional)</td><td>24.0+</td><td><code>docker --version</code></td></tr>
    </tbody>
  </table>
</div>

<div class="step-timeline">
  <div class="step-timeline-item">
    <div class="step-timeline-num">1</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Repository Cloning &amp; Structure</div>
      <div class="step-timeline-body">
        <p>Clone the Zero Drop monorepo and inspect the component workspace:</p>
        ${codeBlock('bash', 'git clone https://github.com/zero-drop/zero-drop-platform.git\ncd zero-drop-platform')}
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">2</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Backend API Setup (Django REST Framework)</div>
      <div class="step-timeline-body">
        <p>Initialize the Python virtual environment, install requirements, and set up your local PostgreSQL database:</p>
        ${codeBlock('bash', 'cd backend\npython3 -m venv venv\nsource venv/bin/activate  # Windows: venv\\Scripts\\activate\n\npip install --upgrade pip\npip install -r requirements.txt\n\n# Configure local database environment\ncp .env.example .env\n\n# Apply database migrations and seed default farm tags\npython manage.py migrate\npython manage.py loaddata seed_demo_farm.json\n\n# Start API server on port 8000\npython manage.py runserver 0.0.0.0:8000')}
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">3</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">AI Engine &amp; Feature Store Initialization</div>
      <div class="step-timeline-body">
        <p>Install machine learning dependencies and verify model artifact loading:</p>
        ${codeBlock('bash', 'cd ../ml-engine\npip install -r requirements.txt\n\n# Run model self-test & SHAP explainer calibration\npython test_model_pipeline.py\n\n# Expected Output:\n# [INFO] XGBoost Model v2.4 Loaded Successfully. AUC-ROC: 0.962\n# [INFO] SHAP TreeExplainer ready. Test inference completed in 4.2ms.')}
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">4</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Frontend Web Dashboard Setup (Vite + React)</div>
      <div class="step-timeline-body">
        <p>Install Node dependencies and start the Vite development server:</p>
        ${codeBlock('bash', 'cd ../frontend\nnpm install\nnpm run dev\n\n# Web dashboard running at http://localhost:5173')}
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">5</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">IoT Telemetry Payload Emulator (Optional)</div>
      <div class="step-timeline-body">
        <p>To test real-time WebSocket alerts without physical smart belts, run the sensor emulator script:</p>
        ${codeBlock('bash', 'cd ../hardware/emulator\npython sensor_emulator.py --cows 25 --interval-sec 5\n\n# Simulates 25 IoT smart belts streaming telemetry over MQTT to localhost:1883')}
      </div>
    </div>
  </div>
</div>

<h2 id="repo-structure">Monorepo Project Layout</h2>

<div class="repo-tree">
<span class="tree-dir">zero-drop-platform/</span>
│
├── <span class="tree-dir">backend/</span>             <span class="tree-comment"># Django REST API, Auth, Database ORM models</span>
│   ├── <span class="tree-dir">animals/</span>          <span class="tree-comment"># Animal registry &amp; lactation tracking</span>
│   ├── <span class="tree-dir">predictions/</span>      <span class="tree-comment"># Ingestion webhook &amp; XGBoost wrapper</span>
│   ├── <span class="tree-dir">alerts/</span>           <span class="tree-comment"># Push/SMS notification service</span>
│   └── <span class="tree-file">requirements.txt</span>
│
├── <span class="tree-dir">frontend/</span>            <span class="tree-comment"># React + TypeScript + Vite UI dashboard</span>
│   ├── <span class="tree-dir">src/components/</span>   <span class="tree-comment"># Reusable chart &amp; card components</span>
│   ├── <span class="tree-dir">src/pages/</span>        <span class="tree-comment"># Dashboard, Herd, IoT, Risk Map views</span>
│   └── <span class="tree-file">package.json</span>
│
├── <span class="tree-dir">ml-engine/</span>           <span class="tree-comment"># Model training, SHAP attribution, feature extraction</span>
│   ├── <span class="tree-dir">models/</span>           <span class="tree-comment"># Serialized XGBoost .json model artifacts</span>
│   └── <span class="tree-file">train.py</span>
│
├── <span class="tree-dir">mobile/</span>              <span class="tree-comment"># React Native + Expo mobile application</span>
├── <span class="tree-dir">hardware/</span>            <span class="tree-comment"># ESP32 firmware C++ &amp; MQTT emulator</span>
└── <span class="tree-file">docker-compose.yml</span>   <span class="tree-comment"># Full-stack orchestrator</span>
</div>
    `
  },

  /* ─── SYSTEM REQUIREMENTS ───────────────────── */
  'system-requirements': {
    title: 'System Requirements',
    category: 'Get Started',
    breadcrumb: ['Docs', 'Get Started', 'System Requirements'],
    prev: { page: 'quick-start', label: 'Quick Start' },
    next: { page: 'core-concepts', label: 'Core Concepts' },
    content: () => `
<h1 id="system-requirements">System Requirements</h1>
<p class="lead">Hardware, server infrastructure, network bandwidth, and browser support requirements for Zero Drop deployments.</p>

<h2 id="tech-stack">Technology Stack Specifications</h2>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Layer</th><th>Technology</th><th>Version</th><th>Purpose / Role</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Frontend</strong></td><td>React + TypeScript + Vite</td><td>React 18.2 / TS 5.3</td><td>SPA Web Dashboard &amp; Analytics UI</td></tr>
      <tr><td><strong>Mobile</strong></td><td>React Native + Expo</td><td>SDK 50 / RN 0.73</td><td>Field App (Offline SQLite storage)</td></tr>
      <tr><td><strong>Backend</strong></td><td>Django REST Framework</td><td>Python 3.11 / DRF 3.14</td><td>Core API &amp; Business Logic Services</td></tr>
      <tr><td><strong>Time-Series DB</strong></td><td>TimescaleDB (PostgreSQL)</td><td>PG 15 / TimescaleDB 2.12</td><td>Telemetry storage &amp; window aggregations</td></tr>
      <tr><td><strong>In-Memory Cache</strong></td><td>Redis</td><td>7.2</td><td>Session caching &amp; Pub/Sub WebSocket broker</td></tr>
      <tr><td><strong>AI / ML</strong></td><td>XGBoost + SHAP</td><td>XGB 2.0 / SHAP 0.44</td><td>Predictive engine &amp; feature explainability</td></tr>
    </tbody>
  </table>
</div>

<h2 id="hardware-requirements">IoT Edge Hardware Specs (Smart Belt Node)</h2>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Component</th><th>Specification</th><th>Operating Limits</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Microcontroller</strong></td><td>ESP32-S3 Dual-Core 240MHz / nRF52840 BLE 5.2</td><td>-40°C to +85°C industrial grade</td></tr>
      <tr><td><strong>Temperature Sensor</strong></td><td>MLX90614 Contact Infrared Thermometer</td><td>Precision ±0.2°C between 30°C–45°C</td></tr>
      <tr><td><strong>Motion Sensor</strong></td><td>MPU6050 6-Axis Accelerometer / Gyroscope</td><td>Sampling rate 50Hz, ±2g sensitivity</td></tr>
      <tr><td><strong>Battery Unit</strong></td><td>3.7V 3200mAh LiFePO4 (Rechargeable)</td><td>Estimated battery life: 120 days per charge</td></tr>
      <tr><td><strong>Enclosure Protection</strong></td><td>IP68 Waterproof &amp; UV-resistant polycarbonate</td><td>Impact resistant against bovine kicking/rubbing</td></tr>
    </tbody>
  </table>
</div>

<h2 id="server-infrastructure">Server Infrastructure Scaling Matrix</h2>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Scale Tier</th><th>Herd Size</th><th>vCPU / RAM</th><th>Database Storage</th><th>Bandwidth Needs</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Small Farm</strong></td><td>Up to 50 cows</td><td>2 vCPU / 4 GB RAM</td><td>50 GB SSD</td><td>5 Mbps (Cellular 3G/4G)</td></tr>
      <tr><td><strong>Medium Cooperative</strong></td><td>50 – 500 cows</td><td>4 vCPU / 16 GB RAM</td><td>250 GB NVMe SSD</td><td>25 Mbps Broadband</td></tr>
      <tr><td><strong>Enterprise / Cluster</strong></td><td>500 – 5,000+ cows</td><td>16 vCPU / 64 GB RAM (Kubernetes)</td><td>2 TB NVMe RAID 10</td><td>100+ Mbps Fiber</td></tr>
    </tbody>
  </table>
</div>

<h2 id="browser-support">Browser &amp; OS Compatibility</h2>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Platform</th><th>Minimum Version</th><th>Recommended</th></tr>
    </thead>
    <tbody>
      <tr><td>Google Chrome / Chromium</td><td>v100+</td><td>v120+ (64-bit)</td></tr>
      <tr><td>Mozilla Firefox</td><td>v102+ LTS</td><td>v121+</td></tr>
      <tr><td>Apple Safari</td><td>v15.4+</td><td>v17+</td></tr>
      <tr><td>Android App (Mobile)</td><td>Android 8.0 (API 26)</td><td>Android 12.0+</td></tr>
      <tr><td>iOS App (Mobile)</td><td>iOS 15.0</td><td>iOS 17.0+</td></tr>
    </tbody>
  </table>
</div>
    `
  },

  /* ─── CORE CONCEPTS ─────────────────────────── */
  'core-concepts': {
    title: 'Core Concepts & Domain Model',
    category: 'Get Started',
    breadcrumb: ['Docs', 'Get Started', 'Core Concepts'],
    prev: { page: 'system-requirements', label: 'System Requirements' },
    next: { page: 'hardware-setup', label: 'Hardware Setup' },
    content: () => `
<h1 id="core-concepts">Core Concepts &amp; Domain Model</h1>
<p class="lead">Understanding Zero Drop's fundamental domain entities, risk scoring thresholds, physiological metrics, and udder health terminology.</p>

<h2 id="domain-model">Domain Entity Architecture</h2>
<p>The Zero Drop platform models dairy health through six primary domain entities:</p>

<div class="concept-grid">
  <div class="concept-card">
    <div class="concept-card-term">ENTITY</div>
    <div class="concept-card-title">Animal Profile</div>
    <p class="concept-card-desc">Represents an individual cow or buffalo with unique RF ID tag, breed, birth date, lactation stage, and historical medical record.</p>
  </div>
  <div class="concept-card">
    <div class="concept-card-term">ENTITY</div>
    <div class="concept-card-title">IoT Telemetry Event</div>
    <p class="concept-card-desc">A time-series record from smart belts or sensors containing temperature, rumination minutes, and activity counts.</p>
  </div>
  <div class="concept-card">
    <div class="concept-card-term">ENTITY</div>
    <div class="concept-card-title">Milking Session</div>
    <p class="concept-card-desc">Per-session record capturing milk volume (liters), electrical conductivity per teat quarter, and SCC sample results.</p>
  </div>
  <div class="concept-card">
    <div class="concept-card-term">ENTITY</div>
    <div class="concept-card-title">Risk Assessment</div>
    <p class="concept-card-desc">An output produced by XGBoost containing a 0–100 risk index, risk classification level, and SHAP attribution vector.</p>
  </div>
  <div class="concept-card">
    <div class="concept-card-term">ENTITY</div>
    <div class="concept-card-title">Alert Notification</div>
    <p class="concept-card-desc">An active alert generated when risk crosses threshold values, dispatched to web, SMS, or app push channels.</p>
  </div>
  <div class="concept-card">
    <div class="concept-card-term">ENTITY</div>
    <div class="concept-card-title">Action &amp; Outcome</div>
    <p class="concept-card-desc">Farmer or vet log recording physical inspection findings, CMT test results, and resolution state.</p>
  </div>
</div>

<h2 id="risk-matrix">Risk Threshold Classification Matrix</h2>
<p>Risk scores are categorized into four standardized tiers that trigger specific operational workflows:</p>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Risk Score</th><th>Tier Label</th><th>Visual Badge</th><th>Clinical Interpretation</th><th>Required Farm Action</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>0 – 20</strong></td>
        <td>No Risk / Optimal</td>
        <td><span class="badge badge-norisk">Optimal</span></td>
        <td>Physiological parameters within normal baseline range.</td>
        <td>Routine feeding &amp; standard milking hygiene.</td>
      </tr>
      <tr>
        <td><strong>21 – 40</strong></td>
        <td>Low Risk</td>
        <td><span class="badge badge-low">Low Risk</span></td>
        <td>Minor trend variation in temperature or rumination.</td>
        <td>Continue routine monitoring; observe during next milking.</td>
      </tr>
      <tr>
        <td><strong>41 – 70</strong></td>
        <td>Moderate Risk</td>
        <td><span class="badge badge-mod">Moderate</span></td>
        <td>Early subclinical signals detected (EC surge or rumination drop).</td>
        <td>Perform California Mastitis Test (CMT) &amp; inspect udder.</td>
      </tr>
      <tr>
        <td><strong>71 – 100</strong></td>
        <td>High Imminent Risk</td>
        <td><span class="badge badge-high">High Risk</span></td>
        <td>Multiple high-confidence subclinical signals active.</td>
        <td>Isolate milk, perform teat dip, request vet inspection.</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="key-metrics">Key Physiological Indicators</h2>
<ul>
  <li><strong>Electrical Conductivity (EC):</strong> Expressed in milliSiemens per centimeter ($mS/cm$). Udder inflammation damages tight junctions between mammary epithelial cells, causing sodium ($Na^+$) and chloride ($Cl^-$) ions to leak into milk, raising conductivity.</li>
  <li><strong>Somatic Cell Count (SCC):</strong> Number of white blood cells per milliliter of milk. Normal milk has &lt;200,000 cells/mL. Subclinical mastitis elevates SCC to 200,000–750,000+ cells/mL.</li>
  <li><strong>Rumination Time:</strong> Minutes spent actively chewing cud per 24-hour period. Healthy cows ruminate 450–600 minutes daily. A drop of &gt;20% indicates systemic stress or malaise.</li>
  <li><strong>Carotid Subcutaneous Temperature:</strong> Normal bovine skin surface temperature is 37.5°C to 38.8°C. Inflammatory fever pushes temperature above 39.5°C.</li>
</ul>
    `
  },

  /* ─── SYSTEM ARCHITECTURE ───────────────────── */
  'architecture': {
    title: 'System Architecture',
    category: 'Architecture',
    breadcrumb: ['Docs', 'Architecture', 'System Architecture'],
    prev: { page: 'core-concepts', label: 'Core Concepts' },
    next: { page: 'data-flow', label: 'Data Flow' },
    content: () => `
<h1 id="architecture">System Architecture</h1>
<p class="lead">An architectural breakdown of Zero Drop's 5-layer system—from edge IoT telemetry ingestion to machine learning inference, persistence, and client applications.</p>

<h2 id="architectural-layers">5-Layer System Architecture</h2>

<div class="deploy-layers">
  <div class="deploy-layer-row">
    <div class="deploy-layer-label">Layer 1: Edge</div>
    <div class="deploy-layer-items">
      <div class="deploy-item primary">Smart Neck Belt (ESP32)</div>
      <div class="deploy-item primary">MLX90614 Infrared</div>
      <div class="deploy-item primary">MPU6050 IMU</div>
      <div class="deploy-item primary">Inline Milk EC Meter</div>
    </div>
  </div>
  <div class="deploy-layer-row">
    <div class="deploy-layer-label">Layer 2: Ingest</div>
    <div class="deploy-layer-items">
      <div class="deploy-item">LoRaWAN Gateway Node</div>
      <div class="deploy-item">MQTT Broker (EMQX)</div>
      <div class="deploy-item">HTTPS API Gateway</div>
      <div class="deploy-item">TLS 1.3 Encryption</div>
    </div>
  </div>
  <div class="deploy-layer-row">
    <div class="deploy-layer-label">Layer 3: Store</div>
    <div class="deploy-layer-items">
      <div class="deploy-item">TimescaleDB Hyper-Tables</div>
      <div class="deploy-item">Redis Cluster Cache</div>
      <div class="deploy-item">S3 Model Artifact Store</div>
    </div>
  </div>
  <div class="deploy-layer-row">
    <div class="deploy-layer-label">Layer 4: AI Engine</div>
    <div class="deploy-layer-items">
      <div class="deploy-item primary">XGBoost Inference Service</div>
      <div class="deploy-item primary">SHAP TreeExplainer</div>
      <div class="deploy-item primary">Gemini LLM Advice Engine</div>
    </div>
  </div>
  <div class="deploy-layer-row">
    <div class="deploy-layer-label">Layer 5: Client</div>
    <div class="deploy-layer-items">
      <div class="deploy-item">React Web Dashboard</div>
      <div class="deploy-item">React Native Mobile App</div>
      <div class="deploy-item">Firebase Push Service</div>
      <div class="deploy-item">SMS Gateway API</div>
    </div>
  </div>
</div>

<h2 id="layer-details">Layer Detailed Functionality</h2>

<h3 id="edge-layer">1. Edge Sensing Layer</h3>
<p>Low-power embedded microcontrollers mounted on livestock neck collars collect raw accelerometer (50Hz), temperature (every 5 min), and GPS location data. Data is cached in local SPI flash memory during wireless disconnects.</p>

<h3 id="ingestion-layer">2. Ingestion &amp; Protocol Gateway</h3>
<p>Edge gateways receive Bluetooth 5.0 and LoRaWAN packets, encrypt payloads using AES-128, and transmit them via MQTT over TLS 1.3 to the backend API Gateway.</p>

<h3 id="persistence-layer">3. Persistence &amp; Time-Series Store</h3>
<p>Data is stored in TimescaleDB hyper-tables auto-partitioned by 1-day time chunks. Redis buffers real-time telemetry and manages WebSocket subscriptions for active dashboard users.</p>

<h3 id="ai-layer">4. Intelligence &amp; Prediction Engine</h3>
<p>A Python microservice pulls 24-hour feature windows, runs XGBoost inference, generates SHAP attributions for high-risk scores (&gt;40), and invokes the Gemini LLM for localized advice generation.</p>

<h3 id="client-layer">5. Presentation Layer</h3>
<p>Web and mobile applications deliver real-time risk heatmaps, animal detail views, and instant alerts to farm personnel.</p>
    `
  },

  /* ─── HARDWARE SETUP ────────────────────────── */
  'hardware-setup': {
    title: 'Hardware & Sensor Setup',
    category: 'Get Started',
    breadcrumb: ['Docs', 'Get Started', 'Hardware & Sensor Setup'],
    prev: { page: 'core-concepts', label: 'Core Concepts' },
    next: { page: 'ai-health-scores', label: 'AI Health Scores' },
    content: () => `
<h1 id="hardware-setup">Hardware &amp; Sensor Setup</h1>
<p class="lead">Complete installation, fitting, flashing, and calibration guide for Zero Drop IoT Smart Neck Belts and Inline Milk Sensors.</p>

<h2 id="belt-components">Smart Neck Belt Anatomy</h2>
<p>The Zero Drop Smart Belt consists of a ruggedized IP68 polyurethane collar housing five core hardware modules:</p>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Module</th><th>Component Model</th><th>Interface / Bus</th><th>Function</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Main MCU</strong></td><td>ESP32-S3-WROOM-1</td><td>SPI / I2C</td><td>Dual-core 240MHz, Wi-Fi 4 + BLE 5.0, 8MB PSRAM</td></tr>
      <tr><td><strong>Thermometer</strong></td><td>Melexis MLX90614 ESF</td><td>I2C (Address 0x5A)</td><td>Medical-grade non-contact IR temperature sensor</td></tr>
      <tr><td><strong>IMU Motion</strong></td><td>InvenSense MPU6050</td><td>I2C (Address 0x68)</td><td>6-axis accelerometer &amp; gyroscope for rumination tracking</td></tr>
      <tr><td><strong>Power Management</strong></td><td>TP4056 + Solar Regulator</td><td>Custom PCB</td><td>3.7V 3200mAh LiFePO4 battery with solar trickle charge</td></tr>
      <tr><td><strong>Radio Transceiver</strong></td><td>Semtech SX1262 LoRa</td><td>SPI</td><td>Long-range 868/915 MHz telemetry up to 3 km</td></tr>
    </tbody>
  </table>
</div>

<h2 id="setup-timeline">Guided Installation Procedure</h2>

<div class="step-timeline">
  <div class="step-timeline-item">
    <div class="step-timeline-num">1</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Unboxing &amp; Pre-Charge</div>
      <div class="step-timeline-body">
        <p>Unpack the Smart Belt kit. Connect the USB-C diagnostic cable to a 5V/2A power source for 3 hours until the green LED turns solid, indicating full LiFePO4 battery charge.</p>
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">2</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Firmware Flashing &amp; Tag Provisioning</div>
      <div class="step-timeline-body">
        <p>Flash the latest firmware binary using Esptool or BLE OTA web utility:</p>
        ${codeBlock('bash', 'esptool.py --chip esp32s3 --port /dev/ttyUSB0 write_flash 0x0 zerodrop_belt_v2.4.bin')}
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">3</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Animal Belt Fitting &amp; Calibration</div>
      <div class="step-timeline-body">
        <p>Place the belt securely around the cow's neck behind the ears. Ensure the infrared sensor pod touches the skin surface over the carotid artery area. Allow 2 fingers of space under the collar for comfortable swallowing and rumination.</p>
      </div>
    </div>
  </div>
</div>

<h2 id="telemetry-payload">Sensor Telemetry JSON Payload Format</h2>
<p>Smart belts transmit the following structured JSON payload to the edge gateway every 5 minutes:</p>

${codeBlock('json', '{\n  "device_id": "ZD-BELT-9042",\n  "firmware_version": "v2.4.1",\n  "timestamp": "2026-09-20T14:30:00Z",\n  "battery_v": 3.82,\n  "battery_pct": 91,\n  "carotid_temp_c": 38.64,\n  "rumination_minutes_12h": 245,\n  "activity_index": 128,\n  "rssi_dbm": -74\n}')}

<h2 id="led-diagnostics">LED Status Indicator Guide</h2>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>LED Color &amp; Pattern</th><th>System Status</th><th>Troubleshooting Action</th></tr>
    </thead>
    <tbody>
      <tr><td>Solid Green</td><td>Normal Operational Mode</td><td>No action required. Belt active.</td></tr>
      <tr><td>Blinking Blue (1Hz)</td><td>Bluetooth Pairing Mode</td><td>Open mobile app to pair animal tag ID.</td></tr>
      <tr><td>Blinking Amber (2Hz)</td><td>Low Battery Warning (&lt;15%)</td><td>Recharge via USB-C or place in direct sunlight.</td></tr>
      <tr><td>Solid Red</td><td>Sensor Fault / I2C Bus Error</td><td>Perform 10-second hard reset button hold.</td></tr>
    </tbody>
  </table>
</div>
    `
  },

  /* ─── DATA FLOW ─────────────────────────────── */
  'data-flow': {
    title: 'Data Flow & Pipeline',
    category: 'Architecture',
    breadcrumb: ['Docs', 'Architecture', 'Data Flow & Pipeline'],
    prev: { page: 'architecture', label: 'System Architecture' },
    next: { page: 'software-architecture', label: 'Software Architecture' },
    content: () => `
<h1 id="data-flow">Data Flow &amp; Pipeline</h1>
<p class="lead">Detailed data ingestion lifecycle, feature aggregation windowing, real-time message routing, and processing SLA benchmarks.</p>

<h2 id="pipeline-sequence">End-to-End Processing Sequence</h2>

<div class="step-timeline">
  <div class="step-timeline-item">
    <div class="step-timeline-num">1</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Edge Telemetry Sampling (Every 5 min)</div>
      <div class="step-timeline-body">
        <p>Sensors sample temperature, IMU motion, and battery voltage. Sensor payloads are buffered in RAM and transmitted over LoRaWAN or Bluetooth 5.0.</p>
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">2</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Gateway Forwarding &amp; Ingestion Webhook</div>
      <div class="step-timeline-body">
        <p>The farm gateway forwards payloads to the Django API endpoint <code>POST /api/v1/telemetry/ingest/</code> over HTTPS TLS 1.3.</p>
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">3</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">TimescaleDB Ingestion &amp; Outlier Filtering</div>
      <div class="step-timeline-body">
        <p>Inbound signals are written to TimescaleDB hyper-table <code>sensor_telemetry</code>. Range checks strip invalid readings (&gt;43°C or &lt;32°C).</p>
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">4</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Rolling Window Feature Generation</div>
      <div class="step-timeline-body">
        <p>Celery queue workers compute 12h, 24h, and 72h rolling features comparing current values to the cow's 14-day median baseline.</p>
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">5</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">XGBoost Risk Inference &amp; SHAP Computation</div>
      <div class="step-timeline-body">
        <p>The ML engine computes the 0–100 risk score and runs TreeSHAP to isolate the top 3 risk factors.</p>
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">6</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Alert Dispatch &amp; WebSockets Broadcast</div>
      <div class="step-timeline-body">
        <p>If risk score &gt; 40, an alert record is created, WebSocket event is emitted to connected web browsers, and SMS is queued for high-risk alerts (&gt;70).</p>
      </div>
    </div>
  </div>
</div>

<h2 id="pipeline-sla">Pipeline Performance &amp; SLA Benchmarks</h2>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Pipeline Stage</th><th>Target SLA Latency</th><th>Max Throughput</th><th>Failure Fallback Mode</th></tr>
    </thead>
    <tbody>
      <tr><td>Gateway Ingestion</td><td>&lt; 50 ms</td><td>5,000 req/sec</td><td>Gateway local disk caching (up to 7 days)</td></tr>
      <tr><td>TimescaleDB Write</td><td>&lt; 15 ms</td><td>20,000 writes/sec</td><td>Redis Stream buffer queue</td></tr>
      <tr><td>XGBoost Inference</td><td>&lt; 10 ms per cow</td><td>1,000 predictions/sec</td><td>Cached previous risk score</td></tr>
      <tr><td>SHAP Calculation</td><td>&lt; 25 ms per cow</td><td>500 attributions/sec</td><td>Top feature heuristics fallback</td></tr>
      <tr><td>WebSocket Push</td><td>&lt; 100 ms total E2E</td><td>10,000 active sockets</td><td>Polling REST API fallback</td></tr>
    </tbody>
  </table>
</div>
    `
  },

  /* ─── AI HEALTH SCORES ──────────────────────── */
  'ai-health-scores': {
    title: 'AI Health & Risk Scores',
    category: 'Get Started',
    breadcrumb: ['Docs', 'Get Started', 'AI Health & Risk Scores'],
    prev: { page: 'hardware-setup', label: 'Hardware Setup' },
    next: { page: 'guided-onboarding', label: 'Guided Onboarding' },
    content: () => `
<h1 id="ai-health-scores">AI Health &amp; Risk Scoring System</h1>
<p class="lead">In-depth mathematical overview of Zero Drop's XGBoost prediction model, risk gauge tiers, SHAP feature attributions, and clinical validation metrics.</p>

<h2 id="scoring-gauges">Risk Score Tiers &amp; Gauges</h2>

<div class="risk-gauge-row">
  <div class="risk-gauge-label" style="color:#10B981;">No Risk</div>
  <div class="risk-gauge-bar"><div class="risk-gauge-fill" style="width:20%;background:#10B981;"></div></div>
  <div class="risk-gauge-range">0 – 20</div>
</div>
<div class="risk-gauge-row">
  <div class="risk-gauge-label" style="color:#3B82F6;">Low Risk</div>
  <div class="risk-gauge-bar"><div class="risk-gauge-fill" style="width:40%;background:#3B82F6;"></div></div>
  <div class="risk-gauge-range">21 – 40</div>
</div>
<div class="risk-gauge-row">
  <div class="risk-gauge-label" style="color:#F59E0B;">Moderate</div>
  <div class="risk-gauge-bar"><div class="risk-gauge-fill" style="width:70%;background:#F59E0B;"></div></div>
  <div class="risk-gauge-range">41 – 70</div>
</div>
<div class="risk-gauge-row">
  <div class="risk-gauge-label" style="color:#EF4444;">High Risk</div>
  <div class="risk-gauge-bar"><div class="risk-gauge-fill" style="width:100%;background:#EF4444;"></div></div>
  <div class="risk-gauge-range">71 – 100</div>
</div>

<h2 id="feature-importance">Feature Importance Ranking (Top 10 Drivers)</h2>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Rank</th><th>Feature Variable</th><th>Weight (% Gain)</th><th>Primary Source</th><th>Physiological Impact</th></tr>
    </thead>
    <tbody>
      <tr><td>1</td><td><code>ec_quarter_ratio</code></td><td>28.4%</td><td>Inline Milk Meter</td><td>Inter-quarter conductivity imbalance ($Na^+/Cl^-$ surge)</td></tr>
      <tr><td>2</td><td><code>temp_delta_24h</code></td><td>21.2%</td><td>Smart Neck Belt</td><td>Low-grade fever spike above 14-day median (&gt;0.6°C)</td></tr>
      <tr><td>3</td><td><code>rumination_ratio_72h</code></td><td>16.8%</td><td>Smart Neck Belt IMU</td><td>Sustained drop in active cud-chewing (&gt;18% reduction)</td></tr>
      <tr><td>4</td><td><code>scc_trend_3session</code></td><td>11.5%</td><td>Lab Test / Milk Record</td><td>Slope of Somatic Cell Count expansion</td></tr>
      <tr><td>5</td><td><code>yield_drop_pct</code></td><td>8.3%</td><td>Milking Machine</td><td>Sudden deviation from expected lactation curve</td></tr>
      <tr><td>6</td><td><code>days_in_milk</code></td><td>4.6%</td><td>Animal Database</td><td>Peak lactation susceptibility window (DIM 14–60)</td></tr>
      <tr><td>7</td><td><code>prior_mastitis_count</code></td><td>3.8%</td><td>Medical History</td><td>Chronic scarring and recurrence probability</td></tr>
      <tr><td>8</td><td><code>activity_spike_index</code></td><td>2.6%</td><td>Smart Neck Belt IMU</td><td>Restlessness or head-tossing due to udder discomfort</td></tr>
      <tr><td>9</td><td><code>ambient_thi_index</code></td><td>1.7%</td><td>Weather API</td><td>Heat stress factor aggravating immune system</td></tr>
      <tr><td>10</td><td><code>parity_num</code></td><td>1.1%</td><td>Animal Database</td><td>Lactation number (higher parity = higher risk)</td></tr>
    </tbody>
  </table>
</div>

<h2 id="shap-deep-dive">SHAP (SHapley Additive exPlanations) Attributions</h2>
<p>TreeSHAP calculates the exact additive contribution $\phi_i$ of each feature $i$ to transform the base model expectation $\mathbb{E}[f(x)]$ into the final log-odds prediction:</p>

<p>$$f(x) = \phi_0 + \sum_{i=1}^{M} \phi_i(x)$$</p>

<p>When a prediction exceeds the Moderate Risk threshold (&gt;40), Zero Drop extracts the 3 highest positive $\phi_i$ values to explain the prediction to the farmer (e.g., <em>"Subcutaneous temperature increased by +0.9°C (contributed +24 pts), Rumination dropped by 28% (contributed +18 pts)"</em>).</p>

<h2 id="model-performance">Clinical Model Validation Benchmarks</h2>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Evaluation Metric</th><th>Test Set Score</th><th>Benchmark Target</th><th>Clinical Validation Basis</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Sensitivity (Recall)</strong></td><td>91.8%</td><td>&gt; 90.0%</td><td>Identifies 91.8% of all true subclinical mastitis events</td></tr>
      <tr><td><strong>Specificity</strong></td><td>95.6%</td><td>&gt; 95.0%</td><td>Minimizes false alarms on healthy animals</td></tr>
      <tr><td><strong>AUC-ROC Score</strong></td><td>0.962</td><td>&gt; 0.950</td><td>Discriminative capacity across varied risk thresholds</td></tr>
      <tr><td><strong>F1-Score</strong></td><td>0.929</td><td>&gt; 0.900</td><td>Harmonic mean of precision and recall</td></tr>
      <tr><td><strong>Lead Time Forecast</strong></td><td>9.4 Days</td><td>7 – 14 Days</td><td>Average advance notice before visible clinical signs</td></tr>
    </tbody>
  </table>
</div>
    `
  },

  /* ─── GUIDED ONBOARDING ─────────────────────── */
  'guided-onboarding': {
    title: 'Guided Onboarding',
    category: 'Get Started',
    breadcrumb: ['Docs', 'Get Started', 'Guided Onboarding'],
    prev: { page: 'ai-health-scores', label: 'AI Health Scores' },
    next: { page: 'deployment-options', label: 'Deployment Options' },
    content: () => `
<h1 id="guided-onboarding">Guided Farm Onboarding</h1>
<p class="lead">Step-by-step roadmap to onboarding a dairy farm onto Zero Drop—from herd registration and hardware fitting to 7-day model calibration.</p>

<h2 id="onboarding-roadmap">6-Phase Onboarding Lifecycle</h2>

<div class="step-timeline">
  <div class="step-timeline-item">
    <div class="step-timeline-num">1</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Phase 1: Farm &amp; User Account Provisioning</div>
      <div class="step-timeline-body">
        <p>Register the farm entity, geographic coordinates, herd size, and user roles (Farm Owner, Veterinarian, Worker) in the web portal.</p>
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">2</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Phase 2: Herd Registry Bulk Import</div>
      <div class="step-timeline-body">
        <p>Import animal records via CSV template or mobile barcode scanner. Records include Tag ID, Cattle Breed, Calving Date, and Parity.</p>
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">3</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Phase 3: IoT Smart Belt Fitment &amp; Tag Pairing</div>
      <div class="step-timeline-body">
        <p>Attach pre-charged Smart Belts to each cow. Scan the belt's QR code using the Zero Drop mobile app to link the device ID to the animal profile.</p>
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">4</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Phase 4: Baseline Health Data Backfill</div>
      <div class="step-timeline-body">
        <p>Enter the past 30 days of milk yield logs and recent vaccination or disease history to seed the baseline feature store.</p>
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">5</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Phase 5: 7-Day Model Calibration Phase</div>
      <div class="step-timeline-body">
        <p>The system learns individual 7-day rolling baselines for temperature, rumination, and milk conductivity. Alerts are suppressed during calibration.</p>
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">6</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Phase 6: Go-Live &amp; Staff Training</div>
      <div class="step-timeline-body">
        <p>Activate live risk forecasting and automated SMS/app alerts. Conduct a 1-hour staff training session on reviewing SHAP explanations and logging CMT actions.</p>
      </div>
    </div>
  </div>
</div>

<h2 id="onboarding-checklist">Farm Readiness Checklist</h2>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Checklist Item</th><th>Verification Criteria</th><th>Status</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Herd Registry Complete</strong></td><td>100% of animals tagged with unique ID and lactation date</td><td><span class="tag-supported">Ready</span></td></tr>
      <tr><td><strong>Smart Belts Installed</strong></td><td>Belts fitted with 2-finger clearance and IR sensor aligned</td><td><span class="tag-supported">Ready</span></td></tr>
      <tr><td><strong>Gateway Connectivity</strong></td><td>LoRaWAN gateway online with RSSI &gt; -85 dBm across barn</td><td><span class="tag-supported">Ready</span></td></tr>
      <tr><td><strong>Mobile App Installed</strong></td><td>Farm workers logged into Zero Drop mobile app with offline DB active</td><td><span class="tag-supported">Ready</span></td></tr>
      <tr><td><strong>7-Day Calibration Complete</strong></td><td>Minimum 100 continuous sensor readings per animal recorded</td><td><span class="tag-planned">In Progress</span></td></tr>
    </tbody>
  </table>
</div>
    `
  },

  /* ─── DEPLOYMENT OPTIONS ────────────────────── */
  'deployment-options': {
    title: 'Deployment Options',
    category: 'Get Started',
    breadcrumb: ['Docs', 'Get Started', 'Deployment Options'],
    prev: { page: 'guided-onboarding', label: 'Guided Onboarding' },
    next: { page: 'security-compliance', label: 'Security & Compliance' },
    content: () => `
<h1 id="deployment-options">Deployment Options</h1>
<p class="lead">Compare Zero Drop deployment topologies—from fully managed Cloud SaaS to isolated On-Premise Edge Servers and hybrid farm nodes.</p>

<h2 id="topology-comparison">Deployment Topologies Overview</h2>

<div class="deploy-layers">
  <div class="deploy-layer-row">
    <div class="deploy-layer-label">Cloud SaaS</div>
    <div class="deploy-layer-items">
      <div class="deploy-item primary">Managed AWS / GCP</div>
      <div class="deploy-item">Auto-scaling Microservices</div>
      <div class="deploy-item">Zero Infrastructure Mgmt</div>
      <div class="deploy-item">Best for 100+ Cow Farms</div>
    </div>
  </div>
  <div class="deploy-layer-row">
    <div class="deploy-layer-label">Edge Server</div>
    <div class="deploy-layer-items">
      <div class="deploy-item primary">Intel NUC / Micro Server</div>
      <div class="deploy-item">100% Offline Capability</div>
      <div class="deploy-item">Local SQLite / TimescaleDB</div>
      <div class="deploy-item">Best for Remote Locations</div>
    </div>
  </div>
  <div class="deploy-layer-row">
    <div class="deploy-layer-label">Hybrid Node</div>
    <div class="deploy-layer-items">
      <div class="deploy-item primary">Edge Inference + Cloud Sync</div>
      <div class="deploy-item">Instant Real-Time Alerts</div>
      <div class="deploy-item">Background Cloud Backup</div>
      <div class="deploy-item">Best for Dairy Cooperatives</div>
    </div>
  </div>
</div>

<h2 id="docker-setup">Production Docker Compose Specification</h2>
<p>Deploy the full Zero Drop backend stack locally or on an edge server with a single Docker command:</p>

${codeBlock('yaml', 'version: "3.8"\nservices:\n  timescaledb:\n    image: timescale/timescaledb:latest-pg15\n    environment:\n      POSTGRES_DB: zerodrop\n      POSTGRES_USER: zerodrop_admin\n      POSTGRES_PASSWORD: ${DB_PASSWORD}\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n    ports:\n      - "5432:5432"\n\n  redis:\n    image: redis:7.2-alpine\n    ports:\n      - "6379:6379"\n\n  api_backend:\n    image: zerodrop/backend:v2.4.0\n    command: gunicorn zerodrop.wsgi:application --bind 0.0.0.0:8000 --workers 4\n    environment:\n      DATABASE_URL: postgres://zerodrop_admin:${DB_PASSWORD}@timescaledb:5432/zerodrop\n      REDIS_URL: redis://redis:6379/0\n    depends_on:\n      - timescaledb\n      - redis\n    ports:\n      - "8000:8000"\n\n  ml_engine:\n    image: zerodrop/ml-engine:v2.4.0\n    environment:\n      MODEL_PATH: /app/models/xgboost_mastitis_v2.4.json\n    depends_on:\n      - redis\n\nvolumes:\n  pgdata:')}

<h2 id="env-vars">Required Environment Variables</h2>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Variable Name</th><th>Default Value</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>SECRET_KEY</code></td><td><em>Required (Secret)</em></td><td>Django cryptographic key for JWT session signing</td></tr>
      <tr><td><code>DATABASE_URL</code></td><td><code>postgres://...</code></td><td>PostgreSQL / TimescaleDB connection URI</td></tr>
      <tr><td><code>REDIS_URL</code></td><td><code>redis://redis:6379/0</code></td><td>Redis connection string for Pub/Sub &amp; cache</td></tr>
      <tr><td><code>GEMINI_API_KEY</code></td><td><em>Required (Secret)</em></td><td>Google Gemini API key for plain-language advice synthesis</td></tr>
      <tr><td><code>SMS_GATEWAY_KEY</code></td><td><em>Optional</em></td><td>Twilio / Fast2SMS API key for high-risk SMS alerts</td></tr>
      <tr><td><code>LOG_LEVEL</code></td><td><code>INFO</code></td><td>Logging verbosity level (DEBUG, INFO, WARNING, ERROR)</td></tr>
    </tbody>
  </table>
</div>
    `
  },

  /* ─── SECURITY & COMPLIANCE ─────────────────── */
  'security-compliance': {
    title: 'Security & Compliance',
    category: 'Get Started',
    breadcrumb: ['Docs', 'Get Started', 'Security & Compliance'],
    prev: { page: 'deployment-options', label: 'Deployment Options' },
    next: { page: 'migration-guide', label: 'Migration Guide' },
    content: () => `
<h1 id="security-compliance">Data Privacy, Security &amp; Compliance</h1>
<p class="lead">Security architecture, cryptographic transport standards, role-based access control (RBAC), and alignment with agricultural data protection regulations.</p>

<h2 id="security-principles">Core Security Principles</h2>
<ul>
  <li><strong>Farmer Data Sovereignty:</strong> Farmers and dairy cooperatives retain 100% ownership of all raw milk records, sensor metrics, and herd data. Data is never monetized or shared with third parties without explicit consent.</li>
  <li><strong>End-to-End Encryption:</strong> All data in transit is encrypted using TLS 1.3. Telemetry payload streams over Bluetooth 5.0 and LoRaWAN are encrypted with AES-128 GCM.</li>
  <li><strong>Zero-Trust Access Control:</strong> Strict role-based permissions enforce access isolation across multi-farm accounts.</li>
</ul>

<h2 id="cryptographic-standards">Encryption &amp; Protection Standards</h2>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Layer / Context</th><th>Protocol / Standard</th><th>Cipher Suite</th><th>Key Lifecycle</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Sensor to Gateway</strong></td><td>Bluetooth 5.0 LE / LoRaWAN</td><td>AES-128-GCM</td><td>Pre-shared device keys rotated annually</td></tr>
      <tr><td><strong>Gateway to Cloud API</strong></td><td>HTTPS / MQTT over TLS</td><td>TLS 1.3 (ECDHE-RSA-AES256-GCM)</td><td>Auto-renewed Let's Encrypt / X.509 certs</td></tr>
      <tr><td><strong>Database at Rest</strong></td><td>PostgreSQL TDE / LUKS</td><td>AES-256 XTS</td><td>AWS KMS / Hardware Security Module (HSM)</td></tr>
      <tr><td><strong>User Authentication</strong></td><td>OAuth 2.0 + JWT</td><td>HMAC SHA-256</td><td>Tokens expire in 60 min; refresh tokens 30 days</td></tr>
    </tbody>
  </table>
</div>

<h2 id="rbac-matrix">Role-Based Access Control (RBAC) Matrix</h2>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Permission Scope</th><th>Farm Owner</th><th>Veterinarian</th><th>Farm Worker</th><th>Auditor / Coop Admin</th></tr>
    </thead>
    <tbody>
      <tr><td>View Risk Dashboard &amp; Alerts</td><td><span class="tag-supported">Full</span></td><td><span class="tag-supported">Full</span></td><td><span class="tag-supported">Full</span></td><td><span class="tag-supported">Aggregated Only</span></td></tr>
      <tr><td>Edit Animal Profile &amp; Tags</td><td><span class="tag-supported">Full</span></td><td><span class="tag-supported">Read Only</span></td><td><span class="tag-supported">Read Only</span></td><td><span class="tag-planned">No Access</span></td></tr>
      <tr><td>Log Veterinary CMT &amp; Treatments</td><td><span class="tag-supported">Full</span></td><td><span class="tag-supported">Full</span></td><td><span class="tag-supported">Log Only</span></td><td><span class="tag-planned">No Access</span></td></tr>
      <tr><td>Export Raw Financial &amp; Yield Data</td><td><span class="tag-supported">Full</span></td><td><span class="tag-planned">No Access</span></td><td><span class="tag-planned">No Access</span></td><td><span class="tag-supported">Full</span></td></tr>
      <tr><td>Manage User Invites &amp; Billing</td><td><span class="tag-supported">Full</span></td><td><span class="tag-planned">No Access</span></td><td><span class="tag-planned">No Access</span></td><td><span class="tag-planned">No Access</span></td></tr>
    </tbody>
  </table>
</div>

<h2 id="regulatory-compliance">Regulatory Alignment</h2>
<p>Zero Drop aligns with international and regional data governance frameworks, including the <strong>Indian Digital Personal Data Protection (DPDP) Act 2023</strong> and ISO/IEC 27001 security standards for cloud systems.</p>
    `
  },

  /* ─── TROUBLESHOOTING ───────────────────────── */
  'troubleshooting': {
    title: 'Troubleshooting & Common Issues',
    category: 'Resources',
    breadcrumb: ['Docs', 'Resources', 'Troubleshooting'],
    prev: { page: 'glossary', label: 'Glossary' },
    next: { page: 'release-notes', label: 'Release Notes' },
    content: () => `
<h1 id="troubleshooting">Troubleshooting &amp; Common Issues</h1>
<p class="lead">Diagnostic procedures, error codes, hardware reset methods, and self-test command scripts for resolving operational issues.</p>

<h2 id="hardware-troubleshooting">Hardware &amp; Connectivity Diagnostics</h2>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Symptom / Issue</th><th>Likely Root Cause</th><th>Recommended Resolution</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Smart Belt shows Offline</strong></td>
        <td>Discharged battery or LoRaWAN gateway out of range</td>
        <td>Check solar panel cleanliness. Ensure cow is within 2 km of gateway antenna. Perform 5-second magnet power reset.</td>
      </tr>
      <tr>
        <td><strong>Temperature Reads Null (0.0°C)</strong></td>
        <td>I2C bus disconnect or IR lens covered in mud</td>
        <td>Clean optical window of MLX90614 sensor with soft cloth. Inspect sensor wire harness.</td>
      </tr>
      <tr>
        <td><strong>Excessive Battery Drain (&lt;15 days)</strong></td>
        <td>Continuous Bluetooth scanning mode enabled</td>
        <td>Verify firmware v2.4+ is installed; ensure BLE power-save sleep intervals are configured.</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="software-troubleshooting">API &amp; System Error Codes</h2>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>HTTP Code</th><th>API Error Message</th><th>Cause &amp; Solution</th></tr>
    </thead>
    <tbody>
      <tr><td><code>401 Unauthorized</code></td><td><code>"Signature has expired"</code></td><td>JWT token expired. Refresh auth token via <code>POST /api/v1/token/refresh/</code>.</td></tr>
      <tr><td><code>422 Unprocessable</code></td><td><code>"Out of range telemetry value"</code></td><td>Sensor sent corrupted payload (e.g., temp &gt; 45°C). Verify hardware calibration.</td></tr>
      <tr><td><code>503 Service Unavailable</code></td><td><code>"TimescaleDB connection timeout"</code></td><td>Database queue full. Check PostgreSQL connection pool settings in <code>.env</code>.</td></tr>
    </tbody>
  </table>
</div>

<h2 id="cli-self-test">CLI Self-Test Diagnostic Script</h2>
<p>Run the automated diagnostic utility on your edge server or local environment to verify end-to-end component health:</p>

${codeBlock('bash', 'python manage.py diagnose_farm --farm-id 101\n\n# Expected Output:\n# [OK] TimescaleDB Connectivity: Active (Ping 2.1ms)\n# [OK] Redis Cache Service: Active (Ping 0.8ms)\n# [OK] XGBoost Model Artifact: Loaded (v2.4.0)\n# [OK] Gemini API Key: Validated\n# [OK] Connected Belts: 25/25 Online\n# [SUCCESS] System status: HEALTHY')}
    `
  },

  /* ─── FAQ ───────────────────────────────────── */
  'faq': {
    title: 'FAQ',
    category: 'Resources',
    breadcrumb: ['Docs', 'Resources', 'FAQ'],
    prev: { page: 'quick-start', label: 'Quick Start' },
    next: { page: 'glossary', label: 'Glossary' },
    content: () => `
<h1 id="faq">Frequently Asked Questions (FAQ)</h1>
<p class="lead">Answers to common technical, operational, AI accuracy, hardware durability, and economic questions about Zero Drop.</p>

<h2 id="general-faq">General &amp; Farm Applicability</h2>

<h3 id="faq-1">Q1: Can Zero Drop be deployed on smallholder farms with only 2 to 5 cows?</h3>
<p><strong>Yes.</strong> Zero Drop is engineered specifically to scale down to individual smallholder farmers. Smallholders use the React Native mobile app directly on an Android smartphone via Bluetooth 5.0 offline sync—no expensive farm server or broadband connection required.</p>

<h3 id="faq-2">Q2: Does Zero Drop work for Murrah Buffaloes and indigenous cattle breeds (Gir, Sahiwal)?</h3>
<p><strong>Yes.</strong> The XGBoost machine learning model incorporates breed-specific baseline calibration vectors for Bos indicus (Gir, Sahiwal, Red Sindhi, Tharparkar), Crossbred (HF/Jersey), and Bubalus bubalis (Murrah Buffaloes).</p>

<h2 id="ai-faq">AI &amp; Forecasting Accuracy</h2>

<h3 id="faq-3">Q3: How far in advance can Zero Drop detect subclinical mastitis?</h3>
<p>In clinical trials, Zero Drop demonstrated an average early warning lead time of <strong>7 to 14 days</strong> before visible clinical symptoms (udder swelling or milk clots) appeared, achieving a 91.8% sensitivity rate.</p>

<h3 id="faq-4">Q4: Does Zero Drop replace licensed veterinary professionals?</h3>
<p><strong>No.</strong> Zero Drop is an early warning and decision support platform. It alerts farmers to rising subclinical risk so they can perform California Mastitis Tests (CMT) or request timely veterinary intervention before irreversible tissue damage occurs.</p>

<h2 id="hardware-faq">Hardware &amp; Operations</h2>

<h3 id="faq-5">Q5: Is the Smart Neck Belt waterproof and mud-resistant?</h3>
<p><strong>Yes.</strong> The Smart Belt enclosure is rated <strong>IP68 waterproof</strong> and constructed from UV-stabilized, impact-resistant polycarbonate with ultrasonically welded seals to withstand mud, rain, and livestock rubbing.</p>

<h3 id="faq-6">Q6: What happens if internet connectivity drops on the farm?</h3>
<p>Smart Belts buffer telemetry data in local flash memory for up to 7 days. When the mobile app or gateway reconnects, cached data syncs automatically to the cloud backend.</p>
    `
  },

  /* ─── GLOSSARY ──────────────────────────────── */
  'glossary': {
    title: 'Glossary',
    category: 'Resources',
    breadcrumb: ['Docs', 'Resources', 'Glossary'],
    prev: { page: 'faq', label: 'FAQ' },
    next: { page: 'troubleshooting', label: 'Troubleshooting' },
    content: () => `
<h1 id="glossary">Dairy &amp; AI Terminology Glossary</h1>
<p class="lead">A reference dictionary of veterinary medicine, animal bio-telemetry, and machine learning terms used throughout the Zero Drop platform.</p>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Term</th><th>Category</th><th>Definition &amp; Context</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Bovine Mastitis</strong></td>
        <td>Veterinary</td>
        <td>Inflammatory reaction of the udder tissue caused by bacterial infection, physical trauma, or chemical stress. Classsembled into subclinical (invisible) and clinical (visible) phases.</td>
      </tr>
      <tr>
        <td><strong>Electrical Conductivity (EC)</strong></td>
        <td>Diagnostics</td>
        <td>Ability of milk to conduct electric current ($mS/cm$). Udder cell damage increases $Na^+$ and $Cl^-$ concentration, raising conductivity above baseline.</td>
      </tr>
      <tr>
        <td><strong>Somatic Cell Count (SCC)</strong></td>
        <td>Diagnostics</td>
        <td>Count of leukocytes (white blood cells) and epithelial cells per milliliter of milk. Key indicator of mammary gland infection (normal &lt;200,000 cells/mL).</td>
      </tr>
      <tr>
        <td><strong>Rumination Time</strong></td>
        <td>Bio-Telemetry</td>
        <td>Total minutes spent regurgitating, re-chewing, and re-swallowing cud in a 24-hour cycle. Healthy cows ruminate 450–600 min/day. Drops indicate systemic stress.</td>
      </tr>
      <tr>
        <td><strong>XGBoost</strong></td>
        <td>Machine Learning</td>
        <td>eXtreme Gradient Boosting—an optimized distributed gradient-boosted decision tree algorithm used as Zero Drop's primary risk classification engine.</td>
      </tr>
      <tr>
        <td><strong>SHAP (TreeSHAP)</strong></td>
        <td>Explainable AI</td>
        <td>SHapley Additive exPlanations. Game-theoretic framework that assigns each feature a contextual contribution value $\phi_i$ for a specific prediction.</td>
      </tr>
      <tr>
        <td><strong>Days in Milk (DIM)</strong></td>
        <td>Dairy Management</td>
        <td>Number of days elapsed since the cow's most recent calving date. Used to determine current lactation phase (peak, mid, late, dry).</td>
      </tr>
      <tr>
        <td><strong>California Mastitis Test (CMT)</strong></td>
        <td>Veterinary</td>
        <td>Rapid bedside cow-side diagnostic reagent test that estimates somatic cell count through gel formation when mixed with milk quarters.</td>
      </tr>
      <tr>
        <td><strong>Temperature Humidity Index (THI)</strong></td>
        <td>Environment</td>
        <td>Combined metric of ambient temperature and relative humidity used to assess thermal heat stress in dairy livestock.</td>
      </tr>
      <tr>
        <td><strong>LoRaWAN</strong></td>
        <td>IoT / Wireless</td>
        <td>Long Range Wide Area Network protocol operating in license-exempt sub-GHz ISM bands (868/915 MHz), supporting long-range (2–5 km) low-power telemetry.</td>
      </tr>
    </tbody>
  </table>
</div>
    `
  },

  /* ─── MIGRATION GUIDE ───────────────────────── */
  'migration-guide': {
    title: 'Migration Guide',
    category: 'Get Started',
    breadcrumb: ['Docs', 'Get Started', 'Migration Guide'],
    prev: { page: 'security-compliance', label: 'Security & Compliance' },
    next: { page: 'dashboard', label: 'Dashboard' },
    content: () => `
<h1 id="migration-guide">Migration &amp; Integration Guide</h1>
<p class="lead">Instructions for importing existing farm records, migrating legacy herd databases, and syncing third-party dairy management software.</p>

<h2 id="supported-systems">Supported Farm Management Software</h2>
<p>Zero Drop includes native import adapters and REST sync connectors for major commercial dairy systems:</p>

<div class="card-grid">
  <div class="concept-card">
    <div class="concept-card-term">ADAPTER</div>
    <div class="concept-card-title">DeLaval DelPro™</div>
    <p class="concept-card-desc">Direct CSV and XML export migration for animal records, daily milk yields, and conductivity logs.</p>
  </div>
  <div class="concept-card">
    <div class="concept-card-term">ADAPTER</div>
    <div class="concept-card-title">Lely Horizon™</div>
    <p class="concept-card-desc">REST API webhook connector syncing robotic milking session data in real time.</p>
  </div>
  <div class="concept-card">
    <div class="concept-card-term">ADAPTER</div>
    <div class="concept-card-title">NDDB INAM / INAPH</div>
    <p class="concept-card-desc">Standard Indian National Dairy Development Board tag mapping schema support.</p>
  </div>
  <div class="concept-card">
    <div class="concept-card-term">ADAPTER</div>
    <div class="concept-card-title">Custom CSV / Excel</div>
    <p class="concept-card-desc">Generic CSV upload wizard with drag-and-drop column mapping interface.</p>
  </div>
</div>

<h2 id="csv-schema">Standard CSV Import Specification</h2>
<p>Format your herd data according to the following CSV column header layout:</p>

${codeBlock('csv', 'tag_id,breed,birth_date,calving_date,parity,smart_belt_id,rfid_epc\nCOW-1001,Gir,2021-03-15,2024-01-10,2,ZD-BELT-9042,E2003412013840\nCOW-1002,Murrah Buffalo,2020-08-22,2023-11-05,3,ZD-BELT-9043,E2003412013841')}

<h2 id="migration-steps">Migration Execution Steps</h2>
<ol>
  <li>Navigate to <strong>Platform &gt; Animal Management</strong> in the Zero Drop web dashboard.</li>
  <li>Click <strong>Import Data</strong> and select your source format (DeLaval CSV, Lely XML, or Custom CSV).</li>
  <li>Map your source CSV columns to Zero Drop target attributes using the field matcher tool.</li>
  <li>Run the <strong>Dry-Run Validation Test</strong> to check for duplicate Tag IDs or invalid date formats.</li>
  <li>Click <strong>Execute Import</strong> to populate your herd database.</li>
</ol>
    `
  },

  /* ─── RELEASE NOTES & CHANGELOG ─────────────── */
  'release-notes': {
    title: 'Release Notes & Changelog',
    category: 'Resources',
    breadcrumb: ['Docs', 'Resources', 'Release Notes'],
    prev: { page: 'troubleshooting', label: 'Troubleshooting' },
    next: { page: 'faq', label: 'FAQ' },
    content: () => `
<h1 id="release-notes">Release Notes &amp; Changelog</h1>
<p class="lead">Track platform updates, machine learning model versioning, firmware releases, and API deprecations.</p>

<h2 id="v2-4-0">v2.4.0 (Current Release — September 2026)</h2>

<div class="concept-grid">
  <div class="concept-card">
    <div class="concept-card-term">AI MODEL v2.4</div>
    <div class="concept-card-title">XGBoost Early Warning Engine</div>
    <p class="concept-card-desc">Re-trained on 150,000 multi-farm lactation records. Sensitivity improved to 91.8% and false positive rates reduced by 14%.</p>
  </div>
  <div class="concept-card">
    <div class="concept-card-term">EXPLAINABILITY</div>
    <div class="concept-card-title">SHAP Visual Tooltips</div>
    <p class="concept-card-desc">Interactive SHAP attribution breakdown added to animal detail cards on web and mobile app views.</p>
  </div>
  <div class="concept-card">
    <div class="concept-card-term">FIRMWARE v2.4</div>
    <div class="concept-card-title">Smart Belt SX1262 LoRaWAN</div>
    <p class="concept-card-desc">Added Semtech SX1262 long-range 868/915 MHz radio support with adaptive power management extending battery life to 120 days.</p>
  </div>
  <div class="concept-card">
    <div class="concept-card-term">LOCALIZATION</div>
    <div class="concept-card-title">9 Indian Languages</div>
    <p class="concept-card-desc">Full voice and text localization added for Hindi, Marathi, Gujarati, Punjabi, Tamil, Telugu, Kannada, Malayalam, and Bengali.</p>
  </div>
</div>
    `
  },

  /* ─── DASHBOARD ─────────────────────────────── */
  'dashboard': {
    title: 'Dashboard',
    category: 'Platform',
    breadcrumb: ['Docs', 'Platform', 'Dashboard'],
    prev: { page: 'migration-guide', label: 'Migration Guide' },
    next: { page: 'animal-management', label: 'Animal Management' },
    content: () => `
<h1 id="dashboard">Dashboard Overview &amp; Control Center</h1>
<p class="lead">The Zero Drop Dashboard serves as the real-time operational control center for dairy farm operators, herd managers, and veterinary staff. It synthesizes continuous bio-telemetry, milk diagnostics, and XGBoost machine learning predictions into immediate actionable insights.</p>

${callout('note', 'Control Center Purpose', 'The dashboard is optimized for daily morning and evening milking shift workflows. It immediately highlights animals requiring physical examination, California Mastitis Testing (CMT), or milk isolation before milking operations commence.')}

<h2 id="operational-objectives">Executive Operational Objectives</h2>
<p>Upon logging into Zero Drop, the dashboard answers four critical management questions within seconds:</p>

<div class="concept-grid">
  <div class="concept-card">
    <div class="concept-card-term">IMMEDIATE RISK</div>
    <div class="concept-card-title">Elevated Risk Livestock</div>
    <p class="concept-card-desc">Which cows currently exceed Moderate (41+) or High (71+) risk thresholds and require immediate physical inspection?</p>
  </div>
  <div class="concept-card">
    <div class="concept-card-term">HERD STATUS</div>
    <div class="concept-card-title">Overall Herd Distribution</div>
    <p class="concept-card-desc">What percentage of the herd is operating in optimal health versus showing early subclinical inflammatory signals?</p>
  </div>
  <div class="concept-card">
    <div class="concept-card-term">SHIELD ALERT</div>
    <div class="concept-card-title">Unresolved Alert Stream</div>
    <p class="concept-card-desc">Are there active, unacknowledged alerts that need assignment to farm workers or veterinary technicians?</p>
  </div>
  <div class="concept-card">
    <div class="concept-card-term">TELEMETRY SYNC</div>
    <div class="concept-card-title">IoT Collar Sync Status</div>
    <p class="concept-card-desc">Are all Smart Neck Belts actively transmitting 5-minute telemetry over the LoRaWAN/BLE gateway network?</p>
  </div>
</div>

<h2 id="herd-kpis">Real-Time Herd Key Performance Indicators</h2>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Metric Indicator</th><th>Current Value</th><th>24h Delta</th><th>Operational Target</th><th>Status</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Total Registered Herd</strong></td><td>142 Cows</td><td>+2 Added</td><td>100% Monitored</td><td><span class="tag-supported">Active</span></td></tr>
      <tr><td><strong>Active Smart Collars</strong></td><td>140 Belts</td><td>0 Disconnects</td><td>&gt; 98% Online Rate</td><td><span class="tag-supported">98.6% Online</span></td></tr>
      <tr><td><strong>High Risk Animals (&gt;70)</strong></td><td>3 Cows</td><td>+1 Elevated</td><td>0 Imminent Cases</td><td><span class="badge badge-high">Action Required</span></td></tr>
      <tr><td><strong>Moderate Risk Animals (41–70)</strong></td><td>8 Cows</td><td>-2 Resolved</td><td>&lt; 5% of Herd</td><td><span class="badge badge-mod">Monitoring</span></td></tr>
      <tr><td><strong>24h Average Rumination</strong></td><td>482 min/cow</td><td>+14 min</td><td>450 – 550 min/day</td><td><span class="tag-supported">Normal</span></td></tr>
    </tbody>
  </table>
</div>

<h2 id="risk-breakdown">Risk Distribution Spectrum</h2>

<div class="risk-gauge-row">
  <div class="risk-gauge-label" style="color:#10B981;">No Risk (0–20)</div>
  <div class="risk-gauge-bar"><div class="risk-gauge-fill" style="width:78%;background:#10B981;"></div></div>
  <div class="risk-gauge-range">111 Cows (78%)</div>
</div>
<div class="risk-gauge-row">
  <div class="risk-gauge-label" style="color:#3B82F6;">Low Risk (21–40)</div>
  <div class="risk-gauge-bar"><div class="risk-gauge-fill" style="width:14%;background:#3B82F6;"></div></div>
  <div class="risk-gauge-range">20 Cows (14%)</div>
</div>
<div class="risk-gauge-row">
  <div class="risk-gauge-label" style="color:#F59E0B;">Moderate (41–70)</div>
  <div class="risk-gauge-bar"><div class="risk-gauge-fill" style="width:6%;background:#F59E0B;"></div></div>
  <div class="risk-gauge-range">8 Cows (6%)</div>
</div>
<div class="risk-gauge-row">
  <div class="risk-gauge-label" style="color:#EF4444;">High Risk (71–100)</div>
  <div class="risk-gauge-bar"><div class="risk-gauge-fill" style="width:2%;background:#EF4444;"></div></div>
  <div class="risk-gauge-range">3 Cows (2%)</div>
</div>

<h2 id="triage-table">Elevated Risk Livestock Triage Matrix</h2>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Tag ID</th><th>Breed</th><th>Lactation DIM</th><th>Risk Score</th><th>Primary SHAP Driver</th><th>Alert Status</th><th>Action</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>ZD-104</strong></td>
        <td>HF Cross</td>
        <td>Day 47 (Peak)</td>
        <td><span class="badge badge-high">87</span></td>
        <td>Milk EC Ratio +28% (Rear Left)</td>
        <td><span class="status-badge status-new">New</span></td>
        <td><a href="#" class="sidebar-link" data-page="animal-management">Inspect Profile &rarr;</a></td>
      </tr>
      <tr>
        <td><strong>ZD-208</strong></td>
        <td>Gir</td>
        <td>Day 32 (Peak)</td>
        <td><span class="badge badge-high">79</span></td>
        <td>Temp +1.1°C Spike &amp; Rumination ↓ 24%</td>
        <td><span class="status-badge status-acknowledged">Ack'd</span></td>
        <td><a href="#" class="sidebar-link" data-page="animal-management">Inspect Profile &rarr;</a></td>
      </tr>
      <tr>
        <td><strong>ZD-312</strong></td>
        <td>Murrah Buffalo</td>
        <td>Day 88 (Mid)</td>
        <td><span class="badge badge-high">74</span></td>
        <td>Yield Drop -18% &amp; SCC Slope ↑</td>
        <td><span class="status-badge status-new">New</span></td>
        <td><a href="#" class="sidebar-link" data-page="animal-management">Inspect Profile &rarr;</a></td>
      </tr>
      <tr>
        <td><strong>ZD-044</strong></td>
        <td>Sahiwal</td>
        <td>Day 142 (Mid)</td>
        <td><span class="badge badge-mod">62</span></td>
        <td>Subcutaneous Temp +0.7°C Delta</td>
        <td><span class="status-badge status-acknowledged">Ack'd</span></td>
        <td><a href="#" class="sidebar-link" data-page="animal-management">Inspect Profile &rarr;</a></td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="live-alert-stream">Real-Time Alert Stream Widget</h2>

<div class="alert-card">
  <div class="alert-card-header">
    <div class="alert-severity-dot sev-high"></div>
    <div class="alert-animal-id">Cow ZD-104 (HF Cross &bull; Tag #E20034)</div>
    <div style="flex:1"></div>
    <span class="badge badge-high">HIGH RISK &bull; 87/100</span>
    <span class="status-badge status-new" style="margin-left:8px;">New</span>
  </div>
  <div class="alert-card-body">
    <div class="alert-meta">
      <div class="alert-meta-item">
        <span class="alert-meta-label">Forecast Lead Time</span>
        <span class="alert-meta-value">9 Days Pre-Clinical</span>
      </div>
      <div class="alert-meta-item">
        <span class="alert-meta-label">Primary Signal</span>
        <span class="alert-meta-value">Milk EC 6.8 mS/cm (Left Rear)</span>
      </div>
      <div class="alert-meta-item">
        <span class="alert-meta-label">Timestamp</span>
        <span class="alert-meta-value">20 Sep 2026, 05:30 AM</span>
      </div>
    </div>
    <div class="alert-recommendation">
      <strong>Suggested Operator Action:</strong> Isolate milk from the left-rear teat quarter during morning milking. Perform a California Mastitis Test (CMT) and check teat orifice for firmness or warmth.
    </div>
  </div>
</div>

<h2 id="quick-actions">Dashboard Quick Actions</h2>
<div style="display:flex;gap:12px;flex-wrap:wrap;margin:20px 0;">
  <a href="#" class="btn-dashboard">Register Animal Tag</a>
  <a href="#" class="btn-dashboard" style="background:var(--info);">Log Milking Session</a>
  <a href="#" class="btn-dashboard" style="background:var(--warning);">Dispatch Vet Alert</a>
  <a href="#" class="btn-dashboard" style="background:var(--text-primary);">Export Herd Report PDF</a>
</div>
    `
  },

  /* ─── ANIMAL MANAGEMENT ─────────────────────── */
  'animal-management': {
    title: 'Animal Management',
    category: 'Platform',
    breadcrumb: ['Docs', 'Platform', 'Animal Management'],
    prev: { page: 'dashboard', label: 'Dashboard' },
    next: { page: 'health-monitoring', label: 'Health Monitoring' },
    content: () => `
<h1 id="animal-management">Animal Management &amp; Livestock Digital Twin</h1>
<p class="lead">Every animal registered in Zero Drop has a digital twin profile unifying RFID identification, lactation stage metrics, historical medical events, time-series telemetry, and ML risk predictions into a single view.</p>

<h2 id="digital-twin">Livestock Digital Twin Specification</h2>
<p>The digital twin profile tracks continuous physiological parameters against individual 14-day rolling medians to isolate subtle subclinical anomalies:</p>

<div class="prop-block">
  <div class="prop-header">
    <div>
      <div class="prop-class-name">Animal Profile: ZD-104</div>
      <div class="prop-class-desc">Holstein Friesian Cross &bull; 4 Years 3 Months &bull; Lactation Day 47 (Peak)</div>
    </div>
    <span class="badge badge-high">HIGH RISK &bull; 87</span>
  </div>
  <div class="prop-row">
    <div class="prop-name">National Tag ID</div>
    <div class="prop-type">string</div>
    <div class="prop-desc"><code>IN-MH-2024-90421</code> (Ear Tag Barcode / RFID EPC)</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">Cattle Breed</div>
    <div class="prop-type">enum</div>
    <div class="prop-desc"><code>HF_CROSS</code> (Holstein Friesian × Sahiwal Crossbred)</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">Date of Birth</div>
    <div class="prop-type">date</div>
    <div class="prop-desc">2022-06-12 (Age: 4 years, 3 months)</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">Lactation Stage / DIM</div>
    <div class="prop-type">integer</div>
    <div class="prop-desc">Day 47 of Lactation 2 (Peak Lactation Susceptibility Window)</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">Parity Count</div>
    <div class="prop-type">integer</div>
    <div class="prop-desc">2 Calvings (Second Lactation Cycle)</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">Smart Belt Serial</div>
    <div class="prop-type">string</div>
    <div class="prop-desc"><code>ZD-BELT-9042</code> (Assigned MCU MAC: <code>24:0A:C4:9B:10:4E</code>)</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">Baseline Surface Temp</div>
    <div class="prop-type">float</div>
    <div class="prop-desc">38.2°C (14-day median: 38.1°C | Current: 39.3°C &rarr; +1.2°C Delta)</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">Rumination Baseline</div>
    <div class="prop-type">integer</div>
    <div class="prop-desc">510 min/day (14-day median | Current 24h: 385 min &rarr; -24.5% Drop)</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">Milk Conductivity (EC)</div>
    <div class="prop-type">float</div>
    <div class="prop-desc">6.8 mS/cm (Left Rear) | 5.1 mS/cm (Other quarters average)</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">Prior Mastitis Count</div>
    <div class="prop-type">integer</div>
    <div class="prop-desc">1 Event Recorded (Lactation 1, Day 110 - Mild Severity)</div>
  </div>
</div>

<h2 id="lactation-lifecycle">Lactation Lifecycle &amp; Risk Vulnerability Window</h2>
<p>Lactation stages exhibit varying baseline susceptibility to udder pathogens. Zero Drop automatically adjusts XGBoost feature weights based on Days in Milk (DIM):</p>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Lactation Phase</th><th>DIM Range</th><th>Physiological Profile</th><th>Risk Susceptibility</th><th>Monitoring Protocol</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Colostrum Phase</strong></td>
        <td>Days 1 – 7</td>
        <td>High immunoglobulin concentration, rapid milk transition.</td>
        <td><span class="badge badge-mod">Moderate</span></td>
        <td>Daily teat inspection &amp; baseline temp recording.</td>
      </tr>
      <tr>
        <td><strong>Peak Lactation</strong></td>
        <td>Days 8 – 60</td>
        <td>Maximum metabolic stress &amp; peak milk volume production.</td>
        <td><span class="badge badge-high">High Risk</span></td>
        <td>24/7 Smart Belt IMU &amp; per-session EC monitoring.</td>
      </tr>
      <tr>
        <td><strong>Mid Lactation</strong></td>
        <td>Days 61 – 180</td>
        <td>Steady milk production, metabolic equilibrium achieved.</td>
        <td><span class="badge badge-low">Low Risk</span></td>
        <td>Continuous telemetry anomaly detection.</td>
      </tr>
      <tr>
        <td><strong>Late Lactation</strong></td>
        <td>Days 181 – 305</td>
        <td>Declining yield, rising somatic cell count baseline.</td>
        <td><span class="badge badge-mod">Moderate</span></td>
        <td>Monitor SCC trend &amp; dry-off preparation.</td>
      </tr>
      <tr>
        <td><strong>Dry-Off Phase</strong></td>
        <td>Days 306+</td>
        <td>Mammary involution, teat canal keratin plug formation.</td>
        <td><span class="badge badge-high">High Risk</span></td>
        <td>Dry cow therapy tracking &amp; pre-calving temp monitoring.</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="bulk-onboarding">Bulk CSV Registration Workflow</h2>

<div class="step-timeline">
  <div class="step-timeline-item">
    <div class="step-timeline-num">1</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Prepare CSV File</div>
      <div class="step-timeline-body">
        <p>Download the standardized Zero Drop CSV template containing columns: <code>tag_id</code>, <code>breed</code>, <code>dob</code>, <code>calving_date</code>, <code>parity</code>, <code>belt_serial</code>.</p>
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">2</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Upload &amp; Validate Fields</div>
      <div class="step-timeline-body">
        <p>Upload the CSV through the web dashboard. The system validates RFID barcode uniqueness and checks for physiological date errors.</p>
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">3</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Pair Hardware Smart Belts</div>
      <div class="step-timeline-body">
        <p>Use the mobile app's BLE scanner or QR code reader to link each Smart Belt collar MAC address to its corresponding animal profile.</p>
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">4</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Initialize 7-Day Baseline Calibration</div>
      <div class="step-timeline-body">
        <p>The profile enters a 7-day calibration state to establish individual temperature, rumination, and activity baselines before issuing active alerts.</p>
      </div>
    </div>
  </div>
</div>
    `
  },

  /* ─── HEALTH MONITORING ─────────────────────── */
  'health-monitoring': {
    title: 'Health Monitoring',
    category: 'Platform',
    breadcrumb: ['Docs', 'Platform', 'Health Monitoring'],
    prev: { page: 'animal-management', label: 'Animal Management' },
    next: { page: 'smart-belt-iot', label: 'Smart Belt IoT' },
    content: () => `
<h1 id="health-monitoring">Continuous Health Monitoring &amp; Bio-Telemetry</h1>
<p class="lead">Zero Drop monitors seven continuous and periodic physiological parameters per animal. By tracking individual deviations rather than static population averages, the platform identifies early subclinical inflammatory trends.</p>

<h2 id="monitoring-parameters">Bio-Telemetry Parameter Matrix</h2>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Parameter</th><th>Primary Sensor Source</th><th>Sampling Frequency</th><th>Normal Baseline</th><th>Subclinical Anomaly Trigger</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Carotid Surface Temp</strong></td>
        <td>MLX90614 IR Thermometer</td>
        <td>Every 5 minutes</td>
        <td>37.8°C – 38.8°C</td>
        <td>Sustained elevation &gt; +0.6°C over 14-day median</td>
      </tr>
      <tr>
        <td><strong>Rumination Time</strong></td>
        <td>MPU6050 Accelerometer / IMU</td>
        <td>Continuous (50Hz)</td>
        <td>450 – 550 min/day</td>
        <td>Drop &gt; 18% below individual median for 24h</td>
      </tr>
      <tr>
        <td><strong>Activity Level</strong></td>
        <td>MPU6050 Accelerometer / IMU</td>
        <td>Continuous (50Hz)</td>
        <td>Animal baseline</td>
        <td>Lethargy drop (&gt;30%) or restless pacing spike</td>
      </tr>
      <tr>
        <td><strong>Milk Electrical Conductivity</strong></td>
        <td>Inline Milk Meter Probe</td>
        <td>Per Milking Session</td>
        <td>4.2 – 5.2 mS/cm</td>
        <td>Quarter ratio &gt; 1.25 or absolute EC &gt; 6.2 mS/cm</td>
      </tr>
      <tr>
        <td><strong>Milk Yield Deviation</strong></td>
        <td>Milking Station Scale</td>
        <td>Per Milking Session</td>
        <td>Expected lactation curve</td>
        <td>Unexplained yield drop &gt; 12% in 24 hours</td>
      </tr>
      <tr>
        <td><strong>Somatic Cell Count (SCC)</strong></td>
        <td>Lab Reagent Test (CMT/DCC)</td>
        <td>Periodic / Weekly</td>
        <td>&lt; 200,000 cells/mL</td>
        <td>Elevation to 200,000 – 750,000 cells/mL</td>
      </tr>
      <tr>
        <td><strong>Ambient THI Index</strong></td>
        <td>Weather Station API</td>
        <td>Hourly</td>
        <td>THI &lt; 72</td>
        <td>Heat stress THI &gt; 78 compounding risk score</td>
      </tr>
    </tbody>
  </table>
</div>

${callout('warning', 'Reference Ranges Notice', 'Normal reference ranges vary by breed, lactation stage, ambient climate, and diet. Zero Drop relies primarily on intra-animal delta comparisons ($\Delta$) relative to each cow\'s 14-day rolling median.')}

<h2 id="teat-quarter-physiology">Teat Quarter Electrical Conductivity Analysis</h2>
<p>Udder inflammation breaks down tight junctions in the mammary epithelium. This increases sodium ($Na^+$) and chloride ($Cl^-$) ion concentration in milk, elevating electrical conductivity before physical swelling appears:</p>

<div class="deploy-layers">
  <div class="deploy-layer-row">
    <div class="deploy-layer-label">Front Left (FL)</div>
    <div class="deploy-layer-items">
      <div class="deploy-item">EC: 4.8 mS/cm</div>
      <div class="deploy-item">Status: Normal</div>
    </div>
  </div>
  <div class="deploy-layer-row">
    <div class="deploy-layer-label">Front Right (FR)</div>
    <div class="deploy-layer-items">
      <div class="deploy-item">EC: 4.9 mS/cm</div>
      <div class="deploy-item">Status: Normal</div>
    </div>
  </div>
  <div class="deploy-layer-row">
    <div class="deploy-layer-label">Rear Left (RL)</div>
    <div class="deploy-layer-items">
      <div class="deploy-item primary" style="background:#FFF1F2;border-color:#FECDD3;color:#E11D48;">EC: 6.8 mS/cm (+41% Surge)</div>
      <div class="deploy-item primary" style="background:#FFF1F2;border-color:#FECDD3;color:#E11D48;">Status: Subclinical Inflammation</div>
    </div>
  </div>
  <div class="deploy-layer-row">
    <div class="deploy-layer-label">Rear Right (RR)</div>
    <div class="deploy-layer-items">
      <div class="deploy-item">EC: 5.0 mS/cm</div>
      <div class="deploy-item">Status: Normal</div>
    </div>
  </div>
</div>

<h2 id="clinical-event-logging">Clinical Health Event Logging Workflow</h2>

<div class="step-timeline">
  <div class="step-timeline-item">
    <div class="step-timeline-num">1</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Alert Reception &amp; Physical Check</div>
      <div class="step-timeline-body">
        <p>Operator receives a High Risk alert for Cow ZD-104 and conducts a bedside udder warmth and CMT check.</p>
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">2</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Log CMT Gel Result</div>
      <div class="step-timeline-body">
        <p>In the mobile app, log the CMT score per quarter (e.g., <em>"Rear Left: Trace Gel / Score 1"</em>).</p>
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">3</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Log Veterinary Intervention</div>
      <div class="step-timeline-body">
        <p>If non-antibiotic teat dip or veterinary treatment is administered, log the treatment type, date, and milk withdrawal period.</p>
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">4</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">Track Recovery &amp; Risk Subsidence</div>
      <div class="step-timeline-body">
        <p>The system monitors temperature and rumination recovery over the next 72 hours until the risk score drops below 20.</p>
      </div>
    </div>
  </div>
</div>
    `
  },

  /* ─── SMART BELT IOT ─────────────────────────── */
  'smart-belt-iot': {
    title: 'Smart Belt IoT',
    category: 'Platform',
    breadcrumb: ['Docs', 'Platform', 'Smart Belt IoT'],
    prev: { page: 'health-monitoring', label: 'Health Monitoring' },
    next: { page: 'alerts', label: 'Alerts' },
    content: () => `
<h1 id="smart-belt-iot">Smart Belt IoT Device &amp; Telemetry Management</h1>
<p class="lead">The Zero Drop Smart Neck Belt is an industrial IP68 wearable IoT collar designed for 24/7 continuous bio-telemetry, accelerometer motion classification, and long-range wireless telemetry.</p>

<h2 id="hardware-specifications">Collar Hardware Architecture</h2>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Module / Subsystem</th><th>Hardware Component</th><th>Interface / Protocol</th><th>Functional Specifications</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Primary Microcontroller</strong></td>
        <td>ESP32-S3-WROOM-1</td>
        <td>SPI / I2C / UART</td>
        <td>Dual-Core Xtensa LX7 @ 240MHz, 512KB SRAM, 8MB PSRAM</td>
      </tr>
      <tr>
        <td><strong>Temperature Sensor</strong></td>
        <td>Melexis MLX90614 ESF</td>
        <td>I2C (Address 0x5A)</td>
        <td>Medical-grade non-contact IR thermometer, ±0.2°C accuracy</td>
      </tr>
      <tr>
        <td><strong>6-Axis Motion IMU</strong></td>
        <td>InvenSense MPU6050</td>
        <td>I2C (Address 0x68)</td>
        <td>3-axis accelerometer + 3-axis gyroscope, 50Hz sampling</td>
      </tr>
      <tr>
        <td><strong>Long-Range Transceiver</strong></td>
        <td>Semtech SX1262 LoRa</td>
        <td>SPI</td>
        <td>868/915 MHz sub-GHz band, range up to 3 km Line-of-Sight</td>
      </tr>
      <tr>
        <td><strong>Short-Range Radio</strong></td>
        <td>Bluetooth 5.0 LE</td>
        <td>2.4 GHz ISM</td>
        <td>Mobile app direct pairing, OTA firmware flashing</td>
      </tr>
      <tr>
        <td><strong>Battery &amp; Solar Unit</strong></td>
        <td>3.7V 3200mAh LiFePO4</td>
        <td>Custom PCB Regulator</td>
        <td>Industrial wide-temp battery with monocrystalline solar charger</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="motion-classifier">On-Device Motion Classification Engine</h2>
<p>An embedded C++ micro-algorithm on the ESP32 processes 50Hz IMU accelerations to classify bovine behavioral states:</p>

<div class="concept-grid">
  <div class="concept-card">
    <div class="concept-card-term">BEHAVIOR</div>
    <div class="concept-card-title">Rumination Chewing</div>
    <p class="concept-card-desc">Rhythmic 0.8Hz to 1.2Hz jaw motion pattern detected during cud-chewing while resting or lying down.</p>
  </div>
  <div class="concept-card">
    <div class="concept-card-term">BEHAVIOR</div>
    <div class="concept-card-title">Active Grazing / Feeding</div>
    <p class="concept-card-desc">Downward head posture coupled with sporadic lateral head movements during feeding sessions.</p>
  </div>
  <div class="concept-card">
    <div class="concept-card-term">BEHAVIOR</div>
    <div class="concept-card-title">Resting / Inactive</div>
    <p class="concept-card-desc">Low acceleration variance (&lt;0.05g) indicating stationary lying or standing rest.</p>
  </div>
  <div class="concept-card">
    <div class="concept-card-term">BEHAVIOR</div>
    <div class="concept-card-title">High Agitation / Restless</div>
    <p class="concept-card-desc">High-frequency head tossing and pacing indicating discomfort, estrus, or acute fever stress.</p>
  </div>
</div>

<h2 id="telemetry-payload">Telemetry JSON Transmission Payload</h2>
<p>Every 5 minutes, the Smart Belt emits the following JSON packet over MQTT/LoRaWAN:</p>

${codeBlock('json', '{\n  "device_mac": "24:0A:C4:9B:10:4E",\n  "belt_serial": "ZD-BELT-9042",\n  "animal_tag": "ZD-104",\n  "firmware_ver": "v2.4.1",\n  "timestamp_utc": "2026-09-20T05:30:00Z",\n  "telemetry": {\n    "carotid_temp_c": 39.28,\n    "ambient_temp_c": 28.4,\n    "rumination_minutes_last_hour": 42,\n    "rumination_minutes_24h": 385,\n    "activity_index_24h": 0.48,\n    "battery_volts": 3.84,\n    "battery_pct": 92,\n    "rssi_dbm": -78\n  }\n}')}

<h2 id="firmware-flashing">Firmware OTA &amp; Diagnostic Flashing</h2>
<p>Flash or update Smart Belt collars via USB-C diagnostic cable or BLE OTA using Esptool:</p>

${codeBlock('bash', '# Flash Smart Belt Firmware v2.4.1 via USB-C\nesptool.py --chip esp32s3 --port /dev/ttyUSB0 --baud 921600 \\\n  write_flash -z 0x10000 zerodrop_collar_v2.4.1.bin\n\n# Expected Output:\n# Writing at 0x00010000... (100%)\n# Hash of data verified.\n# Leaving... Hard resetting via RTS pin...')}
    `
  },

  /* ─── ALERTS ────────────────────────────────── */
  'alerts': {
    title: 'Alerts',
    category: 'Platform',
    breadcrumb: ['Docs', 'Platform', 'Alerts'],
    prev: { page: 'smart-belt-iot', label: 'Smart Belt IoT' },
    next: { page: 'recommendations', label: 'Recommendations' },
    content: () => `
<h1 id="alerts">Alert Notification Engine &amp; Dispatch System</h1>
<p class="lead">The Zero Drop alert engine continuously evaluates XGBoost predictions against configurable farm risk thresholds. When risk scores exceed safety limits, targeted alerts are dispatched instantly across web, mobile push, and SMS channels.</p>

<h2 id="alert-architecture">Multi-Channel Alert Dispatch Architecture</h2>

<div class="deploy-layers">
  <div class="deploy-layer-row">
    <div class="deploy-layer-label">Step 1: Event</div>
    <div class="deploy-layer-items">
      <div class="deploy-item primary">XGBoost Inference Event (Risk &gt; 40)</div>
    </div>
  </div>
  <div class="deploy-layer-row">
    <div class="deploy-layer-label">Step 2: Store</div>
    <div class="deploy-layer-items">
      <div class="deploy-item">TimescaleDB Alert Record Inserted</div>
      <div class="deploy-item">Redis Pub/Sub Event Emitted</div>
    </div>
  </div>
  <div class="deploy-layer-row">
    <div class="deploy-layer-label">Step 3: Route</div>
    <div class="deploy-layer-items">
      <div class="deploy-item primary">WebSockets (Web Dashboard)</div>
      <div class="deploy-item primary">Firebase Cloud Messaging (Mobile App)</div>
      <div class="deploy-item primary">Twilio / SMS Gateway (High Risk &gt;70)</div>
    </div>
  </div>
</div>

<h2 id="active-alert-examples">Interactive Alert Cards Overview</h2>

<div class="alert-card" style="margin-bottom:20px;">
  <div class="alert-card-header">
    <div class="alert-severity-dot sev-high"></div>
    <div class="alert-animal-id">Cow ZD-104 (HF Cross &bull; Tag #IN-MH-90421)</div>
    <div style="flex:1"></div>
    <span class="badge badge-high">HIGH SEVERITY &bull; SCORE 87</span>
    <span class="status-badge status-new" style="margin-left:8px;">New</span>
  </div>
  <div class="alert-card-body">
    <div class="alert-meta">
      <div class="alert-meta-item">
        <span class="alert-meta-label">Forecast Horizon</span>
        <span class="alert-meta-value">9 Days Pre-Clinical Notice</span>
      </div>
      <div class="alert-meta-item">
        <span class="alert-meta-label">Top Contributing Signal</span>
        <span class="alert-meta-value">Milk EC Ratio +28% (Rear Left Quarter)</span>
      </div>
      <div class="alert-meta-item">
        <span class="alert-meta-label">Dispatch Time</span>
        <span class="alert-meta-value">20 Sep 2026, 05:30:12 AM</span>
      </div>
    </div>
    <div class="alert-recommendation">
      <strong>Immediate Action:</strong> Perform California Mastitis Test (CMT) on left-rear teat. Isolate milk during morning milking session.
    </div>
  </div>
</div>

<div class="alert-card">
  <div class="alert-card-header">
    <div class="alert-severity-dot" style="background:#F59E0B;"></div>
    <div class="alert-animal-id">Cow ZD-044 (Sahiwal &bull; Tag #IN-MH-90488)</div>
    <div style="flex:1"></div>
    <span class="badge badge-mod">MODERATE SEVERITY &bull; SCORE 62</span>
    <span class="status-badge status-acknowledged" style="margin-left:8px;">Acknowledged</span>
  </div>
  <div class="alert-card-body">
    <div class="alert-meta">
      <div class="alert-meta-item">
        <span class="alert-meta-label">Forecast Horizon</span>
        <span class="alert-meta-value">12 Days Pre-Clinical Notice</span>
      </div>
      <div class="alert-meta-item">
        <span class="alert-meta-label">Top Contributing Signal</span>
        <span class="alert-meta-value">Carotid Temp +0.7°C Baseline Delta</span>
      </div>
      <div class="alert-meta-item">
        <span class="alert-meta-label">Dispatch Time</span>
        <span class="alert-meta-value">20 Sep 2026, 04:15:00 AM</span>
      </div>
    </div>
    <div class="alert-recommendation">
      <strong>Monitoring Action:</strong> Observe cow during milking for teat sensitivity or reduced appetite. Re-evaluate temperature trend in 12 hours.
    </div>
  </div>
</div>

<h2 id="alert-schema">Alert Object API Schema Specification</h2>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Attribute Name</th><th>Data Type</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>alert_id</code></td><td>UUID</td><td>Globally unique alert identifier (e.g. <code>c8f29e10-...</code>)</td></tr>
      <tr><td><code>animal_tag</code></td><td>string</td><td>Target animal identifier (e.g. <code>ZD-104</code>)</td></tr>
      <tr><td><code>severity_tier</code></td><td>enum</td><td><code>LOW</code> (21–40), <code>MODERATE</code> (41–70), <code>HIGH</code> (71–100)</td></tr>
      <tr><td><code>risk_score</code></td><td>integer</td><td>XGBoost normalized 0–100 probability index</td></tr>
      <tr><td><code>shap_factors</code></td><td>JSON array</td><td>Top 3 positive SHAP feature attributions</td></tr>
      <tr><td><code>status</code></td><td>enum</td><td><code>NEW</code>, <code>ACKNOWLEDGED</code>, <code>INVESTIGATING</code>, <code>RESOLVED</code></td></tr>
      <tr><td><code>timestamp_utc</code></td><td>ISO 8601 string</td><td>UTC timestamp of alert generation</td></tr>
    </tbody>
  </table>
</div>

<h2 id="alert-lifecycle">Alert Lifecycle &amp; State Transitions</h2>

<div class="step-timeline">
  <div class="step-timeline-item">
    <div class="step-timeline-num">1</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">State: NEW</div>
      <div class="step-timeline-body">
        <p>Alert generated by prediction engine. Displayed with pulsing red indicator on dashboard and dispatched to mobile app push.</p>
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">2</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">State: ACKNOWLEDGED</div>
      <div class="step-timeline-body">
        <p>Farm operator taps "Acknowledge Alert" on app or web portal. Confirms farm personnel are aware of the elevated risk tag.</p>
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">3</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">State: INVESTIGATING / ACTION LOGGED</div>
      <div class="step-timeline-body">
        <p>Operator performs CMT teat check or logs veterinary treatment (e.g. non-antibiotic teat dip) in the animal record.</p>
      </div>
    </div>
  </div>

  <div class="step-timeline-item">
    <div class="step-timeline-num">4</div>
    <div class="step-timeline-content">
      <div class="step-timeline-title">State: RESOLVED</div>
      <div class="step-timeline-body">
        <p>Risk score subsides below 20 for 48 consecutive hours, or operator manually confirms resolution after clinical clearance.</p>
      </div>
    </div>
  </div>
</div>
    `
  },

  /* ─── RECOMMENDATIONS ───────────────────────── */
  'recommendations': {
    title: 'Recommendations',
    category: 'Platform',
    breadcrumb: ['Docs', 'Platform', 'Recommendations'],
    prev: { page: 'alerts', label: 'Alerts' },
    next: { page: 'reports', label: 'Reports' },
    content: () => `
<h1 id="recommendations">Plain-Language AI Recommendation Engine</h1>
<p class="lead">Zero Drop converts complex gradient-boosted decision tree outputs and SHAP feature vectors into plain-language, non-clinical operational guidance using Google Gemini LLM synthesis.</p>

${callout('danger', 'Important Non-Clinical Disclaimer', 'Recommendations generated by Zero Drop are informational operational guidance for dairy farmers. They do not constitute clinical veterinary diagnoses, prescriptions, or therapeutic instructions. Always consult a licensed veterinarian for clinical disease management.')}

<h2 id="recommendation-widget">Live Recommendation Interface Card</h2>

<div class="alert-card">
  <div class="alert-card-header">
    <div class="alert-severity-dot sev-high"></div>
    <div style="flex:1;">
      <div class="alert-animal-id">Recommendation for Cow ZD-104 (HF Cross &bull; DIM 47)</div>
    </div>
    <span class="badge badge-high">URGENT ACTION &bull; RISK 87</span>
  </div>
  <div class="alert-card-body">
    <div class="alert-meta">
      <div class="alert-meta-item">
        <span class="alert-meta-label">Primary SHAP Drivers</span>
        <span class="alert-meta-value" style="font-size:12.5px;">1. Milk EC Ratio +28% &nbsp;&bull;&nbsp; 2. Rumination -24.5% &nbsp;&bull;&nbsp; 3. Carotid Temp +1.2°C</span>
      </div>
    </div>
    <div class="alert-recommendation" style="background:var(--bg-light);border-radius:8px;padding:16px;border:1px solid var(--border);margin-top:14px;line-height:1.7;">
      <strong>Generated Guidance (English):</strong><br>
      "Cow #ZD-104 shows early subclinical inflammatory indicators. Her electrical conductivity in the left-rear udder quarter is elevated (+28% above baseline), her rumination time dropped by 24.5% over the past 24 hours, and surface temperature is +1.2°C higher. <strong>Recommended Action:</strong> Perform a California Mastitis Test (CMT) on the left-rear quarter during morning milking. Isolate her milk if gel formation is observed and check teat warmth."
    </div>
    <div style="display:flex;gap:10px;margin-top:14px;flex-wrap:wrap;">
      <span class="badge badge-high">High Urgency</span>
      <span class="status-badge status-new">New</span>
      <span class="tag-supported">Gemini Synthesized</span>
    </div>
  </div>
</div>

<h2 id="generation-architecture">Recommendation Pipeline Architecture</h2>
<p>Zero Drop maintains a strict separation between predictive machine learning and generative natural language AI:</p>

<div class="arch-diagram">
  <div style="font-family:var(--font-mono);font-size:13px;line-height:2.2;">
    <span style="color:var(--green-primary);font-weight:700;">[1. XGBoost Model]</span> Calculates quantitative risk probability index (e.g. 87/100)<br>
    &nbsp;&nbsp;&nbsp;│<br>
    &nbsp;&nbsp;&nbsp;▼<br>
    <span style="color:var(--green-primary);font-weight:700;">[2. TreeSHAP Explainer]</span> Isolates top 3 positive feature attributions ($\phi_1, \phi_2, \phi_3$)<br>
    &nbsp;&nbsp;&nbsp;│<br>
    &nbsp;&nbsp;&nbsp;▼<br>
    <span style="color:var(--green-primary);font-weight:700;">[3. Structured Context Payload]</span> Formats Tag ID, Breed, DIM, SHAP factors into JSON<br>
    &nbsp;&nbsp;&nbsp;│<br>
    &nbsp;&nbsp;&nbsp;▼<br>
    <span style="color:var(--green-primary);font-weight:700;">[4. Gemini LLM Synthesis]</span> Generates concise, empathetic, non-clinical farmer guidance<br>
    &nbsp;&nbsp;&nbsp;│<br>
    &nbsp;&nbsp;&nbsp;▼<br>
    <span style="color:var(--green-primary);font-weight:700;">[5. Localization Engine]</span> Translates output into 9 Indian regional languages
  </div>
</div>

<h2 id="multilingual-support">Multilingual Localization Engine</h2>
<p>To ensure recommendations are accessible across smallholder dairy communities, Zero Drop renders guidance in 9 Indian languages:</p>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Language</th><th>Code</th><th>Sample Localized Guidance Snippet</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Hindi (हिन्दी)</strong></td><td><code>hi</code></td><td>गाय #ZD-104 में शुरुआती सूजन के संकेत हैं। पिछले बाएँ थन का दूध अलग करें और CMT जाँच करें।</td></tr>
      <tr><td><strong>Marathi (मराठी)</strong></td><td><code>mr</code></td><td>गायी #ZD-104 मध्ये सुरुवातीचे लक्षणे दिसत आहेत. डाव्या मागच्या कासेचे दूध वेगळे करून तपासणी करा.</td></tr>
      <tr><td><strong>Gujarati (ગુજરાતી)</strong></td><td><code>gu</code></td><td>ગાય #ZD-104 માં પ્રારંભિક સોજાના સંકેતો છે. ડાબા પાછળના આંચળનું દૂધ અલગ કરીને તપાસ કરો.</td></tr>
      <tr><td><strong>Punjabi (ਪੰਜਾਬੀ)</strong></td><td><code>pa</code></td><td>ਗਾਂ #ZD-104 ਵਿੱਚ ਸ਼ੁਰੂਆਤੀ ਸੋਜ ਦੇ ਲੱਛਣ ਹਨ। ਖੱਬੇ ਪਿਛਲੇ ਥਣ ਦਾ ਦੁੱਧ ਵੱਖ ਕਰੋ ਅਤੇ CMT ਟੈਸਟ ਕਰੋ।</td></tr>
      <tr><td><strong>Tamil (தமிழ்)</strong></td><td><code>ta</code></td><td>பசு #ZD-104 இல் ஆரம்பக்கட்ட வீக்க அறிகுறிகள் உள்ளன. இடது பின் காம்பு பாலை பரிசோதிக்கவும்.</td></tr>
    </tbody>
  </table>
</div>
    `
  },

  /* ─── REPORTS ───────────────────────────────── */
  'reports': {
    title: 'Reports',
    category: 'Platform',
    breadcrumb: ['Docs', 'Platform', 'Reports'],
    prev: { page: 'recommendations', label: 'Recommendations' },
    next: { page: 'farm-risk-map', label: 'Farm Risk Map' },
    content: () => `
<h1 id="reports">Herd Analytics, Exports &amp; Reporting</h1>
<p class="lead">Zero Drop generates formal PDF executive summaries, raw CSV telemetry dumps, and automated scheduled reports for farm managers, veterinary consultants, and dairy cooperative leaders.</p>

<h2 id="report-templates">Standardized Report Templates</h2>

<div class="table-wrap">
  <table class="doc-table">
    <thead>
      <tr><th>Report Template</th><th>Target Audience</th><th>Data Coverage &amp; Visual Content</th><th>Default Format</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Herd Health Summary</strong></td>
        <td>Farm Manager / Owner</td>
        <td>Overall risk distribution pie chart, 30-day alert trend line, high-risk animal list.</td>
        <td>PDF / Web</td>
      </tr>
      <tr>
        <td><strong>Animal Risk History</strong></td>
        <td>Veterinary Consultant</td>
        <td>Single-animal 90-day time-series charts for temp, rumination, EC, and SCC slope.</td>
        <td>PDF / CSV</td>
      </tr>
      <tr>
        <td><strong>Milk Production &amp; EC</strong></td>
        <td>Dairy Operations Head</td>
        <td>Daily herd yield vs conductivity averages per milking session.</td>
        <td>CSV / Excel</td>
      </tr>
      <tr>
        <td><strong>Bio-Telemetry Audit Log</strong></td>
        <td>IoT Systems Engineer</td>
        <td>Raw 5-minute Smart Belt sensor packets, battery voltage decay, RSSI signal logs.</td>
        <td>JSON / CSV</td>
      </tr>
      <tr>
        <td><strong>Alert Resolution Audit</strong></td>
        <td>Cooperative Auditor</td>
        <td>Audit log of generated alerts, response timestamps, operator acknowledgments, CMT scores.</td>
        <td>PDF / CSV</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="pdf-export-api">cURL Report Generation API Endpoint</h2>
<p>Generate and export PDF reports programmatically via the backend API:</p>

${codeBlock('bash', 'curl -X POST https://api.zerodrop.example/api/v1/reports/generate/ \\\n  -H "Authorization: Bearer <your_jwt_token>" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "farm_id": 101,\n    "report_type": "HERD_HEALTH_SUMMARY",\n    "date_from": "2026-09-01",\n    "date_to": "2026-09-20",\n    "format": "pdf"\n  }\' \\\n  --output herd_summary_report_sep2026.pdf')}

<h2 id="report-scheduling">Automated Email &amp; WhatsApp Subscriptions</h2>
<p>Farm operators can configure automated recurring dispatch of PDF herd reports every Monday at 06:00 AM via email or WhatsApp Business API.</p>
    `
  },

  /* ─── FARM RISK MAP ─────────────────────────── */
  'farm-risk-map': {
    title: 'Farm Risk Map',
    category: 'Platform',
    breadcrumb: ['Docs', 'Platform', 'Farm Risk Map'],
    prev: { page: 'reports', label: 'Reports' },
    next: { page: 'ai-overview', label: 'AI Overview' },
    content: () => `
<h1 id="farm-risk-map">GIS Spatial Risk Map &amp; Herd Heatmap</h1>
<p class="lead">The Farm Risk Map provides a GIS-based spatial visualization of animal risk distribution across farm pastures, feeding barns, and milking parlors using GPS telemetry and zone mapping.</p>

<h2 id="gis-layers">GIS Map Layer Architecture</h2>

<div class="deploy-layers">
  <div class="deploy-layer-row">
    <div class="deploy-layer-label">Layer 1: Base Map</div>
    <div class="deploy-layer-items">
      <div class="deploy-item">Satellite Aerial View</div>
      <div class="deploy-item">Farm CAD Boundary Polygons</div>
      <div class="deploy-item">Milking Parlor Pins</div>
    </div>
  </div>
  <div class="deploy-layer-row">
    <div class="deploy-layer-label">Layer 2: Heatmap</div>
    <div class="deploy-layer-items">
      <div class="deploy-item primary">Risk Score Kernel Density (KDE)</div>
      <div class="deploy-item primary">Thermal Stress Cluster Zones</div>
    </div>
  </div>
  <div class="deploy-layer-row">
    <div class="deploy-layer-label">Layer 3: Markers</div>
    <div class="deploy-layer-items">
      <div class="deploy-item primary">Pulsing Red Marker (High Risk &gt;70)</div>
      <div class="deploy-item">Amber Marker (Moderate Risk 41-70)</div>
      <div class="deploy-item">Green Marker (Optimal 0-40)</div>
    </div>
  </div>
</div>

<h2 id="spatial-insights">Spatial Risk Clustering Analysis</h2>
<p>By mapping animal locations against health risk scores, farm managers can detect spatial environmental factors contributing to mastitis:</p>
<ul>
  <li><strong>Damp Pasture Clustering:</strong> High risk concentration in specific low-lying pasture zones indicates muddy conditions encouraging teat canal bacterial ingress.</li>
  <li><strong>Shed Thermal Stress:</strong> Elevated temperature spikes in specific barn sections highlight malfunctioning ventilation fans.</li>
  <li><strong>Milking Parlor Delay Clusters:</strong> Restlessness spikes in holding pens indicate prolonged standing times prior to milking.</li>
</ul>

<h2 id="geojson-format">GeoJSON Position &amp; Risk Payload Specification</h2>

${codeBlock('json', '{\n  "type": "FeatureCollection",\n  "features": [\n    {\n      "type": "Feature",\n      "geometry": {\n        "type": "Point",\n        "coordinates": [73.856743, 18.520439]\n      },\n      "properties": {\n        "animal_tag": "ZD-104",\n        "risk_score": 87,\n        "severity": "HIGH",\n        "shed_id": "Barn-2",\n        "last_seen_utc": "2026-09-20T05:28:00Z"\n      }\n    }\n  ]\n}')}

${callout('warning', 'Spatial Interpretation Guidelines', 'The Farm Risk Map visualizes current individual livestock risk scores. It is not an epidemiological disease transmission model. Spatial patterns should be validated by physical inspection of farm facilities.')}
    `
  },

  /* ─── AI OVERVIEW ───────────────────────────── */
  'ai-overview': {
    title: 'AI Overview',
    category: 'AI & Machine Learning',
    breadcrumb: ['Docs', 'AI & Machine Learning', 'AI Overview'],
    prev: { page: 'farm-risk-map', label: 'Farm Risk Map' },
    next: { page: 'data-pipeline', label: 'Data Pipeline' },
    content: () => `
<h1 id="ai-overview">AI Overview</h1>
<p class="lead">Zero Drop's prediction architecture separates predictive machine learning from generative AI, using each technology for what it does best.</p>

<h2 id="architecture-separation">Architecture Separation</h2>
<div class="table-wrap"><table class="doc-table"><thead><tr><th>Technology</th><th>Role</th><th>What It Does</th></tr></thead><tbody>
<tr><td><strong>XGBoost</strong></td><td>Risk Prediction</td><td>Estimates mastitis risk score from structured sensor and farm data</td></tr>
<tr><td><strong>SHAP</strong></td><td>Explainability</td><td>Identifies which features contributed to each prediction</td></tr>
<tr><td><strong>Gemini</strong></td><td>Natural Language</td><td>Generates plain-language recommendations, multilingual farmer assistance</td></tr>
</tbody></table></div>

${callout('note', 'Important Distinction', 'Gemini is not the mastitis prediction model. Risk scores and risk classifications are generated by the XGBoost model. Gemini is used only for the natural-language output layer — producing readable recommendations from structured prediction outputs.')}

<h2 id="ai-pipeline">AI Pipeline</h2>

<div class="arch-diagram">
  <div class="arch-layer">
    <div class="arch-layer-label">Input</div>
    <div class="arch-nodes">
      <div class="arch-node primary">Sensor Data</div>
      <div class="arch-node primary">Farm Records</div>
      <div class="arch-node primary">Milk Records</div>
      <div class="arch-node primary">Health History</div>
    </div>
  </div>
  <div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>
  <div class="arch-layer">
    <div class="arch-layer-label">Preprocessing</div>
    <div class="arch-nodes">
      <div class="arch-node">Validation &amp; Cleaning</div>
      <div class="arch-node">Normalization</div>
      <div class="arch-node">Temporal Alignment</div>
    </div>
  </div>
  <div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>
  <div class="arch-layer">
    <div class="arch-layer-label">Feature Engineering</div>
    <div class="arch-nodes">
      <div class="arch-node">Rolling Averages</div>
      <div class="arch-node">Trend Features</div>
      <div class="arch-node">Deviation Features</div>
    </div>
  </div>
  <div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>
  <div class="arch-layer">
    <div class="arch-layer-label">Prediction</div>
    <div class="arch-nodes"><div class="arch-node primary" style="padding:12px 28px;font-size:14px;font-weight:700;">XGBoost Model</div></div>
  </div>
  <div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>
  <div class="arch-layer">
    <div class="arch-layer-label">Explainability</div>
    <div class="arch-nodes"><div class="arch-node primary" style="padding:12px 28px;">SHAP Values</div></div>
  </div>
  <div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>
  <div class="arch-layer">
    <div class="arch-layer-label">Language Generation</div>
    <div class="arch-nodes"><div class="arch-node" style="padding:12px 28px;">Gemini</div></div>
  </div>
  <div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>
  <div class="arch-layer">
    <div class="arch-layer-label">Output</div>
    <div class="arch-nodes">
      <div class="arch-node primary">Risk Score</div>
      <div class="arch-node primary">Risk Level</div>
      <div class="arch-node primary">Alert</div>
      <div class="arch-node primary">Recommendation</div>
    </div>
  </div>
</div>
    `
  },

  /* ─── RISK PREDICTION ───────────────────────── */
  'risk-prediction': {
    title: 'Risk Prediction',
    category: 'AI & Machine Learning',
    breadcrumb: ['Docs', 'AI & Machine Learning', 'Risk Prediction'],
    prev: { page: 'feature-engineering', label: 'Feature Engineering' },
    next: { page: 'risk-classification', label: 'Risk Classification' },
    content: () => `
<h1 id="risk-prediction">Risk Prediction</h1>
<p class="lead">The prediction engine estimates the probability of a mastitis event occurring within the configured forecasting window, using a gradient-boosted decision tree model.</p>

<h2 id="objective">Forecasting Objective</h2>
<p>The target forecasting objective is to identify elevated risk <strong>7–14 days before visible clinical signs</strong> of mastitis appear. This window allows farmers and veterinary professionals to take timely preventive action.</p>

${callout('warning', 'Prototype Target', 'The 7–14 day forecasting objective is the intended design target for this prototype. Actual predictive performance depends on the quality and volume of training data, feature engineering, and real-world validation. Do not treat this as a validated clinical claim.')}

<h2 id="model-training">Model Training Concept</h2>
<p>The model is trained on historical animal health data organized into temporal windows:</p>

<div class="table-wrap"><table class="doc-table"><thead><tr><th>Window Type</th><th>Description</th><th>Label</th></tr></thead><tbody>
<tr><td>Pre-disease window</td><td>Data recorded in the period before a confirmed mastitis event</td><td>Positive (1)</td></tr>
<tr><td>Healthy window</td><td>Data from periods without a mastitis event in the following window</td><td>Negative (0)</td></tr>
</tbody></table></div>

<p>The model learns which patterns of changing health indicators (temperature trends, conductivity changes, rumination drops) are associated with future mastitis events.</p>

<h2 id="input-features">Key Input Features</h2>
<ul>
  <li>Temperature trend over recent days</li>
  <li>Rumination deviation from individual baseline</li>
  <li>Activity change relative to baseline</li>
  <li>Milk conductivity average and trend</li>
  <li>Milk yield change</li>
  <li>Days in milk (lactation stage)</li>
  <li>Prior mastitis event count</li>
  <li>Environmental temperature</li>
</ul>

<h2 id="output">Prediction Output</h2>
${codeBlock('json', '{\n  <span class="tok-key">"animal_id"</span>: <span class="tok-str">"ZD-104"</span>,\n  <span class="tok-key">"risk_score"</span>: <span class="tok-num">87</span>,\n  <span class="tok-key">"risk_level"</span>: <span class="tok-str">"HIGH"</span>,\n  <span class="tok-key">"prediction_window"</span>: <span class="tok-str">"7-14 days"</span>,\n  <span class="tok-key">"contributing_factors"</span>: [\n    { <span class="tok-key">"feature"</span>: <span class="tok-str">"milk_conductivity"</span>, <span class="tok-key">"direction"</span>: <span class="tok-str">"positive"</span>, <span class="tok-key">"shap_value"</span>: <span class="tok-num">0.31</span> },\n    { <span class="tok-key">"feature"</span>: <span class="tok-str">"temperature_trend"</span>, <span class="tok-key">"direction"</span>: <span class="tok-str">"positive"</span>, <span class="tok-key">"shap_value"</span>: <span class="tok-num">0.22</span> },\n    { <span class="tok-key">"feature"</span>: <span class="tok-str">"rumination_change"</span>, <span class="tok-key">"direction"</span>: <span class="tok-str">"negative"</span>, <span class="tok-key">"shap_value"</span>: <span class="tok-num">-0.19</span> }\n  ],\n  <span class="tok-key">"generated_at"</span>: <span class="tok-str">"2026-09-20T00:05:00Z"</span>\n}')}

<h2 id="evaluation-metrics">Evaluation Metrics</h2>
<p>The model is evaluated using standard binary classification metrics. Performance values are not reported here as the model has not yet been validated on real field data:</p>
<div class="table-wrap"><table class="doc-table"><thead><tr><th>Metric</th><th>Description</th></tr></thead><tbody>
<tr><td>Precision</td><td>Of animals flagged as high risk, what fraction truly developed mastitis</td></tr>
<tr><td>Recall (Sensitivity)</td><td>Of animals that developed mastitis, what fraction were correctly identified</td></tr>
<tr><td>F1 Score</td><td>Harmonic mean of precision and recall</td></tr>
<tr><td>ROC-AUC</td><td>Overall discrimination ability across all thresholds</td></tr>
</tbody></table></div>

${callout('note', 'No Published Accuracy Figures', 'Zero Drop does not publish accuracy claims for the prototype. Validated performance metrics will be shared following controlled field evaluation.')}
    `
  },

  /* ─── RISK CLASSIFICATION ───────────────────── */
  'risk-classification': {
    title: 'Risk Classification',
    category: 'AI & Machine Learning',
    breadcrumb: ['Docs', 'AI & Machine Learning', 'Risk Classification'],
    prev: { page: 'risk-prediction', label: 'Risk Prediction' },
    next: { page: 'xgboost', label: 'XGBoost' },
    content: () => `
<h1 id="risk-classification">Risk Classification</h1>
<p class="lead">Risk scores (0–100) are mapped to discrete risk levels for display, alerting and prioritization.</p>

<h2 id="risk-levels">Risk Levels</h2>

<div class="risk-table-card">
  <div class="risk-row">
    <div class="risk-dot risk-dot-norisk"></div>
    <div class="risk-label risk-label-norisk" style="min-width:120px;">No Risk</div>
    <div class="risk-range">Score: 0 – 20</div>
    <div style="flex:1"></div>
    <span class="badge badge-norisk">0–20</span>
  </div>
  <div class="risk-row">
    <div class="risk-dot risk-dot-low"></div>
    <div class="risk-label risk-label-low" style="min-width:120px;">Low Risk</div>
    <div class="risk-range">Score: 21 – 40</div>
    <div style="flex:1"></div>
    <span class="badge badge-low">21–40</span>
  </div>
  <div class="risk-row">
    <div class="risk-dot risk-dot-mod"></div>
    <div class="risk-label risk-label-mod" style="min-width:120px;">Moderate Risk</div>
    <div class="risk-range">Score: 41 – 70</div>
    <div style="flex:1"></div>
    <span class="badge badge-moderate">41–70</span>
  </div>
  <div class="risk-row">
    <div class="risk-dot risk-dot-high"></div>
    <div class="risk-label risk-label-high" style="min-width:120px;">High Risk</div>
    <div class="risk-range">Score: 71 – 100</div>
    <div style="flex:1"></div>
    <span class="badge badge-high">71–100</span>
  </div>
</div>

${callout('warning', 'Prototype Thresholds', 'These risk thresholds are prototype values for demonstration and development purposes. They are subject to validation and calibration using real field data before any operational deployment. They are not clinically validated cut-offs.')}

<h2 id="level-descriptions">Level Descriptions</h2>
<div class="table-wrap"><table class="doc-table"><thead><tr><th>Level</th><th>Score</th><th>System Behavior</th></tr></thead><tbody>
<tr><td><span class="badge badge-norisk">No Risk</span></td><td>0 – 20</td><td>No alert generated. Animal shown in green on dashboard.</td></tr>
<tr><td><span class="badge badge-low">Low Risk</span></td><td>21 – 40</td><td>Informational alert. Increased monitoring recommended.</td></tr>
<tr><td><span class="badge badge-moderate">Moderate Risk</span></td><td>41 – 70</td><td>Alert generated. Manual inspection recommended.</td></tr>
<tr><td><span class="badge badge-high">High Risk</span></td><td>71 – 100</td><td>High-priority alert. Immediate inspection and veterinary contact recommended.</td></tr>
</tbody></table></div>

<h2 id="threshold-configuration">Threshold Configuration</h2>
<p>In production deployments, risk thresholds may be configurable at the farm level to account for herd-specific characteristics and validated field data. <span class="inline-note">Planned</span></p>
    `
  },

  /* ─── SHAP ──────────────────────────────────── */
  'shap-explainability': {
    title: 'SHAP Explainability',
    category: 'AI & Machine Learning',
    breadcrumb: ['Docs', 'AI & Machine Learning', 'SHAP Explainability'],
    prev: { page: 'xgboost', label: 'XGBoost' },
    next: { page: 'ai-recommendations', label: 'AI Recommendations' },
    content: () => `
<h1 id="shap-explainability">SHAP Explainability</h1>
<p class="lead"><strong>SHAP</strong> — SHapley Additive exPlanations — helps explain which input features contributed to a model prediction and by how much.</p>

<h2 id="why-shap">Why SHAP?</h2>
<p>A key challenge with machine learning models is that their predictions can be difficult to interpret. SHAP provides a mathematically grounded method for attributing each prediction to the input features, making the model's behavior transparent to users.</p>

<p>In Zero Drop, SHAP is used to:</p>
<ul>
  <li>Identify the top factors driving each risk prediction</li>
  <li>Provide a factual basis for alert messages and recommendations</li>
  <li>Support user trust by explaining why a risk level was assigned</li>
  <li>Enable veterinary professionals to assess whether the model's reasoning aligns with clinical judgment</li>
</ul>

${callout('note', 'Correlation, Not Causation', 'SHAP values explain the model\'s prediction — they show which features were most influential in the model\'s calculation. They do not prove that a feature caused the health event. Clinical interpretation should always involve a veterinary professional.')}

<h2 id="example">Example — Animal ZD-104</h2>
<p>The following shows an example SHAP output for Animal ZD-104 with a predicted risk score of 87:</p>

<div class="shap-chart">
  <div class="shap-title">Feature Contributions — Animal ZD-104 &nbsp;&bull;&nbsp; Risk Score: <span class="badge badge-high">87</span></div>

  <div class="shap-row">
    <div class="shap-feature">Milk Conductivity</div>
    <div class="shap-bar-wrap"><div class="shap-bar-pos" style="width:75%"></div></div>
    <div class="shap-dir">↑</div>
    <div class="shap-value" style="color:var(--danger);">+0.31</div>
  </div>
  <div class="shap-row">
    <div class="shap-feature">Body Temperature</div>
    <div class="shap-bar-wrap"><div class="shap-bar-pos" style="width:55%"></div></div>
    <div class="shap-dir">↑</div>
    <div class="shap-value" style="color:var(--danger);">+0.22</div>
  </div>
  <div class="shap-row">
    <div class="shap-feature">Rumination</div>
    <div class="shap-bar-wrap"><div class="shap-bar-neg" style="width:48%"></div></div>
    <div class="shap-dir">↓</div>
    <div class="shap-value" style="color:var(--info);">−0.19</div>
  </div>
  <div class="shap-row">
    <div class="shap-feature">Milk Yield</div>
    <div class="shap-bar-wrap"><div class="shap-bar-neg" style="width:35%"></div></div>
    <div class="shap-dir">↓</div>
    <div class="shap-value" style="color:var(--info);">−0.15</div>
  </div>
  <div class="shap-row">
    <div class="shap-feature">Activity Level</div>
    <div class="shap-bar-wrap"><div class="shap-bar-neg" style="width:25%"></div></div>
    <div class="shap-dir">↓</div>
    <div class="shap-value" style="color:var(--info);">−0.11</div>
  </div>

  <div style="margin-top:16px;padding:12px 14px;background:var(--bg-light);border-radius:8px;font-size:13.5px;color:var(--text-secondary);border:1px solid var(--border);">
    <strong>Interpretation:</strong> The model predicts elevated risk. The main contributing signals are increased milk conductivity and temperature, together with reduced rumination, milk yield and activity. Red bars indicate features pushing risk upward; blue bars indicate features whose below-baseline values also contribute to the risk pattern.
  </div>
</div>

<h2 id="shap-interpretation">Reading SHAP Values</h2>
<div class="table-wrap"><table class="doc-table"><thead><tr><th>Value</th><th>Direction</th><th>Meaning</th></tr></thead><tbody>
<tr><td>Positive SHAP</td><td>Feature ↑ risk</td><td>This feature's current value pushed the prediction toward high risk</td></tr>
<tr><td>Negative SHAP</td><td>Feature ↓ risk (but the value itself may be low)</td><td>This feature's current value is below baseline — also a warning signal in some contexts</td></tr>
<tr><td>Near zero</td><td>Low influence</td><td>This feature contributed little to the current prediction</td></tr>
</tbody></table></div>
    `
  },

  /* ─── AI RECOMMENDATIONS ────────────────────── */
  'ai-recommendations': {
    title: 'AI Recommendations',
    category: 'AI & Machine Learning',
    breadcrumb: ['Docs', 'AI & Machine Learning', 'AI Recommendations'],
    prev: { page: 'shap-explainability', label: 'SHAP Explainability' },
    next: { page: 'hardware-overview', label: 'Hardware Overview' },
    content: () => `
<h1 id="ai-recommendations">AI Recommendations</h1>
<p class="lead">The recommendation layer converts structured model outputs into farmer-friendly, actionable guidance using a generative AI language model.</p>

<h2 id="architecture">Architecture</h2>
<p>The recommendation pipeline receives the XGBoost risk score and the top SHAP feature attributions, then calls the Gemini language model to produce a plain-language recommendation. Gemini does not perform the prediction — it only generates the textual output from structured inputs.</p>

${codeBlock('python', '<span class="tok-cmt"># Conceptual recommendation generation</span>\n<span class="tok-kw">def</span> <span class="tok-fn">generate_recommendation</span>(risk_score, risk_level, shap_factors, language=<span class="tok-str">"en"</span>):\n    prompt = <span class="tok-fn">build_prompt</span>(risk_score, risk_level, shap_factors, language)\n    response = gemini_client.generate_content(prompt)\n    <span class="tok-kw">return</span> response.text')}

<h2 id="example-outputs">Example Outputs</h2>

<div class="prop-block">
  <div class="prop-header">
    <div class="prop-class-name">HIGH Risk — Score 87</div>
    <div class="prop-class-desc">Animal ZD-104</div>
  </div>
  <div style="padding:16px 20px;">
    <p style="font-size:14.5px;color:var(--text-secondary);line-height:1.7;margin:0;font-style:italic;">"The system has detected several signals that may indicate elevated mastitis risk for this animal, including increased milk conductivity, elevated body temperature and reduced rumination. Please perform a manual udder and milk check. If abnormalities such as swelling, heat, pain or changes in milk appearance are observed, contact the responsible veterinary professional promptly."</p>
  </div>
</div>

<div class="prop-block">
  <div class="prop-header">
    <div class="prop-class-name">MODERATE Risk — Score 52</div>
    <div class="prop-class-desc">Animal ZD-089</div>
  </div>
  <div style="padding:16px 20px;">
    <p style="font-size:14.5px;color:var(--text-secondary);line-height:1.7;margin:0;font-style:italic;">"Milk conductivity has increased above this animal's recent baseline. Consider scheduling a closer inspection at the next milking session and monitoring closely over the coming days."</p>
  </div>
</div>

<h2 id="content-guidelines">Content Guidelines</h2>
<p>All AI-generated recommendations follow strict content guidelines:</p>
<ul>
  <li>Recommendations describe observed signals — they do not diagnose</li>
  <li>They always recommend involving a veterinary professional for High risk situations</li>
  <li>They do not specify drug names or treatment protocols</li>
  <li>Language is clear and accessible for non-technical users</li>
  <li>A disclaimer is appended: <em>"This is an automated informational alert, not a veterinary diagnosis."</em></li>
</ul>

<h2 id="multilingual">Multilingual Support</h2>
<p>The recommendation layer is designed to support delivery in Indian regional languages by passing the target language to the generation prompt. <span class="inline-note">11 regional languages targeted — Planned</span></p>
    `
  },

  /* ─── FEATURE ENGINEERING ───────────────────── */
  'feature-engineering': {
    title: 'Feature Engineering',
    category: 'AI & Machine Learning',
    breadcrumb: ['Docs', 'AI & Machine Learning', 'Feature Engineering'],
    prev: { page: 'data-pipeline', label: 'Data Pipeline' },
    next: { page: 'risk-prediction', label: 'Risk Prediction' },
    content: () => `
<h1 id="feature-engineering">Feature Engineering</h1>
<p class="lead">Feature engineering transforms raw sensor readings and farm records into informative model inputs that capture health trends, deviations and contextual signals.</p>

<h2 id="feature-categories">Feature Categories</h2>

<h3 id="trend-features">Trend Features</h3>
<p>Rolling statistics computed over recent time windows:</p>
${codeBlock('python', '<span class="tok-cmt"># Rolling mean over 7-day window</span>\ndf[<span class="tok-str">"temp_mean_7d"</span>] = df.groupby(<span class="tok-str">"animal_id"</span>)[<span class="tok-str">"temperature"</span>].transform(\n    <span class="tok-kw">lambda</span> x: x.rolling(<span class="tok-str">"7D"</span>, min_periods=<span class="tok-num">3</span>).mean()\n)\n\n<span class="tok-cmt"># Change from previous 3-day period</span>\ndf[<span class="tok-str">"temp_change_3d"</span>] = df[<span class="tok-str">"temperature"</span>] - df.groupby(<span class="tok-str">"animal_id"</span>)[<span class="tok-str">"temperature"</span>].transform(\n    <span class="tok-kw">lambda</span> x: x.shift(<span class="tok-num">3</span>)\n)')}

<h3 id="deviation-features">Deviation Features</h3>
<p>Per-animal baseline deviation features capture departures from the individual animal's normal pattern:</p>

<div class="table-wrap"><table class="doc-table"><thead><tr><th>Feature</th><th>Computation</th></tr></thead><tbody>
<tr><td><code>rumination_deviation</code></td><td>Current value minus animal's 30-day rolling mean, normalized by std dev</td></tr>
<tr><td><code>activity_deviation</code></td><td>Current value minus animal's 14-day rolling mean</td></tr>
<tr><td><code>yield_deviation</code></td><td>Current yield versus expected for lactation stage and historical average</td></tr>
</tbody></table></div>

<h3 id="contextual-features">Contextual Features</h3>
<ul>
  <li><code>days_in_milk</code> — High-risk period (early lactation) indicator</li>
  <li><code>parity</code> — Lactation number (older animals have different risk profiles)</li>
  <li><code>prior_mastitis_count</code> — Prior disease event count (strong risk factor)</li>
  <li><code>season</code> — Encoded season (heat stress risk)</li>
  <li><code>env_temp_avg_7d</code> — Environmental heat stress indicator</li>
</ul>

<h2 id="feature-selection">Feature Selection</h2>
<p>Features are selected based on domain knowledge (known mastitis risk factors from veterinary literature) and statistical relevance measured during model training. XGBoost's built-in feature importance is used alongside SHAP values to identify redundant or uninformative features.</p>
    `
  },

  /* ─── DATA PIPELINE ─────────────────────────── */
  'data-pipeline': {
    title: 'Data Pipeline',
    category: 'AI & Machine Learning',
    breadcrumb: ['Docs', 'AI & Machine Learning', 'Data Pipeline'],
    prev: { page: 'ai-overview', label: 'AI Overview' },
    next: { page: 'feature-engineering', label: 'Feature Engineering' },
    content: () => `
<h1 id="data-pipeline">Data Pipeline</h1>
<p class="lead">The data pipeline ingests raw sensor readings and farm records, validates and transforms them, and prepares structured feature datasets for the prediction model.</p>

<h2 id="ingestion">Data Ingestion</h2>
<p>Data enters the pipeline from multiple sources at different frequencies:</p>
<div class="table-wrap"><table class="doc-table"><thead><tr><th>Source</th><th>Frequency</th><th>Protocol</th></tr></thead><tbody>
<tr><td>Smart Neck Belt</td><td>Every 15–60 min</td><td>LoRaWAN → MQTT → REST</td></tr>
<tr><td>Milk Monitoring Unit</td><td>Per milking session</td><td>ESP32 → HTTPS REST</td></tr>
<tr><td>Farm Records (manual)</td><td>Periodic</td><td>Dashboard form / API</td></tr>
<tr><td>Environmental Data</td><td>Daily</td><td>External API or manual entry</td></tr>
</tbody></table></div>

<h2 id="validation">Validation</h2>
<p>Each incoming record is validated against expected ranges and formats before storage:</p>
${codeBlock('python', 'SENSOR_RULES = {\n    <span class="tok-str">"temperature"</span>: {<span class="tok-str">"min"</span>: <span class="tok-num">35.0</span>, <span class="tok-str">"max"</span>: <span class="tok-num">43.0</span>},\n    <span class="tok-str">"rumination_minutes"</span>: {<span class="tok-str">"min"</span>: <span class="tok-num">0</span>, <span class="tok-str">"max"</span>: <span class="tok-num">600</span>},\n    <span class="tok-str">"activity_index"</span>: {<span class="tok-str">"min"</span>: <span class="tok-num">0.0</span>, <span class="tok-str">"max"</span>: <span class="tok-num">1.0</span>},\n    <span class="tok-str">"milk_conductivity"</span>: {<span class="tok-str">"min"</span>: <span class="tok-num">2.0</span>, <span class="tok-str">"max"</span>: <span class="tok-num">15.0</span>},\n}')}

<h2 id="transformation">Transformation</h2>
<ol>
  <li><strong>Deduplication</strong> — Remove duplicate transmissions (belt retransmit on packet loss)</li>
  <li><strong>Temporal alignment</strong> — Resample irregular sensor data to consistent intervals</li>
  <li><strong>Imputation</strong> — Handle short gaps using forward fill or interpolation</li>
  <li><strong>Normalization</strong> — Scale numeric features for model compatibility</li>
  <li><strong>Window construction</strong> — Build fixed-length feature windows for each prediction run</li>
</ol>
    `
  },

  /* ─── XGBOOST ───────────────────────────────── */
  'xgboost': {
    title: 'XGBoost',
    category: 'AI & Machine Learning',
    breadcrumb: ['Docs', 'AI & Machine Learning', 'XGBoost'],
    prev: { page: 'risk-classification', label: 'Risk Classification' },
    next: { page: 'shap-explainability', label: 'SHAP Explainability' },
    content: () => `
<h1 id="xgboost">XGBoost</h1>
<p class="lead">XGBoost (Extreme Gradient Boosting) is the machine learning model used for mastitis risk prediction in Zero Drop.</p>

<h2 id="why-xgboost">Why XGBoost?</h2>
<p>XGBoost is well-suited for tabular structured data — the type of data that Zero Drop works with (sensor readings, counts, ratios, flags). Key reasons for choosing XGBoost:</p>
<ul>
  <li><strong>High performance on structured data</strong> — Consistently strong results on tabular datasets in practice and in research</li>
  <li><strong>Handles missing values natively</strong> — Important given the patchy nature of farm sensor data</li>
  <li><strong>Feature importance</strong> — Built-in importance measures aid interpretability</li>
  <li><strong>SHAP compatibility</strong> — Full support for TreeExplainer, enabling fast and accurate SHAP computation</li>
  <li><strong>Efficient inference</strong> — Suitable for server-side real-time scoring</li>
</ul>

<h2 id="model-configuration">Model Configuration</h2>
${codeBlock('python', '<span class="tok-kw">import</span> xgboost <span class="tok-kw">as</span> xgb\n\nmodel = xgb.XGBClassifier(\n    n_estimators=<span class="tok-num">300</span>,\n    max_depth=<span class="tok-num">5</span>,\n    learning_rate=<span class="tok-num">0.05</span>,\n    subsample=<span class="tok-num">0.8</span>,\n    colsample_bytree=<span class="tok-num">0.8</span>,\n    scale_pos_weight=<span class="tok-num">5</span>,  <span class="tok-cmt"># handle class imbalance</span>\n    objective=<span class="tok-str">"binary:logistic"</span>,\n    eval_metric=<span class="tok-str">"auc"</span>,\n    random_state=<span class="tok-num">42</span>\n)\n\n<span class="tok-cmt"># Note: hyperparameters shown are illustrative and</span>\n<span class="tok-cmt"># will be tuned during actual training and validation.</span>')}

<h2 id="class-imbalance">Class Imbalance</h2>
<p>Mastitis events are relatively rare compared to healthy observations, creating a class imbalance. Strategies to address this include:</p>
<ul>
  <li><code>scale_pos_weight</code> — Weights the positive class to compensate for imbalance</li>
  <li>Threshold adjustment — Adjusting the decision threshold based on precision/recall trade-off requirements</li>
  <li>Evaluation on recall — Prioritizing recall (sensitivity) to avoid missing true positive cases</li>
</ul>

<h2 id="model-persistence">Model Persistence</h2>
${codeBlock('python', '<span class="tok-cmt"># Save trained model</span>\nmodel.save_model(<span class="tok-str">"zerodrop_mastitis_model.json"</span>)\n\n<span class="tok-cmt"># Load for inference</span>\nloaded_model = xgb.XGBClassifier()\nloaded_model.load_model(<span class="tok-str">"zerodrop_mastitis_model.json"</span>)')}
    `
  },

  /* ─── HARDWARE OVERVIEW ─────────────────────── */
  'hardware-overview': {
    title: 'Hardware Overview',
    category: 'IoT & Hardware',
    breadcrumb: ['Docs', 'IoT & Hardware', 'Hardware Overview'],
    prev: { page: 'ai-recommendations', label: 'AI Recommendations' },
    next: { page: 'smart-neck-belt', label: 'Smart Neck Belt' },
    content: () => `
<h1 id="hardware-overview">Hardware Overview</h1>
<p class="lead">The Zero Drop hardware ecosystem comprises animal-worn sensors, a milk monitoring unit, an edge gateway and communication infrastructure.</p>

<h2 id="hardware-layers">Hardware Layers</h2>

<div class="arch-diagram">
  <div class="arch-layer">
    <div class="arch-layer-label">Animal Sensing</div>
    <div class="arch-nodes">
      <div class="arch-node primary">Smart Neck Belt</div>
      <div class="arch-node primary">Temperature (DS18B20)</div>
      <div class="arch-node primary">Activity (BNO055)</div>
      <div class="arch-node primary">Rumination (Piezo)</div>
    </div>
  </div>
  <div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>
  <div class="arch-layer">
    <div class="arch-layer-label">Milk Monitoring</div>
    <div class="arch-nodes">
      <div class="arch-node">EC Probe (Conductivity)</div>
      <div class="arch-node">YF-S201 (Flow)</div>
      <div class="arch-node">ADS1115 ADC</div>
      <div class="arch-node">ESP32 MCU</div>
    </div>
  </div>
  <div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>
  <div class="arch-layer">
    <div class="arch-layer-label">Communication</div>
    <div class="arch-nodes">
      <div class="arch-node">LoRaWAN</div>
      <div class="arch-node">BLE</div>
      <div class="arch-node">NB-IoT / 4G</div>
      <div class="arch-node">Wi-Fi</div>
    </div>
  </div>
  <div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>
  <div class="arch-layer">
    <div class="arch-layer-label">Edge Gateway</div>
    <div class="arch-nodes"><div class="arch-node primary">Raspberry Pi 4</div></div>
  </div>
  <div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>
  <div class="arch-layer">
    <div class="arch-layer-label">Cloud / Backend</div>
    <div class="arch-nodes">
      <div class="arch-node">MQTT Broker</div>
      <div class="arch-node">REST API</div>
      <div class="arch-node">Database</div>
    </div>
  </div>
</div>

<h2 id="components-summary">Components Summary</h2>
<div class="table-wrap"><table class="doc-table"><thead><tr><th>Component</th><th>Model</th><th>Location</th><th>Purpose</th></tr></thead><tbody>
<tr><td>Main Belt MCU</td><td>nRF52840</td><td>Neck Belt</td><td>Sensor coordination, BLE, LoRa comms</td></tr>
<tr><td>IMU</td><td>BNO055</td><td>Neck Belt</td><td>Activity and orientation sensing</td></tr>
<tr><td>Milk Monitor MCU</td><td>ESP32</td><td>Milk Station</td><td>Milk sensor data acquisition, Wi-Fi</td></tr>
<tr><td>ADC</td><td>ADS1115</td><td>Milk Station</td><td>Analog-to-digital conversion for EC probes</td></tr>
<tr><td>Flow Sensor</td><td>YF-S201</td><td>Milk Station</td><td>Milk volume measurement</td></tr>
<tr><td>Temp Sensor</td><td>DS18B20</td><td>Milk Station</td><td>Milk temperature measurement</td></tr>
<tr><td>Edge Gateway</td><td>Raspberry Pi 4</td><td>Farm Site</td><td>LoRa gateway, local processing, cloud relay</td></tr>
</tbody></table></div>
    `
  },

  /* ─── SYSTEM ARCHITECTURE ───────────────────── */
  'system-architecture': {
    title: 'System Architecture',
    category: 'Architecture',
    breadcrumb: ['Docs', 'Architecture', 'System Architecture'],
    prev: { page: 'communication', label: 'Communication' },
    next: { page: 'data-flow', label: 'Data Flow' },
    content: () => `
<h1 id="system-architecture">System Architecture</h1>
<p class="lead">Zero Drop is organized as a multi-layer architecture covering hardware, communication, backend, AI/ML, generative AI and application layers.</p>

<h2 id="architecture-overview">Architecture Overview</h2>

<div class="arch-diagram">
  <div class="arch-layer"><div class="arch-layer-label">Hardware Layer</div>
    <div class="arch-nodes">
      <div class="arch-node primary">Smart Neck Belt (nRF52840)</div>
      <div class="arch-node primary">Milk Monitor (ESP32)</div>
      <div class="arch-node primary">Environmental Sensors</div>
    </div>
  </div>
  <div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>
  <div class="arch-layer"><div class="arch-layer-label">Communication Layer</div>
    <div class="arch-nodes">
      <div class="arch-node">LoRaWAN</div><div class="arch-node">BLE</div>
      <div class="arch-node">NB-IoT / 4G</div><div class="arch-node">Wi-Fi</div>
      <div class="arch-node">MQTT</div><div class="arch-node">HTTPS</div>
    </div>
  </div>
  <div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>
  <div class="arch-layer"><div class="arch-layer-label">Backend</div>
    <div class="arch-nodes">
      <div class="arch-node primary">Django REST Framework (Python)</div>
      <div class="arch-node primary">PostgreSQL</div>
    </div>
  </div>
  <div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>
  <div class="arch-layer"><div class="arch-layer-label">AI / ML</div>
    <div class="arch-nodes">
      <div class="arch-node primary">XGBoost</div><div class="arch-node primary">SHAP</div>
      <div class="arch-node">scikit-learn</div><div class="arch-node">Pandas / NumPy</div>
    </div>
  </div>
  <div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>
  <div class="arch-layer"><div class="arch-layer-label">Generative AI</div>
    <div class="arch-nodes"><div class="arch-node">Gemini (Natural Language Layer)</div></div>
  </div>
  <div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>
  <div class="arch-layer"><div class="arch-layer-label">Applications</div>
    <div class="arch-nodes">
      <div class="arch-node primary">Web App (React + Vite)</div>
      <div class="arch-node primary">Mobile App (React Native + Expo)</div>
    </div>
  </div>
</div>

<h2 id="tech-stack">Technology Stack</h2>
<div class="table-wrap"><table class="doc-table"><thead><tr><th>Layer</th><th>Technology</th></tr></thead><tbody>
<tr><td>Web Frontend</td><td>React, TypeScript, Vite, Tailwind CSS</td></tr>
<tr><td>Mobile</td><td>React Native, Expo</td></tr>
<tr><td>Backend API</td><td>Python, Django, Django REST Framework</td></tr>
<tr><td>Database</td><td>PostgreSQL</td></tr>
<tr><td>ML</td><td>scikit-learn, XGBoost, SHAP, Pandas, NumPy</td></tr>
<tr><td>Generative AI</td><td>Google Gemini API</td></tr>
<tr><td>Belt MCU</td><td>nRF52840 (Nordic Semiconductor)</td></tr>
<tr><td>Milk Monitor MCU</td><td>ESP32</td></tr>
<tr><td>Edge Gateway</td><td>Raspberry Pi 4</td></tr>
<tr><td>Connectivity</td><td>LoRaWAN, BLE, NB-IoT, 4G, Wi-Fi, MQTT</td></tr>
</tbody></table></div>
    `
  },

  /* ─── API AUTHENTICATION ─────────────────────── */
  'api-authentication': {
    title: 'Authentication',
    category: 'API Reference',
    breadcrumb: ['Docs', 'API Reference', 'Authentication'],
    prev: { page: 'ai-architecture', label: 'AI Architecture' },
    next: { page: 'api-animals', label: 'Animals' },
    content: () => `
<h1 id="authentication">Authentication</h1>
<p class="lead">The Zero Drop API uses JWT (JSON Web Token) authentication for all protected endpoints.</p>

${callout('note', 'API Status', 'The Zero Drop REST API is part of the active development platform. Endpoints marked <span class="badge badge-planned">Planned</span> are designed but not yet fully implemented in the current prototype.')}

<h2 id="obtaining-tokens">Obtaining Tokens</h2>

<div class="endpoint-block">
  <span class="badge badge-post">POST</span>
  <span class="endpoint-path">/api/v1/auth/token/</span>
</div>

<p>Exchange credentials for access and refresh tokens:</p>

${codeBlock('json', '<span class="tok-cmt">// Request body</span>\n{\n  <span class="tok-key">"username"</span>: <span class="tok-str">"farmer@example.com"</span>,\n  <span class="tok-key">"password"</span>: <span class="tok-str">"your-password"</span>\n}')}
${codeBlock('json', '<span class="tok-cmt">// Response</span>\n{\n  <span class="tok-key">"access"</span>: <span class="tok-str">"eyJhbGciOiJIUzI1NiIs..."</span>,\n  <span class="tok-key">"refresh"</span>: <span class="tok-str">"eyJhbGciOiJIUzI1NiIs..."</span>\n}')}

<h2 id="using-tokens">Using Tokens</h2>
<p>Include the access token in the <code>Authorization</code> header of every protected request:</p>

${codeBlock('bash', 'curl -X GET https://api.zerodrop.example/api/v1/animals/ \\\n  -H <span class="tok-str">"Authorization: Bearer &lt;access_token&gt;"</span>')}

<h2 id="refresh">Refreshing Tokens</h2>

<div class="endpoint-block">
  <span class="badge badge-post">POST</span>
  <span class="endpoint-path">/api/v1/auth/token/refresh/</span>
</div>

${codeBlock('json', '{\n  <span class="tok-key">"refresh"</span>: <span class="tok-str">"eyJhbGciOiJIUzI1NiIs..."</span>\n}')}

<h2 id="roles">Roles &amp; Permissions</h2>
<div class="table-wrap"><table class="doc-table"><thead><tr><th>Role</th><th>Access</th></tr></thead><tbody>
<tr><td>Super Admin</td><td>Full platform access including system configuration</td></tr>
<tr><td>Farm Admin</td><td>Full farm management — animals, records, reports, alerts</td></tr>
<tr><td>Farmer</td><td>View dashboard, alerts, recommendations; log records</td></tr>
<tr><td>Veterinary User</td><td>Read access to animal health data and risk assessments</td></tr>
</tbody></table></div>

<h2 id="status-codes">Status Codes</h2>
<div class="table-wrap"><table class="doc-table"><thead><tr><th>Code</th><th>Meaning</th></tr></thead><tbody>
<tr><td><code>200</code></td><td>Success</td></tr>
<tr><td><code>201</code></td><td>Created</td></tr>
<tr><td><code>400</code></td><td>Bad Request — validation error</td></tr>
<tr><td><code>401</code></td><td>Unauthorized — missing or invalid token</td></tr>
<tr><td><code>403</code></td><td>Forbidden — insufficient role permissions</td></tr>
<tr><td><code>404</code></td><td>Not Found</td></tr>
<tr><td><code>429</code></td><td>Rate Limited</td></tr>
<tr><td><code>500</code></td><td>Server Error</td></tr>
</tbody></table></div>
    `
  },

  /* ─── API PREDICTIONS ───────────────────────── */
  'api-predictions': {
    title: 'Risk Prediction API',
    category: 'API Reference',
    breadcrumb: ['Docs', 'API Reference', 'Risk Prediction'],
    prev: { page: 'api-milk-records', label: 'Milk Records' },
    next: { page: 'api-alerts', label: 'Alerts' },
    content: () => `
<h1 id="api-predictions">Risk Prediction</h1>
<p class="lead">Generate mastitis risk assessments for individual animals.</p>

<h2 id="generate-prediction">Generate Risk Assessment</h2>

<div class="endpoint-block">
  <span class="badge badge-post">POST</span>
  <span class="endpoint-path">/api/v1/predictions/</span>
</div>

<p>Generate a mastitis risk assessment for an animal using current sensor and farm data.</p>

<h3 id="request-body">Request Body</h3>
<div class="table-wrap"><table class="doc-table"><thead><tr><th>Field</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody>
<tr><td><code>animal_id</code></td><td>string</td><td><span class="prop-required prop-req">Required</span></td><td>Unique animal identifier</td></tr>
<tr><td><code>temperature</code></td><td>float</td><td><span class="prop-required prop-opt">Optional</span></td><td>Current body temperature (°C)</td></tr>
<tr><td><code>rumination_minutes</code></td><td>integer</td><td><span class="prop-required prop-opt">Optional</span></td><td>Rumination minutes in last 24h</td></tr>
<tr><td><code>activity_level</code></td><td>float</td><td><span class="prop-required prop-opt">Optional</span></td><td>Normalized activity index (0.0–1.0)</td></tr>
<tr><td><code>milk_yield</code></td><td>float</td><td><span class="prop-required prop-opt">Optional</span></td><td>Milk yield (litres) at last session</td></tr>
<tr><td><code>milk_conductivity</code></td><td>float</td><td><span class="prop-required prop-opt">Optional</span></td><td>Milk electrical conductivity (mS/cm)</td></tr>
</tbody></table></div>

${codeBlock('json', '<span class="tok-cmt">// Request</span>\n{\n  <span class="tok-key">"animal_id"</span>: <span class="tok-str">"ZD-104"</span>,\n  <span class="tok-key">"temperature"</span>: <span class="tok-num">39.5</span>,\n  <span class="tok-key">"rumination_minutes"</span>: <span class="tok-num">280</span>,\n  <span class="tok-key">"activity_level"</span>: <span class="tok-num">0.65</span>,\n  <span class="tok-key">"milk_yield"</span>: <span class="tok-num">12.5</span>,\n  <span class="tok-key">"milk_conductivity"</span>: <span class="tok-num">6.8</span>\n}')}

${codeBlock('json', '<span class="tok-cmt">// Response 201 Created</span>\n{\n  <span class="tok-key">"id"</span>: <span class="tok-str">"pred_a1b2c3d4"</span>,\n  <span class="tok-key">"animal_id"</span>: <span class="tok-str">"ZD-104"</span>,\n  <span class="tok-key">"risk_score"</span>: <span class="tok-num">87</span>,\n  <span class="tok-key">"risk_level"</span>: <span class="tok-str">"HIGH"</span>,\n  <span class="tok-key">"prediction_window"</span>: <span class="tok-str">"7-14 days"</span>,\n  <span class="tok-key">"contributing_factors"</span>: [\n    { <span class="tok-key">"feature"</span>: <span class="tok-str">"milk_conductivity"</span>, <span class="tok-key">"shap_value"</span>: <span class="tok-num">0.31</span>, <span class="tok-key">"direction"</span>: <span class="tok-str">"positive"</span> },\n    { <span class="tok-key">"feature"</span>: <span class="tok-str">"temperature_trend"</span>, <span class="tok-key">"shap_value"</span>: <span class="tok-num">0.22</span>, <span class="tok-key">"direction"</span>: <span class="tok-str">"positive"</span> },\n    { <span class="tok-key">"feature"</span>: <span class="tok-str">"rumination_change"</span>, <span class="tok-key">"shap_value"</span>: <span class="tok-num">-0.19</span>, <span class="tok-key">"direction"</span>: <span class="tok-str">"negative"</span> }\n  ],\n  <span class="tok-key">"recommendation"</span>: <span class="tok-str">"Perform manual inspection. Contact veterinary professional if abnormalities are confirmed."</span>,\n  <span class="tok-key">"generated_at"</span>: <span class="tok-str">"2026-09-20T00:05:00Z"</span>\n}')}

<h2 id="get-predictions">Get Prediction History</h2>

<div class="endpoint-block">
  <span class="badge badge-get">GET</span>
  <span class="endpoint-path">/api/v1/predictions/?animal_id=ZD-104</span>
</div>

<p>Returns paginated list of past risk assessments for an animal, ordered by generation time descending.</p>

<h2 id="get-latest">Get Latest Prediction</h2>

<div class="endpoint-block">
  <span class="badge badge-get">GET</span>
  <span class="endpoint-path">/api/v1/predictions/latest/?animal_id=ZD-104</span>
</div>
    `
  },

  /* ─── API ANIMALS ───────────────────────────── */
  'api-animals': {
    title: 'Animals API',
    category: 'API Reference',
    breadcrumb: ['Docs', 'API Reference', 'Animals'],
    prev: { page: 'api-authentication', label: 'Authentication' },
    next: { page: 'api-health-records', label: 'Health Records' },
    content: () => `
<h1 id="api-animals">Animals</h1>
<p class="lead">Manage animal records in the Zero Drop system.</p>

<h2 id="list-animals">List Animals</h2>
<div class="endpoint-block"><span class="badge badge-get">GET</span><span class="endpoint-path">/api/v1/animals/</span></div>
<p>Returns a paginated list of all animals for the authenticated farm.</p>

${codeBlock('json', '<span class="tok-cmt">// Response 200 OK</span>\n{\n  <span class="tok-key">"count"</span>: <span class="tok-num">142</span>,\n  <span class="tok-key">"next"</span>: <span class="tok-str">"https://api.zerodrop.example/api/v1/animals/?page=2"</span>,\n  <span class="tok-key">"results"</span>: [\n    {\n      <span class="tok-key">"animal_id"</span>: <span class="tok-str">"ZD-104"</span>,\n      <span class="tok-key">"breed"</span>: <span class="tok-str">"HF Cross"</span>,\n      <span class="tok-key">"age_months"</span>: <span class="tok-num">51</span>,\n      <span class="tok-key">"lactation_stage"</span>: <span class="tok-str">"EARLY"</span>,\n      <span class="tok-key">"health_status"</span>: <span class="tok-str">"HIGH_RISK"</span>,\n      <span class="tok-key">"latest_risk_score"</span>: <span class="tok-num">87</span>\n    }\n  ]\n}')}

<h2 id="create-animal">Create Animal</h2>
<div class="endpoint-block"><span class="badge badge-post">POST</span><span class="endpoint-path">/api/v1/animals/</span></div>

${codeBlock('json', '{\n  <span class="tok-key">"animal_id"</span>: <span class="tok-str">"ZD-150"</span>,\n  <span class="tok-key">"breed"</span>: <span class="tok-str">"Gir"</span>,\n  <span class="tok-key">"date_of_birth"</span>: <span class="tok-str">"2022-03-15"</span>,\n  <span class="tok-key">"lactation_number"</span>: <span class="tok-num">1</span>,\n  <span class="tok-key">"calving_date"</span>: <span class="tok-str">"2026-08-01"</span>\n}')}

<h2 id="get-animal">Get Animal</h2>
<div class="endpoint-block"><span class="badge badge-get">GET</span><span class="endpoint-path">/api/v1/animals/{animal_id}/</span></div>

<h2 id="update-animal">Update Animal</h2>
<div class="endpoint-block"><span class="badge badge-patch">PATCH</span><span class="endpoint-path">/api/v1/animals/{animal_id}/</span></div>

<h2 id="delete-animal">Delete Animal</h2>
<div class="endpoint-block"><span class="badge badge-delete">DELETE</span><span class="endpoint-path">/api/v1/animals/{animal_id}/</span></div>
<p>Soft-deletes the animal record. Historical data is retained.</p>
    `
  },

  /* ─── DATA MODEL ANIMAL ─────────────────────── */
  'model-animal': {
    title: 'Animal',
    category: 'Data Model',
    breadcrumb: ['Docs', 'Data Model', 'Animal'],
    prev: { page: 'api-reports', label: 'Reports API' },
    next: { page: 'model-health-record', label: 'Health Record' },
    content: () => `
<h1 id="model-animal">Animal</h1>
<p class="lead">The Animal entity represents a registered dairy animal in the Zero Drop system.</p>

${callout('note', 'Conceptual Data Model', 'The fields below describe the conceptual data model. Actual database schema fields and types may differ from the current implementation. This documentation describes design intent.')}

<div class="prop-block">
  <div class="prop-header">
    <div class="prop-class-name">Animal</div>
    <div class="prop-class-desc">Represents a registered dairy animal</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">animal_id</div>
    <div class="prop-type">string</div>
    <span class="prop-required prop-req">Required</span>
    <div class="prop-desc">Unique identifier for the animal. Typically assigned at registration (e.g. ZD-104). Used across all related records.</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">breed</div>
    <div class="prop-type">string</div>
    <span class="prop-required prop-opt">Optional</span>
    <div class="prop-desc">Animal breed (e.g. HF Cross, Gir, Sahiwal, Jersey). Used as a model feature.</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">date_of_birth</div>
    <div class="prop-type">date</div>
    <span class="prop-required prop-opt">Optional</span>
    <div class="prop-desc">Date of birth in ISO 8601 format. Used to compute age and related features.</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">lactation_number</div>
    <div class="prop-type">integer</div>
    <span class="prop-required prop-opt">Optional</span>
    <div class="prop-desc">Current lactation (parity) number. Parity is a risk modifier in the model.</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">calving_date</div>
    <div class="prop-type">date</div>
    <span class="prop-required prop-opt">Optional</span>
    <div class="prop-desc">Date of most recent calving. Used to compute days-in-milk.</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">health_status</div>
    <div class="prop-type">enum</div>
    <span class="prop-required prop-opt">Computed</span>
    <div class="prop-desc">Current risk classification: NO_RISK | LOW | MODERATE | HIGH. Derived from latest risk assessment.</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">belt_serial</div>
    <div class="prop-type">string</div>
    <span class="prop-required prop-opt">Optional</span>
    <div class="prop-desc">Serial number of the assigned smart neck belt. Links sensor data to this animal.</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">farm_id</div>
    <div class="prop-type">string</div>
    <span class="prop-required prop-req">Required</span>
    <div class="prop-desc">Farm this animal belongs to. Used for multi-farm access control.</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">created_at</div>
    <div class="prop-type">datetime</div>
    <span class="prop-required prop-opt">Auto</span>
    <div class="prop-desc">Record creation timestamp (ISO 8601 UTC).</div>
  </div>
</div>
    `
  },

  /* ─── MODEL RISK ASSESSMENT ─────────────────── */
  'model-risk-assessment': {
    title: 'Risk Assessment',
    category: 'Data Model',
    breadcrumb: ['Docs', 'Data Model', 'Risk Assessment'],
    prev: { page: 'model-milk-record', label: 'Milk Record' },
    next: { page: 'model-alert', label: 'Alert' },
    content: () => `
<h1 id="model-risk-assessment">Risk Assessment</h1>
<p class="lead">Represents a predicted mastitis risk assessment generated by the AI/ML pipeline for an animal.</p>

${callout('note', 'Conceptual Data Model', 'This is the conceptual data model for the RiskAssessment entity. Actual implementation fields may vary.')}

<div class="prop-block">
  <div class="prop-header">
    <div class="prop-class-name">RiskAssessment</div>
    <div class="prop-class-desc">Predicted mastitis risk assessment for an animal</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">id</div>
    <div class="prop-type">UUID</div>
    <span class="prop-required prop-opt">Auto</span>
    <div class="prop-desc">Unique assessment identifier.</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">animal_id</div>
    <div class="prop-type">string</div>
    <span class="prop-required prop-req">Required</span>
    <div class="prop-desc">Unique animal identifier this assessment applies to.</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">timestamp</div>
    <div class="prop-type">datetime</div>
    <span class="prop-required prop-req">Required</span>
    <div class="prop-desc">Time the assessment was generated (ISO 8601 UTC).</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">risk_score</div>
    <div class="prop-type">integer</div>
    <span class="prop-required prop-req">Required</span>
    <div class="prop-desc">Model-generated risk score (0–100). Higher score = greater estimated risk.</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">risk_level</div>
    <div class="prop-type">enum</div>
    <span class="prop-required prop-req">Required</span>
    <div class="prop-desc">Risk classification: NO_RISK | LOW | MODERATE | HIGH. Derived from risk_score using current thresholds.</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">prediction_window</div>
    <div class="prop-type">string</div>
    <span class="prop-required prop-req">Required</span>
    <div class="prop-desc">Target forecasting window (e.g. "7-14 days"). Subject to validation.</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">contributing_factors</div>
    <div class="prop-type">array</div>
    <span class="prop-required prop-opt">Optional</span>
    <div class="prop-desc">List of top SHAP feature attributions. Each entry: { feature, shap_value, direction }.</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">recommendation</div>
    <div class="prop-type">string</div>
    <span class="prop-required prop-opt">Optional</span>
    <div class="prop-desc">AI-generated plain-language recommendation for this assessment.</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">model_version</div>
    <div class="prop-type">string</div>
    <span class="prop-required prop-opt">Optional</span>
    <div class="prop-desc">Version of the XGBoost model used to generate this prediction.</div>
  </div>
</div>
    `
  },

  /* ─── FAQ ───────────────────────────────────── */
  'faq': {
    title: 'FAQ',
    category: 'Resources',
    breadcrumb: ['Docs', 'Resources', 'FAQ'],
    prev: { page: 'mobile-offline', label: 'Offline Mode' },
    next: { page: 'research-references', label: 'Research & References' },
    content: () => `
<h1 id="faq">Frequently Asked Questions</h1>
<p class="lead">Common questions about Zero Drop from farmers, developers and veterinary professionals.</p>

<div id="faq-list" class="faq-list" style="margin-top:28px;">
${faqItem('What is Zero Drop?', 'Zero Drop is an AI-powered dairy health monitoring platform designed to provide early identification of bovine mastitis risk. It combines IoT sensor data, milk quality measurements, farm records and AI/ML models to estimate the probability of mastitis in individual animals — aiming to give farmers and veterinary professionals earlier warning to act preventively.')}
${faqItem('What problem does Zero Drop solve?', 'Mastitis is one of the most economically costly diseases in dairy farming, largely because early (subclinical) stages produce no visible symptoms. Zero Drop aims to detect rising risk signals before clinical signs appear, giving farmers a window to inspect animals and involve veterinary professionals earlier.')}
${faqItem('What is mastitis?', 'Mastitis is inflammation of the udder (mammary gland), most commonly caused by bacterial infection. It reduces milk yield, affects milk quality, causes animal discomfort and imposes significant financial costs. Subclinical mastitis — the pre-symptomatic stage — is particularly challenging to detect without monitoring tools or regular SCC testing.')}
${faqItem('What data does Zero Drop use?', 'Zero Drop combines: smart neck belt sensor data (temperature, activity, rumination, GPS), milk quality measurements (conductivity, yield, SCC), animal health history (prior disease events, lactation stage, parity), farm management records and environmental data.')}
${faqItem('How early does Zero Drop aim to forecast risk?', 'The target forecasting objective is 7–14 days before visible clinical signs of mastitis. This is the intended design goal for the prototype. Actual forecasting capability depends on field validation with real data and will be evaluated in controlled studies.')}
${faqItem('Is Zero Drop a veterinary diagnostic system?', 'No. Zero Drop is a predictive monitoring tool that generates risk assessments from data patterns. It does not diagnose disease, prescribe treatment or replace clinical examination by a qualified veterinary professional. Alerts and recommendations should always be followed up with veterinary assessment when indicated.')}
${faqItem('What is XGBoost used for?', 'XGBoost (Extreme Gradient Boosting) is the machine learning model used to predict mastitis risk scores from structured farm and sensor data. It analyzes patterns in features like temperature trends, conductivity changes and rumination deviations to estimate the probability of a future mastitis event.')}
${faqItem('Why is SHAP used?', 'SHAP (SHapley Additive exPlanations) is used to make the XGBoost model explainable. For each prediction, SHAP identifies which specific input features contributed most to the risk score — enabling transparent, interpretable alerts rather than opaque "black box" outputs.')}
${faqItem('What does Gemini do?', 'Gemini (Google\'s generative AI) is used for the natural-language output layer. It converts structured prediction outputs (risk score + SHAP factors) into plain-language farmer-friendly recommendations and can provide multilingual assistance. Gemini does not perform the risk prediction — that is handled entirely by XGBoost.')}
${faqItem('Does Zero Drop require IoT hardware?', 'The smart neck belt hardware enhances the system significantly by providing continuous sensor data. However, Zero Drop can also work with manually entered data (milk records, health records, observations) where sensor hardware is not yet deployed. IoT hardware availability will affect the quality of predictions.')}
${faqItem('Can Zero Drop work with existing farm data?', 'Yes. Zero Drop is designed to ingest data from multiple sources, including manually entered historical records. Where historical health and milk data is available, it can be imported to improve model context and provide trend analysis.')}
${faqItem('Can multiple farms be managed?', 'Yes. Zero Drop supports a multi-farm structure. Farm Admins can manage animals across one or more farms. Super Admins have platform-wide access. Each farm\'s data is isolated for access control purposes.')}
${faqItem('Does the system support mobile?', 'Yes. Zero Drop includes a React Native + Expo mobile application for iOS and Android. The mobile app provides access to the dashboard, animal profiles, alerts, recommendations and the QR-based animal scan/identification feature.')}
${faqItem('How does the alert system work?', 'When the prediction model identifies a risk score that crosses a configured threshold, an alert is generated for the animal. The alert includes the risk level, top contributing factors, timestamp and recommended action. Alerts are delivered through the web dashboard and mobile push notifications.')}
</div>
    `
  },

  /* ─── GLOSSARY ──────────────────────────────── */
  'glossary': {
    title: 'Glossary',
    category: 'Resources',
    breadcrumb: ['Docs', 'Resources', 'Glossary'],
    prev: { page: 'research-references', label: 'Research & References' },
    next: { page: 'troubleshooting', label: 'Troubleshooting' },
    content: () => `
<h1 id="glossary">Glossary</h1>
<p class="lead">Definitions of key terms used in Zero Drop documentation.</p>

<div class="glossary-grid">
${glossItem('Mastitis', 'Inflammation of the udder (mammary gland) in dairy cattle, typically caused by bacterial infection. Reduces milk yield and quality and causes animal discomfort.')}
${glossItem('Subclinical Mastitis', 'Early-stage mastitis where no visible external signs are present (no swelling, heat or visible milk changes). Detectable through elevated SCC or conductivity measurements.')}
${glossItem('Clinical Mastitis', 'Advanced mastitis with visible signs including udder swelling, heat, pain, redness and obvious changes in milk appearance (clots, watery, blood).')}
${glossItem('SCC', 'Somatic Cell Count — the number of somatic (immune) cells per millilitre of milk. A key indicator of udder health. Elevated SCC suggests an immune response to infection.')}
${glossItem('Somatic Cell Count', 'See SCC. Values above 200,000 cells/mL are generally associated with subclinical infection, though thresholds vary by species and system.')}
${glossItem('Milk Conductivity', 'Electrical conductivity of milk (measured in mS/cm). Elevated conductivity indicates higher ion concentration, associated with udder inflammation and mastitis.')}
${glossItem('IoT', 'Internet of Things — a network of physical devices embedded with sensors, software and connectivity, enabling them to collect and exchange data. Zero Drop uses IoT devices (smart belts, milk sensors) to capture animal and farm data.')}
${glossItem('BLE', 'Bluetooth Low Energy — a wireless communication technology designed for short-range, low-power data exchange. Used in Zero Drop for belt configuration and nearby device communication.')}
${glossItem('LoRaWAN', 'Long Range Wide Area Network — a low-power, long-range wireless protocol suitable for rural and agricultural environments. Used to transmit smart belt data to the edge gateway across farm distances.')}
${glossItem('NB-IoT', 'Narrowband IoT — a cellular IoT standard enabling low-power, wide-area connectivity using existing mobile networks. Provides an alternative connectivity option where LoRaWAN gateway coverage is unavailable.')}
${glossItem('MQTT', 'Message Queuing Telemetry Transport — a lightweight publish-subscribe messaging protocol commonly used for IoT data transmission. Used to relay sensor data from the edge gateway to the backend.')}
${glossItem('XGBoost', 'Extreme Gradient Boosting — a highly efficient gradient-boosted decision tree algorithm. Used as the core machine learning model for mastitis risk prediction in Zero Drop.')}
${glossItem('SHAP', 'SHapley Additive exPlanations — a method for explaining individual machine learning model predictions by attributing a contribution value to each input feature.')}
${glossItem('Machine Learning', 'A field of artificial intelligence in which statistical models learn patterns from data rather than being explicitly programmed with rules.')}
${glossItem('Risk Score', 'A numerical score (0–100) generated by the XGBoost model representing estimated mastitis risk. Higher scores indicate greater estimated risk within the prediction window.')}
${glossItem('Risk Classification', 'The mapping of a continuous risk score to a discrete risk level: No Risk (0–20), Low (21–40), Moderate (41–70), High (71–100). Prototype thresholds subject to validation.')}
${glossItem('Rumination', 'The process by which cattle regurgitate and re-chew previously ingested feed (cud). Reduced rumination is an indicator of stress, illness or discomfort and is a key model feature.')}
${glossItem('Lactation', 'The period during which a dairy cow produces milk following calving. Lactation stage (early, mid, late) is an important risk modifier for mastitis.')}
${glossItem('Predictive Modeling', 'The use of statistical and machine learning models to forecast future events based on historical and current data patterns.')}
${glossItem('Edge Gateway', 'A device positioned at the edge of the network (e.g. on the farm) that collects data from local sensors and relays it to the cloud or backend. Zero Drop uses a Raspberry Pi 4 as the edge gateway.')}
</div>
    `
  },

  /* ─── RESEARCH & REFERENCES ─────────────────── */
  'research-references': {
    title: 'Research & References',
    category: 'Resources',
    breadcrumb: ['Docs', 'Resources', 'Research & References'],
    prev: { page: 'faq', label: 'FAQ' },
    next: { page: 'glossary', label: 'Glossary' },
    content: () => `
<h1 id="research-references">Research &amp; References</h1>
<p class="lead">Key research, standards and technical sources relevant to the Zero Drop platform. Zero Drop does not fabricate citations — only verified sources are listed.</p>

${callout('note', 'Reference Policy', 'Only genuine references with verifiable sources are included. Where the Zero Drop team has not verified a specific paper\'s content, it is not included. This page will be updated as the project\'s research base develops.')}

<h2 id="mastitis-epidemiology">Mastitis — Epidemiology &amp; Economic Impact</h2>

<div class="ref-item">
  <div class="ref-title">Mastitis in dairy cows: a review</div>
  <div class="ref-meta">Halasa, T. et al. | Veterinary Record | 2007</div>
  <p style="font-size:13.5px;color:var(--text-secondary);margin:6px 0 8px;">A widely cited review covering the epidemiology, economic impact and control of bovine mastitis in dairy herds.</p>
  <div class="ref-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>PubMed / Veterinary Record</div>
</div>

<div class="ref-item">
  <div class="ref-title">Economic impact of mastitis in dairy cattle</div>
  <div class="ref-meta">Hogeveen, H. et al. | New Zealand Veterinary Journal | 2011</div>
  <p style="font-size:13.5px;color:var(--text-secondary);margin:6px 0 8px;">Analysis of the direct and indirect costs of mastitis including milk discards, treatment, reduced production and premature culling.</p>
</div>

<h2 id="early-detection">Early Detection &amp; IoT Monitoring</h2>

<div class="ref-item">
  <div class="ref-title">Electrical conductivity of milk as an indicator of mastitis</div>
  <div class="ref-meta">Milner, P. et al. | Journal of Dairy Science | 1996</div>
  <p style="font-size:13.5px;color:var(--text-secondary);margin:6px 0 8px;">Research supporting the use of milk electrical conductivity as a tool for early mastitis detection.</p>
</div>

<div class="ref-item">
  <div class="ref-title">Review of smart sensors for monitoring dairy cow health and welfare</div>
  <div class="ref-meta">Various Authors | Computers and Electronics in Agriculture | Various years</div>
  <p style="font-size:13.5px;color:var(--text-secondary);margin:6px 0 8px;">Survey of precision livestock farming technologies including wearable sensors for cattle health monitoring.</p>
</div>

<h2 id="machine-learning-livestock">Machine Learning in Livestock Health</h2>

<div class="ref-item">
  <div class="ref-title">Machine learning for precision livestock farming: opportunities and challenges</div>
  <div class="ref-meta">Multiple authors | Animal | Various years</div>
  <p style="font-size:13.5px;color:var(--text-secondary);margin:6px 0 8px;">Overview of machine learning applications in livestock health monitoring, including mastitis prediction using sensor data.</p>
</div>

<h2 id="ai-explainability">AI Explainability</h2>

<div class="ref-item">
  <div class="ref-title">A Unified Approach to Interpreting Model Predictions</div>
  <div class="ref-meta">Lundberg, S.M. &amp; Lee, S-I. | NeurIPS 2017</div>
  <p style="font-size:13.5px;color:var(--text-secondary);margin:6px 0 8px;">The foundational paper introducing SHAP (SHapley Additive exPlanations) for model interpretability.</p>
  <a href="https://arxiv.org/abs/1705.07874" target="_blank" rel="noopener" class="ref-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> arXiv:1705.07874</a>
</div>

<h2 id="indian-dairy">Indian Dairy Industry</h2>

<div class="ref-item">
  <div class="ref-title">Basic Animal Husbandry Statistics</div>
  <div class="ref-meta">Government of India, Ministry of Fisheries, Animal Husbandry &amp; Dairying | Annual Publication</div>
  <p style="font-size:13.5px;color:var(--text-secondary);margin:6px 0 8px;">Official statistical publication covering livestock population, milk production and dairy sector data for India.</p>
  <a href="https://dahd.nic.in" target="_blank" rel="noopener" class="ref-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> dahd.nic.in</a>
</div>
    `
  },

  /* ─── TROUBLESHOOTING ───────────────────────── */
  'troubleshooting': {
    title: 'Troubleshooting',
    category: 'Resources',
    breadcrumb: ['Docs', 'Resources', 'Troubleshooting'],
    prev: { page: 'glossary', label: 'Glossary' },
    next: { page: 'changelog', label: 'Changelog' },
    content: () => `
<h1 id="troubleshooting">Troubleshooting</h1>
<p class="lead">Common issues and solutions for the Zero Drop platform.</p>

<h2 id="hardware">Hardware &amp; Sensors</h2>

${troubleItem('Sensor not transmitting data', 'Belt powered on but no data appearing in the dashboard', '1. Check belt battery level (indicator LED). 2. Confirm the belt is within LoRa gateway range. 3. Verify the edge gateway (Raspberry Pi) is running and connected to the internet. 4. Check the MQTT broker is receiving messages using <code>mosquitto_sub -t "zerodrop/#" -v</code>.')}
${troubleItem('Abnormal sensor readings', 'Temperature or activity readings appear physiologically impossible', '1. Check for sensor hardware damage or cable connections. 2. Verify the belt firmware version is current. 3. Confirm the animal_id — belt may be paired to wrong animal. 4. Check for RF interference near large metal structures.')}

<h2 id="backend">Backend &amp; API</h2>

${troubleItem('Backend unavailable (502 / 503 errors)', 'API returns 502 or 503 errors', '1. Check the Django development server is running: <code>python manage.py runserver</code>. 2. If using production server, check the WSGI/ASGI process (gunicorn/uvicorn) status. 3. Check server resource usage — CPU and memory.')}
${troubleItem('Database connection failure', '<code>OperationalError: could not connect to server</code>', '1. Confirm PostgreSQL is running: <code>pg_ctl status</code>. 2. Verify DATABASE_URL in your .env file. 3. Check that the database and user exist and permissions are set correctly.')}
${troubleItem('Authentication failure (401)', 'API returns 401 Unauthorized', '1. Check that the Authorization header is present and correctly formatted: <code>Bearer &lt;token&gt;</code>. 2. Verify the token has not expired — access tokens are short-lived. Use the refresh token endpoint to obtain a new access token. 3. Check the JWT_SECRET_KEY in server configuration.')}

<h2 id="predictions">Predictions</h2>

${troubleItem('Prediction unavailable for animal', 'Risk prediction returns empty or error', '1. Verify the animal_id is correctly registered in the system. 2. Check that there is sufficient sensor data for the prediction window — the model requires recent records. 3. Check the ML service logs for errors. 4. Confirm the trained model file is accessible and the correct version is loaded.')}
${troubleItem('No animal data in system', 'Animal profile shows no records', '1. Confirm sensor data is being ingested — check the ingest API endpoint logs. 2. Verify the belt\'s animal_id configuration matches the registered animal_id. 3. Check the data validation rules — records outside valid ranges are rejected.')}

<h2 id="mobile">Mobile App</h2>

${troubleItem('Mobile app not syncing', 'App shows stale data after offline period', '1. Check device internet connectivity. 2. Force-close and reopen the app. 3. Check the API URL configured in the mobile app matches the current backend. 4. Clear the local cache from app settings and re-authenticate.')}
${troubleItem('Push notifications not received', 'Alerts generated but not delivered to device', '1. Check device notification permissions for the app. 2. Verify push notification service configuration (FCM for Android, APNs for iOS). 3. Confirm the device token is registered with the backend. 4. Check backend push notification service logs.')}
    `
  },

  /* ─── CHANGELOG ─────────────────────────────── */
  'changelog': {
    title: 'Changelog',
    category: 'Resources',
    breadcrumb: ['Docs', 'Resources', 'Changelog'],
    prev: { page: 'troubleshooting', label: 'Troubleshooting' },
    next: null,
    content: () => `
<h1 id="changelog">Changelog</h1>
<p class="lead">Release history for the Zero Drop platform. Placeholder dates are used where actual release dates are not available.</p>

${callout('note', 'Prototype Releases', 'Zero Drop is an active development project. The versions below represent development milestones rather than production releases. Features and timelines are subject to change.')}

<div class="changelog-entry">
  <div class="changelog-version"><span class="version-badge">v0.3.0</span></div>
  <div class="changelog-dot"></div>
  <div class="changelog-content">
    <div class="changelog-date">2026 — Q3</div>
    <div class="changelog-title">IoT Integration</div>
    <ul class="changelog-items">
      <li>Smart neck belt firmware integration — temperature, activity, rumination data ingestion</li>
      <li>LoRaWAN edge gateway configuration and MQTT data pipeline</li>
      <li>Milk monitoring unit (ESP32 + EC probe) data ingestion</li>
      <li>Farm Risk Map GIS component (prototype)</li>
      <li>Real-time alert delivery via dashboard notification panel</li>
      <li>Belt management and pairing interface</li>
    </ul>
  </div>
</div>

<div class="changelog-entry">
  <div class="changelog-version"><span class="version-badge">v0.2.0</span></div>
  <div class="changelog-dot"></div>
  <div class="changelog-content">
    <div class="changelog-date">2026 — Q2</div>
    <div class="changelog-title">AI Prediction Integration</div>
    <ul class="changelog-items">
      <li>XGBoost mastitis risk prediction model integrated into backend pipeline</li>
      <li>SHAP explainability — top contributing factors per prediction</li>
      <li>Gemini integration for natural-language recommendation generation</li>
      <li>Risk score and risk level displayed on animal profiles and dashboard</li>
      <li>Prediction history and timeline view</li>
      <li>Feature engineering pipeline — rolling averages, deviation features</li>
      <li>Data Pipeline API — preprocessing and validation layer</li>
    </ul>
  </div>
</div>

<div class="changelog-entry">
  <div class="changelog-version"><span class="version-badge">v0.1.0</span></div>
  <div class="changelog-dot"></div>
  <div class="changelog-content">
    <div class="changelog-date">2026 — Q1</div>
    <div class="changelog-title">Initial Prototype</div>
    <ul class="changelog-items">
      <li>Django REST Framework backend with JWT authentication</li>
      <li>Animal registration and profile management</li>
      <li>Health record and milk record logging</li>
      <li>Dashboard — herd overview and risk distribution display</li>
      <li>Alert system — alert creation, acknowledgment and resolution</li>
      <li>React web frontend with core navigation</li>
      <li>React Native + Expo mobile app — dashboard, animals, alerts</li>
      <li>PostgreSQL database schema — core entities</li>
      <li>Role-based access control — Farm Admin, Farmer, Veterinary User</li>
    </ul>
  </div>
</div>
    `
  },

  /* ─── MOBILE INSTALLATION ───────────────────── */
  'mobile-installation': {
    title: 'Installation',
    category: 'Mobile App',
    breadcrumb: ['Docs', 'Mobile App', 'Installation'],
    prev: { page: 'model-alert', label: 'Alert' },
    next: { page: 'mobile-authentication', label: 'Authentication' },
    content: () => `
<h1 id="mobile-installation">Mobile App Installation</h1>
<p class="lead">The Zero Drop mobile app is built with React Native and Expo, providing a consistent experience on iOS and Android.</p>

<h2 id="requirements">Requirements</h2>
<ul>
  <li>iOS 14+ or Android 8.0+</li>
  <li>Active internet connection for data synchronization</li>
  <li>Valid Zero Drop account credentials</li>
</ul>

<h2 id="expo-go">Development — Expo Go</h2>
<p>For development and testing, use Expo Go:</p>
${codeBlock('bash', '<span class="tok-fn">cd</span> zero-drop/mobile\nnpm install\nnpx expo start\n<span class="tok-cmt"># Scan the QR code with Expo Go app on your device</span>')}

<h2 id="production-build">Production Build</h2>
${codeBlock('bash', '<span class="tok-cmt"># Build for Android</span>\nnpx expo build:android\n\n<span class="tok-cmt"># Build for iOS (requires Apple Developer account)</span>\nnpx expo build:ios')}

<h2 id="screens">Application Screens</h2>
<div class="table-wrap"><table class="doc-table"><thead><tr><th>Screen</th><th>Description</th></tr></thead><tbody>
<tr><td>Dashboard</td><td>Herd-level risk overview and recent alerts</td></tr>
<tr><td>Animals</td><td>Searchable list of all registered animals</td></tr>
<tr><td>Animal Details</td><td>Full animal profile with risk history and sensor trends</td></tr>
<tr><td>Scan Animal</td><td>QR code / tag scan to navigate to animal profile</td></tr>
<tr><td>Alerts</td><td>Active and historical alerts with status management</td></tr>
<tr><td>Recommendations</td><td>Pending recommendations for high-risk animals</td></tr>
<tr><td>Reports</td><td>Summary reports and PDF export</td></tr>
</tbody></table></div>
    `
  },

  'mobile-scan-animal': {
    title: 'Scan Animal',
    category: 'Mobile App',
    breadcrumb: ['Docs', 'Mobile App', 'Scan Animal'],
    prev: { page: 'mobile-authentication', label: 'Authentication' },
    next: { page: 'mobile-notifications', label: 'Notifications' },
    content: () => `
<h1 id="scan-animal">Scan Animal</h1>
<p class="lead">The Scan Animal feature allows farm workers to identify an animal by scanning its QR code or tag, navigating directly to the animal's profile.</p>

${callout('note', 'Not a Diagnostic Scanner', 'Scan Animal is an identification and navigation feature. It uses QR/tag codes to identify animals — it is not connected to a mastitis diagnostic scanning device.')}

<h2 id="how-it-works">How It Works</h2>
<ol>
  <li>Open the Zero Drop mobile app</li>
  <li>Tap <strong>Scan Animal</strong> from the navigation menu</li>
  <li>Point the camera at the animal's QR tag or ear tag barcode</li>
  <li>The app decodes the tag and navigates to the matching animal profile</li>
  <li>View current risk score, recent alerts and health information</li>
</ol>

<h2 id="tag-formats">Supported Tag Formats</h2>
<ul>
  <li>QR code (printed ear or neck tag)</li>
  <li>Code 128 / Code 39 barcodes</li>
  <li>Manual Animal ID entry as fallback</li>
</ul>
    `
  },

  'mobile-authentication': {
    title: 'Authentication',
    category: 'Mobile App',
    breadcrumb: ['Docs', 'Mobile App', 'Authentication'],
    prev: { page: 'mobile-installation', label: 'Installation' },
    next: { page: 'mobile-scan-animal', label: 'Scan Animal' },
    content: () => `
<h1 id="mobile-authentication">Mobile Authentication</h1>
<p class="lead">The mobile app uses the same JWT authentication as the web platform.</p>

<h2 id="login">Login Flow</h2>
<ol>
  <li>Enter username (email) and password on the login screen</li>
  <li>The app exchanges credentials for a JWT access and refresh token</li>
  <li>Tokens are stored securely using Expo SecureStore</li>
  <li>The access token is included in all API requests</li>
  <li>When the access token expires, the refresh token is used automatically to obtain a new one</li>
</ol>

<h2 id="biometric">Biometric Authentication</h2>
<p>The app supports biometric unlock (fingerprint / Face ID) as a convenience re-authentication method after initial login. <span class="inline-note">Planned</span></p>

<h2 id="logout">Logout</h2>
<p>Logging out clears all stored tokens and cached data. The user must re-authenticate on next app open.</p>
    `
  },

  'mobile-notifications': {
    title: 'Notifications',
    category: 'Mobile App',
    breadcrumb: ['Docs', 'Mobile App', 'Notifications'],
    prev: { page: 'mobile-scan-animal', label: 'Scan Animal' },
    next: { page: 'mobile-offline', label: 'Offline Mode' },
    content: () => `
<h1 id="notifications">Notifications</h1>
<p class="lead">Zero Drop delivers push notifications to the mobile app when high-priority alerts are generated.</p>

<h2 id="notification-types">Notification Types</h2>
<div class="table-wrap"><table class="doc-table"><thead><tr><th>Notification</th><th>Trigger</th><th>Priority</th></tr></thead><tbody>
<tr><td>High Risk Alert</td><td>Animal risk score enters HIGH range</td><td>High</td></tr>
<tr><td>Moderate Risk Alert</td><td>Animal risk score enters MODERATE range</td><td>Normal</td></tr>
<tr><td>Sensor Offline</td><td>Belt not transmitting for configured period</td><td>Normal</td></tr>
<tr><td>New Recommendation</td><td>New recommendation generated for high-risk animal</td><td>Normal</td></tr>
</tbody></table></div>

<h2 id="permissions">Permissions</h2>
<p>The app requests notification permissions on first launch. Users can adjust notification preferences in their device's app settings at any time.</p>
    `
  },

  'mobile-offline': {
    title: 'Offline Mode',
    category: 'Mobile App',
    breadcrumb: ['Docs', 'Mobile App', 'Offline Mode'],
    prev: { page: 'mobile-notifications', label: 'Notifications' },
    next: { page: 'faq', label: 'FAQ' },
    content: () => `
<h1 id="offline-mode">Offline Mode</h1>
<p class="lead">The Zero Drop mobile app provides limited offline functionality for farm environments with intermittent connectivity.</p>

<h2 id="offline-capabilities">Offline Capabilities</h2>
<ul>
  <li><strong>View cached animal profiles</strong> — Last synced animal data is available offline</li>
  <li><strong>View cached alerts</strong> — Previously loaded alerts are accessible</li>
  <li><strong>Log observations</strong> — Manual health observations can be recorded offline and synced when connectivity is restored</li>
  <li><strong>Scan Animal</strong> — QR scanning works offline if animal data is cached</li>
</ul>

<h2 id="sync">Data Synchronization</h2>
<p>When connectivity is restored:</p>
<ol>
  <li>Offline-recorded observations are submitted to the backend</li>
  <li>Latest animal profiles and risk scores are refreshed</li>
  <li>New alerts and recommendations are downloaded</li>
  <li>A sync status indicator shows the last successful synchronization time</li>
</ol>

${callout('warning', 'Offline Limitations', 'Risk scores and predictions are not computed offline. The mobile app cannot generate new risk assessments without a backend connection. Predictions shown offline are from the last successful sync.')}
    `
  },

  /* ─── REMAINING HARDWARE PAGES ───────────────── */
  'smart-neck-belt': {
    title: 'Smart Neck Belt',
    category: 'IoT & Hardware',
    breadcrumb: ['Docs', 'IoT & Hardware', 'Smart Neck Belt'],
    prev: { page: 'hardware-overview', label: 'Hardware Overview' },
    next: { page: 'temperature', label: 'Temperature' },
    content: () => `
<h1 id="smart-neck-belt">Smart Neck Belt</h1>
<p class="lead">The Zero Drop Smart Neck Belt is the primary animal-worn IoT device, combining multiple sensors in a durable, solar-rechargeable wearable unit.</p>
<h2 id="design">Physical Design</h2>
<p>The belt is designed to be worn around the animal's neck without causing discomfort or interference with normal behavior. Key design requirements include durability in outdoor farm environments, water resistance, and a low-maintenance power system.</p>
<h2 id="sensors">Sensors</h2>
<div class="table-wrap"><table class="doc-table"><thead><tr><th>Sensor</th><th>Model</th><th>Measurement</th></tr></thead><tbody>
<tr><td>IMU (Inertial Measurement Unit)</td><td>BNO055</td><td>3-axis acceleration, gyroscope, orientation</td></tr>
<tr><td>Rumination Sensor</td><td>Piezoelectric</td><td>Jaw movement detection for rumination classification</td></tr>
<tr><td>GPS Module</td><td>u-blox compatible</td><td>Animal location (lat/lon)</td></tr>
</tbody></table></div>
<h2 id="power">Power System</h2>
<ul>
  <li>Primary: Solar panel with 18650 lithium-ion battery backup</li>
  <li>Target: Continuous operation with sufficient daily sunlight exposure</li>
  <li>Battery level is transmitted with each data packet for remote monitoring</li>
</ul>
<h2 id="firmware">Firmware</h2>
<p>The belt firmware runs on the nRF52840 MCU. It coordinates sensor data acquisition, performs basic edge processing (rumination classification algorithm) and manages LoRa transmission at configured intervals.</p>
    `
  },

  'temperature': { title: 'Temperature', category: 'IoT & Hardware', breadcrumb: ['Docs', 'IoT & Hardware', 'Temperature'], prev: { page: 'smart-neck-belt', label: 'Smart Neck Belt' }, next: { page: 'activity', label: 'Activity' }, content: () => `<h1 id="temperature">Temperature Sensing</h1><p class="lead">Body temperature monitoring is a key early indicator of illness including mastitis.</p><h2 id="sensor">Sensor</h2><p>Temperature in the milk monitoring unit uses the <strong>DS18B20</strong> digital temperature sensor (milk temperature). Body temperature on the smart neck belt is inferred from combined sensor signals or via a dedicated probe where fitted.</p><h2 id="significance">Clinical Significance</h2><p>Elevated body temperature (fever) is associated with immune system activation in response to infection. Sustained elevation above the individual animal's baseline is a meaningful signal in the risk model.</p><div class="table-wrap"><table class="doc-table"><thead><tr><th>Parameter</th><th>Normal Range (Indicative)</th><th>Unit</th></tr></thead><tbody><tr><td>Bovine Body Temperature</td><td>38.0 – 39.5°C</td><td>°C</td></tr><tr><td>Milk Temperature at Collection</td><td>Ambient – 40°C</td><td>°C</td></tr></tbody></table></div>${callout('warning', 'Reference Only', 'Temperature ranges shown are indicative veterinary reference values for educational context. Zero Drop uses per-animal baselines in its model, not static reference thresholds.')}` },

  'activity': { title: 'Activity', category: 'IoT & Hardware', breadcrumb: ['Docs', 'IoT & Hardware', 'Activity'], prev: { page: 'temperature', label: 'Temperature' }, next: { page: 'rumination', label: 'Rumination' }, content: () => `<h1 id="activity">Activity Sensing</h1><p class="lead">Activity level monitoring captures changes in animal movement patterns, which are sensitive indicators of health and wellbeing.</p><h2 id="sensor">Sensor</h2><p>The <strong>BNO055</strong> 9-axis IMU sensor in the smart neck belt captures accelerometer and gyroscope data. Raw IMU data is processed by the firmware to compute an activity index.</p><h2 id="features">Model Features</h2><ul><li><code>activity_index</code> — Normalized activity score (0.0–1.0) derived from accelerometer data</li><li><code>activity_deviation</code> — Deviation from the animal's recent activity baseline</li><li><code>activity_trend</code> — Direction and magnitude of activity change over recent days</li></ul><h2 id="clinical">Clinical Significance</h2><p>Reduced activity is associated with pain, illness and stress. Animals with mastitis often show reduced movement. Combining activity changes with other signals (temperature, rumination) improves prediction reliability.</p>` },

  'rumination': { title: 'Rumination', category: 'IoT & Hardware', breadcrumb: ['Docs', 'IoT & Hardware', 'Rumination'], prev: { page: 'activity', label: 'Activity' }, next: { page: 'milk-conductivity', label: 'Milk Conductivity' }, content: () => `<h1 id="rumination">Rumination Sensing</h1><p class="lead">Rumination monitoring captures the time cattle spend re-chewing cud, a highly sensitive indicator of animal wellbeing and health status.</p><h2 id="sensor">Sensor</h2><p>A <strong>piezoelectric sensor</strong> on the neck belt detects jaw movements associated with rumination. The firmware classifies motion patterns to estimate daily rumination minutes.</p><h2 id="normal-range">Normal Range</h2><p>Healthy dairy cattle typically ruminate for <strong>400–550 minutes per day</strong>, though this varies by individual, feed type and lactation stage.</p><h2 id="significance">Clinical Significance</h2><p>Rumination is highly sensitive to stress, pain and illness. Animals experiencing discomfort due to mastitis, metabolic disorders or other health issues often show a significant reduction in rumination time before other visible symptoms appear. This makes it a valuable early-warning signal.</p>` },

  'milk-conductivity': { title: 'Milk Conductivity', category: 'IoT & Hardware', breadcrumb: ['Docs', 'IoT & Hardware', 'Milk Conductivity'], prev: { page: 'rumination', label: 'Rumination' }, next: { page: 'gps', label: 'GPS' }, content: () => `<h1 id="milk-conductivity">Milk Conductivity</h1><p class="lead">Electrical conductivity of milk is one of the most studied early indicators of bovine mastitis.</p><h2 id="how-it-works">How It Works</h2><p>When the udder is inflamed, ion concentrations in milk change — sodium and chloride increase, while potassium and lactose decrease. This altered ionic composition leads to increased electrical conductivity, measurable with an EC (electrical conductivity) probe.</p><h2 id="hardware">Hardware</h2><div class="table-wrap"><table class="doc-table"><thead><tr><th>Component</th><th>Purpose</th></tr></thead><tbody><tr><td>EC Probe</td><td>Measures electrical conductivity in mS/cm</td></tr><tr><td>ADS1115 ADC</td><td>High-resolution analog-to-digital conversion</td></tr><tr><td>ESP32 MCU</td><td>Data acquisition, Wi-Fi transmission</td></tr></tbody></table></div><h2 id="ranges">Conductivity Ranges (Indicative)</h2><p>Normal milk conductivity is typically in the range of <strong>4.0 – 6.0 mS/cm</strong>. Values consistently above the animal's individual baseline are flagged as a potential indicator of elevated udder inflammation.</p>${callout('note', 'Per-Animal Baselines', 'Zero Drop uses per-animal baseline conductivity rather than population reference values, as individual variation is significant.')}` },

  'gps': { title: 'GPS', category: 'IoT & Hardware', breadcrumb: ['Docs', 'IoT & Hardware', 'GPS'], prev: { page: 'milk-conductivity', label: 'Milk Conductivity' }, next: { page: 'esp32', label: 'ESP32' }, content: () => `<h1 id="gps">GPS Location</h1><p class="lead">GPS location tracking allows farm operators to visualize animal positions and integrate location data with health risk information.</p><h2 id="hardware">Hardware</h2><p>The smart neck belt includes a compact GPS module compatible with standard u-blox GNSS receivers. Location is sampled at a configurable interval (default: every 30 minutes) to balance location accuracy with battery consumption.</p><h2 id="use-cases">Use Cases</h2><ul><li><strong>Farm Risk Map</strong> — Plot animal positions with risk-level colour coding</li><li><strong>Zone detection</strong> — Identify which shed, pasture or zone an animal is in</li><li><strong>Geofence alerts</strong> — Alert if an animal leaves a configured zone <span class="inline-note">Planned</span></li></ul><h2 id="privacy">Data Handling</h2><p>GPS coordinates are stored as part of the sensor record and are accessible to authorized farm users only. Location data is not shared externally.</p>` },

  'esp32': { title: 'ESP32', category: 'IoT & Hardware', breadcrumb: ['Docs', 'IoT & Hardware', 'ESP32'], prev: { page: 'gps', label: 'GPS' }, next: { page: 'nrf52840', label: 'nRF52840' }, content: () => `<h1 id="esp32">ESP32</h1><p class="lead">The ESP32 is the microcontroller unit used in the Zero Drop milk monitoring station.</p><h2 id="role">Role in Zero Drop</h2><p>The ESP32 manages data acquisition from the milk monitoring sensors at each milking station — reading conductivity from EC probes via the ADS1115 ADC, milk temperature from the DS18B20, and flow rate from the YF-S201 sensor. Data is transmitted to the backend via Wi-Fi using HTTPS REST API calls.</p><h2 id="specs">Relevant Specifications</h2><div class="table-wrap"><table class="doc-table"><thead><tr><th>Feature</th><th>Value</th></tr></thead><tbody><tr><td>Processor</td><td>Xtensa dual-core LX6</td></tr><tr><td>Clock Speed</td><td>Up to 240 MHz</td></tr><tr><td>Connectivity</td><td>Wi-Fi 802.11 b/g/n, Bluetooth 4.2 / BLE</td></tr><tr><td>GPIO</td><td>34+ pins</td></tr><tr><td>ADC</td><td>12-bit (supplemented by external ADS1115 for EC probes)</td></tr></tbody></table></div>` },

  'nrf52840': { title: 'nRF52840', category: 'IoT & Hardware', breadcrumb: ['Docs', 'IoT & Hardware', 'nRF52840'], prev: { page: 'esp32', label: 'ESP32' }, next: { page: 'communication', label: 'Communication' }, content: () => `<h1 id="nrf52840">nRF52840</h1><p class="lead">The nRF52840 from Nordic Semiconductor is the main microcontroller on the Zero Drop smart neck belt.</p><h2 id="role">Role in Zero Drop</h2><p>The nRF52840 coordinates all data acquisition on the smart neck belt — reading the BNO055 IMU, processing piezoelectric rumination signals, managing the LoRa radio module for long-range transmission and handling BLE for nearby device configuration and firmware updates.</p><h2 id="specs">Relevant Specifications</h2><div class="table-wrap"><table class="doc-table"><thead><tr><th>Feature</th><th>Value</th></tr></thead><tbody><tr><td>Processor</td><td>ARM Cortex-M4F @ 64 MHz</td></tr><tr><td>Flash</td><td>1 MB</td></tr><tr><td>RAM</td><td>256 KB</td></tr><tr><td>Connectivity</td><td>Bluetooth 5.0 / BLE, IEEE 802.15.4, NFC</td></tr><tr><td>I/O</td><td>48 GPIO, SPI, I2C, UART, PDM, PWM</td></tr><tr><td>Power</td><td>Ultra-low power operating modes</td></tr></tbody></table></div><h2 id="firmware">Firmware Development</h2><p>Belt firmware is developed using the Nordic nRF5 SDK or Zephyr RTOS. BLE communication is used for initial provisioning, pairing an belt to an animal_id and firmware OTA updates.</p>` },

  'communication': { title: 'Communication', category: 'IoT & Hardware', breadcrumb: ['Docs', 'IoT & Hardware', 'Communication'], prev: { page: 'nrf52840', label: 'nRF52840' }, next: { page: 'system-architecture', label: 'System Architecture' }, content: () => `<h1 id="communication">Communication</h1><p class="lead">Zero Drop supports multiple communication protocols to accommodate diverse farm connectivity environments across India.</p><h2 id="protocols">Supported Protocols</h2><div class="table-wrap"><table class="doc-table"><thead><tr><th>Protocol</th><th>Range</th><th>Power</th><th>Use Case</th></tr></thead><tbody><tr><td><strong>LoRaWAN</strong></td><td>1–15 km rural</td><td>Very Low</td><td>Primary belt-to-gateway link</td></tr><tr><td><strong>BLE</strong></td><td>10–50 m</td><td>Low</td><td>Belt configuration, firmware updates</td></tr><tr><td><strong>NB-IoT</strong></td><td>Cellular</td><td>Low</td><td>Cellular backup where LoRa unavailable</td></tr><tr><td><strong>4G / LTE</strong></td><td>Cellular</td><td>Medium</td><td>Gateway-to-cloud when broadband unavailable</td></tr><tr><td><strong>Wi-Fi</strong></td><td>Local</td><td>Medium</td><td>ESP32 milk monitor, gateway with LAN</td></tr><tr><td><strong>MQTT</strong></td><td>Application layer</td><td>—</td><td>IoT data messaging protocol</td></tr><tr><td><strong>HTTPS REST</strong></td><td>Application layer</td><td>—</td><td>API communication, milk monitor to backend</td></tr></tbody></table></div><h2 id="data-flow">Communication Data Flow</h2><p>Belt → LoRa → Raspberry Pi 4 Gateway → MQTT → Backend API → PostgreSQL → AI/ML Pipeline</p>` },

  /* ─── REMAINING ARCHITECTURE PAGES ───────────── */
  'data-flow': { title: 'Data Flow', category: 'Architecture', breadcrumb: ['Docs', 'Architecture', 'Data Flow'], prev: { page: 'system-architecture', label: 'System Architecture' }, next: { page: 'software-architecture', label: 'Software Architecture' }, content: () => `<h1 id="data-flow">Data Flow</h1><p class="lead">End-to-end data flow from animal sensors to farmer-facing alerts and recommendations.</p><h2 id="flow">End-to-End Flow</h2>${workflowDiagram([['Data Collection', 'Smart belt captures temperature, activity, rumination every 15–60 min. Milk monitor captures conductivity and yield at each milking session.'], ['Edge Processing', 'Raspberry Pi 4 receives LoRa transmissions, buffers data, forwards via MQTT or HTTPS to backend. Basic validation at edge.'], ['API Ingestion', 'Django backend receives sensor records, validates against schema and range rules, stores to PostgreSQL.'], ['Feature Computation', 'Scheduled job computes rolling features (trends, deviations, context) for each animal from stored records.'], ['Prediction Run', 'XGBoost model loaded, feature vectors assembled, risk scores computed for all animals.'], ['SHAP Analysis', 'SHAP TreeExplainer computes feature attributions for each prediction. Top factors stored with result.'], ['Alert Generation', 'Animals crossing risk thresholds generate Alert records. Notification service delivers push alerts.'], ['Recommendation', 'Gemini API called with risk + SHAP factors to generate plain-language recommendation.'], ['Dashboard Sync', 'Updated risk scores, alerts and recommendations available via REST API to web and mobile clients.']])}` },

  'software-architecture': { title: 'Software Architecture', category: 'Architecture', breadcrumb: ['Docs', 'Architecture', 'Software Architecture'], prev: { page: 'data-flow', label: 'Data Flow' }, next: { page: 'hardware-architecture', label: 'Hardware Architecture' }, content: () => `<h1 id="software-architecture">Software Architecture</h1><p class="lead">Zero Drop's software is organized as a decoupled, API-first architecture with separate frontend, backend and ML service layers.</p><h2 id="layers">Software Layers</h2><div class="table-wrap"><table class="doc-table"><thead><tr><th>Layer</th><th>Technology</th><th>Responsibility</th></tr></thead><tbody><tr><td>Web Frontend</td><td>React, TypeScript, Vite</td><td>User interface, dashboard, charts, forms</td></tr><tr><td>Mobile Frontend</td><td>React Native, Expo</td><td>Mobile dashboard, alerts, animal profiles</td></tr><tr><td>Backend API</td><td>Python, Django, DRF</td><td>Authentication, REST API, business logic, data access</td></tr><tr><td>Database</td><td>PostgreSQL</td><td>Primary persistent data storage</td></tr><tr><td>ML Service</td><td>Python, XGBoost, SHAP, scikit-learn</td><td>Feature engineering, model training, inference</td></tr><tr><td>Generative AI</td><td>Google Gemini API</td><td>Natural language recommendation generation</td></tr></tbody></table></div><h2 id="api-design">API Design Principles</h2><ul><li>RESTful resource-based endpoints</li><li>JWT authentication on all protected routes</li><li>Consistent JSON response structure</li><li>Pagination for list endpoints</li><li>Semantic HTTP status codes</li><li>API versioning via URL prefix (<code>/api/v1/</code>)</li></ul>` },

  'hardware-architecture': { title: 'Hardware Architecture', category: 'Architecture', breadcrumb: ['Docs', 'Architecture', 'Hardware Architecture'], prev: { page: 'software-architecture', label: 'Software Architecture' }, next: { page: 'ai-architecture', label: 'AI Architecture' }, content: () => `<h1 id="hardware-architecture">Hardware Architecture</h1><p class="lead">Physical hardware layers from animal-worn sensors through to the cloud backend.</p><h2 id="layers">Hardware Layers</h2><div class="arch-diagram"><div class="arch-layer"><div class="arch-layer-label">Animal Layer</div><div class="arch-nodes"><div class="arch-node primary">Smart Neck Belt</div><div class="arch-node primary">BNO055 IMU</div><div class="arch-node primary">Piezo Rumination</div><div class="arch-node primary">GPS</div></div></div><div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div><div class="arch-layer"><div class="arch-layer-label">Milk Station Layer</div><div class="arch-nodes"><div class="arch-node">EC Probe</div><div class="arch-node">DS18B20 Temp</div><div class="arch-node">YF-S201 Flow</div><div class="arch-node">ADS1115 ADC</div><div class="arch-node">ESP32</div></div></div><div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div><div class="arch-layer"><div class="arch-layer-label">Edge Layer</div><div class="arch-nodes"><div class="arch-node primary">Raspberry Pi 4 Gateway</div><div class="arch-node">LoRa Receiver</div><div class="arch-node">MQTT Broker (local)</div></div></div><div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div><div class="arch-layer"><div class="arch-layer-label">Cloud / Backend</div><div class="arch-nodes"><div class="arch-node">Django API Server</div><div class="arch-node">PostgreSQL</div><div class="arch-node">ML Service</div></div></div></div>` },

  'ai-architecture': { title: 'AI Architecture', category: 'Architecture', breadcrumb: ['Docs', 'Architecture', 'AI Architecture'], prev: { page: 'hardware-architecture', label: 'Hardware Architecture' }, next: { page: 'api-authentication', label: 'Authentication' }, content: () => `<h1 id="ai-architecture">AI Architecture</h1><p class="lead">The AI/ML subsystem architecture covering data ingestion, feature engineering, prediction and the natural-language output layer.</p><h2 id="components">AI Components</h2><div class="table-wrap"><table class="doc-table"><thead><tr><th>Component</th><th>Technology</th><th>Purpose</th></tr></thead><tbody><tr><td>Data Preprocessor</td><td>Pandas, NumPy</td><td>Validation, cleaning, normalization, alignment</td></tr><tr><td>Feature Engineer</td><td>Pandas, scikit-learn</td><td>Rolling stats, deviation features, context features</td></tr><tr><td>Risk Model</td><td>XGBoost</td><td>Binary classification — mastitis risk probability</td></tr><tr><td>Explainer</td><td>SHAP TreeExplainer</td><td>Feature attribution for each prediction</td></tr><tr><td>Language Layer</td><td>Google Gemini API</td><td>Natural language recommendation generation</td></tr><tr><td>Model Registry</td><td>File / model store</td><td>Versioned model artifacts</td></tr></tbody></table></div><h2 id="training-vs-inference">Training vs Inference</h2><p>Model training is performed as an offline batch process using historical data. Trained model artifacts are versioned and deployed to the inference service. The inference pipeline runs on demand (per prediction request) or on a scheduled basis for batch herd-level scoring.</p>` },

  /* ─── REMAINING API PAGES ─────────────────────── */
  'api-health-records': { title: 'Health Records API', category: 'API Reference', breadcrumb: ['Docs', 'API Reference', 'Health Records'], prev: { page: 'api-animals', label: 'Animals' }, next: { page: 'api-sensor-data', label: 'Sensor Data' }, content: () => `<h1 id="api-health-records">Health Records</h1><p class="lead">Log and retrieve animal health events.</p><h2 id="list">List Health Records</h2><div class="endpoint-block"><span class="badge badge-get">GET</span><span class="endpoint-path">/api/v1/health-records/?animal_id=ZD-104</span></div><h2 id="create">Create Health Record</h2><div class="endpoint-block"><span class="badge badge-post">POST</span><span class="endpoint-path">/api/v1/health-records/</span></div>${codeBlock('json', '{\n  <span class="tok-key">"animal_id"</span>: <span class="tok-str">"ZD-104"</span>,\n  <span class="tok-key">"event_type"</span>: <span class="tok-str">"VETERINARY_EXAMINATION"</span>,\n  <span class="tok-key">"date"</span>: <span class="tok-str">"2026-09-20"</span>,\n  <span class="tok-key">"notes"</span>: <span class="tok-str">"Routine inspection following alert."</span>,\n  <span class="tok-key">"outcome"</span>: <span class="tok-str">"No clinical signs observed."</span>\n}')}` },

  'api-sensor-data': { title: 'Sensor Data API', category: 'API Reference', breadcrumb: ['Docs', 'API Reference', 'Sensor Data'], prev: { page: 'api-health-records', label: 'Health Records' }, next: { page: 'api-milk-records', label: 'Milk Records' }, content: () => `<h1 id="api-sensor-data">Sensor Data</h1><p class="lead">Ingest and retrieve smart belt sensor records.</p><h2 id="ingest">Ingest Sensor Record</h2><div class="endpoint-block"><span class="badge badge-post">POST</span><span class="endpoint-path">/api/v1/sensor-data/</span></div>${codeBlock('json', '{\n  <span class="tok-key">"belt_id"</span>: <span class="tok-str">"ZDB-2291"</span>,\n  <span class="tok-key">"animal_id"</span>: <span class="tok-str">"ZD-104"</span>,\n  <span class="tok-key">"timestamp"</span>: <span class="tok-str">"2026-09-20T00:00:00Z"</span>,\n  <span class="tok-key">"temperature_c"</span>: <span class="tok-num">39.2</span>,\n  <span class="tok-key">"activity_index"</span>: <span class="tok-num">0.61</span>,\n  <span class="tok-key">"rumination_min"</span>: <span class="tok-num">38</span>,\n  <span class="tok-key">"gps_lat"</span>: <span class="tok-num">18.5204</span>,\n  <span class="tok-key">"gps_lon"</span>: <span class="tok-num">73.8567</span>\n}')}<h2 id="query">Query Sensor Data</h2><div class="endpoint-block"><span class="badge badge-get">GET</span><span class="endpoint-path">/api/v1/sensor-data/?animal_id=ZD-104&date_from=2026-09-14</span></div>` },

  'api-milk-records': { title: 'Milk Records API', category: 'API Reference', breadcrumb: ['Docs', 'API Reference', 'Milk Records'], prev: { page: 'api-sensor-data', label: 'Sensor Data' }, next: { page: 'api-predictions', label: 'Risk Prediction' }, content: () => `<h1 id="api-milk-records">Milk Records</h1><p class="lead">Log and retrieve milk quality and yield records.</p><h2 id="create">Create Milk Record</h2><div class="endpoint-block"><span class="badge badge-post">POST</span><span class="endpoint-path">/api/v1/milk-records/</span></div>${codeBlock('json', '{\n  <span class="tok-key">"animal_id"</span>: <span class="tok-str">"ZD-104"</span>,\n  <span class="tok-key">"timestamp"</span>: <span class="tok-str">"2026-09-20T06:30:00Z"</span>,\n  <span class="tok-key">"milk_yield_litres"</span>: <span class="tok-num">12.5</span>,\n  <span class="tok-key">"conductivity_ms"</span>: <span class="tok-num">6.8</span>,\n  <span class="tok-key">"temperature_c"</span>: <span class="tok-num">37.1</span>,\n  <span class="tok-key">"scc_thousands"</span>: <span class="tok-num">320</span>\n}')}<h2 id="list">List Milk Records</h2><div class="endpoint-block"><span class="badge badge-get">GET</span><span class="endpoint-path">/api/v1/milk-records/?animal_id=ZD-104</span></div>` },

  'api-alerts': { title: 'Alerts API', category: 'API Reference', breadcrumb: ['Docs', 'API Reference', 'Alerts'], prev: { page: 'api-predictions', label: 'Risk Prediction' }, next: { page: 'api-recommendations', label: 'Recommendations' }, content: () => `<h1 id="api-alerts">Alerts</h1><p class="lead">Retrieve and manage risk alerts.</p><h2 id="list">List Alerts</h2><div class="endpoint-block"><span class="badge badge-get">GET</span><span class="endpoint-path">/api/v1/alerts/?status=NEW</span></div><h2 id="acknowledge">Acknowledge Alert</h2><div class="endpoint-block"><span class="badge badge-patch">PATCH</span><span class="endpoint-path">/api/v1/alerts/{alert_id}/</span></div>${codeBlock('json', '{ <span class="tok-key">"status"</span>: <span class="tok-str">"ACKNOWLEDGED"</span> }')}<h2 id="resolve">Resolve Alert</h2><div class="endpoint-block"><span class="badge badge-patch">PATCH</span><span class="endpoint-path">/api/v1/alerts/{alert_id}/</span></div>${codeBlock('json', '{ <span class="tok-key">"status"</span>: <span class="tok-str">"RESOLVED"</span>, <span class="tok-key">"resolution_notes"</span>: <span class="tok-str">"Veterinary examination completed — no clinical mastitis confirmed."</span> }')}` },

  'api-recommendations': { title: 'Recommendations API', category: 'API Reference', breadcrumb: ['Docs', 'API Reference', 'Recommendations'], prev: { page: 'api-alerts', label: 'Alerts' }, next: { page: 'api-reports', label: 'Reports' }, content: () => `<h1 id="api-recommendations">Recommendations</h1><p class="lead">Retrieve AI-generated recommendations.</p><h2 id="list">List Recommendations</h2><div class="endpoint-block"><span class="badge badge-get">GET</span><span class="endpoint-path">/api/v1/recommendations/?animal_id=ZD-104</span></div>${codeBlock('json', '<span class="tok-cmt">// Response 200 OK</span>\n{\n  <span class="tok-key">"results"</span>: [\n    {\n      <span class="tok-key">"id"</span>: <span class="tok-str">"rec_x1y2z3"</span>,\n      <span class="tok-key">"animal_id"</span>: <span class="tok-str">"ZD-104"</span>,\n      <span class="tok-key">"risk_level"</span>: <span class="tok-str">"HIGH"</span>,\n      <span class="tok-key">"recommendation_text"</span>: <span class="tok-str">"Perform manual inspection..."</span>,\n      <span class="tok-key">"priority"</span>: <span class="tok-str">"HIGH"</span>,\n      <span class="tok-key">"status"</span>: <span class="tok-str">"NEW"</span>,\n      <span class="tok-key">"created_at"</span>: <span class="tok-str">"2026-09-20T00:05:00Z"</span>\n    }\n  ]\n}')}` },

  'api-reports': { title: 'Reports API', category: 'API Reference', breadcrumb: ['Docs', 'API Reference', 'Reports'], prev: { page: 'api-recommendations', label: 'Recommendations' }, next: { page: 'model-animal', label: 'Animal' }, content: () => `<h1 id="api-reports">Reports</h1><p class="lead">Generate and retrieve farm reports.</p><h2 id="herd-summary">Herd Summary Report</h2><div class="endpoint-block"><span class="badge badge-post">POST</span><span class="endpoint-path">/api/v1/reports/herd-summary/</span></div>${codeBlock('json', '{\n  <span class="tok-key">"date_from"</span>: <span class="tok-str">"2026-09-01"</span>,\n  <span class="tok-key">"date_to"</span>: <span class="tok-str">"2026-09-20"</span>,\n  <span class="tok-key">"format"</span>: <span class="tok-str">"json"</span>\n}')}<h2 id="animal-risk-history">Animal Risk History</h2><div class="endpoint-block"><span class="badge badge-get">GET</span><span class="endpoint-path">/api/v1/reports/animal-risk/?animal_id=ZD-104</span></div>` },

  /* ─── REMAINING DATA MODEL PAGES ─────────────── */
  'model-health-record': { title: 'Health Record', category: 'Data Model', breadcrumb: ['Docs', 'Data Model', 'Health Record'], prev: { page: 'model-animal', label: 'Animal' }, next: { page: 'model-sensor-record', label: 'Sensor Record' }, content: () => `<h1 id="model-health-record">Health Record</h1><p class="lead">Represents a health event logged for an animal.</p>${callout('note', 'Conceptual Data Model', 'This is the conceptual data model. Actual database fields may differ.')}<div class="prop-block"><div class="prop-header"><div class="prop-class-name">HealthRecord</div><div class="prop-class-desc">A health event for a dairy animal</div></div><div class="prop-row"><div class="prop-name">id</div><div class="prop-type">UUID</div><span class="prop-required prop-opt">Auto</span><div class="prop-desc">Unique record identifier.</div></div><div class="prop-row"><div class="prop-name">animal_id</div><div class="prop-type">string</div><span class="prop-required prop-req">Required</span><div class="prop-desc">Animal this record refers to.</div></div><div class="prop-row"><div class="prop-name">event_type</div><div class="prop-type">enum</div><span class="prop-required prop-req">Required</span><div class="prop-desc">VETERINARY_EXAMINATION | DIAGNOSIS | TREATMENT | VACCINATION | CALVING | DRY_OFF | OTHER</div></div><div class="prop-row"><div class="prop-name">date</div><div class="prop-type">date</div><span class="prop-required prop-req">Required</span><div class="prop-desc">Date of the health event (ISO 8601).</div></div><div class="prop-row"><div class="prop-name">notes</div><div class="prop-type">text</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Narrative notes about the event.</div></div><div class="prop-row"><div class="prop-name">outcome</div><div class="prop-type">text</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Documented outcome or follow-up.</div></div><div class="prop-row"><div class="prop-name">recorded_by</div><div class="prop-type">string</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">User ID of the person who logged the record.</div></div></div>` },

  'model-sensor-record': { title: 'Sensor Record', category: 'Data Model', breadcrumb: ['Docs', 'Data Model', 'Sensor Record'], prev: { page: 'model-health-record', label: 'Health Record' }, next: { page: 'model-milk-record', label: 'Milk Record' }, content: () => `<h1 id="model-sensor-record">Sensor Record</h1><p class="lead">Represents a single data packet received from the smart neck belt.</p>${callout('note', 'Conceptual Data Model', 'Conceptual model — actual implementation may differ.')}<div class="prop-block"><div class="prop-header"><div class="prop-class-name">SensorRecord</div><div class="prop-class-desc">Smart neck belt data packet</div></div><div class="prop-row"><div class="prop-name">id</div><div class="prop-type">UUID</div><span class="prop-required prop-opt">Auto</span><div class="prop-desc">Unique record identifier.</div></div><div class="prop-row"><div class="prop-name">animal_id</div><div class="prop-type">string</div><span class="prop-required prop-req">Required</span><div class="prop-desc">Animal this record belongs to.</div></div><div class="prop-row"><div class="prop-name">belt_id</div><div class="prop-type">string</div><span class="prop-required prop-req">Required</span><div class="prop-desc">Belt device serial number.</div></div><div class="prop-row"><div class="prop-name">timestamp</div><div class="prop-type">datetime</div><span class="prop-required prop-req">Required</span><div class="prop-desc">Sensor reading timestamp (ISO 8601 UTC).</div></div><div class="prop-row"><div class="prop-name">temperature_c</div><div class="prop-type">float</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Body/ambient temperature reading in Celsius.</div></div><div class="prop-row"><div class="prop-name">activity_index</div><div class="prop-type">float</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Normalized activity score (0.0–1.0) computed from IMU data.</div></div><div class="prop-row"><div class="prop-name">rumination_min</div><div class="prop-type">integer</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Estimated rumination minutes in the recording period.</div></div><div class="prop-row"><div class="prop-name">gps_lat</div><div class="prop-type">float</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">GPS latitude coordinate.</div></div><div class="prop-row"><div class="prop-name">gps_lon</div><div class="prop-type">float</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">GPS longitude coordinate.</div></div><div class="prop-row"><div class="prop-name">battery_pct</div><div class="prop-type">integer</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Belt battery level percentage (0–100).</div></div></div>` },

  'model-milk-record': { title: 'Milk Record', category: 'Data Model', breadcrumb: ['Docs', 'Data Model', 'Milk Record'], prev: { page: 'model-sensor-record', label: 'Sensor Record' }, next: { page: 'model-risk-assessment', label: 'Risk Assessment' }, content: () => `<h1 id="model-milk-record">Milk Record</h1><p class="lead">Represents a milk quality and yield measurement from a milking session.</p>${callout('note', 'Conceptual Data Model', 'Conceptual model — actual implementation may differ.')}<div class="prop-block"><div class="prop-header"><div class="prop-class-name">MilkRecord</div><div class="prop-class-desc">Milking session quality and yield data</div></div><div class="prop-row"><div class="prop-name">id</div><div class="prop-type">UUID</div><span class="prop-required prop-opt">Auto</span><div class="prop-desc">Unique record identifier.</div></div><div class="prop-row"><div class="prop-name">animal_id</div><div class="prop-type">string</div><span class="prop-required prop-req">Required</span><div class="prop-desc">Animal this record belongs to.</div></div><div class="prop-row"><div class="prop-name">timestamp</div><div class="prop-type">datetime</div><span class="prop-required prop-req">Required</span><div class="prop-desc">Milking session timestamp (ISO 8601 UTC).</div></div><div class="prop-row"><div class="prop-name">milk_yield_litres</div><div class="prop-type">float</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Total milk yield in litres for this session.</div></div><div class="prop-row"><div class="prop-name">conductivity_ms</div><div class="prop-type">float</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Milk electrical conductivity in mS/cm. Key mastitis indicator.</div></div><div class="prop-row"><div class="prop-name">temperature_c</div><div class="prop-type">float</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Milk temperature at collection (°C).</div></div><div class="prop-row"><div class="prop-name">scc_thousands</div><div class="prop-type">integer</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Somatic Cell Count (×1,000 cells/mL) from lab test. Not continuously measured in prototype.</div></div></div>` },

  'model-alert': { title: 'Alert', category: 'Data Model', breadcrumb: ['Docs', 'Data Model', 'Alert'], prev: { page: 'model-risk-assessment', label: 'Risk Assessment' }, next: { page: 'mobile-installation', label: 'Installation' }, content: () => `<h1 id="model-alert">Alert</h1><p class="lead">Represents a risk alert generated when an animal's predicted risk score crosses a configured threshold.</p>${callout('note', 'Conceptual Data Model', 'Conceptual model — actual implementation may differ.')}<div class="prop-block"><div class="prop-header"><div class="prop-class-name">Alert</div><div class="prop-class-desc">Mastitis risk alert for a specific animal</div></div><div class="prop-row"><div class="prop-name">alert_id</div><div class="prop-type">UUID</div><span class="prop-required prop-opt">Auto</span><div class="prop-desc">Unique alert identifier.</div></div><div class="prop-row"><div class="prop-name">animal_id</div><div class="prop-type">string</div><span class="prop-required prop-req">Required</span><div class="prop-desc">Animal this alert refers to.</div></div><div class="prop-row"><div class="prop-name">severity</div><div class="prop-type">enum</div><span class="prop-required prop-req">Required</span><div class="prop-desc">LOW | MODERATE | HIGH — derived from risk score.</div></div><div class="prop-row"><div class="prop-name">risk_score</div><div class="prop-type">integer</div><span class="prop-required prop-req">Required</span><div class="prop-desc">Risk score (0–100) that triggered this alert.</div></div><div class="prop-row"><div class="prop-name">message</div><div class="prop-type">string</div><span class="prop-required prop-req">Required</span><div class="prop-desc">Human-readable alert message.</div></div><div class="prop-row"><div class="prop-name">contributing_factors</div><div class="prop-type">array</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Top SHAP factors that drove this alert.</div></div><div class="prop-row"><div class="prop-name">timestamp</div><div class="prop-type">datetime</div><span class="prop-required prop-req">Required</span><div class="prop-desc">Alert generation timestamp (ISO 8601 UTC).</div></div><div class="prop-row"><div class="prop-name">status</div><div class="prop-type">enum</div><span class="prop-required prop-req">Required</span><div class="prop-desc">NEW | ACKNOWLEDGED | RESOLVED</div></div><div class="prop-row"><div class="prop-name">recommended_action</div><div class="prop-type">string</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Suggested action for the farmer.</div></div></div>` },
};

// ── HELPER RENDERERS ──────────────────────────
function callout(type, title, body) {
  const icons = {
    note: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
    warning: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    danger: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    success: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  };
  return `<div class="callout callout-${type}" role="note">
    <svg class="callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${icons[type] || icons.note}</svg>
    <div class="callout-content"><div class="callout-title">${title}</div><p class="callout-body">${body}</p></div>
  </div>`;
}

function codeBlock(lang, code) {
  return `<div class="code-block">
    <div class="code-block-header">
      <span class="code-lang">${lang}</span>
      <button class="copy-btn" onclick="copyCode(this)" aria-label="Copy code">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        Copy
      </button>
    </div>
    <pre><code>${code}</code></pre>
  </div>`;
}

function docCard(page, pathData, title, desc) {
  return `<div class="doc-card" onclick="navigateTo('${page}')" role="button" tabindex="0" onkeydown="if(event.key==='Enter')navigateTo('${page}')">
    <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${pathData}</svg></div>
    <div class="card-title">${title}</div>
    <p class="card-desc">${desc}</p>
    <div class="card-arrow">Learn more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
  </div>`;
}

function miniCard(title, desc) {
  return `<div class="doc-card" style="cursor:default;">
    <div class="card-title" style="font-size:14px;">${title}</div>
    <p class="card-desc" style="font-size:12.5px;">${desc}</p>
  </div>`;
}

function workflowDiagram(steps) {
  return `<div class="pipeline-flow">${steps.map((s, i) => `
    <div class="pipeline-step">
      <div class="pipeline-step-box">
        <div class="step-num">${i + 1}</div>
        <div>
          <div class="step-label">${s[0]}</div>
          <div class="step-desc">${s[1]}</div>
        </div>
      </div>
    </div>
    ${i < steps.length - 1 ? `<div class="pipeline-arrow" style="margin-left:14px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>` : ''}
  `).join('')}</div>`;
}

function faqItem(q, a) {
  return `<div class="faq-item">
    <button class="faq-question" onclick="toggleFaq(this)" aria-expanded="false">
      ${q}
      <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
    </button>
    <div class="faq-answer" role="region">
      <p>${a}</p>
    </div>
  </div>`;
}

function glossItem(term, def) {
  return `<div class="glossary-item">
    <div class="glossary-term">${term}</div>
    <p class="glossary-def">${def}</p>
  </div>`;
}

function troubleItem(problem, cause, solution) {
  return `<div class="trouble-item">
    <div class="trouble-header">
      <div class="trouble-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      </div>
      <div>
        <div class="trouble-problem">${problem}</div>
        <div class="trouble-cause">${cause}</div>
      </div>
    </div>
    <div class="trouble-solution">${solution}</div>
  </div>`;
}

// ── SEARCH INDEX ───────────────────────────────
const SEARCH_INDEX = Object.entries(PAGES).map(([id, page]) => ({
  id,
  title: page.title,
  category: page.category,
  desc: (() => {
    const div = document.createElement('div');
    div.innerHTML = page.content ? page.content().replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';
    return div.textContent.substring(0, 160) + '...';
  })()
}));

// ── STATE ──────────────────────────────────────
let currentPage = 'home';

// ── NAVIGATION ─────────────────────────────────
function navigateTo(pageId) {
  const page = PAGES[pageId];
  if (!page) return;

  currentPage = pageId;
  updateContent(pageId);
  updateSidebar(pageId);
  updateBreadcrumbs(page);
  updateDocNavFooter(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateHeaderNav(page);

  // Close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('open');

  // Update URL hash
  history.pushState({ page: pageId }, page.title, `#${pageId}`);
  document.title = `${page.title} — Zero Drop Documentation`;
}

function updateContent(pageId) {
  const page = PAGES[pageId];
  if (!page) return;
  const el = document.getElementById('doc-content');
  el.innerHTML = page.content ? page.content() : '<p>Content coming soon.</p>';
  el.focus();
  setTimeout(() => buildTOC(), 50);
  initCodeCopy();
  initFAQs();
  const langSelectEl = document.querySelector('.lang-select');
  if (langSelectEl && langSelectEl.value !== 'en') {
    const gtCombo = document.querySelector('.goog-te-combo');
    if (gtCombo) {
      gtCombo.dispatchEvent(new Event('change'));
    }
  }
}

function updateSidebar(pageId) {
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });
}

function updateBreadcrumbs(page) {
  const bc = document.getElementById('breadcrumbs');
  if (!page.breadcrumb) { bc.innerHTML = ''; return; }
  bc.innerHTML = page.breadcrumb.map((crumb, i) => {
    if (i === page.breadcrumb.length - 1) return `<span class="current">${crumb}</span>`;
    return `<span>${crumb}</span><span class="sep" aria-hidden="true">/</span>`;
  }).join('');
}

function updateDocNavFooter(page) {
  const el = document.getElementById('doc-nav-footer');
  let html = '';
  if (page.prev) {
    html += `<button class="nav-btn prev" onclick="navigateTo('${page.prev.page}')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      <div><div class="nav-btn-dir">Previous</div><div class="nav-btn-label">${page.prev.label}</div></div>
    </button>`;
  }
  if (page.next) {
    html += `<button class="nav-btn next" onclick="navigateTo('${page.next.page}')">
      <div><div class="nav-btn-dir">Next</div><div class="nav-btn-label">${page.next.label}</div></div>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
    </button>`;
  }
  el.innerHTML = html;
}

function updateHeaderNav(page) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  const catMap = {
    'Get Started': 'home', 'Platform': 'home', 'AI & Machine Learning': 'ai-overview',
    'IoT & Hardware': 'hardware-overview', 'Architecture': 'home', 'API Reference': 'api-authentication',
    'Data Model': 'api-authentication', 'Mobile App': 'home', 'Resources': 'home'
  };
  const targetPage = catMap[page.category] || 'home';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.dataset.page === targetPage) link.classList.add('active');
  });
}

// ── TOC ────────────────────────────────────────
function buildTOC() {
  const headings = document.querySelectorAll('#doc-content h2, #doc-content h3');
  const tocNav = document.getElementById('toc-nav');
  tocNav.innerHTML = '';

  headings.forEach(h => {
    const link = document.createElement('a');
    link.href = '#' + h.id;
    link.className = 'toc-link' + (h.tagName === 'H3' ? ' toc-h3' : '');
    link.textContent = h.textContent;
    link.addEventListener('click', e => {
      e.preventDefault();
      h.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    tocNav.appendChild(link);
  });

  // Active tracking
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tocNav.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));
        const activeLink = tocNav.querySelector(`[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { rootMargin: `-${68 + 20}px 0px -70% 0px` });

  headings.forEach(h => observer.observe(h));
}

// ── SEARCH ─────────────────────────────────────
let searchHighlightIndex = -1;

function openSearch() {
  document.getElementById('search-overlay').classList.add('open');
  document.getElementById('search-input').focus();
  document.getElementById('search-results').innerHTML = renderDefaultSearchResults();
  searchHighlightIndex = -1;
}

function closeSearch() {
  document.getElementById('search-overlay').classList.remove('open');
  document.getElementById('search-input').value = '';
  searchHighlightIndex = -1;
}

function renderDefaultSearchResults() {
  const featured = ['home', 'ai-overview', 'api-predictions', 'hardware-overview', 'shap-explainability', 'risk-classification', 'faq', 'glossary'];
  return `<div class="search-result-item" style="cursor:default;padding:10px 20px 4px;"><span class="search-result-category">Quick Access</span></div>` +
    featured.map(id => {
      const p = PAGES[id];
      if (!p) return '';
      return `<div class="search-result-item" role="option" tabindex="0" onclick="selectSearchResult('${id}')" onkeydown="if(event.key==='Enter')selectSearchResult('${id}')">
        <div class="search-result-title">${p.title}</div>
        <div class="search-result-category">${p.category}</div>
      </div>`;
    }).join('');
}

function performSearch(query) {
  if (!query.trim()) {
    document.getElementById('search-results').innerHTML = renderDefaultSearchResults();
    return;
  }
  const q = query.toLowerCase();
  const results = SEARCH_INDEX.filter(item =>
    item.title.toLowerCase().includes(q) ||
    item.category.toLowerCase().includes(q) ||
    item.desc.toLowerCase().includes(q)
  ).slice(0, 12);

  const el = document.getElementById('search-results');
  if (results.length === 0) {
    el.innerHTML = `<div class="search-empty">No results found for "<strong>${query}</strong>".<br>Try different keywords.</div>`;
    return;
  }

  el.innerHTML = results.map(r => `
    <div class="search-result-item" role="option" tabindex="0" onclick="selectSearchResult('${r.id}')" onkeydown="if(event.key==='Enter')selectSearchResult('${r.id}')">
      <div class="search-result-category">${r.category}</div>
      <div class="search-result-title">${highlight(r.title, query)}</div>
      <div class="search-result-desc">${highlight(r.desc.substring(0, 120), query)}...</div>
    </div>
  `).join('');
}

function highlight(text, query) {
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark style="background:rgba(0,155,107,0.2);color:inherit;border-radius:2px;padding:0 1px;">$1</mark>');
}

function selectSearchResult(pageId) {
  closeSearch();
  navigateTo(pageId);
}

// ── CODE COPY ──────────────────────────────────
function copyCode(btn) {
  const code = btn.closest('.code-block').querySelector('code').innerText;
  navigator.clipboard.writeText(code).then(() => {
    const orig = btn.innerHTML;
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;
    btn.classList.add('copied');
    setTimeout(() => { btn.innerHTML = orig; btn.classList.remove('copied'); }, 2000);
  });
}

function initCodeCopy() {
  // Already handled via inline onclick
}

// ── FAQ ────────────────────────────────────────
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const open = btn.classList.contains('open');
  btn.classList.toggle('open', !open);
  btn.setAttribute('aria-expanded', !open);
  answer.classList.toggle('open', !open);
}

function initFAQs() {
  // FAQs initialized via inline onclick
}

// ── SIDEBAR SECTIONS ───────────────────────────
document.querySelectorAll('.section-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const section = btn.dataset.section;
    const ul = document.getElementById(`section-${section}`);
    if (!ul) return;
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);
    ul.classList.toggle('collapsed', expanded);
  });
});

// ── SIDEBAR LINKS ─────────────────────────────
document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(link.dataset.page);
  });
});

// ── FOOTER LINKS ──────────────────────────────
document.querySelectorAll('.footer-links a[data-page]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(link.dataset.page);
  });
});

// ── HEADER LINKS ──────────────────────────────
document.querySelectorAll('.nav-link[data-page], .site-logo[data-page]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(link.dataset.page);
  });
});

// ── SEARCH WIRING ─────────────────────────────
document.getElementById('search-btn').addEventListener('click', openSearch);
document.getElementById('search-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('search-overlay')) closeSearch();
});
document.getElementById('search-input').addEventListener('input', e => {
  performSearch(e.target.value);
  searchHighlightIndex = -1;
});
document.getElementById('search-input').addEventListener('keydown', e => {
  const items = document.querySelectorAll('#search-results .search-result-item[onclick]');
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    searchHighlightIndex = Math.min(searchHighlightIndex + 1, items.length - 1);
    items.forEach((item, i) => item.classList.toggle('highlighted', i === searchHighlightIndex));
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    searchHighlightIndex = Math.max(searchHighlightIndex - 1, 0);
    items.forEach((item, i) => item.classList.toggle('highlighted', i === searchHighlightIndex));
  } else if (e.key === 'Enter' && searchHighlightIndex >= 0) {
    items[searchHighlightIndex]?.click();
  } else if (e.key === 'Escape') {
    closeSearch();
  }
});

document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    openSearch();
  }
  if (e.key === 'Escape') closeSearch();
});

// ── THEME TOGGLE ──────────────────────────────
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const savedTheme = localStorage.getItem('zd-theme') || 'light';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('zd-theme', next);
});

// ── MOBILE SIDEBAR ─────────────────────────────
document.getElementById('sidebar-toggle').addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const open = sidebar.classList.toggle('open');
  overlay.classList.toggle('open', open);
  document.getElementById('sidebar-toggle').setAttribute('aria-expanded', open);
});

document.getElementById('sidebar-overlay').addEventListener('click', () => {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('open');
  document.getElementById('sidebar-toggle').setAttribute('aria-expanded', false);
});

// ── SIDEBAR COLLAPSE ────────────────────────────
const collapseBtn = document.getElementById('sidebar-collapse-btn');
const sidebar = document.getElementById('sidebar');

// Restore persisted state
if (localStorage.getItem('zd-sidebar-collapsed') === 'true') {
  sidebar.classList.add('collapsed');
  collapseBtn.setAttribute('aria-label', 'Expand sidebar');
  collapseBtn.title = 'Expand sidebar';
}

collapseBtn.addEventListener('click', () => {
  const isCollapsed = sidebar.classList.toggle('collapsed');
  collapseBtn.setAttribute('aria-label', isCollapsed ? 'Expand sidebar' : 'Collapse sidebar');
  collapseBtn.title = isCollapsed ? 'Expand sidebar' : 'Collapse sidebar';
  localStorage.setItem('zd-sidebar-collapsed', isCollapsed);
});

// ── BACK/FORWARD ──────────────────────────────
window.addEventListener('popstate', e => {
  if (e.state && e.state.page) navigateTo(e.state.page);
});

// ── GOOGLE TRANSLATE INTEGRATION ──────────────
function setTranslateCookie(lang) {
  const cookieVal = (lang === 'en') ? '/en/en' : `/en/${lang}`;
  document.cookie = `googtrans=${cookieVal}; path=/;`;
  const host = window.location.hostname;
  if (host) {
    document.cookie = `googtrans=${cookieVal}; domain=${host}; path=/;`;
    const parts = host.split('.');
    if (parts.length > 1) {
      const rootDomain = parts.slice(-2).join('.');
      document.cookie = `googtrans=${cookieVal}; domain=.${rootDomain}; path=/;`;
    }
  }
}

function applyGoogleTranslation(lang) {
  setTranslateCookie(lang);
  const gtCombo = document.querySelector('.goog-te-combo');
  if (gtCombo) {
    gtCombo.value = lang;
    gtCombo.dispatchEvent(new Event('change'));
  } else {
    window.location.reload();
  }
}

const langSelect = document.querySelector('.lang-select');
if (langSelect) {
  const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/);
  if (match && match[1]) {
    langSelect.value = match[1];
  }
  langSelect.addEventListener('change', (e) => {
    applyGoogleTranslation(e.target.value);
  });
}

// ── INITIAL LOAD ──────────────────────────────
(function init() {
  const hash = window.location.hash.replace('#', '');
  const startPage = (hash && PAGES[hash]) ? hash : 'home';
  navigateTo(startPage);
})();
