# Google Sheet Form Submission Setup Guide

## 📋 Overview
Your contact forms (main page + modal) now submit data directly to a Google Sheet using Google Apps Script as the backend.

## ⚙️ Setup Steps

### Step 1: Create a Google Sheet
1. Go to https://sheets.google.com
2. Click "Create" → "Blank spreadsheet"
3. Name it "MCC Classes - Contact Responses"
4. The sheet will auto-create with name "Sheet1"
5. Rename it to "Responses" (optional but recommended)

### Step 2: Get Your Sheet ID
1. Open the Google Sheet
2. Look at the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID/edit`
3. Copy the SHEET_ID (long string between `/d/` and `/edit`)
4. Example: `1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t`

### Step 3: Set Up Google Apps Script
1. Go to https://script.google.com
2. Click "New project"
3. Delete any existing code in the editor
4. Copy all code from `GOOGLE_APPS_SCRIPT.js` file
5. Paste it into the Apps Script editor
6. Replace `YOUR_SHEET_ID` with your actual Sheet ID from Step 2
7. Save the project (Ctrl+S)

### Step 4: Deploy as Web App
1. Click "Deploy" button → "New deployment"
2. Click gear icon → Select "Web app"
3. Set:
   - Execute as: `Me` (your Google account)
   - Who has access: `Anyone, even anonymous` ⚠️ (important!)
4. Click "Deploy"
5. Grant permissions when prompted
6. Copy the deployment URL shown (looks like): 
   `https://script.google.com/macros/s/ABC123XYZ/usercontent`

### Step 5: Update Contact Form URL
1. Open `app/components/contact.tsx`
2. Find this line:
   ```jsx
   const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/usercontent';
   ```
3. Replace with your deployment URL from Step 4
4. Save the file

### Step 6: Test the Form
1. Run your Next.js app: `npm run dev`
2. Visit the website
3. Fill out the contact form (main or modal)
4. Click "Send Message"
5. Check your Google Sheet - new row should appear with the data

---

## ✅ Features
- ✅ Both forms (main + modal) submit to same Google Sheet
- ✅ Auto-timestamps entries
- ✅ Loading state shows "Sending..." while submitting
- ✅ Works even if Google Apps Script has temporary issues
- ✅ All form fields captured: Name, Phone, Subject, Message
- ✅ Modal auto-opens after 2 seconds on page load
- ✅ All existing functionality preserved

---

## 🔄 Form Data Fields
Each submission captures:
- **Timestamp**: When the form was submitted
- **Name**: Student/visitor name
- **Phone**: Contact number
- **Subject**: Inquiry subject
- **Message**: Full message content

---

## 🐛 Troubleshooting

### "Access Denied" Error
- Make sure deployment is set to "Anyone, even anonymous"
- Redeploy and select the correct permissions

### Form submits but data doesn't appear
- Check if Sheet ID is correct
- Verify sheet name matches (default: "Responses")
- Check Google Sheets permissions are correct

### Deploy URL not working
- Redeploy the Apps Script
- Copy the new URL carefully (no extra spaces)

---

## 📱 Mobile & Performance
- Form works on all devices (mobile, tablet, desktop)
- Async submission - doesn't block UI
- Fast submission handling
- Auto-closes modal after successful submission

---

## 🔐 Security Notes
- Never share your Sheet ID publicly
- Deployment with anonymous access is safe (only receives form data)
- Data is stored in your Google Drive account

---

**All setup complete?** Your forms are now live and submitting to Google Sheets! 🎉
