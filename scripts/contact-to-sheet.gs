/**
 * Contact form → Google Sheet
 *
 * SETUP (one-time, ~2 min):
 * 1. Open your sheet:
 *    https://docs.google.com/spreadsheets/d/1juylVq-a9NFespisjZFAH6lzQ961w1xJw7oYZRYzKnM/edit
 * 2. Extensions → Apps Script
 * 3. Delete any stub code, paste THIS entire file, Save
 * 4. Deploy → New deployment → Type: Web app
 *      - Execute as: Me
 *      - Who has access: Anyone
 * 5. Authorize when prompted, then copy the Web app URL
 * 6. Paste that URL into src/components/Contact.jsx as FORM_ENDPOINT
 *    (or set VITE_CONTACT_FORM_URL in a .env file)
 *
 * Optional: put headers in row 1 of Sheet1: Timestamp | Name | Email | Message
 */

var SHEET_ID = "1juylVq-a9NFespisjZFAH6lzQ961w1xJw7oYZRYzKnM";
var SHEET_NAME = "Sheet1";

function doPost(e) {
  try {
    var data = {};
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    }

    var ss = SpreadsheetApp.openById(SHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];

    // Seed header row if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Message"]);
    }

    sheet.appendRow([
      new Date(),
      data.name || "",
      data.email || "",
      data.message || "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    "Wisconsin Robotics contact form endpoint is live."
  );
}
