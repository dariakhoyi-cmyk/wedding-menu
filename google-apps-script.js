// ─────────────────────────────────────────────────────────────
//  DARIA & ANDREW · WEDDING MENU RSVP COLLECTOR
//  Paste this entire script into your Google Sheet:
//  Extensions → Apps Script → replace everything → Save → Deploy
// ─────────────────────────────────────────────────────────────

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Add headers on first run if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Guest Name", "Meal Selection", "Dietary Notes"]);
      sheet.getRange(1, 1, 1, 4).setFontWeight("bold").setBackground("#6B2737").setFontColor("#FAF6EE");
      sheet.setFrozenRows(1);
    }

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || "",
      data.meal || "",
      data.dietary || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ─────────────────────────────────────────────────────────────
//  DEPLOY INSTRUCTIONS
//  1. Click "Deploy" → "New deployment"
//  2. Type: Web app
//  3. Execute as: Me
//  4. Who has access: Anyone
//  5. Click Deploy → copy the Web App URL
//  6. Paste that URL into your .env file as VITE_SHEETS_URL
// ─────────────────────────────────────────────────────────────
