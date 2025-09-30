const fs = require("fs-extra");
const path = require("path");
const { parse: csvParser } = require("csv-parse/sync");

// important file and folders
const ROOT_DIR = process.cwd();
const CSV_FILE = path.join(ROOT_DIR, "websites.csv");
const REACT_TEMPLATE_DIR = path.join(ROOT_DIR, "react-template");
const OUTER_DIR = path.join(ROOT_DIR, "build");

async function main() {
  // remove and initialize files
  await fs.remove(OUTER_DIR);
  await fs.ensureDir(OUTER_DIR);

  const csvText = await fs.readFile(CSV_FILE, "utf8");
  const appsList = csvParser(csvText, {
    columns: true,
    skip_empty_lines: true,
  });

  appsList.forEach(async (app) => {
    const title = app.title || "";
    const phone = app.phone || "";
    const address = app.address || "";

    // copy react template
    const appTemplate = path.join(
      OUTER_DIR,
      title.toLowerCase().split(" ").join("_")
    );

    await fs.copy(REACT_TEMPLATE_DIR, appTemplate);

    //  update title in index.html
    const indexPath = path.join(appTemplate, "index.html");
    let indexHtml = await fs.readFile(indexPath, "utf8");
    indexHtml = indexHtml.replace(/__TITLE__/g, title);
    await fs.writeFile(indexPath, indexHtml, "utf8");

    //   update app data
    const appPath = path.join(appTemplate, "src", "App.jsx");

    let appCode = await fs.readFile(appPath, "utf8");
    appCode = appCode
      .replace(/__PHONE__/g, phone)
      .replace(/__ADDRESS__/g, address);
    await fs.writeFile(appPath, appCode, "utf8");
  });
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
