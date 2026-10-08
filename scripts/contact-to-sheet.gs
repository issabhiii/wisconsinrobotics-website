/**
 * DEPRECATED — contact form now posts to Google Forms (see Contact.jsx).
 * Kept only as a reference if you ever need an Apps Script bridge again.
 *
 * Old flow: site → this web app → Sheet
 * New flow: site → Google Form formResponse → linked Sheet
 */

var SHEET_ID = "1Wy3FDGZcGDXWnVZXekeADAQ_GdrNxXUYSHBHFk1aMlA";
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
    "Deprecated. Contact form uses Google Forms now."
  );
}
