// ============================================================================
// GOOGLE APPS SCRIPT FOR MAHENDRA COMMERCE CLASSES CONTACT FORM
// ============================================================================
// Steps to setup:
// 1. Go to script.google.com
// 2. Create a new Apps Script project
// 3. Copy all the code below into the editor
// 4. Save the project
// 5. Click "Deploy" -> "New Deployment" -> Select "Web app"
// 6. Execute as: Me (your account)
// 7. Who has access: "Anyone, even anonymous"
// 8. Click "Deploy"
// 9. Copy the deployment URL and paste it in contact.tsx as SCRIPT_URL
// ============================================================================

const SHEET_ID = 'YOUR_SHEET_ID'; // Replace with your Google Sheet ID
const SHEET_NAME = 'Responses'; // Change if your sheet has a different name

function doPost(e) {
  try {
    // Get the spreadsheet and sheet
    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, create it
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      // Add headers
      sheet.appendRow(['Timestamp', 'Name', 'Phone', 'Subject', 'Message']);
    }

    // Extract data from the form
    const name = e.parameter.name || '';
    const phone = e.parameter.phone || '';
    const subject = e.parameter.subject || '';
    const message = e.parameter.message || '';
    const timestamp = e.parameter.timestamp || new Date().toLocaleString('en-IN');

    // Append data to the sheet
    sheet.appendRow([timestamp, name, phone, subject, message]);

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Form submitted successfully',
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('Error: ' + error.toString());
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString(),
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// ============================================================================
// SETUP INSTRUCTIONS:
// ============================================================================
// 1. Create a new Google Sheet at https://sheets.google.com
// 2. Copy the Sheet ID from the URL (between /d/ and /edit)
//    Example URL: https://docs.google.com/spreadsheets/d/ABC123/edit
//    Sheet ID is: ABC123
// 3. Replace 'YOUR_SHEET_ID' above with your actual Sheet ID
// 4. Deploy this as a Web App (Anyone anonymous access)
// 5. Copy the Web App URL from deployment
// 6. In contact.tsx, replace:
//    const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/usercontent';
//    With the actual URL from step 5
// 7. Test the form - fill it out and submit
// 8. Check your Google Sheet to verify data is being saved
// ============================================================================
