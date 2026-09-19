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
  <p class="hero-lead">AI-powered early mastitis-risk forecasting for modern dairy farms. Zero Drop combines animal health data, milk-quality measurements, IoT sensor signals, farm records and environmental information to help identify rising mastitis risk earlier.</p>
</div>

${callout('note','About this Documentation','This documentation covers the Zero Drop platform architecture, AI/ML prediction engine, IoT hardware, API reference and integration guides. It is intended for developers, farm operators, veterinary professionals and technical partners.')}

<h2 id="overview">Overview</h2>
<p>Zero Drop is a smart dairy-health platform designed to support early identification of bovine mastitis risk. It does not replace veterinary assessment — it provides data-driven signals to help farmers and veterinary professionals take timely, informed action.</p>

<p>The platform processes a combination of continuous and periodic data sources to generate risk assessments, alerts and plain-language recommendations.</p>

<h2 id="explore">Explore the Documentation</h2>

<div class="card-grid">
  ${docCard('get-started','<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>','Get Started','Set up Zero Drop and understand the platform fundamentals.')}
  ${docCard('dashboard','<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>','Platform','Explore dashboards, animal management, alerts, monitoring and reports.')}
  ${docCard('ai-overview','<circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>','AI &amp; Machine Learning','Understand how the prediction engine, XGBoost model and SHAP explainability work.')}
  ${docCard('hardware-overview','<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>','IoT &amp; Hardware','Learn about smart neck belts, milk sensors, ESP32, nRF52840 and connectivity.')}
  ${docCard('api-authentication','<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>','API Reference','Integrate applications and services with the Zero Drop REST API.')}
  ${docCard('system-architecture','<polygon points="12 2 2 7 2 17 12 22 22 17 22 7 12 2"/>','Architecture','Understand the complete Zero Drop technical architecture across all layers.')}
</div>

<h2 id="data-sources">Data Sources</h2>
<p>Zero Drop is designed to integrate a range of data inputs, processed through a unified AI/ML pipeline:</p>
<ul>
  <li><strong>Animal health records</strong> — disease history, vaccination records, lactation data</li>
  <li><strong>Milk-quality measurements</strong> — yield, conductivity, somatic cell count (SCC)</li>
  <li><strong>Sensor data</strong> — body temperature, activity levels, rumination minutes, GPS position</li>
  <li><strong>Farm management data</strong> — feed records, farm events, herd information</li>
  <li><strong>Environmental information</strong> — ambient temperature, season, conditions</li>
</ul>

<h2 id="core-workflow">Core Workflow</h2>
<p>The platform follows a structured pipeline from data collection to farmer action:</p>

${workflowDiagram([
  ['Collect','IoT sensors and farm records gather continuous and periodic data'],
  ['Process','Raw data is cleaned, validated and normalized'],
  ['Analyze','Features are engineered from processed data windows'],
  ['Predict','XGBoost model estimates mastitis risk score'],
  ['Explain','SHAP identifies the top contributing factors'],
  ['Alert','High-risk animals trigger notifications'],
  ['Act','Farmer receives risk level, explanation and recommended action'],
])}

<h2 id="disclaimer">Important Notice</h2>
${callout('warning','Not a Veterinary Diagnostic System','Zero Drop is a predictive monitoring tool. It is not a veterinary diagnostic system and does not replace clinical examination or professional veterinary assessment. Always involve qualified veterinary professionals when clinical signs are present or when making treatment decisions.')}
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
<p class="lead">Zero Drop is an AI-powered dairy health monitoring platform designed to support early identification of bovine mastitis risk on Indian dairy farms.</p>

<h2 id="the-problem">The Problem</h2>
<p>Bovine mastitis — inflammation of the udder — is one of the most costly and common diseases affecting dairy cattle worldwide. It causes significant milk yield loss, animal welfare concerns and financial burden on farmers. A major challenge is that subclinical mastitis (the early stage) produces no obvious visible signs, making early detection difficult without continuous monitoring.</p>

<p>In India, where smallholder dairy farming plays a critical role in rural livelihoods, access to continuous health monitoring and veterinary expertise can be limited. By the time clinical signs appear, intervention becomes more costly and less effective.</p>

<h2 id="the-solution">The Solution</h2>
<p>Zero Drop combines multiple data streams through a machine-learning prediction pipeline to estimate the risk of mastitis <em>before</em> clinical signs become visible. The platform aims to give farmers and veterinary professionals a data-driven early warning — enabling timely inspection and intervention.</p>

<div class="arch-diagram">
  <div style="text-align:center;padding:8px 0;">
    <div style="display:inline-flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-bottom:18px;">
      <div class="arch-node primary">IoT Sensors</div>
      <div class="arch-node primary">Milk Records</div>
      <div class="arch-node primary">Health History</div>
      <div class="arch-node primary">Farm Data</div>
    </div>
    <div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>
    <div style="display:flex;justify-content:center;margin:8px 0;"><div class="arch-node primary" style="font-size:15px;padding:14px 32px;">AI / ML Prediction Engine</div></div>
    <div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div>
    <div style="display:inline-flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:10px;">
      <div class="arch-node">Risk Score &amp; Level</div>
      <div class="arch-node">SHAP Explanation</div>
      <div class="arch-node">Recommendations</div>
      <div class="arch-node">Alerts</div>
    </div>
  </div>
</div>

<h2 id="who-is-it-for">Who Is It For?</h2>
<div class="card-grid">
  <div class="doc-card" style="cursor:default;">
    <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
    <div class="card-title">Dairy Farmers</div>
    <p class="card-desc">Receive early risk alerts, plain-language recommendations and per-animal health status through the dashboard and mobile app.</p>
  </div>
  <div class="doc-card" style="cursor:default;">
    <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
    <div class="card-title">Farm Managers</div>
    <p class="card-desc">Access herd-level risk summaries, trend charts, alert history and reports to manage farm health decisions.</p>
  </div>
  <div class="doc-card" style="cursor:default;">
    <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 14c-.97-2.53-1.53-5.14-1.36-7.81A2 2 0 0 1 5.18 4h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.91 11a16 16 0 0 0 4.14 4.07l.52-.52a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
    <div class="card-title">Veterinary Professionals</div>
    <p class="card-desc">Review animal risk history, contributing factors and health trends to support clinical decision-making.</p>
  </div>
  <div class="doc-card" style="cursor:default;">
    <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
    <div class="card-title">Developers</div>
    <p class="card-desc">Integrate Zero Drop data, predictions and alerts into third-party systems using the REST API.</p>
  </div>
</div>

<h2 id="key-capabilities">Key Capabilities</h2>
<ul>
  <li><strong>Risk Prediction</strong> — XGBoost model estimates mastitis risk score (0–100) with a target forecasting window of 7–14 days</li>
  <li><strong>SHAP Explainability</strong> — Each prediction includes the top contributing factors in plain language</li>
  <li><strong>IoT Integration</strong> — Smart neck belts capture temperature, activity and rumination data continuously</li>
  <li><strong>Alerts</strong> — Automatic notifications when risk crosses configured thresholds</li>
  <li><strong>Multilingual Support</strong> — Farmer-facing content designed for Indian regional languages <span class="inline-note">Planned</span></li>
  <li><strong>Mobile App</strong> — React Native app for field access</li>
  <li><strong>Farm Risk Map</strong> — GIS visualization of risk distribution across the farm</li>
</ul>

${callout('note','Prototype Status','Zero Drop is an active development project. Features and thresholds are subject to validation, calibration and improvement using real field data. This documentation reflects the current design and prototype implementation.')}
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
<h1 id="how-it-works">How Zero Drop Works</h1>
<p class="lead">Zero Drop processes multiple streams of farm and animal data through a structured pipeline — from collection through to farmer action.</p>

<h2 id="step1">Step 1 — Data Collection</h2>
<p>Data enters the system from a range of continuous and periodic sources:</p>

<div class="card-grid" style="grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px;margin:20px 0;">
  ${miniCard('Smart Neck Belt','Temperature, activity, rumination, GPS')}
  ${miniCard('Milk Testing','Yield, conductivity, SCC')}
  ${miniCard('Health Records','Disease history, vaccinations')}
  ${miniCard('Farm Records','Feed events, management notes')}
  ${miniCard('Environmental','Ambient temperature, season')}
</div>

<h2 id="step2">Step 2 — Data Processing</h2>
<p>Raw data is cleaned and validated before analysis. The processing stage handles:</p>
<ul>
  <li><strong>Missing values</strong> — imputation or flagging of incomplete records</li>
  <li><strong>Duplicate records</strong> — deduplication of sensor transmissions</li>
  <li><strong>Sensor errors</strong> — out-of-range value detection and filtering</li>
  <li><strong>Normalization</strong> — scaling numeric features into consistent ranges</li>
  <li><strong>Temporal alignment</strong> — aligning records from different sources to a common time window</li>
</ul>

${codeBlock('python','# Simplified processing example\ndef preprocess_sensor_record(record):\n    <span class="tok-cmt"># Range validation</span>\n    <span class="tok-kw">if not</span> (<span class="tok-num">36.0</span> <= record[<span class="tok-str">"temperature"</span>] <= <span class="tok-num">42.5</span>):\n        record[<span class="tok-str">"temperature"</span>] = <span class="tok-cls">None</span>  <span class="tok-cmt"># Flag as invalid</span>\n    <span class="tok-kw">if not</span> (<span class="tok-num">0</span> <= record[<span class="tok-str">"rumination_minutes"</span>] <= <span class="tok-num">600</span>):\n        record[<span class="tok-str">"rumination_minutes"</span>] = <span class="tok-cls">None</span>\n    <span class="tok-kw">return</span> record')}

<h2 id="step3">Step 3 — Feature Engineering</h2>
<p>Raw measurements are transformed into model-ready features that capture meaningful patterns and trends:</p>

<div class="table-wrap">
<table class="doc-table">
<thead><tr><th>Feature</th><th>Source</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>temp_trend_7d</code></td><td>Belt sensor</td><td>Temperature change over 7-day rolling window</td></tr>
<tr><td><code>rumination_change</code></td><td>Belt sensor</td><td>Deviation from individual animal baseline</td></tr>
<tr><td><code>activity_change</code></td><td>Belt sensor / IMU</td><td>Activity level relative to animal average</td></tr>
<tr><td><code>milk_yield_change</code></td><td>Milk records</td><td>Yield trend versus previous lactation stage</td></tr>
<tr><td><code>conductivity_avg</code></td><td>Milk sensor</td><td>Rolling average conductivity (mS/cm)</td></tr>
<tr><td><code>days_in_milk</code></td><td>Farm records</td><td>Current lactation day (high-risk period indicator)</td></tr>
<tr><td><code>prior_mastitis_count</code></td><td>Health records</td><td>Number of previous mastitis events</td></tr>
<tr><td><code>env_temp_avg</code></td><td>Environmental</td><td>Ambient temperature (heat stress indicator)</td></tr>
</tbody>
</table>
</div>

<h2 id="step4">Step 4 — Risk Prediction</h2>
<p>The engineered features are passed to the XGBoost prediction model, which outputs a risk score between 0 and 100. This score represents the model's estimated probability of a mastitis event within the configured forecasting window.</p>
<p>The intended forecasting objective is <strong>7–14 days ahead of visible clinical signs</strong>, subject to validation on field data.</p>

${codeBlock('python','<span class="tok-cmt"># Conceptual prediction call</span>\nrisk_score = model.predict_proba(feature_vector)[<span class="tok-num">0</span>][<span class="tok-num">1</span>]  <span class="tok-cmt"># probability of positive class</span>\nrisk_score_normalized = <span class="tok-fn">int</span>(risk_score * <span class="tok-num">100</span>)')}

<h2 id="step5">Step 5 — SHAP Explainability</h2>
<p>SHAP (SHapley Additive exPlanations) values identify which input features contributed most to each prediction. This makes the model transparent and provides the basis for understandable alerts.</p>

<h2 id="step6">Step 6 — Recommendation Generation</h2>
<p>The Gemini language model receives the risk score and top SHAP factors and generates a plain-language recommendation tailored to the farmer's context. Recommendations are informational and not a veterinary diagnosis.</p>

<h2 id="step7">Step 7 — Farmer Action</h2>
<p>The farmer receives:</p>
<ul>
  <li>A <strong>risk level</strong> (No Risk / Low / Moderate / High)</li>
  <li>An <strong>alert</strong> through the dashboard and mobile app</li>
  <li>A plain-language <strong>explanation</strong> of the contributing signals</li>
  <li>A <strong>recommended next action</strong></li>
</ul>
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
<p class="lead">Get the Zero Drop development environment running locally. These instructions reflect the recommended setup — adjust paths and commands as needed for your actual repository configuration.</p>

${callout('warning','Developer Setup','This guide is for developers setting up a local development environment. Farm operators use the hosted dashboard and mobile app — no local setup is required.')}

<h2 id="prerequisites">Prerequisites</h2>
<div class="table-wrap">
<table class="doc-table">
<thead><tr><th>Requirement</th><th>Version</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td><code>Node.js</code></td><td>18+ LTS</td><td>Frontend development server</td></tr>
<tr><td><code>Python</code></td><td>3.10+</td><td>Backend &amp; AI/ML services</td></tr>
<tr><td><code>PostgreSQL</code></td><td>14+</td><td>Primary database</td></tr>
<tr><td><code>Git</code></td><td>Latest</td><td>Source control</td></tr>
</tbody>
</table>
</div>

<h2 id="frontend-setup">Frontend Setup</h2>
<p>The frontend is built with React, TypeScript and Vite.</p>

${codeBlock('bash','<span class="tok-cmt"># Clone the repository</span>\ngit clone https://github.com/your-org/zero-drop.git\n<span class="tok-fn">cd</span> zero-drop/frontend\n\n<span class="tok-cmt"># Install dependencies</span>\nnpm install\n\n<span class="tok-cmt"># Start development server</span>\nnpm run dev')}

<p>The frontend will start at <code>http://localhost:5173</code> by default.</p>

<h2 id="backend-setup">Backend Setup</h2>
<p>The backend uses Django REST Framework with Python.</p>

${codeBlock('bash','<span class="tok-fn">cd</span> zero-drop/backend\n\n<span class="tok-cmt"># Create and activate virtual environment</span>\npython -m venv venv\nsource venv/bin/activate        <span class="tok-cmt"># macOS / Linux</span>\nvenv\\Scripts\\activate           <span class="tok-cmt"># Windows</span>\n\n<span class="tok-cmt"># Install Python dependencies</span>\npip install -r requirements.txt\n\n<span class="tok-cmt"># Configure environment variables</span>\ncp .env.example .env\n<span class="tok-cmt"># Edit .env with your database credentials and API keys</span>\n\n<span class="tok-cmt"># Apply database migrations</span>\npython manage.py migrate\n\n<span class="tok-cmt"># Create superuser (optional)</span>\npython manage.py createsuperuser\n\n<span class="tok-cmt"># Start development server</span>\npython manage.py runserver')}

<p>The backend API will be available at <code>http://localhost:8000</code>.</p>

<h2 id="ai-setup">AI / ML Setup</h2>

${codeBlock('bash','<span class="tok-fn">cd</span> zero-drop/ml\n\n<span class="tok-cmt"># Install ML dependencies</span>\npip install -r requirements.txt\n\n<span class="tok-cmt"># Key packages</span>\n<span class="tok-cmt"># pandas, numpy, scikit-learn, xgboost, shap</span>')}

<h2 id="mobile-setup">Mobile App Setup</h2>

${codeBlock('bash','<span class="tok-fn">cd</span> zero-drop/mobile\n\n<span class="tok-cmt"># Install Expo CLI globally (if not installed)</span>\nnpm install -g expo-cli\n\n<span class="tok-cmt"># Install dependencies</span>\nnpm install\n\n<span class="tok-cmt"># Start Expo development server</span>\nnpx expo start')}

<h2 id="repo-structure">Repository Structure</h2>
<p>The following is the <strong>recommended project structure</strong>. Adjust according to your actual repository layout.</p>

<div class="repo-tree">
<span class="tree-dir">zero-drop/</span>
│
├── <span class="tree-dir">frontend/</span>          <span class="tree-comment"># React + TypeScript + Vite web application</span>
│   ├── <span class="tree-dir">src/</span>
│   │   ├── <span class="tree-dir">components/</span>
│   │   ├── <span class="tree-dir">pages/</span>
│   │   ├── <span class="tree-dir">api/</span>
│   │   └── <span class="tree-dir">utils/</span>
│   └── <span class="tree-file">package.json</span>
│
├── <span class="tree-dir">backend/</span>           <span class="tree-comment"># Django REST Framework API</span>
│   ├── <span class="tree-dir">animals/</span>
│   ├── <span class="tree-dir">predictions/</span>
│   ├── <span class="tree-dir">alerts/</span>
│   ├── <span class="tree-dir">sensors/</span>
│   └── <span class="tree-file">requirements.txt</span>
│
├── <span class="tree-dir">ml/</span>                <span class="tree-comment"># AI/ML pipeline and model training</span>
│   ├── <span class="tree-dir">data/</span>
│   ├── <span class="tree-dir">features/</span>
│   ├── <span class="tree-dir">models/</span>
│   └── <span class="tree-file">requirements.txt</span>
│
├── <span class="tree-dir">mobile/</span>            <span class="tree-comment"># React Native + Expo mobile app</span>
│   ├── <span class="tree-dir">src/</span>
│   └── <span class="tree-file">package.json</span>
│
├── <span class="tree-dir">hardware/</span>          <span class="tree-comment"># Firmware and hardware documentation</span>
│   ├── <span class="tree-dir">belt/</span>
│   └── <span class="tree-dir">milk-monitor/</span>
│
├── <span class="tree-dir">docs/</span>              <span class="tree-comment"># Additional documentation</span>
├── <span class="tree-dir">scripts/</span>           <span class="tree-comment"># Utility and deployment scripts</span>
└── <span class="tree-file">README.md</span>
</div>
    `
  },

  /* ─── SYSTEM REQUIREMENTS ───────────────────── */
  'system-requirements': {
    title: 'System Requirements',
    category: 'Get Started',
    breadcrumb: ['Docs', 'Get Started', 'System Requirements'],
    prev: { page: 'quick-start', label: 'Quick Start' },
    next: { page: 'dashboard', label: 'Dashboard' },
    content: () => `
<h1 id="system-requirements">System Requirements</h1>
<p class="lead">Minimum and recommended system requirements for running Zero Drop in development and production environments.</p>

<h2 id="tech-stack">Technology Stack</h2>

<h3 id="frontend">Frontend</h3>
<div class="table-wrap"><table class="doc-table"><thead><tr><th>Technology</th><th>Version</th><th>Purpose</th></tr></thead><tbody>
<tr><td>React</td><td>18+</td><td>UI framework</td></tr>
<tr><td>TypeScript</td><td>5+</td><td>Type safety</td></tr>
<tr><td>Vite</td><td>5+</td><td>Build tool &amp; dev server</td></tr>
<tr><td>Tailwind CSS</td><td>3+</td><td>Utility-first styling</td></tr>
</tbody></table></div>

<h3 id="backend">Backend</h3>
<div class="table-wrap"><table class="doc-table"><thead><tr><th>Technology</th><th>Version</th><th>Purpose</th></tr></thead><tbody>
<tr><td>Python</td><td>3.10+</td><td>Primary backend language</td></tr>
<tr><td>Django</td><td>4.2+</td><td>Web framework</td></tr>
<tr><td>Django REST Framework</td><td>3.14+</td><td>REST API</td></tr>
<tr><td>PostgreSQL</td><td>14+</td><td>Primary database</td></tr>
</tbody></table></div>

<h3 id="ai-ml">AI / ML</h3>
<div class="table-wrap"><table class="doc-table"><thead><tr><th>Library</th><th>Version</th><th>Purpose</th></tr></thead><tbody>
<tr><td>scikit-learn</td><td>1.3+</td><td>ML utilities &amp; preprocessing</td></tr>
<tr><td>XGBoost</td><td>2.0+</td><td>Gradient-boosted prediction model</td></tr>
<tr><td>SHAP</td><td>0.44+</td><td>Model explainability</td></tr>
<tr><td>Pandas</td><td>2.0+</td><td>Data manipulation</td></tr>
<tr><td>NumPy</td><td>1.25+</td><td>Numerical computing</td></tr>
</tbody></table></div>

<h3 id="mobile">Mobile</h3>
<div class="table-wrap"><table class="doc-table"><thead><tr><th>Technology</th><th>Version</th><th>Purpose</th></tr></thead><tbody>
<tr><td>React Native</td><td>0.73+</td><td>Cross-platform mobile framework</td></tr>
<tr><td>Expo</td><td>50+</td><td>Development platform</td></tr>
</tbody></table></div>
    `
  },

  /* ─── DASHBOARD ─────────────────────────────── */
  'dashboard': {
    title: 'Dashboard',
    category: 'Platform',
    breadcrumb: ['Docs', 'Platform', 'Dashboard'],
    prev: { page: 'system-requirements', label: 'System Requirements' },
    next: { page: 'animal-management', label: 'Animal Management' },
    content: () => `
<h1 id="dashboard">Dashboard</h1>
<p class="lead">The dashboard provides a herd-level overview of current predicted risk, active alerts and recent animal health trends.</p>

<h2 id="overview">Overview</h2>
<p>When a user opens Zero Drop, the dashboard is the first screen they see. It is designed to answer three immediate questions:</p>
<ol>
  <li>Are any animals currently at elevated risk?</li>
  <li>What is the overall herd health status?</li>
  <li>Are there any unresolved alerts that need attention?</li>
</ol>

<h2 id="dashboard-areas">Dashboard Areas</h2>

<h3 id="risk-summary">Risk Distribution Summary</h3>
<p>Four cards display a count of animals in each risk category:</p>

<div class="risk-table-card">
  <div class="risk-row">
    <div class="risk-dot risk-dot-norisk"></div>
    <div class="risk-label risk-label-norisk">No Risk</div>
    <div style="flex:1"></div>
    <span class="badge badge-norisk">0–20</span>
  </div>
  <div class="risk-row">
    <div class="risk-dot risk-dot-low"></div>
    <div class="risk-label risk-label-low">Low Risk</div>
    <div style="flex:1"></div>
    <span class="badge badge-low">21–40</span>
  </div>
  <div class="risk-row">
    <div class="risk-dot risk-dot-mod"></div>
    <div class="risk-label risk-label-mod">Moderate Risk</div>
    <div style="flex:1"></div>
    <span class="badge badge-moderate">41–70</span>
  </div>
  <div class="risk-row">
    <div class="risk-dot risk-dot-high"></div>
    <div class="risk-label risk-label-high">High Risk</div>
    <div style="flex:1"></div>
    <span class="badge badge-high">71–100</span>
  </div>
</div>

${callout('note','Prototype Thresholds','These risk thresholds are prototype values subject to validation and calibration using real field data. They are not clinically validated thresholds.')}

<h3 id="health-trends">Health Trends</h3>
<p>A trend chart displays the herd-level risk distribution over recent days, allowing farm managers to identify whether overall herd risk is increasing or decreasing.</p>

<h3 id="high-risk-animals">High-Risk Animals</h3>
<p>A table or card list shows animals currently classified as Moderate or High risk, sorted by risk score descending. Each entry displays:</p>
<ul>
  <li>Animal ID and name</li>
  <li>Current risk score and badge</li>
  <li>Primary contributing factor</li>
  <li>Last updated timestamp</li>
  <li>Link to animal detail view</li>
</ul>

<h3 id="recent-alerts">Alerts</h3>
<p>Recent unresolved alerts appear in a notification panel. Alert cards show the animal ID, severity, timestamp and recommended action. Alerts can be acknowledged from the dashboard.</p>

<h3 id="quick-actions">Quick Actions</h3>
<p>The dashboard includes shortcut buttons for common actions:</p>
<ul>
  <li>Add animal record</li>
  <li>Log milk record</li>
  <li>View all alerts</li>
  <li>Generate report</li>
</ul>
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
<h1 id="animal-management">Animal Management</h1>
<p class="lead">Each animal in Zero Drop has an individual digital profile containing identification information, health history, sensor trends and risk assessments.</p>

<h2 id="animal-profile">Animal Profile</h2>
<p>The animal profile is the central record for each cow or buffalo in the system. It provides a complete view of the animal's current status and history.</p>

<h3 id="sample-profile">Sample Animal Profile</h3>

<div class="prop-block">
  <div class="prop-header">
    <div>
      <div class="prop-class-name">ZD-104</div>
      <div class="prop-class-desc">HF Cross &bull; Age 4y 3m &bull; Lactation Day 47</div>
    </div>
    <span class="badge badge-high">HIGH RISK &bull; 87</span>
  </div>
  <div class="prop-row">
    <div class="prop-name">Animal ID</div>
    <div class="prop-type">string</div>
    <div class="prop-desc">ZD-104 — Unique identifier assigned at registration</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">Breed</div>
    <div class="prop-type">string</div>
    <div class="prop-desc">HF Cross (Holstein Friesian × Local)</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">Age</div>
    <div class="prop-type">duration</div>
    <div class="prop-desc">4 years 3 months</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">Lactation Stage</div>
    <div class="prop-type">string</div>
    <div class="prop-desc">Early Lactation — Day 47 of current cycle</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">Health Status</div>
    <div class="prop-type">enum</div>
    <div class="prop-desc">HIGH_RISK — Based on latest prediction run</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">Prior Mastitis Events</div>
    <div class="prop-type">integer</div>
    <div class="prop-desc">2 confirmed events in history</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">Current Risk Score</div>
    <div class="prop-type">integer</div>
    <div class="prop-desc">87 / 100 — Updated at last prediction run</div>
  </div>
  <div class="prop-row">
    <div class="prop-name">Belt Serial</div>
    <div class="prop-type">string</div>
    <div class="prop-desc">ZDB-2291 — Smart neck belt assigned to this animal</div>
  </div>
</div>

<h2 id="profile-sections">Profile Sections</h2>
<ul>
  <li><strong>Overview</strong> — Current risk score, badge and primary alert</li>
  <li><strong>Sensor Trends</strong> — Charts for temperature, activity and rumination over time</li>
  <li><strong>Milk Records</strong> — Yield and conductivity history</li>
  <li><strong>Health History</strong> — Disease events, vaccinations, treatments</li>
  <li><strong>Risk History</strong> — Timeline of past risk scores</li>
  <li><strong>Alerts</strong> — Alert history for this animal</li>
  <li><strong>Recommendations</strong> — Generated recommendations for this animal</li>
</ul>

<h2 id="adding-animals">Adding Animals</h2>
<p>Animals are registered through the dashboard Add Animal form or via the <code>POST /api/v1/animals/</code> endpoint. Required fields include animal ID, breed, date of birth and lactation information.</p>

<h2 id="tagging">QR / Tag Identification</h2>
<p>Animals can be identified via QR code tag using the mobile app Scan Animal feature. Scanning navigates directly to the animal's profile page.</p>
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
<h1 id="health-monitoring">Health Monitoring</h1>
<p class="lead">Health monitoring provides per-animal and herd-level views of the key physiological and production signals that feed the risk prediction pipeline.</p>

<h2 id="monitoring-parameters">Monitoring Parameters</h2>
<div class="table-wrap"><table class="doc-table"><thead><tr><th>Parameter</th><th>Source</th><th>Unit</th><th>Normal Range (indicative)</th></tr></thead><tbody>
<tr><td>Body Temperature</td><td>Smart Neck Belt</td><td>°C</td><td>38.0 – 39.5°C</td></tr>
<tr><td>Activity Level</td><td>Smart Neck Belt / IMU</td><td>Normalized (0–1)</td><td>Animal baseline ± 20%</td></tr>
<tr><td>Rumination Time</td><td>Smart Neck Belt</td><td>Minutes/day</td><td>400 – 550 min/day</td></tr>
<tr><td>Milk Yield</td><td>Milk Records / Sensor</td><td>Litres/day</td><td>Animal baseline</td></tr>
<tr><td>Milk Conductivity</td><td>Milk Sensor (EC probe)</td><td>mS/cm</td><td>4.0 – 6.0 mS/cm</td></tr>
<tr><td>Somatic Cell Count</td><td>Milk Lab Test</td><td>cells/mL (×10³)</td><td>&lt; 200,000</td></tr>
</tbody></table></div>

${callout('warning','Reference Ranges','Normal ranges shown are indicative reference values for educational purposes. Individual animal baselines vary significantly. Ranges are not clinically validated thresholds for this system.')}

<h2 id="trend-analysis">Trend Analysis</h2>
<p>The monitoring view shows time-series charts for each parameter. Deviations from individual animal baselines are highlighted. Key trend signals the model uses include:</p>
<ul>
  <li><strong>Temperature elevation</strong> — Sustained temperature above the individual baseline</li>
  <li><strong>Rumination decline</strong> — Significant drop in daily rumination minutes</li>
  <li><strong>Activity change</strong> — Reduction in movement patterns</li>
  <li><strong>Conductivity increase</strong> — Rising milk conductivity indicates elevated ion concentration</li>
  <li><strong>Yield drop</strong> — Unexplained reduction in milk production</li>
</ul>

<h2 id="scc">Somatic Cell Count (SCC)</h2>
<p>SCC is a key indicator of udder health. Elevated SCC generally indicates an immune response to udder infection. SCC values are entered manually from laboratory test results. They are used as model features and are not continuously monitored through a sensor in the current prototype.</p>

<h2 id="health-events">Health Event Logging</h2>
<p>Health events can be logged against an animal record:</p>
<ul>
  <li>Veterinary examination</li>
  <li>Diagnosis</li>
  <li>Treatment administered</li>
  <li>Vaccination</li>
  <li>Dry-off or calving event</li>
</ul>
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
<h1 id="alerts">Alerts</h1>
<p class="lead">Alerts notify users when the system identifies elevated mastitis risk or other configured monitoring events for an animal.</p>

<h2 id="alert-structure">Alert Structure</h2>
<p>Each alert contains the following information:</p>

<div class="alert-card">
  <div class="alert-card-header">
    <div class="alert-severity-dot sev-high"></div>
    <div class="alert-animal-id">Animal ZD-104</div>
    <div style="flex:1"></div>
    <span class="badge badge-high">HIGH RISK</span>
    <span class="status-badge status-new" style="margin-left:8px;">New</span>
  </div>
  <div class="alert-card-body">
    <div class="alert-meta">
      <div class="alert-meta-item">
        <span class="alert-meta-label">Risk Score</span>
        <span class="alert-meta-value">87 / 100</span>
      </div>
      <div class="alert-meta-item">
        <span class="alert-meta-label">Prediction Window</span>
        <span class="alert-meta-value">7–14 days</span>
      </div>
      <div class="alert-meta-item">
        <span class="alert-meta-label">Generated</span>
        <span class="alert-meta-value">20 Sep 2026, 00:05</span>
      </div>
      <div class="alert-meta-item">
        <span class="alert-meta-label">Top Factor</span>
        <span class="alert-meta-value">Milk Conductivity ↑</span>
      </div>
    </div>
    <div class="alert-recommendation">
      <strong>Recommended Action:</strong> Perform a manual udder and milk check. Contact the responsible veterinary professional if abnormalities are confirmed.
    </div>
  </div>
</div>

<h2 id="alert-fields">Alert Fields</h2>
<div class="table-wrap"><table class="doc-table"><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><code>alert_id</code></td><td>UUID</td><td>Unique alert identifier</td></tr>
<tr><td><code>animal_id</code></td><td>string</td><td>Animal this alert refers to</td></tr>
<tr><td><code>severity</code></td><td>enum</td><td>LOW / MODERATE / HIGH</td></tr>
<tr><td><code>risk_score</code></td><td>integer</td><td>0–100 model risk score</td></tr>
<tr><td><code>message</code></td><td>string</td><td>Human-readable alert description</td></tr>
<tr><td><code>contributing_factors</code></td><td>array</td><td>Top SHAP factors for this alert</td></tr>
<tr><td><code>timestamp</code></td><td>ISO 8601</td><td>Alert generation time</td></tr>
<tr><td><code>status</code></td><td>enum</td><td>NEW / ACKNOWLEDGED / RESOLVED</td></tr>
<tr><td><code>recommended_action</code></td><td>string</td><td>Suggested farmer action</td></tr>
</tbody></table></div>

<h2 id="alert-statuses">Alert Statuses</h2>
<div style="display:flex;gap:12px;flex-wrap:wrap;margin:16px 0;">
  <span class="status-badge status-new">New</span>
  <span class="status-badge status-acknowledged">Acknowledged</span>
  <span class="status-badge status-resolved">Resolved</span>
</div>

<ul>
  <li><strong>New</strong> — Alert has been generated and not yet reviewed</li>
  <li><strong>Acknowledged</strong> — A user has viewed and acknowledged the alert</li>
  <li><strong>Resolved</strong> — The underlying risk has subsided or action has been confirmed</li>
</ul>

<h2 id="alert-delivery">Alert Delivery</h2>
<p>Alerts are delivered through:</p>
<ul>
  <li><strong>Dashboard</strong> — In-app notification panel</li>
  <li><strong>Mobile push notification</strong> — React Native app (configured)</li>
  <li><strong>Email</strong> <span class="inline-note">Planned</span></li>
  <li><strong>SMS</strong> <span class="inline-note">Planned</span></li>
</ul>
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
<h1 id="recommendations">Recommendations</h1>
<p class="lead">The recommendation layer converts model outputs into farmer-friendly, plain-language guidance. Recommendations are informational and not a veterinary diagnosis.</p>

${callout('danger','Important Disclaimer','Recommendations generated by Zero Drop are informational only. They are not a substitute for professional veterinary examination or diagnosis. Always involve a qualified veterinary professional when clinical signs are present.')}

<h2 id="example-recommendation">Example Recommendation</h2>

<div class="alert-card">
  <div class="alert-card-header">
    <div class="alert-severity-dot sev-high"></div>
    <div style="flex:1;">
      <div class="alert-animal-id">Animal ZD-104 &nbsp;·&nbsp; <span class="badge badge-high">HIGH PRIORITY</span></div>
    </div>
    <span class="badge badge-green">Risk Score: 87</span>
  </div>
  <div class="alert-card-body">
    <div class="alert-meta">
      <div class="alert-meta-item">
        <span class="alert-meta-label">Why Risk Increased</span>
        <span class="alert-meta-value" style="font-size:12px;">Milk conductivity ↑ &nbsp;·&nbsp; Temperature ↑ &nbsp;·&nbsp; Rumination ↓</span>
      </div>
    </div>
    <div class="alert-recommendation" style="background:var(--bg-light);border-radius:8px;padding:14px;border:1px solid var(--border);margin-top:12px;">
      <strong>Suggested Action:</strong> Perform a manual udder and milk check. Assess for visible signs including udder swelling, heat or abnormal milk appearance. Contact the responsible veterinary professional if abnormalities are confirmed.
    </div>
    <div style="display:flex;gap:10px;margin-top:14px;flex-wrap:wrap;">
      <span class="badge badge-high">High Priority</span>
      <span class="status-badge status-new">New</span>
    </div>
  </div>
</div>

<h2 id="recommendation-components">Recommendation Components</h2>
<div class="table-wrap"><table class="doc-table"><thead><tr><th>Component</th><th>Description</th></tr></thead><tbody>
<tr><td>Animal</td><td>Animal ID and name the recommendation applies to</td></tr>
<tr><td>Risk Level</td><td>Current risk classification (Low / Moderate / High)</td></tr>
<tr><td>Contributing Factors</td><td>Top SHAP factors explaining why risk increased</td></tr>
<tr><td>Suggested Action</td><td>Plain-language recommended next step</td></tr>
<tr><td>Priority</td><td>HIGH / MODERATE / LOW based on risk score</td></tr>
<tr><td>Status</td><td>New / Acknowledged / Resolved</td></tr>
</tbody></table></div>

<h2 id="generation-process">How Recommendations Are Generated</h2>
<p>The recommendation generation process uses:</p>
<ol>
  <li><strong>Risk score</strong> from the XGBoost model</li>
  <li><strong>Top SHAP factors</strong> — the specific signals that drove the prediction</li>
  <li><strong>Gemini language model</strong> — translates the structured factors into plain-language guidance appropriate for the farmer's context</li>
</ol>

<p>Gemini is used specifically for the natural-language generation layer. It does not perform the risk prediction itself — that is handled by XGBoost.</p>

<h2 id="multilingual">Multilingual Recommendations</h2>
<p>Recommendations are designed to be delivered in the farmer's preferred regional language through a translation layer. <span class="inline-note">Planned — 11 Indian regional languages targeted</span></p>
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
<h1 id="reports">Reports</h1>
<p class="lead">Zero Drop generates structured reports for farm operators, veterinary professionals and administrators covering herd health, risk history and operational summaries.</p>

<h2 id="report-types">Report Types</h2>
<div class="table-wrap"><table class="doc-table"><thead><tr><th>Report</th><th>Description</th><th>Audience</th></tr></thead><tbody>
<tr><td>Herd Health Summary</td><td>Overall risk distribution, trend and alert count for a date range</td><td>Farm Manager</td></tr>
<tr><td>Animal Risk History</td><td>Risk score timeline for a specific animal</td><td>Farm Manager / Vet</td></tr>
<tr><td>Milk Trends</td><td>Yield and conductivity trends across the herd or per animal</td><td>Farm Manager</td></tr>
<tr><td>Sensor Trends</td><td>Temperature, activity and rumination charts over time</td><td>Technical / Vet</td></tr>
<tr><td>Alert History</td><td>List of all alerts, statuses and outcomes for a period</td><td>Farm Manager</td></tr>
<tr><td>Risk Distribution</td><td>Breakdown of animals by risk level at a point in time</td><td>Farm Manager</td></tr>
</tbody></table></div>

<h2 id="export">Export</h2>
<p>Reports can be exported in the following formats:</p>
<ul>
  <li><strong>PDF</strong> — Formatted report for sharing and printing</li>
  <li><strong>CSV</strong> — Raw data for external analysis <span class="inline-note">Planned</span></li>
</ul>

<h2 id="pdf-export">PDF Export</h2>
<p>The PDF export is generated server-side and includes:</p>
<ul>
  <li>Zero Drop header with farm and date range</li>
  <li>Executive summary section</li>
  <li>Charts rendered as static images</li>
  <li>Data tables</li>
  <li>Disclaimer footer</li>
</ul>

${codeBlock('bash','<span class="tok-cmt"># Example API request to generate a PDF report</span>\ncurl -X POST https://api.zerodrop.example/api/v1/reports/herd-summary/ \\\n  -H <span class="tok-str">"Authorization: Bearer &lt;token&gt;"</span> \\\n  -H <span class="tok-str">"Content-Type: application/json"</span> \\\n  -d <span class="tok-str">\'{"date_from":"2026-09-01","date_to":"2026-09-20","format":"pdf"}\'</span> \\\n  --output herd-report.pdf')}
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
<h1 id="farm-risk-map">Farm Risk Map</h1>
<p class="lead">The Farm Risk Map provides a GIS-based visualization of animal risk levels across farm locations where GPS data is available.</p>

<h2 id="purpose">Purpose</h2>
<p>The map component allows farm operators to see the spatial distribution of risk across their farm or across multiple locations. This is useful for identifying patterns such as risk clustering in specific sheds, pastures or zones.</p>

${callout('note','GPS Data Dependency','The Farm Risk Map requires GPS location data from the smart neck belt or manual location assignment. Animals without location data will not appear on the map.')}

<h2 id="map-features">Map Features</h2>
<ul>
  <li><strong>Animal markers</strong> — Each animal shown as a coloured marker based on current risk level</li>
  <li><strong>Risk colour coding</strong> — No Risk (grey), Low (green), Moderate (amber), High (red)</li>
  <li><strong>Cluster mode</strong> — Groups nearby animals to avoid marker overlap at small zoom levels</li>
  <li><strong>Alert overlay</strong> — Active alerts highlighted with a pulsing indicator</li>
  <li><strong>Farm zones</strong> — Configurable shed/pasture boundary overlays</li>
</ul>

<h2 id="limitations">Limitations</h2>
${callout('warning','No Disease Spread Prediction','The Farm Risk Map visualizes current individual animal risk assessments. It does not predict or model disease spread between animals. Spatial patterns should be interpreted with appropriate veterinary guidance.')}

<h2 id="data">Data Sources</h2>
<ul>
  <li>GPS coordinates from smart neck belt (where fitted)</li>
  <li>Manual location assignment per animal (shed, zone or GPS pin)</li>
  <li>Current risk score from the latest prediction run</li>
</ul>
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
<h1 id="smart-belt-iot">Smart Belt IoT</h1>
<p class="lead">The Zero Drop Smart Neck Belt is a wearable IoT device fitted to individual animals to continuously capture physiological and behavioral signals.</p>

<h2 id="overview">Overview</h2>
<p>The smart neck belt is worn around the animal's neck and collects sensor data at configured intervals. Data is transmitted to the edge gateway and then to the backend via the configured communication protocol.</p>

<h2 id="components">Belt Components</h2>
<div class="table-wrap"><table class="doc-table"><thead><tr><th>Component</th><th>Model</th><th>Purpose</th></tr></thead><tbody>
<tr><td>IMU / Motion Sensor</td><td>BNO055</td><td>Activity level and motion tracking</td></tr>
<tr><td>Rumination Sensor</td><td>Piezoelectric</td><td>Detects jaw movements for rumination classification</td></tr>
<tr><td>Microcontroller</td><td>nRF52840</td><td>Data acquisition, processing and communication</td></tr>
<tr><td>Long-range Radio</td><td>LoRa module</td><td>Long-range wireless data transmission</td></tr>
<tr><td>GPS Module</td><td>u-blox compatible</td><td>Animal location tracking</td></tr>
<tr><td>Power</td><td>Solar + 18650 Li-ion</td><td>Continuous power with solar charging</td></tr>
</tbody></table></div>

<h2 id="data-output">Data Output</h2>
<p>The belt transmits structured records at configurable intervals:</p>
${codeBlock('json','{\n  <span class="tok-key">"belt_id"</span>: <span class="tok-str">"ZDB-2291"</span>,\n  <span class="tok-key">"animal_id"</span>: <span class="tok-str">"ZD-104"</span>,\n  <span class="tok-key">"timestamp"</span>: <span class="tok-str">"2026-09-20T00:00:00Z"</span>,\n  <span class="tok-key">"temperature_c"</span>: <span class="tok-num">39.2</span>,\n  <span class="tok-key">"activity_index"</span>: <span class="tok-num">0.61</span>,\n  <span class="tok-key">"rumination_min_last_hour"</span>: <span class="tok-num">38</span>,\n  <span class="tok-key">"gps_lat"</span>: <span class="tok-num">18.5204</span>,\n  <span class="tok-key">"gps_lon"</span>: <span class="tok-num">73.8567</span>,\n  <span class="tok-key">"battery_pct"</span>: <span class="tok-num">82</span>\n}')}

<h2 id="communication">Communication</h2>
<p>The belt communicates via <strong>LoRaWAN</strong> to a Raspberry Pi 4 edge gateway. BLE is used for nearby configuration and firmware updates.</p>
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

${callout('note','Important Distinction','Gemini is not the mastitis prediction model. Risk scores and risk classifications are generated by the XGBoost model. Gemini is used only for the natural-language output layer — producing readable recommendations from structured prediction outputs.')}

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

${callout('warning','Prototype Target','The 7–14 day forecasting objective is the intended design target for this prototype. Actual predictive performance depends on the quality and volume of training data, feature engineering, and real-world validation. Do not treat this as a validated clinical claim.')}

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
${codeBlock('json','{\n  <span class="tok-key">"animal_id"</span>: <span class="tok-str">"ZD-104"</span>,\n  <span class="tok-key">"risk_score"</span>: <span class="tok-num">87</span>,\n  <span class="tok-key">"risk_level"</span>: <span class="tok-str">"HIGH"</span>,\n  <span class="tok-key">"prediction_window"</span>: <span class="tok-str">"7-14 days"</span>,\n  <span class="tok-key">"contributing_factors"</span>: [\n    { <span class="tok-key">"feature"</span>: <span class="tok-str">"milk_conductivity"</span>, <span class="tok-key">"direction"</span>: <span class="tok-str">"positive"</span>, <span class="tok-key">"shap_value"</span>: <span class="tok-num">0.31</span> },\n    { <span class="tok-key">"feature"</span>: <span class="tok-str">"temperature_trend"</span>, <span class="tok-key">"direction"</span>: <span class="tok-str">"positive"</span>, <span class="tok-key">"shap_value"</span>: <span class="tok-num">0.22</span> },\n    { <span class="tok-key">"feature"</span>: <span class="tok-str">"rumination_change"</span>, <span class="tok-key">"direction"</span>: <span class="tok-str">"negative"</span>, <span class="tok-key">"shap_value"</span>: <span class="tok-num">-0.19</span> }\n  ],\n  <span class="tok-key">"generated_at"</span>: <span class="tok-str">"2026-09-20T00:05:00Z"</span>\n}')}

<h2 id="evaluation-metrics">Evaluation Metrics</h2>
<p>The model is evaluated using standard binary classification metrics. Performance values are not reported here as the model has not yet been validated on real field data:</p>
<div class="table-wrap"><table class="doc-table"><thead><tr><th>Metric</th><th>Description</th></tr></thead><tbody>
<tr><td>Precision</td><td>Of animals flagged as high risk, what fraction truly developed mastitis</td></tr>
<tr><td>Recall (Sensitivity)</td><td>Of animals that developed mastitis, what fraction were correctly identified</td></tr>
<tr><td>F1 Score</td><td>Harmonic mean of precision and recall</td></tr>
<tr><td>ROC-AUC</td><td>Overall discrimination ability across all thresholds</td></tr>
</tbody></table></div>

${callout('note','No Published Accuracy Figures','Zero Drop does not publish accuracy claims for the prototype. Validated performance metrics will be shared following controlled field evaluation.')}
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

${callout('warning','Prototype Thresholds','These risk thresholds are prototype values for demonstration and development purposes. They are subject to validation and calibration using real field data before any operational deployment. They are not clinically validated cut-offs.')}

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

${callout('note','Correlation, Not Causation','SHAP values explain the model\'s prediction — they show which features were most influential in the model\'s calculation. They do not prove that a feature caused the health event. Clinical interpretation should always involve a veterinary professional.')}

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

${codeBlock('python','<span class="tok-cmt"># Conceptual recommendation generation</span>\n<span class="tok-kw">def</span> <span class="tok-fn">generate_recommendation</span>(risk_score, risk_level, shap_factors, language=<span class="tok-str">"en"</span>):\n    prompt = <span class="tok-fn">build_prompt</span>(risk_score, risk_level, shap_factors, language)\n    response = gemini_client.generate_content(prompt)\n    <span class="tok-kw">return</span> response.text')}

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
${codeBlock('python','<span class="tok-cmt"># Rolling mean over 7-day window</span>\ndf[<span class="tok-str">"temp_mean_7d"</span>] = df.groupby(<span class="tok-str">"animal_id"</span>)[<span class="tok-str">"temperature"</span>].transform(\n    <span class="tok-kw">lambda</span> x: x.rolling(<span class="tok-str">"7D"</span>, min_periods=<span class="tok-num">3</span>).mean()\n)\n\n<span class="tok-cmt"># Change from previous 3-day period</span>\ndf[<span class="tok-str">"temp_change_3d"</span>] = df[<span class="tok-str">"temperature"</span>] - df.groupby(<span class="tok-str">"animal_id"</span>)[<span class="tok-str">"temperature"</span>].transform(\n    <span class="tok-kw">lambda</span> x: x.shift(<span class="tok-num">3</span>)\n)')}

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
${codeBlock('python','SENSOR_RULES = {\n    <span class="tok-str">"temperature"</span>: {<span class="tok-str">"min"</span>: <span class="tok-num">35.0</span>, <span class="tok-str">"max"</span>: <span class="tok-num">43.0</span>},\n    <span class="tok-str">"rumination_minutes"</span>: {<span class="tok-str">"min"</span>: <span class="tok-num">0</span>, <span class="tok-str">"max"</span>: <span class="tok-num">600</span>},\n    <span class="tok-str">"activity_index"</span>: {<span class="tok-str">"min"</span>: <span class="tok-num">0.0</span>, <span class="tok-str">"max"</span>: <span class="tok-num">1.0</span>},\n    <span class="tok-str">"milk_conductivity"</span>: {<span class="tok-str">"min"</span>: <span class="tok-num">2.0</span>, <span class="tok-str">"max"</span>: <span class="tok-num">15.0</span>},\n}')}

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
${codeBlock('python','<span class="tok-kw">import</span> xgboost <span class="tok-kw">as</span> xgb\n\nmodel = xgb.XGBClassifier(\n    n_estimators=<span class="tok-num">300</span>,\n    max_depth=<span class="tok-num">5</span>,\n    learning_rate=<span class="tok-num">0.05</span>,\n    subsample=<span class="tok-num">0.8</span>,\n    colsample_bytree=<span class="tok-num">0.8</span>,\n    scale_pos_weight=<span class="tok-num">5</span>,  <span class="tok-cmt"># handle class imbalance</span>\n    objective=<span class="tok-str">"binary:logistic"</span>,\n    eval_metric=<span class="tok-str">"auc"</span>,\n    random_state=<span class="tok-num">42</span>\n)\n\n<span class="tok-cmt"># Note: hyperparameters shown are illustrative and</span>\n<span class="tok-cmt"># will be tuned during actual training and validation.</span>')}

<h2 id="class-imbalance">Class Imbalance</h2>
<p>Mastitis events are relatively rare compared to healthy observations, creating a class imbalance. Strategies to address this include:</p>
<ul>
  <li><code>scale_pos_weight</code> — Weights the positive class to compensate for imbalance</li>
  <li>Threshold adjustment — Adjusting the decision threshold based on precision/recall trade-off requirements</li>
  <li>Evaluation on recall — Prioritizing recall (sensitivity) to avoid missing true positive cases</li>
</ul>

<h2 id="model-persistence">Model Persistence</h2>
${codeBlock('python','<span class="tok-cmt"># Save trained model</span>\nmodel.save_model(<span class="tok-str">"zerodrop_mastitis_model.json"</span>)\n\n<span class="tok-cmt"># Load for inference</span>\nloaded_model = xgb.XGBClassifier()\nloaded_model.load_model(<span class="tok-str">"zerodrop_mastitis_model.json"</span>)')}
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

${callout('note','API Status','The Zero Drop REST API is part of the active development platform. Endpoints marked <span class="badge badge-planned">Planned</span> are designed but not yet fully implemented in the current prototype.')}

<h2 id="obtaining-tokens">Obtaining Tokens</h2>

<div class="endpoint-block">
  <span class="badge badge-post">POST</span>
  <span class="endpoint-path">/api/v1/auth/token/</span>
</div>

<p>Exchange credentials for access and refresh tokens:</p>

${codeBlock('json','<span class="tok-cmt">// Request body</span>\n{\n  <span class="tok-key">"username"</span>: <span class="tok-str">"farmer@example.com"</span>,\n  <span class="tok-key">"password"</span>: <span class="tok-str">"your-password"</span>\n}')}
${codeBlock('json','<span class="tok-cmt">// Response</span>\n{\n  <span class="tok-key">"access"</span>: <span class="tok-str">"eyJhbGciOiJIUzI1NiIs..."</span>,\n  <span class="tok-key">"refresh"</span>: <span class="tok-str">"eyJhbGciOiJIUzI1NiIs..."</span>\n}')}

<h2 id="using-tokens">Using Tokens</h2>
<p>Include the access token in the <code>Authorization</code> header of every protected request:</p>

${codeBlock('bash','curl -X GET https://api.zerodrop.example/api/v1/animals/ \\\n  -H <span class="tok-str">"Authorization: Bearer &lt;access_token&gt;"</span>')}

<h2 id="refresh">Refreshing Tokens</h2>

<div class="endpoint-block">
  <span class="badge badge-post">POST</span>
  <span class="endpoint-path">/api/v1/auth/token/refresh/</span>
</div>

${codeBlock('json','{\n  <span class="tok-key">"refresh"</span>: <span class="tok-str">"eyJhbGciOiJIUzI1NiIs..."</span>\n}')}

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

${codeBlock('json','<span class="tok-cmt">// Request</span>\n{\n  <span class="tok-key">"animal_id"</span>: <span class="tok-str">"ZD-104"</span>,\n  <span class="tok-key">"temperature"</span>: <span class="tok-num">39.5</span>,\n  <span class="tok-key">"rumination_minutes"</span>: <span class="tok-num">280</span>,\n  <span class="tok-key">"activity_level"</span>: <span class="tok-num">0.65</span>,\n  <span class="tok-key">"milk_yield"</span>: <span class="tok-num">12.5</span>,\n  <span class="tok-key">"milk_conductivity"</span>: <span class="tok-num">6.8</span>\n}')}

${codeBlock('json','<span class="tok-cmt">// Response 201 Created</span>\n{\n  <span class="tok-key">"id"</span>: <span class="tok-str">"pred_a1b2c3d4"</span>,\n  <span class="tok-key">"animal_id"</span>: <span class="tok-str">"ZD-104"</span>,\n  <span class="tok-key">"risk_score"</span>: <span class="tok-num">87</span>,\n  <span class="tok-key">"risk_level"</span>: <span class="tok-str">"HIGH"</span>,\n  <span class="tok-key">"prediction_window"</span>: <span class="tok-str">"7-14 days"</span>,\n  <span class="tok-key">"contributing_factors"</span>: [\n    { <span class="tok-key">"feature"</span>: <span class="tok-str">"milk_conductivity"</span>, <span class="tok-key">"shap_value"</span>: <span class="tok-num">0.31</span>, <span class="tok-key">"direction"</span>: <span class="tok-str">"positive"</span> },\n    { <span class="tok-key">"feature"</span>: <span class="tok-str">"temperature_trend"</span>, <span class="tok-key">"shap_value"</span>: <span class="tok-num">0.22</span>, <span class="tok-key">"direction"</span>: <span class="tok-str">"positive"</span> },\n    { <span class="tok-key">"feature"</span>: <span class="tok-str">"rumination_change"</span>, <span class="tok-key">"shap_value"</span>: <span class="tok-num">-0.19</span>, <span class="tok-key">"direction"</span>: <span class="tok-str">"negative"</span> }\n  ],\n  <span class="tok-key">"recommendation"</span>: <span class="tok-str">"Perform manual inspection. Contact veterinary professional if abnormalities are confirmed."</span>,\n  <span class="tok-key">"generated_at"</span>: <span class="tok-str">"2026-09-20T00:05:00Z"</span>\n}')}

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

${codeBlock('json','<span class="tok-cmt">// Response 200 OK</span>\n{\n  <span class="tok-key">"count"</span>: <span class="tok-num">142</span>,\n  <span class="tok-key">"next"</span>: <span class="tok-str">"https://api.zerodrop.example/api/v1/animals/?page=2"</span>,\n  <span class="tok-key">"results"</span>: [\n    {\n      <span class="tok-key">"animal_id"</span>: <span class="tok-str">"ZD-104"</span>,\n      <span class="tok-key">"breed"</span>: <span class="tok-str">"HF Cross"</span>,\n      <span class="tok-key">"age_months"</span>: <span class="tok-num">51</span>,\n      <span class="tok-key">"lactation_stage"</span>: <span class="tok-str">"EARLY"</span>,\n      <span class="tok-key">"health_status"</span>: <span class="tok-str">"HIGH_RISK"</span>,\n      <span class="tok-key">"latest_risk_score"</span>: <span class="tok-num">87</span>\n    }\n  ]\n}')}

<h2 id="create-animal">Create Animal</h2>
<div class="endpoint-block"><span class="badge badge-post">POST</span><span class="endpoint-path">/api/v1/animals/</span></div>

${codeBlock('json','{\n  <span class="tok-key">"animal_id"</span>: <span class="tok-str">"ZD-150"</span>,\n  <span class="tok-key">"breed"</span>: <span class="tok-str">"Gir"</span>,\n  <span class="tok-key">"date_of_birth"</span>: <span class="tok-str">"2022-03-15"</span>,\n  <span class="tok-key">"lactation_number"</span>: <span class="tok-num">1</span>,\n  <span class="tok-key">"calving_date"</span>: <span class="tok-str">"2026-08-01"</span>\n}')}

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

${callout('note','Conceptual Data Model','The fields below describe the conceptual data model. Actual database schema fields and types may differ from the current implementation. This documentation describes design intent.')}

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

${callout('note','Conceptual Data Model','This is the conceptual data model for the RiskAssessment entity. Actual implementation fields may vary.')}

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
${faqItem('What is Zero Drop?','Zero Drop is an AI-powered dairy health monitoring platform designed to provide early identification of bovine mastitis risk. It combines IoT sensor data, milk quality measurements, farm records and AI/ML models to estimate the probability of mastitis in individual animals — aiming to give farmers and veterinary professionals earlier warning to act preventively.')}
${faqItem('What problem does Zero Drop solve?','Mastitis is one of the most economically costly diseases in dairy farming, largely because early (subclinical) stages produce no visible symptoms. Zero Drop aims to detect rising risk signals before clinical signs appear, giving farmers a window to inspect animals and involve veterinary professionals earlier.')}
${faqItem('What is mastitis?','Mastitis is inflammation of the udder (mammary gland), most commonly caused by bacterial infection. It reduces milk yield, affects milk quality, causes animal discomfort and imposes significant financial costs. Subclinical mastitis — the pre-symptomatic stage — is particularly challenging to detect without monitoring tools or regular SCC testing.')}
${faqItem('What data does Zero Drop use?','Zero Drop combines: smart neck belt sensor data (temperature, activity, rumination, GPS), milk quality measurements (conductivity, yield, SCC), animal health history (prior disease events, lactation stage, parity), farm management records and environmental data.')}
${faqItem('How early does Zero Drop aim to forecast risk?','The target forecasting objective is 7–14 days before visible clinical signs of mastitis. This is the intended design goal for the prototype. Actual forecasting capability depends on field validation with real data and will be evaluated in controlled studies.')}
${faqItem('Is Zero Drop a veterinary diagnostic system?','No. Zero Drop is a predictive monitoring tool that generates risk assessments from data patterns. It does not diagnose disease, prescribe treatment or replace clinical examination by a qualified veterinary professional. Alerts and recommendations should always be followed up with veterinary assessment when indicated.')}
${faqItem('What is XGBoost used for?','XGBoost (Extreme Gradient Boosting) is the machine learning model used to predict mastitis risk scores from structured farm and sensor data. It analyzes patterns in features like temperature trends, conductivity changes and rumination deviations to estimate the probability of a future mastitis event.')}
${faqItem('Why is SHAP used?','SHAP (SHapley Additive exPlanations) is used to make the XGBoost model explainable. For each prediction, SHAP identifies which specific input features contributed most to the risk score — enabling transparent, interpretable alerts rather than opaque "black box" outputs.')}
${faqItem('What does Gemini do?','Gemini (Google\'s generative AI) is used for the natural-language output layer. It converts structured prediction outputs (risk score + SHAP factors) into plain-language farmer-friendly recommendations and can provide multilingual assistance. Gemini does not perform the risk prediction — that is handled entirely by XGBoost.')}
${faqItem('Does Zero Drop require IoT hardware?','The smart neck belt hardware enhances the system significantly by providing continuous sensor data. However, Zero Drop can also work with manually entered data (milk records, health records, observations) where sensor hardware is not yet deployed. IoT hardware availability will affect the quality of predictions.')}
${faqItem('Can Zero Drop work with existing farm data?','Yes. Zero Drop is designed to ingest data from multiple sources, including manually entered historical records. Where historical health and milk data is available, it can be imported to improve model context and provide trend analysis.')}
${faqItem('Can multiple farms be managed?','Yes. Zero Drop supports a multi-farm structure. Farm Admins can manage animals across one or more farms. Super Admins have platform-wide access. Each farm\'s data is isolated for access control purposes.')}
${faqItem('Does the system support mobile?','Yes. Zero Drop includes a React Native + Expo mobile application for iOS and Android. The mobile app provides access to the dashboard, animal profiles, alerts, recommendations and the QR-based animal scan/identification feature.')}
${faqItem('How does the alert system work?','When the prediction model identifies a risk score that crosses a configured threshold, an alert is generated for the animal. The alert includes the risk level, top contributing factors, timestamp and recommended action. Alerts are delivered through the web dashboard and mobile push notifications.')}
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
${glossItem('Mastitis','Inflammation of the udder (mammary gland) in dairy cattle, typically caused by bacterial infection. Reduces milk yield and quality and causes animal discomfort.')}
${glossItem('Subclinical Mastitis','Early-stage mastitis where no visible external signs are present (no swelling, heat or visible milk changes). Detectable through elevated SCC or conductivity measurements.')}
${glossItem('Clinical Mastitis','Advanced mastitis with visible signs including udder swelling, heat, pain, redness and obvious changes in milk appearance (clots, watery, blood).')}
${glossItem('SCC','Somatic Cell Count — the number of somatic (immune) cells per millilitre of milk. A key indicator of udder health. Elevated SCC suggests an immune response to infection.')}
${glossItem('Somatic Cell Count','See SCC. Values above 200,000 cells/mL are generally associated with subclinical infection, though thresholds vary by species and system.')}
${glossItem('Milk Conductivity','Electrical conductivity of milk (measured in mS/cm). Elevated conductivity indicates higher ion concentration, associated with udder inflammation and mastitis.')}
${glossItem('IoT','Internet of Things — a network of physical devices embedded with sensors, software and connectivity, enabling them to collect and exchange data. Zero Drop uses IoT devices (smart belts, milk sensors) to capture animal and farm data.')}
${glossItem('BLE','Bluetooth Low Energy — a wireless communication technology designed for short-range, low-power data exchange. Used in Zero Drop for belt configuration and nearby device communication.')}
${glossItem('LoRaWAN','Long Range Wide Area Network — a low-power, long-range wireless protocol suitable for rural and agricultural environments. Used to transmit smart belt data to the edge gateway across farm distances.')}
${glossItem('NB-IoT','Narrowband IoT — a cellular IoT standard enabling low-power, wide-area connectivity using existing mobile networks. Provides an alternative connectivity option where LoRaWAN gateway coverage is unavailable.')}
${glossItem('MQTT','Message Queuing Telemetry Transport — a lightweight publish-subscribe messaging protocol commonly used for IoT data transmission. Used to relay sensor data from the edge gateway to the backend.')}
${glossItem('XGBoost','Extreme Gradient Boosting — a highly efficient gradient-boosted decision tree algorithm. Used as the core machine learning model for mastitis risk prediction in Zero Drop.')}
${glossItem('SHAP','SHapley Additive exPlanations — a method for explaining individual machine learning model predictions by attributing a contribution value to each input feature.')}
${glossItem('Machine Learning','A field of artificial intelligence in which statistical models learn patterns from data rather than being explicitly programmed with rules.')}
${glossItem('Risk Score','A numerical score (0–100) generated by the XGBoost model representing estimated mastitis risk. Higher scores indicate greater estimated risk within the prediction window.')}
${glossItem('Risk Classification','The mapping of a continuous risk score to a discrete risk level: No Risk (0–20), Low (21–40), Moderate (41–70), High (71–100). Prototype thresholds subject to validation.')}
${glossItem('Rumination','The process by which cattle regurgitate and re-chew previously ingested feed (cud). Reduced rumination is an indicator of stress, illness or discomfort and is a key model feature.')}
${glossItem('Lactation','The period during which a dairy cow produces milk following calving. Lactation stage (early, mid, late) is an important risk modifier for mastitis.')}
${glossItem('Predictive Modeling','The use of statistical and machine learning models to forecast future events based on historical and current data patterns.')}
${glossItem('Edge Gateway','A device positioned at the edge of the network (e.g. on the farm) that collects data from local sensors and relays it to the cloud or backend. Zero Drop uses a Raspberry Pi 4 as the edge gateway.')}
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

${callout('note','Reference Policy','Only genuine references with verifiable sources are included. Where the Zero Drop team has not verified a specific paper\'s content, it is not included. This page will be updated as the project\'s research base develops.')}

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

${troubleItem('Sensor not transmitting data','Belt powered on but no data appearing in the dashboard','1. Check belt battery level (indicator LED). 2. Confirm the belt is within LoRa gateway range. 3. Verify the edge gateway (Raspberry Pi) is running and connected to the internet. 4. Check the MQTT broker is receiving messages using <code>mosquitto_sub -t "zerodrop/#" -v</code>.')}
${troubleItem('Abnormal sensor readings','Temperature or activity readings appear physiologically impossible','1. Check for sensor hardware damage or cable connections. 2. Verify the belt firmware version is current. 3. Confirm the animal_id — belt may be paired to wrong animal. 4. Check for RF interference near large metal structures.')}

<h2 id="backend">Backend &amp; API</h2>

${troubleItem('Backend unavailable (502 / 503 errors)','API returns 502 or 503 errors','1. Check the Django development server is running: <code>python manage.py runserver</code>. 2. If using production server, check the WSGI/ASGI process (gunicorn/uvicorn) status. 3. Check server resource usage — CPU and memory.')}
${troubleItem('Database connection failure','<code>OperationalError: could not connect to server</code>','1. Confirm PostgreSQL is running: <code>pg_ctl status</code>. 2. Verify DATABASE_URL in your .env file. 3. Check that the database and user exist and permissions are set correctly.')}
${troubleItem('Authentication failure (401)','API returns 401 Unauthorized','1. Check that the Authorization header is present and correctly formatted: <code>Bearer &lt;token&gt;</code>. 2. Verify the token has not expired — access tokens are short-lived. Use the refresh token endpoint to obtain a new access token. 3. Check the JWT_SECRET_KEY in server configuration.')}

<h2 id="predictions">Predictions</h2>

${troubleItem('Prediction unavailable for animal','Risk prediction returns empty or error','1. Verify the animal_id is correctly registered in the system. 2. Check that there is sufficient sensor data for the prediction window — the model requires recent records. 3. Check the ML service logs for errors. 4. Confirm the trained model file is accessible and the correct version is loaded.')}
${troubleItem('No animal data in system','Animal profile shows no records','1. Confirm sensor data is being ingested — check the ingest API endpoint logs. 2. Verify the belt\'s animal_id configuration matches the registered animal_id. 3. Check the data validation rules — records outside valid ranges are rejected.')}

<h2 id="mobile">Mobile App</h2>

${troubleItem('Mobile app not syncing','App shows stale data after offline period','1. Check device internet connectivity. 2. Force-close and reopen the app. 3. Check the API URL configured in the mobile app matches the current backend. 4. Clear the local cache from app settings and re-authenticate.')}
${troubleItem('Push notifications not received','Alerts generated but not delivered to device','1. Check device notification permissions for the app. 2. Verify push notification service configuration (FCM for Android, APNs for iOS). 3. Confirm the device token is registered with the backend. 4. Check backend push notification service logs.')}
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

${callout('note','Prototype Releases','Zero Drop is an active development project. The versions below represent development milestones rather than production releases. Features and timelines are subject to change.')}

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
${codeBlock('bash','<span class="tok-fn">cd</span> zero-drop/mobile\nnpm install\nnpx expo start\n<span class="tok-cmt"># Scan the QR code with Expo Go app on your device</span>')}

<h2 id="production-build">Production Build</h2>
${codeBlock('bash','<span class="tok-cmt"># Build for Android</span>\nnpx expo build:android\n\n<span class="tok-cmt"># Build for iOS (requires Apple Developer account)</span>\nnpx expo build:ios')}

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

${callout('note','Not a Diagnostic Scanner','Scan Animal is an identification and navigation feature. It uses QR/tag codes to identify animals — it is not connected to a mastitis diagnostic scanning device.')}

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

${callout('warning','Offline Limitations','Risk scores and predictions are not computed offline. The mobile app cannot generate new risk assessments without a backend connection. Predictions shown offline are from the last successful sync.')}
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

  'temperature': { title: 'Temperature', category: 'IoT & Hardware', breadcrumb: ['Docs', 'IoT & Hardware', 'Temperature'], prev: {page:'smart-neck-belt',label:'Smart Neck Belt'}, next: {page:'activity',label:'Activity'}, content: () => `<h1 id="temperature">Temperature Sensing</h1><p class="lead">Body temperature monitoring is a key early indicator of illness including mastitis.</p><h2 id="sensor">Sensor</h2><p>Temperature in the milk monitoring unit uses the <strong>DS18B20</strong> digital temperature sensor (milk temperature). Body temperature on the smart neck belt is inferred from combined sensor signals or via a dedicated probe where fitted.</p><h2 id="significance">Clinical Significance</h2><p>Elevated body temperature (fever) is associated with immune system activation in response to infection. Sustained elevation above the individual animal's baseline is a meaningful signal in the risk model.</p><div class="table-wrap"><table class="doc-table"><thead><tr><th>Parameter</th><th>Normal Range (Indicative)</th><th>Unit</th></tr></thead><tbody><tr><td>Bovine Body Temperature</td><td>38.0 – 39.5°C</td><td>°C</td></tr><tr><td>Milk Temperature at Collection</td><td>Ambient – 40°C</td><td>°C</td></tr></tbody></table></div>${callout('warning','Reference Only','Temperature ranges shown are indicative veterinary reference values for educational context. Zero Drop uses per-animal baselines in its model, not static reference thresholds.')}` },

  'activity': { title: 'Activity', category: 'IoT & Hardware', breadcrumb: ['Docs', 'IoT & Hardware', 'Activity'], prev: {page:'temperature',label:'Temperature'}, next: {page:'rumination',label:'Rumination'}, content: () => `<h1 id="activity">Activity Sensing</h1><p class="lead">Activity level monitoring captures changes in animal movement patterns, which are sensitive indicators of health and wellbeing.</p><h2 id="sensor">Sensor</h2><p>The <strong>BNO055</strong> 9-axis IMU sensor in the smart neck belt captures accelerometer and gyroscope data. Raw IMU data is processed by the firmware to compute an activity index.</p><h2 id="features">Model Features</h2><ul><li><code>activity_index</code> — Normalized activity score (0.0–1.0) derived from accelerometer data</li><li><code>activity_deviation</code> — Deviation from the animal's recent activity baseline</li><li><code>activity_trend</code> — Direction and magnitude of activity change over recent days</li></ul><h2 id="clinical">Clinical Significance</h2><p>Reduced activity is associated with pain, illness and stress. Animals with mastitis often show reduced movement. Combining activity changes with other signals (temperature, rumination) improves prediction reliability.</p>` },

  'rumination': { title: 'Rumination', category: 'IoT & Hardware', breadcrumb: ['Docs', 'IoT & Hardware', 'Rumination'], prev: {page:'activity',label:'Activity'}, next: {page:'milk-conductivity',label:'Milk Conductivity'}, content: () => `<h1 id="rumination">Rumination Sensing</h1><p class="lead">Rumination monitoring captures the time cattle spend re-chewing cud, a highly sensitive indicator of animal wellbeing and health status.</p><h2 id="sensor">Sensor</h2><p>A <strong>piezoelectric sensor</strong> on the neck belt detects jaw movements associated with rumination. The firmware classifies motion patterns to estimate daily rumination minutes.</p><h2 id="normal-range">Normal Range</h2><p>Healthy dairy cattle typically ruminate for <strong>400–550 minutes per day</strong>, though this varies by individual, feed type and lactation stage.</p><h2 id="significance">Clinical Significance</h2><p>Rumination is highly sensitive to stress, pain and illness. Animals experiencing discomfort due to mastitis, metabolic disorders or other health issues often show a significant reduction in rumination time before other visible symptoms appear. This makes it a valuable early-warning signal.</p>` },

  'milk-conductivity': { title: 'Milk Conductivity', category: 'IoT & Hardware', breadcrumb: ['Docs', 'IoT & Hardware', 'Milk Conductivity'], prev: {page:'rumination',label:'Rumination'}, next: {page:'gps',label:'GPS'}, content: () => `<h1 id="milk-conductivity">Milk Conductivity</h1><p class="lead">Electrical conductivity of milk is one of the most studied early indicators of bovine mastitis.</p><h2 id="how-it-works">How It Works</h2><p>When the udder is inflamed, ion concentrations in milk change — sodium and chloride increase, while potassium and lactose decrease. This altered ionic composition leads to increased electrical conductivity, measurable with an EC (electrical conductivity) probe.</p><h2 id="hardware">Hardware</h2><div class="table-wrap"><table class="doc-table"><thead><tr><th>Component</th><th>Purpose</th></tr></thead><tbody><tr><td>EC Probe</td><td>Measures electrical conductivity in mS/cm</td></tr><tr><td>ADS1115 ADC</td><td>High-resolution analog-to-digital conversion</td></tr><tr><td>ESP32 MCU</td><td>Data acquisition, Wi-Fi transmission</td></tr></tbody></table></div><h2 id="ranges">Conductivity Ranges (Indicative)</h2><p>Normal milk conductivity is typically in the range of <strong>4.0 – 6.0 mS/cm</strong>. Values consistently above the animal's individual baseline are flagged as a potential indicator of elevated udder inflammation.</p>${callout('note','Per-Animal Baselines','Zero Drop uses per-animal baseline conductivity rather than population reference values, as individual variation is significant.')}` },

  'gps': { title: 'GPS', category: 'IoT & Hardware', breadcrumb: ['Docs', 'IoT & Hardware', 'GPS'], prev: {page:'milk-conductivity',label:'Milk Conductivity'}, next: {page:'esp32',label:'ESP32'}, content: () => `<h1 id="gps">GPS Location</h1><p class="lead">GPS location tracking allows farm operators to visualize animal positions and integrate location data with health risk information.</p><h2 id="hardware">Hardware</h2><p>The smart neck belt includes a compact GPS module compatible with standard u-blox GNSS receivers. Location is sampled at a configurable interval (default: every 30 minutes) to balance location accuracy with battery consumption.</p><h2 id="use-cases">Use Cases</h2><ul><li><strong>Farm Risk Map</strong> — Plot animal positions with risk-level colour coding</li><li><strong>Zone detection</strong> — Identify which shed, pasture or zone an animal is in</li><li><strong>Geofence alerts</strong> — Alert if an animal leaves a configured zone <span class="inline-note">Planned</span></li></ul><h2 id="privacy">Data Handling</h2><p>GPS coordinates are stored as part of the sensor record and are accessible to authorized farm users only. Location data is not shared externally.</p>` },

  'esp32': { title: 'ESP32', category: 'IoT & Hardware', breadcrumb: ['Docs', 'IoT & Hardware', 'ESP32'], prev: {page:'gps',label:'GPS'}, next: {page:'nrf52840',label:'nRF52840'}, content: () => `<h1 id="esp32">ESP32</h1><p class="lead">The ESP32 is the microcontroller unit used in the Zero Drop milk monitoring station.</p><h2 id="role">Role in Zero Drop</h2><p>The ESP32 manages data acquisition from the milk monitoring sensors at each milking station — reading conductivity from EC probes via the ADS1115 ADC, milk temperature from the DS18B20, and flow rate from the YF-S201 sensor. Data is transmitted to the backend via Wi-Fi using HTTPS REST API calls.</p><h2 id="specs">Relevant Specifications</h2><div class="table-wrap"><table class="doc-table"><thead><tr><th>Feature</th><th>Value</th></tr></thead><tbody><tr><td>Processor</td><td>Xtensa dual-core LX6</td></tr><tr><td>Clock Speed</td><td>Up to 240 MHz</td></tr><tr><td>Connectivity</td><td>Wi-Fi 802.11 b/g/n, Bluetooth 4.2 / BLE</td></tr><tr><td>GPIO</td><td>34+ pins</td></tr><tr><td>ADC</td><td>12-bit (supplemented by external ADS1115 for EC probes)</td></tr></tbody></table></div>` },

  'nrf52840': { title: 'nRF52840', category: 'IoT & Hardware', breadcrumb: ['Docs', 'IoT & Hardware', 'nRF52840'], prev: {page:'esp32',label:'ESP32'}, next: {page:'communication',label:'Communication'}, content: () => `<h1 id="nrf52840">nRF52840</h1><p class="lead">The nRF52840 from Nordic Semiconductor is the main microcontroller on the Zero Drop smart neck belt.</p><h2 id="role">Role in Zero Drop</h2><p>The nRF52840 coordinates all data acquisition on the smart neck belt — reading the BNO055 IMU, processing piezoelectric rumination signals, managing the LoRa radio module for long-range transmission and handling BLE for nearby device configuration and firmware updates.</p><h2 id="specs">Relevant Specifications</h2><div class="table-wrap"><table class="doc-table"><thead><tr><th>Feature</th><th>Value</th></tr></thead><tbody><tr><td>Processor</td><td>ARM Cortex-M4F @ 64 MHz</td></tr><tr><td>Flash</td><td>1 MB</td></tr><tr><td>RAM</td><td>256 KB</td></tr><tr><td>Connectivity</td><td>Bluetooth 5.0 / BLE, IEEE 802.15.4, NFC</td></tr><tr><td>I/O</td><td>48 GPIO, SPI, I2C, UART, PDM, PWM</td></tr><tr><td>Power</td><td>Ultra-low power operating modes</td></tr></tbody></table></div><h2 id="firmware">Firmware Development</h2><p>Belt firmware is developed using the Nordic nRF5 SDK or Zephyr RTOS. BLE communication is used for initial provisioning, pairing an belt to an animal_id and firmware OTA updates.</p>` },

  'communication': { title: 'Communication', category: 'IoT & Hardware', breadcrumb: ['Docs', 'IoT & Hardware', 'Communication'], prev: {page:'nrf52840',label:'nRF52840'}, next: {page:'system-architecture',label:'System Architecture'}, content: () => `<h1 id="communication">Communication</h1><p class="lead">Zero Drop supports multiple communication protocols to accommodate diverse farm connectivity environments across India.</p><h2 id="protocols">Supported Protocols</h2><div class="table-wrap"><table class="doc-table"><thead><tr><th>Protocol</th><th>Range</th><th>Power</th><th>Use Case</th></tr></thead><tbody><tr><td><strong>LoRaWAN</strong></td><td>1–15 km rural</td><td>Very Low</td><td>Primary belt-to-gateway link</td></tr><tr><td><strong>BLE</strong></td><td>10–50 m</td><td>Low</td><td>Belt configuration, firmware updates</td></tr><tr><td><strong>NB-IoT</strong></td><td>Cellular</td><td>Low</td><td>Cellular backup where LoRa unavailable</td></tr><tr><td><strong>4G / LTE</strong></td><td>Cellular</td><td>Medium</td><td>Gateway-to-cloud when broadband unavailable</td></tr><tr><td><strong>Wi-Fi</strong></td><td>Local</td><td>Medium</td><td>ESP32 milk monitor, gateway with LAN</td></tr><tr><td><strong>MQTT</strong></td><td>Application layer</td><td>—</td><td>IoT data messaging protocol</td></tr><tr><td><strong>HTTPS REST</strong></td><td>Application layer</td><td>—</td><td>API communication, milk monitor to backend</td></tr></tbody></table></div><h2 id="data-flow">Communication Data Flow</h2><p>Belt → LoRa → Raspberry Pi 4 Gateway → MQTT → Backend API → PostgreSQL → AI/ML Pipeline</p>` },

  /* ─── REMAINING ARCHITECTURE PAGES ───────────── */
  'data-flow': { title: 'Data Flow', category: 'Architecture', breadcrumb: ['Docs', 'Architecture', 'Data Flow'], prev: {page:'system-architecture',label:'System Architecture'}, next: {page:'software-architecture',label:'Software Architecture'}, content: () => `<h1 id="data-flow">Data Flow</h1><p class="lead">End-to-end data flow from animal sensors to farmer-facing alerts and recommendations.</p><h2 id="flow">End-to-End Flow</h2>${workflowDiagram([['Data Collection','Smart belt captures temperature, activity, rumination every 15–60 min. Milk monitor captures conductivity and yield at each milking session.'],['Edge Processing','Raspberry Pi 4 receives LoRa transmissions, buffers data, forwards via MQTT or HTTPS to backend. Basic validation at edge.'],['API Ingestion','Django backend receives sensor records, validates against schema and range rules, stores to PostgreSQL.'],['Feature Computation','Scheduled job computes rolling features (trends, deviations, context) for each animal from stored records.'],['Prediction Run','XGBoost model loaded, feature vectors assembled, risk scores computed for all animals.'],['SHAP Analysis','SHAP TreeExplainer computes feature attributions for each prediction. Top factors stored with result.'],['Alert Generation','Animals crossing risk thresholds generate Alert records. Notification service delivers push alerts.'],['Recommendation','Gemini API called with risk + SHAP factors to generate plain-language recommendation.'],['Dashboard Sync','Updated risk scores, alerts and recommendations available via REST API to web and mobile clients.']])}` },

  'software-architecture': { title: 'Software Architecture', category: 'Architecture', breadcrumb: ['Docs', 'Architecture', 'Software Architecture'], prev: {page:'data-flow',label:'Data Flow'}, next: {page:'hardware-architecture',label:'Hardware Architecture'}, content: () => `<h1 id="software-architecture">Software Architecture</h1><p class="lead">Zero Drop's software is organized as a decoupled, API-first architecture with separate frontend, backend and ML service layers.</p><h2 id="layers">Software Layers</h2><div class="table-wrap"><table class="doc-table"><thead><tr><th>Layer</th><th>Technology</th><th>Responsibility</th></tr></thead><tbody><tr><td>Web Frontend</td><td>React, TypeScript, Vite</td><td>User interface, dashboard, charts, forms</td></tr><tr><td>Mobile Frontend</td><td>React Native, Expo</td><td>Mobile dashboard, alerts, animal profiles</td></tr><tr><td>Backend API</td><td>Python, Django, DRF</td><td>Authentication, REST API, business logic, data access</td></tr><tr><td>Database</td><td>PostgreSQL</td><td>Primary persistent data storage</td></tr><tr><td>ML Service</td><td>Python, XGBoost, SHAP, scikit-learn</td><td>Feature engineering, model training, inference</td></tr><tr><td>Generative AI</td><td>Google Gemini API</td><td>Natural language recommendation generation</td></tr></tbody></table></div><h2 id="api-design">API Design Principles</h2><ul><li>RESTful resource-based endpoints</li><li>JWT authentication on all protected routes</li><li>Consistent JSON response structure</li><li>Pagination for list endpoints</li><li>Semantic HTTP status codes</li><li>API versioning via URL prefix (<code>/api/v1/</code>)</li></ul>` },

  'hardware-architecture': { title: 'Hardware Architecture', category: 'Architecture', breadcrumb: ['Docs', 'Architecture', 'Hardware Architecture'], prev: {page:'software-architecture',label:'Software Architecture'}, next: {page:'ai-architecture',label:'AI Architecture'}, content: () => `<h1 id="hardware-architecture">Hardware Architecture</h1><p class="lead">Physical hardware layers from animal-worn sensors through to the cloud backend.</p><h2 id="layers">Hardware Layers</h2><div class="arch-diagram"><div class="arch-layer"><div class="arch-layer-label">Animal Layer</div><div class="arch-nodes"><div class="arch-node primary">Smart Neck Belt</div><div class="arch-node primary">BNO055 IMU</div><div class="arch-node primary">Piezo Rumination</div><div class="arch-node primary">GPS</div></div></div><div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div><div class="arch-layer"><div class="arch-layer-label">Milk Station Layer</div><div class="arch-nodes"><div class="arch-node">EC Probe</div><div class="arch-node">DS18B20 Temp</div><div class="arch-node">YF-S201 Flow</div><div class="arch-node">ADS1115 ADC</div><div class="arch-node">ESP32</div></div></div><div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div><div class="arch-layer"><div class="arch-layer-label">Edge Layer</div><div class="arch-nodes"><div class="arch-node primary">Raspberry Pi 4 Gateway</div><div class="arch-node">LoRa Receiver</div><div class="arch-node">MQTT Broker (local)</div></div></div><div class="arch-arrow-down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div><div class="arch-layer"><div class="arch-layer-label">Cloud / Backend</div><div class="arch-nodes"><div class="arch-node">Django API Server</div><div class="arch-node">PostgreSQL</div><div class="arch-node">ML Service</div></div></div></div>` },

  'ai-architecture': { title: 'AI Architecture', category: 'Architecture', breadcrumb: ['Docs', 'Architecture', 'AI Architecture'], prev: {page:'hardware-architecture',label:'Hardware Architecture'}, next: {page:'api-authentication',label:'Authentication'}, content: () => `<h1 id="ai-architecture">AI Architecture</h1><p class="lead">The AI/ML subsystem architecture covering data ingestion, feature engineering, prediction and the natural-language output layer.</p><h2 id="components">AI Components</h2><div class="table-wrap"><table class="doc-table"><thead><tr><th>Component</th><th>Technology</th><th>Purpose</th></tr></thead><tbody><tr><td>Data Preprocessor</td><td>Pandas, NumPy</td><td>Validation, cleaning, normalization, alignment</td></tr><tr><td>Feature Engineer</td><td>Pandas, scikit-learn</td><td>Rolling stats, deviation features, context features</td></tr><tr><td>Risk Model</td><td>XGBoost</td><td>Binary classification — mastitis risk probability</td></tr><tr><td>Explainer</td><td>SHAP TreeExplainer</td><td>Feature attribution for each prediction</td></tr><tr><td>Language Layer</td><td>Google Gemini API</td><td>Natural language recommendation generation</td></tr><tr><td>Model Registry</td><td>File / model store</td><td>Versioned model artifacts</td></tr></tbody></table></div><h2 id="training-vs-inference">Training vs Inference</h2><p>Model training is performed as an offline batch process using historical data. Trained model artifacts are versioned and deployed to the inference service. The inference pipeline runs on demand (per prediction request) or on a scheduled basis for batch herd-level scoring.</p>` },

  /* ─── REMAINING API PAGES ─────────────────────── */
  'api-health-records': { title: 'Health Records API', category: 'API Reference', breadcrumb: ['Docs', 'API Reference', 'Health Records'], prev: {page:'api-animals',label:'Animals'}, next: {page:'api-sensor-data',label:'Sensor Data'}, content: () => `<h1 id="api-health-records">Health Records</h1><p class="lead">Log and retrieve animal health events.</p><h2 id="list">List Health Records</h2><div class="endpoint-block"><span class="badge badge-get">GET</span><span class="endpoint-path">/api/v1/health-records/?animal_id=ZD-104</span></div><h2 id="create">Create Health Record</h2><div class="endpoint-block"><span class="badge badge-post">POST</span><span class="endpoint-path">/api/v1/health-records/</span></div>${codeBlock('json','{\n  <span class="tok-key">"animal_id"</span>: <span class="tok-str">"ZD-104"</span>,\n  <span class="tok-key">"event_type"</span>: <span class="tok-str">"VETERINARY_EXAMINATION"</span>,\n  <span class="tok-key">"date"</span>: <span class="tok-str">"2026-09-20"</span>,\n  <span class="tok-key">"notes"</span>: <span class="tok-str">"Routine inspection following alert."</span>,\n  <span class="tok-key">"outcome"</span>: <span class="tok-str">"No clinical signs observed."</span>\n}')}` },

  'api-sensor-data': { title: 'Sensor Data API', category: 'API Reference', breadcrumb: ['Docs', 'API Reference', 'Sensor Data'], prev: {page:'api-health-records',label:'Health Records'}, next: {page:'api-milk-records',label:'Milk Records'}, content: () => `<h1 id="api-sensor-data">Sensor Data</h1><p class="lead">Ingest and retrieve smart belt sensor records.</p><h2 id="ingest">Ingest Sensor Record</h2><div class="endpoint-block"><span class="badge badge-post">POST</span><span class="endpoint-path">/api/v1/sensor-data/</span></div>${codeBlock('json','{\n  <span class="tok-key">"belt_id"</span>: <span class="tok-str">"ZDB-2291"</span>,\n  <span class="tok-key">"animal_id"</span>: <span class="tok-str">"ZD-104"</span>,\n  <span class="tok-key">"timestamp"</span>: <span class="tok-str">"2026-09-20T00:00:00Z"</span>,\n  <span class="tok-key">"temperature_c"</span>: <span class="tok-num">39.2</span>,\n  <span class="tok-key">"activity_index"</span>: <span class="tok-num">0.61</span>,\n  <span class="tok-key">"rumination_min"</span>: <span class="tok-num">38</span>,\n  <span class="tok-key">"gps_lat"</span>: <span class="tok-num">18.5204</span>,\n  <span class="tok-key">"gps_lon"</span>: <span class="tok-num">73.8567</span>\n}')}<h2 id="query">Query Sensor Data</h2><div class="endpoint-block"><span class="badge badge-get">GET</span><span class="endpoint-path">/api/v1/sensor-data/?animal_id=ZD-104&date_from=2026-09-14</span></div>` },

  'api-milk-records': { title: 'Milk Records API', category: 'API Reference', breadcrumb: ['Docs', 'API Reference', 'Milk Records'], prev: {page:'api-sensor-data',label:'Sensor Data'}, next: {page:'api-predictions',label:'Risk Prediction'}, content: () => `<h1 id="api-milk-records">Milk Records</h1><p class="lead">Log and retrieve milk quality and yield records.</p><h2 id="create">Create Milk Record</h2><div class="endpoint-block"><span class="badge badge-post">POST</span><span class="endpoint-path">/api/v1/milk-records/</span></div>${codeBlock('json','{\n  <span class="tok-key">"animal_id"</span>: <span class="tok-str">"ZD-104"</span>,\n  <span class="tok-key">"timestamp"</span>: <span class="tok-str">"2026-09-20T06:30:00Z"</span>,\n  <span class="tok-key">"milk_yield_litres"</span>: <span class="tok-num">12.5</span>,\n  <span class="tok-key">"conductivity_ms"</span>: <span class="tok-num">6.8</span>,\n  <span class="tok-key">"temperature_c"</span>: <span class="tok-num">37.1</span>,\n  <span class="tok-key">"scc_thousands"</span>: <span class="tok-num">320</span>\n}')}<h2 id="list">List Milk Records</h2><div class="endpoint-block"><span class="badge badge-get">GET</span><span class="endpoint-path">/api/v1/milk-records/?animal_id=ZD-104</span></div>` },

  'api-alerts': { title: 'Alerts API', category: 'API Reference', breadcrumb: ['Docs', 'API Reference', 'Alerts'], prev: {page:'api-predictions',label:'Risk Prediction'}, next: {page:'api-recommendations',label:'Recommendations'}, content: () => `<h1 id="api-alerts">Alerts</h1><p class="lead">Retrieve and manage risk alerts.</p><h2 id="list">List Alerts</h2><div class="endpoint-block"><span class="badge badge-get">GET</span><span class="endpoint-path">/api/v1/alerts/?status=NEW</span></div><h2 id="acknowledge">Acknowledge Alert</h2><div class="endpoint-block"><span class="badge badge-patch">PATCH</span><span class="endpoint-path">/api/v1/alerts/{alert_id}/</span></div>${codeBlock('json','{ <span class="tok-key">"status"</span>: <span class="tok-str">"ACKNOWLEDGED"</span> }')}<h2 id="resolve">Resolve Alert</h2><div class="endpoint-block"><span class="badge badge-patch">PATCH</span><span class="endpoint-path">/api/v1/alerts/{alert_id}/</span></div>${codeBlock('json','{ <span class="tok-key">"status"</span>: <span class="tok-str">"RESOLVED"</span>, <span class="tok-key">"resolution_notes"</span>: <span class="tok-str">"Veterinary examination completed — no clinical mastitis confirmed."</span> }')}` },

  'api-recommendations': { title: 'Recommendations API', category: 'API Reference', breadcrumb: ['Docs', 'API Reference', 'Recommendations'], prev: {page:'api-alerts',label:'Alerts'}, next: {page:'api-reports',label:'Reports'}, content: () => `<h1 id="api-recommendations">Recommendations</h1><p class="lead">Retrieve AI-generated recommendations.</p><h2 id="list">List Recommendations</h2><div class="endpoint-block"><span class="badge badge-get">GET</span><span class="endpoint-path">/api/v1/recommendations/?animal_id=ZD-104</span></div>${codeBlock('json','<span class="tok-cmt">// Response 200 OK</span>\n{\n  <span class="tok-key">"results"</span>: [\n    {\n      <span class="tok-key">"id"</span>: <span class="tok-str">"rec_x1y2z3"</span>,\n      <span class="tok-key">"animal_id"</span>: <span class="tok-str">"ZD-104"</span>,\n      <span class="tok-key">"risk_level"</span>: <span class="tok-str">"HIGH"</span>,\n      <span class="tok-key">"recommendation_text"</span>: <span class="tok-str">"Perform manual inspection..."</span>,\n      <span class="tok-key">"priority"</span>: <span class="tok-str">"HIGH"</span>,\n      <span class="tok-key">"status"</span>: <span class="tok-str">"NEW"</span>,\n      <span class="tok-key">"created_at"</span>: <span class="tok-str">"2026-09-20T00:05:00Z"</span>\n    }\n  ]\n}')}` },

  'api-reports': { title: 'Reports API', category: 'API Reference', breadcrumb: ['Docs', 'API Reference', 'Reports'], prev: {page:'api-recommendations',label:'Recommendations'}, next: {page:'model-animal',label:'Animal'}, content: () => `<h1 id="api-reports">Reports</h1><p class="lead">Generate and retrieve farm reports.</p><h2 id="herd-summary">Herd Summary Report</h2><div class="endpoint-block"><span class="badge badge-post">POST</span><span class="endpoint-path">/api/v1/reports/herd-summary/</span></div>${codeBlock('json','{\n  <span class="tok-key">"date_from"</span>: <span class="tok-str">"2026-09-01"</span>,\n  <span class="tok-key">"date_to"</span>: <span class="tok-str">"2026-09-20"</span>,\n  <span class="tok-key">"format"</span>: <span class="tok-str">"json"</span>\n}')}<h2 id="animal-risk-history">Animal Risk History</h2><div class="endpoint-block"><span class="badge badge-get">GET</span><span class="endpoint-path">/api/v1/reports/animal-risk/?animal_id=ZD-104</span></div>` },

  /* ─── REMAINING DATA MODEL PAGES ─────────────── */
  'model-health-record': { title: 'Health Record', category: 'Data Model', breadcrumb: ['Docs', 'Data Model', 'Health Record'], prev: {page:'model-animal',label:'Animal'}, next: {page:'model-sensor-record',label:'Sensor Record'}, content: () => `<h1 id="model-health-record">Health Record</h1><p class="lead">Represents a health event logged for an animal.</p>${callout('note','Conceptual Data Model','This is the conceptual data model. Actual database fields may differ.')}<div class="prop-block"><div class="prop-header"><div class="prop-class-name">HealthRecord</div><div class="prop-class-desc">A health event for a dairy animal</div></div><div class="prop-row"><div class="prop-name">id</div><div class="prop-type">UUID</div><span class="prop-required prop-opt">Auto</span><div class="prop-desc">Unique record identifier.</div></div><div class="prop-row"><div class="prop-name">animal_id</div><div class="prop-type">string</div><span class="prop-required prop-req">Required</span><div class="prop-desc">Animal this record refers to.</div></div><div class="prop-row"><div class="prop-name">event_type</div><div class="prop-type">enum</div><span class="prop-required prop-req">Required</span><div class="prop-desc">VETERINARY_EXAMINATION | DIAGNOSIS | TREATMENT | VACCINATION | CALVING | DRY_OFF | OTHER</div></div><div class="prop-row"><div class="prop-name">date</div><div class="prop-type">date</div><span class="prop-required prop-req">Required</span><div class="prop-desc">Date of the health event (ISO 8601).</div></div><div class="prop-row"><div class="prop-name">notes</div><div class="prop-type">text</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Narrative notes about the event.</div></div><div class="prop-row"><div class="prop-name">outcome</div><div class="prop-type">text</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Documented outcome or follow-up.</div></div><div class="prop-row"><div class="prop-name">recorded_by</div><div class="prop-type">string</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">User ID of the person who logged the record.</div></div></div>` },

  'model-sensor-record': { title: 'Sensor Record', category: 'Data Model', breadcrumb: ['Docs', 'Data Model', 'Sensor Record'], prev: {page:'model-health-record',label:'Health Record'}, next: {page:'model-milk-record',label:'Milk Record'}, content: () => `<h1 id="model-sensor-record">Sensor Record</h1><p class="lead">Represents a single data packet received from the smart neck belt.</p>${callout('note','Conceptual Data Model','Conceptual model — actual implementation may differ.')}<div class="prop-block"><div class="prop-header"><div class="prop-class-name">SensorRecord</div><div class="prop-class-desc">Smart neck belt data packet</div></div><div class="prop-row"><div class="prop-name">id</div><div class="prop-type">UUID</div><span class="prop-required prop-opt">Auto</span><div class="prop-desc">Unique record identifier.</div></div><div class="prop-row"><div class="prop-name">animal_id</div><div class="prop-type">string</div><span class="prop-required prop-req">Required</span><div class="prop-desc">Animal this record belongs to.</div></div><div class="prop-row"><div class="prop-name">belt_id</div><div class="prop-type">string</div><span class="prop-required prop-req">Required</span><div class="prop-desc">Belt device serial number.</div></div><div class="prop-row"><div class="prop-name">timestamp</div><div class="prop-type">datetime</div><span class="prop-required prop-req">Required</span><div class="prop-desc">Sensor reading timestamp (ISO 8601 UTC).</div></div><div class="prop-row"><div class="prop-name">temperature_c</div><div class="prop-type">float</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Body/ambient temperature reading in Celsius.</div></div><div class="prop-row"><div class="prop-name">activity_index</div><div class="prop-type">float</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Normalized activity score (0.0–1.0) computed from IMU data.</div></div><div class="prop-row"><div class="prop-name">rumination_min</div><div class="prop-type">integer</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Estimated rumination minutes in the recording period.</div></div><div class="prop-row"><div class="prop-name">gps_lat</div><div class="prop-type">float</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">GPS latitude coordinate.</div></div><div class="prop-row"><div class="prop-name">gps_lon</div><div class="prop-type">float</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">GPS longitude coordinate.</div></div><div class="prop-row"><div class="prop-name">battery_pct</div><div class="prop-type">integer</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Belt battery level percentage (0–100).</div></div></div>` },

  'model-milk-record': { title: 'Milk Record', category: 'Data Model', breadcrumb: ['Docs', 'Data Model', 'Milk Record'], prev: {page:'model-sensor-record',label:'Sensor Record'}, next: {page:'model-risk-assessment',label:'Risk Assessment'}, content: () => `<h1 id="model-milk-record">Milk Record</h1><p class="lead">Represents a milk quality and yield measurement from a milking session.</p>${callout('note','Conceptual Data Model','Conceptual model — actual implementation may differ.')}<div class="prop-block"><div class="prop-header"><div class="prop-class-name">MilkRecord</div><div class="prop-class-desc">Milking session quality and yield data</div></div><div class="prop-row"><div class="prop-name">id</div><div class="prop-type">UUID</div><span class="prop-required prop-opt">Auto</span><div class="prop-desc">Unique record identifier.</div></div><div class="prop-row"><div class="prop-name">animal_id</div><div class="prop-type">string</div><span class="prop-required prop-req">Required</span><div class="prop-desc">Animal this record belongs to.</div></div><div class="prop-row"><div class="prop-name">timestamp</div><div class="prop-type">datetime</div><span class="prop-required prop-req">Required</span><div class="prop-desc">Milking session timestamp (ISO 8601 UTC).</div></div><div class="prop-row"><div class="prop-name">milk_yield_litres</div><div class="prop-type">float</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Total milk yield in litres for this session.</div></div><div class="prop-row"><div class="prop-name">conductivity_ms</div><div class="prop-type">float</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Milk electrical conductivity in mS/cm. Key mastitis indicator.</div></div><div class="prop-row"><div class="prop-name">temperature_c</div><div class="prop-type">float</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Milk temperature at collection (°C).</div></div><div class="prop-row"><div class="prop-name">scc_thousands</div><div class="prop-type">integer</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Somatic Cell Count (×1,000 cells/mL) from lab test. Not continuously measured in prototype.</div></div></div>` },

  'model-alert': { title: 'Alert', category: 'Data Model', breadcrumb: ['Docs', 'Data Model', 'Alert'], prev: {page:'model-risk-assessment',label:'Risk Assessment'}, next: {page:'mobile-installation',label:'Installation'}, content: () => `<h1 id="model-alert">Alert</h1><p class="lead">Represents a risk alert generated when an animal's predicted risk score crosses a configured threshold.</p>${callout('note','Conceptual Data Model','Conceptual model — actual implementation may differ.')}<div class="prop-block"><div class="prop-header"><div class="prop-class-name">Alert</div><div class="prop-class-desc">Mastitis risk alert for a specific animal</div></div><div class="prop-row"><div class="prop-name">alert_id</div><div class="prop-type">UUID</div><span class="prop-required prop-opt">Auto</span><div class="prop-desc">Unique alert identifier.</div></div><div class="prop-row"><div class="prop-name">animal_id</div><div class="prop-type">string</div><span class="prop-required prop-req">Required</span><div class="prop-desc">Animal this alert refers to.</div></div><div class="prop-row"><div class="prop-name">severity</div><div class="prop-type">enum</div><span class="prop-required prop-req">Required</span><div class="prop-desc">LOW | MODERATE | HIGH — derived from risk score.</div></div><div class="prop-row"><div class="prop-name">risk_score</div><div class="prop-type">integer</div><span class="prop-required prop-req">Required</span><div class="prop-desc">Risk score (0–100) that triggered this alert.</div></div><div class="prop-row"><div class="prop-name">message</div><div class="prop-type">string</div><span class="prop-required prop-req">Required</span><div class="prop-desc">Human-readable alert message.</div></div><div class="prop-row"><div class="prop-name">contributing_factors</div><div class="prop-type">array</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Top SHAP factors that drove this alert.</div></div><div class="prop-row"><div class="prop-name">timestamp</div><div class="prop-type">datetime</div><span class="prop-required prop-req">Required</span><div class="prop-desc">Alert generation timestamp (ISO 8601 UTC).</div></div><div class="prop-row"><div class="prop-name">status</div><div class="prop-type">enum</div><span class="prop-required prop-req">Required</span><div class="prop-desc">NEW | ACKNOWLEDGED | RESOLVED</div></div><div class="prop-row"><div class="prop-name">recommended_action</div><div class="prop-type">string</div><span class="prop-required prop-opt">Optional</span><div class="prop-desc">Suggested action for the farmer.</div></div></div>` },
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
    <svg class="callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${icons[type]||icons.note}</svg>
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
        <div class="step-num">${i+1}</div>
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
  history.pushState({page: pageId}, page.title, `#${pageId}`);
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
  }, { rootMargin: `-${68+20}px 0px -70% 0px` });

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
  const featured = ['home','ai-overview','api-predictions','hardware-overview','shap-explainability','risk-classification','faq','glossary'];
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
const sidebar     = document.getElementById('sidebar');

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

// ── INITIAL LOAD ──────────────────────────────
(function init() {
  const hash = window.location.hash.replace('#', '');
  const startPage = (hash && PAGES[hash]) ? hash : 'home';
  navigateTo(startPage);
})();
