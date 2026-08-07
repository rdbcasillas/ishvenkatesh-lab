const fs = require("fs");
const https = require("https");
const path = require("path");

const PROFILE_URL =
  "https://scholar.google.com/citations?user=gMx5yTUAAAAJ&hl=en&oi=ao";
const OUTPUT_PATH = path.join(
  __dirname,
  "..",
  "src",
  "assets",
  "google-scholar.json"
);

const FALLBACK = {
  profileUrl: PROFILE_URL,
  articles: "18",
  citations: "377",
  hIndex: "9",
  i10Index: "9",
  citationsByYear: [
    { year: "2015", citations: 4 },
    { year: "2016", citations: 8 },
    { year: "2017", citations: 23 },
    { year: "2018", citations: 31 },
    { year: "2019", citations: 27 },
    { year: "2020", citations: 29 },
    { year: "2021", citations: 49 },
    { year: "2022", citations: 36 },
    { year: "2023", citations: 28 },
    { year: "2024", citations: 35 },
    { year: "2025", citations: 73 },
    { year: "2026", citations: 25 },
  ],
  updatedAt: "2026-08-07",
};

function fetchProfile(url) {
  return new Promise((resolve, reject) => {
    https
      .get(
        url,
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
          },
        },
        (response) => {
          if (response.statusCode < 200 || response.statusCode >= 300) {
            reject(new Error(`Google Scholar returned ${response.statusCode}`));
            response.resume();
            return;
          }

          let body = "";
          response.setEncoding("utf8");
          response.on("data", (chunk) => {
            body += chunk;
          });
          response.on("end", () => resolve(body));
        }
      )
      .on("error", reject);
  });
}

function extractFirst(pattern, html) {
  const match = html.match(pattern);
  return match ? match[1] : null;
}

function parseProfile(html) {
  const metricValues = Array.from(
    html.matchAll(/<td class="gsc_rsb_std">([^<]+)<\/td>/g)
  ).map((match) => match[1].trim());

  const articles = extractFirst(/Articles\s+1(?:&ndash;|–|-)(\d+)/, html);
  const years = Array.from(
    html.matchAll(/class="gsc_g_t"[^>]*>(\d{4})<\/span>/g)
  ).map((match) => match[1]);
  const citationValues = Array.from(
    html.matchAll(/class="gsc_g_al">(\d+)<\/span>/g)
  ).map((match) => Number(match[1]));

  if (!articles || metricValues.length < 5 || years.length !== citationValues.length) {
    throw new Error("Could not parse Google Scholar profile");
  }

  return {
    profileUrl: PROFILE_URL,
    articles,
    citations: metricValues[0],
    hIndex: metricValues[2],
    i10Index: metricValues[4],
    citationsByYear: years.map((year, index) => ({
      year,
      citations: citationValues[index],
    })),
    updatedAt: new Date().toISOString().slice(0, 10),
  };
}

function readFallback() {
  if (fs.existsSync(OUTPUT_PATH)) {
    return JSON.parse(fs.readFileSync(OUTPUT_PATH, "utf8"));
  }

  return FALLBACK;
}

async function main() {
  try {
    const html = await fetchProfile(PROFILE_URL);
    const profile = parseProfile(html);
    fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(profile, null, 2)}\n`);
    console.log(
      `Updated Google Scholar stats: ${profile.articles} articles, ${profile.citations} citations`
    );
  } catch (error) {
    const fallback = readFallback();
    fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(fallback, null, 2)}\n`);
    console.warn(`Using existing Google Scholar stats: ${error.message}`);
  }
}

main();
