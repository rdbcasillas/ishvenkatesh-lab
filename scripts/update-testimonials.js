const fs = require("fs");
const path = require("path");

const CSV_PATH = path.join(__dirname, "..", "src", "assets", "Testimonial.csv");
const OUTPUT_PATH = path.join(__dirname, "..", "src", "assets", "testimonials.json");

function parseCSV(text) {
  const lines = [];
  let row = [];
  let insideQuote = false;
  let entry = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"') {
      if (insideQuote && nextChar === '"') {
        entry += '"';
        i++;
      } else {
        insideQuote = !insideQuote;
      }
    } else if (char === "," && !insideQuote) {
      row.push(entry.trim());
      entry = "";
    } else if ((char === "\r" || char === "\n") && !insideQuote) {
      if (char === "\r" && nextChar === "\n") i++;
      row.push(entry.trim());
      if (row.some((cell) => cell.length > 0)) {
        lines.push(row);
      }
      row = [];
      entry = "";
    } else {
      entry += char;
    }
  }

  if (entry.length > 0 || row.length > 0) {
    row.push(entry.trim());
    if (row.some((cell) => cell.length > 0)) {
      lines.push(row);
    }
  }

  const headers = lines[0];
  return lines.slice(1).map((r) => {
    const obj = {};
    headers.forEach((h, idx) => {
      obj[h.trim()] = r[idx] || "";
    });
    return obj;
  });
}

function splitItems(text) {
  if (!text) return [];
  const raw = text.split(/,(?![^()[\]{}]*[)\]}])|\n/g);
  const seen = new Set();
  const res = [];
  raw.forEach((item) => {
    const clean = item.replace(/^[-•\s]+/, "").trim();
    if (clean && !seen.has(clean) && clean.length > 1) {
      seen.add(clean);
      res.push(clean);
    }
  });
  return res;
}

function categorizeSkills(skillsList) {
  const categories = {
    "Molecular Biology": [],
    "Cell Culture & Viral Vectors": [],
    "Animal Surgeries & In Vivo": [],
    "Tissue Processing & Histology": [],
    "Microscopy & Imaging": [],
    "Genomics & Sequencing": [],
    "Behavioral Analysis": [],
    "Bioinformatics & Computational": [],
    "Other Specialized Techniques": [],
  };

  skillsList.forEach((s) => {
    const sl = s.toLowerCase();
    if (
      /molecular work|cloning|pcr|crispr|plasmid|western|protein|dna|rna|sds page|restriction/i.test(
        sl
      )
    ) {
      categories["Molecular Biology"].push(
        s.replace(/^(Molecular Work\s*[-:]?\s*)/i, "").trim()
      );
    } else if (
      /cell culture|aav|transfection|transduction|ipsc|neuron culture|drg cell/i.test(
        sl
      )
    ) {
      categories["Cell Culture & Viral Vectors"].push(
        s.replace(/^(Cell Culture\s*[-:]?\s*|AAV preparation\s*[-:]?\s*)/i, "").trim()
      );
    } else if (
      /animal surger|crush|perfusion|injection of viral|implant|animal handling|animal husbandry|genotyping/i.test(
        sl
      )
    ) {
      categories["Animal Surgeries & In Vivo"].push(
        s.replace(/^(Animal Surgeries\s*[-:]?\s*|Animal Husbandry\s*[-:]?\s*)/i, "").trim()
      );
    } else if (
      /tissue processing|vibratome|cryosection|immunohistochemistry|ihc|embedding|dissection|tissue screening/i.test(
        sl
      )
    ) {
      categories["Tissue Processing & Histology"].push(
        s.replace(/^(Tissue Processing\s*[-:]?\s*|Tissue Screening\s*[-:]?\s*)/i, "").trim()
      );
    } else if (
      /microscopy|zen software|imagej|leica|imaging|image processing/i.test(
        sl
      )
    ) {
      categories["Microscopy & Imaging"].push(
        s.replace(/^(Microscopy\s*[-:]?\s*|Image Processing tools\s*[-:]?\s*)/i, "").trim()
      );
    } else if (
      /genomics|atac|rna-seq|cut & run|hic|riboseq|facs|nuclei isolation/i.test(
        sl
      )
    ) {
      categories["Genomics & Sequencing"].push(
        s.replace(/^(Genomics\s*[-:]?\s*)/i, "").trim()
      );
    } else if (
      /behavior|ladder|grip strength|hip raise|deep lab cut/i.test(sl)
    ) {
      categories["Behavioral Analysis"].push(
        s.replace(/^(Behavior Data (Recording|Analysis)\s*[-:]?\s*)/i, "").trim()
      );
    } else if (
      /bioinformatics|basics of r|python|matlab|go analyses|single-cell rnaseq analysis/i.test(
        sl
      )
    ) {
      categories["Bioinformatics & Computational"].push(
        s.replace(/^(Bioinformatics\s*[-:]?\s*)/i, "").trim()
      );
    } else {
      categories["Other Specialized Techniques"].push(s);
    }
  });

  const result = {};
  Object.entries(categories).forEach(([k, v]) => {
    if (v.length > 0) result[k] = v;
  });
  return result;
}

function run() {
  if (!fs.existsSync(CSV_PATH)) {
    console.error("Testimonial.csv not found at", CSV_PATH);
    return;
  }

  const content = fs.readFileSync(CSV_PATH, "utf8");
  const rows = parseCSV(content);

  const alumniMap = {
    "Arupam Biswas": rows[4] || rows[0],
    "Katha Sanyal": rows[1],
    "Soupayan Banerjee": rows[6],
    "Pratikhya Acharya": rows[7],
    "Aastha Khiwani": rows[10],
    "Meghana Madhu": rows[9],
    "Deepta Beji": rows[12],
    "Sneha Manjunath": rows[8],
    "Sanskruti Karwa": rows[3],
  };

  const parsed = {};

  Object.entries(alumniMap).forEach(([name, row]) => {
    if (!row) return;

    const skillsRaw = splitItems(
      row[
        "What Research skills were you trained on in the Venkatesh Lab? Choose ALL that apply."
      ]
    );
    const softSkills = splitItems(
      row["Training on Soft Skills. Choose ALL that apply"]
    );
    const facilityTraining = splitItems(
      row[
        "What Basic Training did you undergo in CCMB formally by the Facilities?"
      ]
    );

    parsed[name] = {
      name,
      originalName: (row["Your name"] || "").trim(),
      currentPosition: (row["Your Current Position"] || "").trim(),
      tenure: (
        row["The Tenure years (or months) you spent in Venkatesh Lab"] || ""
      ).trim(),
      trainingType: (
        row[
          "Were you a Dissertation Student or did you attend a PBST?"
        ] || ""
      ).trim(),
      qualification: (
        row[
          "What was your educational Qualification and info at the time of joining Venkatesh Lab?( Your college, Degree etc)"
        ] || ""
      ).trim(),
      priorSkills: (
        row[
          "What research skills did you have prior to joining Venkatesh Lab? Explain in Detail"
        ] || ""
      ).trim(),
      categorizedSkills: categorizeSkills(skillsRaw),
      totalSkillsCount: skillsRaw.length,
      softSkills,
      facilityTraining,
      conferencesAttended: (
        row["How many conferences did you ATTEND? Where and When?"] || ""
      ).trim(),
      conferencesPresented: (
        row["How many conferences did you PRESENT ? Where and When?"] || ""
      ).trim(),
      importanceRating: (
        row[
          "How important was your training here at V lab for your PhD/PostDoc/Career on a scale of 1- 10"
        ] || ""
      ).trim(),
      mentorSupport: (
        row[
          "What kind of support did you receive for your applications to the Master's/PhD program? How important was it to you to receive admission?"
        ] || ""
      ).trim(),
      publications: (
        row[
          "How many preprints/publications were you listed as an author during your tenure in the V lab. Answer if 1st, second or middle author. "
        ] || ""
      ).trim(),
      testimonial: (
        row[
          "Give us a testimonial about your training in the Venkatesh Lab (that may be shared publicly if you give consent)"
        ] || ""
      ).trim(),
      investmentFeedback: (
        row[
          "Do you think the monetary investment towards a PBST/Dissertation fee was worth it for you? Why and how?"
        ] || ""
      ).trim(),
      additionalComments: (
        row["Are there any other relevant comments you have to share?"] || ""
      ).trim(),
    };
  });

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(parsed, null, 2), "utf8");
  console.log(
    `Updated testimonials for ${Object.keys(parsed).length} alumni in src/assets/testimonials.json`
  );
}

run();
