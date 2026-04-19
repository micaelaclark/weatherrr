const CITIES = [
  { name: "Tokyo", country: "Japan", code: "JP", lat: 35.6762, lon: 139.6503 },
  { name: "London", country: "United Kingdom", code: "GB", lat: 51.5074, lon: -0.1278 },
  { name: "New York", country: "United States", code: "US", lat: 40.7128, lon: -74.0060, wiki: "New York City" },
  { name: "Paris", country: "France", code: "FR", lat: 48.8566, lon: 2.3522 },
  { name: "Sydney", country: "Australia", code: "AU", lat: -33.8688, lon: 151.2093 },
  { name: "Dubai", country: "UAE", code: "AE", lat: 25.2048, lon: 55.2708 },
  { name: "Singapore", country: "Singapore", code: "SG", lat: 1.3521, lon: 103.8198 },
  { name: "Cape Town", country: "South Africa", code: "ZA", lat: -33.9249, lon: 18.4241 },
  { name: "Rio de Janeiro", country: "Brazil", code: "BR", lat: -22.9068, lon: -43.1729 },
  { name: "Moscow", country: "Russia", code: "RU", lat: 55.7558, lon: 37.6173 },
  { name: "Beijing", country: "China", code: "CN", lat: 39.9042, lon: 116.4074 },
  { name: "Mumbai", country: "India", code: "IN", lat: 19.0760, lon: 72.8777 },
  { name: "Cairo", country: "Egypt", code: "EG", lat: 30.0444, lon: 31.2357 },
  { name: "Buenos Aires", country: "Argentina", code: "AR", lat: -34.6037, lon: -58.3816 },
  { name: "Toronto", country: "Canada", code: "CA", lat: 43.6510, lon: -79.3470 },
  { name: "Mexico City", country: "Mexico", code: "MX", lat: 19.4326, lon: -99.1332 },
  { name: "Seoul", country: "South Korea", code: "KR", lat: 37.5665, lon: 126.9780 },
  { name: "Istanbul", country: "Turkey", code: "TR", lat: 41.0082, lon: 28.9784 },
  { name: "Lagos", country: "Nigeria", code: "NG", lat: 6.5244, lon: 3.3792 },
  { name: "Jakarta", country: "Indonesia", code: "ID", lat: -6.2088, lon: 106.8456 },
  { name: "Nairobi", country: "Kenya", code: "KE", lat: -1.2921, lon: 36.8219 },
  { name: "Lima", country: "Peru", code: "PE", lat: -12.0464, lon: -77.0428 },
  { name: "Bangkok", country: "Thailand", code: "TH", lat: 13.7563, lon: 100.5018 },
  { name: "Karachi", country: "Pakistan", code: "PK", lat: 24.8607, lon: 67.0011 },
  { name: "Tehran", country: "Iran", code: "IR", lat: 35.6892, lon: 51.3890 },
  { name: "Casablanca", country: "Morocco", code: "MA", lat: 33.5731, lon: -7.5898 },
  { name: "Accra", country: "Ghana", code: "GH", lat: 5.6037, lon: -0.1870 },
  { name: "Santiago", country: "Chile", code: "CL", lat: -33.4489, lon: -70.6693 },
  { name: "Bogotá", country: "Colombia", code: "CO", lat: 4.7110, lon: -74.0721 },
  { name: "Vienna", country: "Austria", code: "AT", lat: 48.2082, lon: 16.3738 },
  { name: "Warsaw", country: "Poland", code: "PL", lat: 52.2297, lon: 21.0122 },
  { name: "Stockholm", country: "Sweden", code: "SE", lat: 59.3293, lon: 18.0686 },
  { name: "Oslo", country: "Norway", code: "NO", lat: 59.9139, lon: 10.7522 },
  { name: "Helsinki", country: "Finland", code: "FI", lat: 60.1699, lon: 24.9384 },
  { name: "Rome", country: "Italy", code: "IT", lat: 41.9028, lon: 12.4964 },
  { name: "Madrid", country: "Spain", code: "ES", lat: 40.4168, lon: -3.7038 },
  { name: "Amsterdam", country: "Netherlands", code: "NL", lat: 52.3676, lon: 4.9041 },
  { name: "Athens", country: "Greece", code: "GR", lat: 37.9838, lon: 23.7275 },
  { name: "Lisbon", country: "Portugal", code: "PT", lat: 38.7169, lon: -9.1399 },
  { name: "Prague", country: "Czech Republic", code: "CZ", lat: 50.0755, lon: 14.4378 },
  { name: "Budapest", country: "Hungary", code: "HU", lat: 47.4979, lon: 19.0402 },
  { name: "Kyiv", country: "Ukraine", code: "UA", lat: 50.4501, lon: 30.5234 },
  { name: "Riyadh", country: "Saudi Arabia", code: "SA", lat: 24.7136, lon: 46.6753 },
  { name: "Kuala Lumpur", country: "Malaysia", code: "MY", lat: 3.1390, lon: 101.6869 },
  { name: "Manila", country: "Philippines", code: "PH", lat: 14.5995, lon: 120.9842 },
  { name: "Hanoi", country: "Vietnam", code: "VN", lat: 21.0285, lon: 105.8542 },
  { name: "Colombo", country: "Sri Lanka", code: "LK", lat: 6.9271, lon: 79.8612 },
  { name: "Kathmandu", country: "Nepal", code: "NP", lat: 27.7172, lon: 85.3240 },
  { name: "Ulaanbaatar", country: "Mongolia", code: "MN", lat: 47.8864, lon: 106.9057 },
  { name: "Reykjavik", country: "Iceland", code: "IS", lat: 64.1466, lon: -21.9426 },
  { name: "Anchorage", country: "United States", code: "US", lat: 61.2181, lon: -149.9003 },
  { name: "Honolulu", country: "United States", code: "US", lat: 21.3069, lon: -157.8583 },
  { name: "Miami", country: "United States", code: "US", lat: 25.7617, lon: -80.1918 },
  { name: "Los Angeles", country: "United States", code: "US", lat: 34.0522, lon: -118.2437 },
  { name: "Chicago", country: "United States", code: "US", lat: 41.8781, lon: -87.6298 },
  { name: "Vancouver", country: "Canada", code: "CA", lat: 49.2827, lon: -123.1207 },
  { name: "Havana", country: "Cuba", code: "CU", lat: 23.1136, lon: -82.3666 },
  { name: "Dakar", country: "Senegal", code: "SN", lat: 14.7167, lon: -17.4677 },
  { name: "Addis Ababa", country: "Ethiopia", code: "ET", lat: 9.0320, lon: 38.7469 },
  { name: "Kinshasa", country: "DR Congo", code: "CD", lat: -4.3217, lon: 15.3125 },
  { name: "Johannesburg", country: "South Africa", code: "ZA", lat: -26.2041, lon: 28.0473 },
  { name: "Dar es Salaam", country: "Tanzania", code: "TZ", lat: -6.7924, lon: 39.2083 },
  { name: "Auckland", country: "New Zealand", code: "NZ", lat: -36.8509, lon: 174.7645 },
  { name: "Perth", country: "Australia", code: "AU", lat: -31.9505, lon: 115.8605 },
  { name: "Melbourne", country: "Australia", code: "AU", lat: -37.8136, lon: 144.9631 },
  { name: "Osaka", country: "Japan", code: "JP", lat: 34.6937, lon: 135.5023 },
  { name: "Taipei", country: "Taiwan", code: "TW", lat: 25.0330, lon: 121.5654 },
  { name: "Hong Kong", country: "China", code: "HK", lat: 22.3193, lon: 114.1694 },
  { name: "Baghdad", country: "Iraq", code: "IQ", lat: 33.3152, lon: 44.3661 },
  { name: "Tashkent", country: "Uzbekistan", code: "UZ", lat: 41.2995, lon: 69.2401 },
  { name: "Almaty", country: "Kazakhstan", code: "KZ", lat: 43.2220, lon: 76.8512 },
  { name: "Tbilisi", country: "Georgia", code: "GE", lat: 41.6938, lon: 44.8015 },
  { name: "Baku", country: "Azerbaijan", code: "AZ", lat: 40.4093, lon: 49.8671 },
  { name: "Minsk", country: "Belarus", code: "BY", lat: 53.9045, lon: 27.5615 },
  { name: "Riga", country: "Latvia", code: "LV", lat: 56.9496, lon: 24.1052 },
  { name: "Tallinn", country: "Estonia", code: "EE", lat: 59.4370, lon: 24.7536 },
  { name: "Copenhagen", country: "Denmark", code: "DK", lat: 55.6761, lon: 12.5683 },
  { name: "Dublin", country: "Ireland", code: "IE", lat: 53.3498, lon: -6.2603 },
  { name: "Marrakech", country: "Morocco", code: "MA", lat: 31.6295, lon: -7.9811 },
  { name: "Tunis", country: "Tunisia", code: "TN", lat: 36.8065, lon: 10.1815 },
  { name: "Khartoum", country: "Sudan", code: "SD", lat: 15.5007, lon: 32.5599 },
  { name: "Kampala", country: "Uganda", code: "UG", lat: 0.3476, lon: 32.5825 },
  { name: "Harare", country: "Zimbabwe", code: "ZW", lat: -17.8252, lon: 31.0335 },
  { name: "Antananarivo", country: "Madagascar", code: "MG", lat: -18.9137, lon: 47.5361 },
  { name: "Dhaka", country: "Bangladesh", code: "BD", lat: 23.8103, lon: 90.4125 },
  { name: "Islamabad", country: "Pakistan", code: "PK", lat: 33.6844, lon: 73.0479 },
  { name: "Kabul", country: "Afghanistan", code: "AF", lat: 34.5553, lon: 69.2075 },
  { name: "Yerevan", country: "Armenia", code: "AM", lat: 40.1872, lon: 44.5152 },
  { name: "Lusaka", country: "Zambia", code: "ZM", lat: -15.3875, lon: 28.3228 },
  { name: "Maputo", country: "Mozambique", code: "MZ", lat: -25.9692, lon: 32.5732 },
  { name: "Bucharest", country: "Romania", code: "RO", lat: 44.4268, lon: 26.1025 },
  { name: "Brussels", country: "Belgium", code: "BE", lat: 50.8503, lon: 4.3517 },
  { name: "Zurich", country: "Switzerland", code: "CH", lat: 47.3769, lon: 8.5417 },
  { name: "Edinburgh", country: "United Kingdom", code: "GB", lat: 55.9533, lon: -3.1883 },
  { name: "Tripoli", country: "Libya", code: "LY", lat: 32.9012, lon: 13.1809 },
  { name: "Algiers", country: "Algeria", code: "DZ", lat: 36.7372, lon: 3.0865 },
];

const WMO_CODES = {
  0: "Clear sky", 1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
  45: "Foggy", 48: "Icy fog",
  51: "Light drizzle", 53: "Drizzle", 55: "Heavy drizzle",
  61: "Light rain", 63: "Rain", 65: "Heavy rain",
  71: "Light snow", 73: "Snow", 75: "Heavy snow", 77: "Snow grains",
  80: "Rain showers", 81: "Showers", 82: "Heavy showers",
  85: "Snow showers", 86: "Heavy snow showers",
  95: "Thunderstorm", 96: "Thunderstorm with hail", 99: "Severe thunderstorm",
};

const STORAGE_KEY    = 'weather-game-v2';
const SCREENNAME_KEY = 'wg-screenname';

const SUPABASE_URL = 'https://alvqsasgudqynhapexxm.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsdnFzYXNndWRxeW5oYXBleHhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY1NDI3MTgsImV4cCI6MjA5MjExODcxOH0.TF1wofDSPupWF22h2SdgVCkm2iS0VRf7K8X-t-9IrV4';
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let unit = 'C';
let actualTempC = null;
let actualCondition = '';
let currentCity = null;
let soloRound = 0;       // 0–4
let sessionCities = [];  // 5 randomly picked cities
let sessionScore = 0;    // running total for current session

// --- Helpers ---

function getFlag(code) {
  return code.toUpperCase().replace(/./g, c =>
    String.fromCodePoint(127397 + c.charCodeAt(0))
  );
}

function calcScore(guessC, actualC) {
  const diff = Math.abs(guessC - actualC);
  if (diff <= 1)  return 1000;
  if (diff <= 3)  return 750;
  if (diff <= 5)  return 500;
  if (diff <= 10) return 250;
  return 0;
}

function getScreenname() {
  return localStorage.getItem(SCREENNAME_KEY) || null;
}

function loadState() {
  const name = getScreenname();
  const key  = name ? `wg-stats-${name}` : STORAGE_KEY;
  try { return JSON.parse(localStorage.getItem(key)) || {}; }
  catch { return {}; }
}

function saveState(state) {
  const name = getScreenname();
  const key  = name ? `wg-stats-${name}` : STORAGE_KEY;
  localStorage.setItem(key, JSON.stringify(state));
}

// --- Screenname / save stats ---

function openSaveStats() {
  const current = getScreenname();
  const input = document.getElementById('screennameInput');
  input.value = current || '';
  document.getElementById('saveError').textContent = '';
  document.getElementById('saveModal').style.display = 'flex';
  input.focus();
}

function closeSaveStats(e) {
  if (!e || e.target === document.getElementById('saveModal')) {
    document.getElementById('saveModal').style.display = 'none';
  }
}

function saveScreenname() {
  const name = document.getElementById('screennameInput').value.trim();
  const errorEl = document.getElementById('saveError');
  if (!name) { errorEl.textContent = 'Please enter a screenname.'; return; }
  if (name.length < 2 || name.length > 20) { errorEl.textContent = 'Must be 2–20 characters.'; return; }

  localStorage.setItem(SCREENNAME_KEY, name);
  updateSaveBtn();
  document.getElementById('saveModal').style.display = 'none';
}

function updateSaveBtn() {
  const name = getScreenname();
  const btn  = document.getElementById('saveBtn');
  if (name) {
    btn.textContent = name;
    btn.classList.add('save-btn-active');
    btn.onclick = openStats;
  } else {
    btn.textContent = 'Save stats';
    btn.classList.remove('save-btn-active');
    btn.onclick = openSaveStats;
  }
}

// --- Supabase sync ---

async function syncToSupabase(name, stats) {
  if (!name) return;
  await db.from('scores').upsert({
    screenname: name,
    games_played: stats.gamesPlayed || 0,
    total_score: stats.totalScore || 0,
    best_game: stats.bestGame || 0,
    updated_at: new Date().toISOString()
  }, { onConflict: 'screenname' });
}

// --- Leaderboard ---

async function openLeaderboard() {
  document.getElementById('lbModal').style.display = 'flex';
  document.getElementById('lbLoading').style.display = 'block';
  document.getElementById('lbList').innerHTML = '';
  document.getElementById('lbYourRank').textContent = '';

  const { data } = await db
    .from('scores')
    .select('screenname, total_score, games_played, best_game')
    .order('total_score', { ascending: false })
    .limit(10);

  document.getElementById('lbLoading').style.display = 'none';

  const me = getScreenname();
  const rows = data || [];

  if (rows.length === 0) {
    document.getElementById('lbList').innerHTML = '<p class="lb-empty">No scores yet — be the first!</p>';
    return;
  }

  rows.forEach((row, i) => {
    const isMe = me && row.screenname === me;
    const div = document.createElement('div');
    div.className = 'lb-row' + (isMe ? ' lb-row-me' : '');
    div.innerHTML = `
      <span class="lb-rank">${i + 1}</span>
      <span class="lb-name">${row.screenname}${isMe ? ' ★' : ''}</span>
      <span class="lb-score">${(row.total_score || 0).toLocaleString()}</span>
    `;
    document.getElementById('lbList').appendChild(div);
  });

  if (me && !rows.find(r => r.screenname === me)) {
    const { data: myRow } = await db.from('scores').select('total_score').eq('screenname', me).single();
    if (myRow) {
      const { count } = await db.from('scores').select('*', { count: 'exact', head: true }).gt('total_score', myRow.total_score);
      document.getElementById('lbYourRank').textContent = `You're ranked #${(count || 0) + 1}`;
    }
  }
}

function closeLb(e) {
  if (!e || e.target === document.getElementById('lbModal')) {
    document.getElementById('lbModal').style.display = 'none';
  }
}

// --- City photo ---

async function loadCityPhoto(city) {
  try {
    const title = encodeURIComponent(city.wiki || city.name);
    const res   = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${title}`);
    if (!res.ok) return;
    const data  = await res.json();
    if (!data.thumbnail) return;
    const src = data.thumbnail.source.replace(/\d+px/, '800px');
    const img = document.getElementById('cityPhoto');
    img.onload = () => { img.style.display = 'block'; };
    img.src = src;
  } catch {}
}

// --- Climate data ---

async function loadClimateData(city) {
  document.getElementById('climateSection').style.display = 'block';
  document.getElementById('climateLoading').style.display = 'block';
  document.getElementById('climateContent').style.display = 'none';

  try {
    const now       = new Date();
    const month     = now.getMonth() + 1;
    const monthStr  = String(month).padStart(2, '0');
    const lastDay   = String(new Date(now.getFullYear(), month, 0).getDate()).padStart(2, '0');
    const monthName = now.toLocaleDateString('en-US', { month: 'long' });

    const years   = [now.getFullYear() - 1, now.getFullYear() - 2, now.getFullYear() - 3];
    const results = await Promise.all(years.map(yr => {
      const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${city.lat}&longitude=${city.lon}&start_date=${yr}-${monthStr}-01&end_date=${yr}-${monthStr}-${lastDay}&daily=temperature_2m_max,temperature_2m_min,temperature_2m_mean&timezone=UTC`;
      return fetch(url).then(r => r.json());
    }));

    let means = [], maxes = [], mins = [];
    for (const data of results) {
      if (!data.daily) continue;
      means = means.concat(data.daily.temperature_2m_mean.filter(v => v !== null));
      maxes = maxes.concat(data.daily.temperature_2m_max.filter(v => v !== null));
      mins  = mins.concat(data.daily.temperature_2m_min.filter(v => v !== null));
    }
    if (means.length === 0) throw new Error('No data');

    const avg          = means.reduce((a, b) => a + b) / means.length;
    const typicalHigh  = maxes.reduce((a, b) => a + b) / maxes.length;
    const typicalLow   = mins.reduce((a, b) => a + b) / mins.length;
    const recordHigh   = Math.max(...maxes);
    const recordLow    = Math.min(...mins);

    const fmtC = c => unit === 'F' ? `${Math.round(c * 9 / 5 + 32)}°F` : `${c.toFixed(1)}°C`;

    const diffC   = actualTempC - avg;
    const absDiff = unit === 'F'
      ? `${Math.abs(diffC * 9 / 5).toFixed(1)}°F`
      : `${Math.abs(diffC).toFixed(1)}°C`;
    const vsText  = Math.abs(diffC) < 0.5
      ? `right at the ${monthName} average`
      : `${absDiff} ${diffC > 0 ? 'above' : 'below'} the ${monthName} average`;

    document.getElementById('climateTitle').textContent    = `${monthName} in ${city.name}`;
    document.getElementById('climateRange').textContent    = `${fmtC(typicalLow)} – ${fmtC(typicalHigh)}`;
    document.getElementById('climateAvg').textContent      = fmtC(avg);
    document.getElementById('climateRecords').textContent  = `${fmtC(recordLow)} – ${fmtC(recordHigh)}`;
    document.getElementById('climateVs').textContent       = `Today's ${fmtC(actualTempC)} is ${vsText}`;

    document.getElementById('climateLoading').style.display = 'none';
    document.getElementById('climateContent').style.display = 'block';
  } catch {
    document.getElementById('climateLoading').style.display = 'none';
  }
}

// --- Unit toggle ---

function setUnit(newUnit) {
  if (newUnit === unit) return;
  const input = document.getElementById('tempInput');
  const val = parseFloat(input.value);
  if (!isNaN(val)) {
    input.value = newUnit === 'F'
      ? Math.round(val * 9 / 5 + 32)
      : Math.round((val - 32) * 5 / 9);
  }
  unit = newUnit;
  document.getElementById('unitLabel').textContent = `°${unit}`;
  document.getElementById('btnC').classList.toggle('active', unit === 'C');
  document.getElementById('btnF').classList.toggle('active', unit === 'F');
}

function adjustTemp(delta) {
  const input = document.getElementById('tempInput');
  input.value = (parseInt(input.value) || 0) + delta;
}

// --- Session ---

function getTodayString() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function seededRandom(seed) {
  // Mulberry32 PRNG — deterministic given the same seed
  return function() {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function dateToSeed(dateStr) {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = Math.imul(31, hash) + dateStr.charCodeAt(i) | 0;
  }
  return hash;
}

function pickSessionCities() {
  const rand = seededRandom(dateToSeed(getTodayString()));
  const shuffled = [...CITIES].sort(() => rand() - 0.5);
  return shuffled.slice(0, 3);
}

async function startGame() {
  soloRound = 0;
  sessionScore = 0;
  sessionCities = pickSessionCities();

  document.getElementById('resultCard').style.display = 'none';
  document.getElementById('guessSection').style.display = 'none';
  document.getElementById('climateSection').style.display = 'none';
  document.getElementById('climateContent').style.display = 'none';
  const p = document.getElementById('cityPhoto'); p.style.display = 'none'; p.src = '';
  document.getElementById('cityCard').style.display = 'block';
  document.getElementById('cityInfo').style.display = 'none';
  document.getElementById('loading').style.display = 'block';
  document.getElementById('loading').textContent = 'Loading city...';

  await loadCity(sessionCities[0]);
}

async function loadCity(city) {
  currentCity = city;

  document.getElementById('cityFlag').textContent = getFlag(city.code);
  document.getElementById('cityName').textContent = city.name;
  document.getElementById('cityCountry').textContent = city.country;

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true&timezone=auto`;
    const res = await fetch(url);
    if (!res.ok) throw new Error();
    const data = await res.json();
    actualTempC = data.current_weather.temperature;
    actualCondition = WMO_CODES[data.current_weather.weathercode] || '';

    if (data.timezone) {
      const localTime = new Date().toLocaleTimeString('en-US', {
        timeZone: data.timezone, hour: 'numeric', minute: '2-digit', hour12: true
      });
      document.getElementById('cityTime').textContent = `🕐 ${localTime} local time`;
    }

    document.getElementById('loading').style.display = 'none';
    document.getElementById('cityInfo').style.display = 'block';
    document.getElementById('tempInput').value = unit === 'F' ? 68 : 20;
    document.getElementById('guessSection').style.display = 'flex';
  } catch {
    document.getElementById('loading').textContent = 'Could not load weather data. Please try again later.';
  }
}

// --- Guess ---

function handleGuess() {
  submitGuess();
}

function submitGuess() {
  const val = parseFloat(document.getElementById('tempInput').value);
  if (isNaN(val)) return;

  const guessC = unit === 'F' ? (val - 32) * 5 / 9 : val;
  const diff = guessC - actualTempC;
  const score = calcScore(guessC, actualTempC);
  sessionScore += score;

  document.getElementById('guessSection').style.display = 'none';

  const isLast = soloRound === 2;
  showResult(actualTempC, guessC, diff, score, sessionScore, actualCondition, isLast);

  if (isLast) {
    const state = loadState();
    state.gamesPlayed = (state.gamesPlayed || 0) + 1;
    state.totalScore = (state.totalScore || 0) + sessionScore;
    state.bestGame = Math.max(state.bestGame || 0, sessionScore);
    saveState(state);
    syncToSupabase(getScreenname(), state);
  }

  loadCityPhoto(currentCity);
  loadClimateData(currentCity);
}

// --- Sparkles ---

function triggerSparkles(anchor) {
  const rect    = anchor.getBoundingClientRect();
  const cx      = rect.left + rect.width / 2;
  const cy      = rect.top  + rect.height / 2;
  const chars   = ['✦', '★', '✸', '✺', '✶', '✷', '⬟', '✨', '💫', '⭐'];
  const colors  = ['#fbbf24', '#f59e0b', '#fcd34d', '#fb923c', '#fff7ed', '#ffffff', '#fde68a'];
  const maxDist = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);

  for (let i = 0; i < 60; i++) {
    const el    = document.createElement('span');
    el.className = 'sparkle-particle';
    el.textContent = chars[Math.floor(Math.random() * chars.length)];
    const angle = (i / 60) * 360 + (Math.random() * 20 - 10);
    const dist  = maxDist * (0.4 + Math.random() * 0.65);
    el.style.cssText = `
      left: ${cx}px; top: ${cy}px;
      color: ${colors[Math.floor(Math.random() * colors.length)]};
      font-size: ${1.4 + Math.random() * 2}rem;
      --dx: ${Math.cos(angle * Math.PI / 180) * dist}px;
      --dy: ${Math.sin(angle * Math.PI / 180) * dist}px;
      animation-delay: ${(Math.random() * 0.25).toFixed(2)}s;
      animation-duration: ${(1.8 + Math.random() * 1).toFixed(2)}s;
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3500);
  }
}

// --- Show result ---

function showResult(actualC, guessC, diff, score, runningTotal, condition, isLast) {
  const toDisplay = (tempC) => {
    if (unit === 'F') {
      return `${Math.round(tempC * 9 / 5 + 32)}°F (${tempC.toFixed(1)}°C)`;
    }
    return `${tempC.toFixed(1)}°C`;
  };

  document.getElementById('resultCondition').textContent = condition || '';
  document.getElementById('actualTemp').textContent = toDisplay(actualC);
  document.getElementById('guessedTemp').textContent =
    unit === 'F'
      ? `${Math.round(guessC * 9 / 5 + 32)}°F`
      : `${Math.round(guessC)}°C`;

  const absDiff = Math.abs(diff);
  const sign = diff > 0 ? '+' : '';
  const diffEl = document.getElementById('diffDisplay');

  if (unit === 'F') {
    const diffF = diff * 9 / 5;
    diffEl.textContent = `${diffF > 0 ? '+' : ''}${diffF.toFixed(1)}°F off`;
  } else {
    diffEl.textContent = `${sign}${diff.toFixed(1)}°C off`;
  }

  diffEl.className = 'diff-badge ' + (absDiff <= 1 ? 'great' : absDiff <= 5 ? 'good' : 'off');

  if (absDiff <= 5) triggerSparkles(diffEl);

  document.getElementById('todayScore').textContent = score;
  document.getElementById('totalScore').textContent = runningTotal;

  const nextBtn = document.getElementById('soloNextBtn');
  nextBtn.style.display = 'block';

  if (isLast) {
    nextBtn.textContent = 'See Results →';
    nextBtn.onclick = showEndCard;
    nextBtn.style.display = 'block';
    document.getElementById('roundIndicator').textContent = 'City 3 of 3';
  } else {
    nextBtn.textContent = 'Next City →';
    nextBtn.onclick = soloNextCity;
    document.getElementById('roundIndicator').textContent = `City ${soloRound + 1} of 3`;
  }

  document.getElementById('resultCard').style.display = 'flex';
}

// --- Next city ---

async function soloNextCity() {
  soloRound++;

  document.getElementById('resultCard').style.display = 'none';
  document.getElementById('climateSection').style.display = 'none';
  document.getElementById('climateContent').style.display = 'none';
  const photoEl = document.getElementById('cityPhoto');
  photoEl.style.display = 'none'; photoEl.src = '';
  document.getElementById('cityInfo').style.display = 'none';
  document.getElementById('loading').style.display = 'block';
  document.getElementById('loading').textContent = 'Loading next city...';

  await loadCity(sessionCities[soloRound]);
}

// --- Share ---

async function shareScore() {
  if (!currentCity || actualTempC === null) return;

  const guessedEl = document.getElementById('guessedTemp').textContent;
  const actualEl = document.getElementById('actualTemp').textContent;
  const cityScore = document.getElementById('todayScore').textContent;
  const sessionTotal = document.getElementById('totalScore').textContent;

  const text = [
    `🌤 weathErrr? — ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`,
    `📍 ${currentCity.name}, ${currentCity.country} (City ${soloRound + 1}/5)`,
    `🎯 Guess: ${guessedEl} · Actual: ${actualEl}`,
    `⭐ City: ${cityScore} pts · Session: ${sessionTotal} pts`,
  ].join('\n');

  const btn = document.getElementById('shareBtn');
  if (navigator.share) {
    try {
      await navigator.share({ text });
    } catch (e) {
      if (e.name !== 'AbortError') copyFallback(text, btn);
    }
  } else {
    copyFallback(text, btn);
  }
}

function copyFallback(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = orig; }, 2000);
  });
}

// --- End screen ---

function showEndCard() {
  const pct = sessionScore / 3000;
  let message;
  if (pct < 0.5)       message = "You just got weathered.";
  else if (pct < 0.75) message = "Get Weathering";
  else if (pct < 0.90) message = "So close";
  else                 message = "you're the weather master";

  document.getElementById('endScore').textContent = sessionScore;
  document.getElementById('endPct').textContent = Math.round(pct * 100) + '%';
  document.getElementById('endMessage').textContent = message;

  document.getElementById('cityCard').style.display = 'none';
  document.getElementById('resultCard').style.display = 'none';
  document.getElementById('guessSection').style.display = 'none';
  document.getElementById('endCard').style.display = 'flex';
}

function shareEndScore() {
  const pct = Math.round(sessionScore / 3000 * 100);
  const message = document.getElementById('endMessage').textContent;
  const date = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const text = [
    `🌤 weathErrr? — ${date}`,
    `⭐ ${sessionScore} / 3000 pts (${pct}%)`,
    `${message}`,
  ].join('\n');

  const btn = document.querySelector('#endCard .submit-btn');
  copyFallback(text, btn);
}

// --- Stats modal ---

function openStats() {
  const name = getScreenname();
  if (!name) { openSaveStats(); return; }
  const state = loadState();
  document.getElementById('statsUsername').textContent = name;
  document.getElementById('statPlayed').textContent = state.gamesPlayed || 0;
  document.getElementById('statTotal').textContent = state.totalScore || 0;
  document.getElementById('statAvg').textContent =
    state.gamesPlayed ? Math.round(state.totalScore / state.gamesPlayed) : 0;
  document.getElementById('statBest').textContent = state.bestGame || 0;
  document.getElementById('statsModal').style.display = 'flex';
}

function closeStats(e) {
  if (!e || e.target === document.getElementById('statsModal')) {
    document.getElementById('statsModal').style.display = 'none';
  }
}

// --- Home (title click restarts) ---

function goHome() {
  startGame();
}

// --- Init ---

function init() {
  document.getElementById('date').textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
  updateSaveBtn();
  startGame();
}

init();
