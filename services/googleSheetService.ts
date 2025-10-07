
import { Paper } from '../types';

/**
 * Fetches and parses data from a Google Sheet published as a CSV.
 * NOTE: This is a simple CSV parser and assumes there are no commas within the data fields themselves.
 * For more complex CSVs, a more robust parsing library would be needed.
 * @param csvUrl The public URL of the Google Sheet CSV.
 * @returns A promise that resolves to an array of Paper objects.
 */
export async function fetchAndParseSheetData(csvUrl: string): Promise<Paper[]> {
  try {
    const response = await fetch(csvUrl);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const csvText = await response.text();
    const lines = csvText.trim().split('\n');
    
    if (lines.length < 2) {
      return []; // Return empty if no data rows
    }

    const headers = lines[0].split(',').map(h => h.trim());
    const data: Paper[] = [];

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      if (values.length === headers.length) {
        const entry = headers.reduce((obj, header, index) => {
          obj[header as keyof Paper] = values[index].trim();
          return obj;
        }, {} as Partial<Paper>);
        data.push(entry as Paper);
      }
    }
    
    return data;
  } catch (error) {
    console.error("Failed to fetch or parse sheet data:", error);
    throw new Error("Could not load data from the Google Sheet. Please check the URL and ensure it's published correctly.");
  }
}
