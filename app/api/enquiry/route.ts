import { NextResponse } from "next/server";
import { google } from "googleapis";
import path from "path";
import { promises as fs } from "fs";

// Your Google Sheet ID (from the URL)
const SHEET_ID = "1HuHKstX5QiIfZco66H1Hyjv1K-r2JMbSS6qN_1bmiRI";

// Helper to get Google auth client
async function getAuth() {
  const credentialsPath = path.join(process.cwd(), "google-service-account.json");
  const credentials = JSON.parse(await fs.readFile(credentialsPath, "utf8"));
  const scopes = ["https://www.googleapis.com/auth/spreadsheets"];
  return new google.auth.GoogleAuth({
    credentials,
    scopes,
  });
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // Authenticate with Google Sheets API
    const auth = await getAuth();
    const sheets = google.sheets({ version: "v4",  auth });

    // Append the enquiry to the sheet (first sheet, columns A-D)
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Sheet1!A:D",
      valueInputOption: "RAW",
      requestBody: {
        values: [[name, email, phone, message]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}