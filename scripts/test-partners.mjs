import puppeteer from "puppeteer-core";

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function testPartners() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto("http://localhost:3000/partners", { waitUntil: "networkidle0" });

  await page.type("input[placeholder*='Apex']", "OmniMotion Robotics");
  await page.type("input[placeholder='Full Name']", "Elena Rostova");
  await page.type("input[type=email]", "elena@omnimotion.tech");
  await page.type("textarea", "Actuator components and servo motors.");

  const submitBtn = await page.$("button[type=submit]");
  await submitBtn.scrollIntoView();
  await submitBtn.click();

  await new Promise((r) => setTimeout(r, 1500));
  const html = await page.content();
  console.log("Includes 'Inquiry Received':", html.includes("Inquiry Received"));
  console.log("Includes 'Elena Rostova':", html.includes("Elena Rostova"));

  await browser.close();
}

testPartners();
