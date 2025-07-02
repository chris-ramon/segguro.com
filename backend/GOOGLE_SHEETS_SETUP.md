# Google Sheets Integration Setup

This document explains how to set up Google Sheets integration for the visitor service.

## Environment Variables

Set the following environment variables for Google Sheets integration:

### Required
- `GOOGLE_CREDENTIALS_JSON`: JSON string containing Google service account credentials
- `GOOGLE_SPREADSHEET_ID`: The ID of the Google Spreadsheet to write visitor data to

### Optional
- `GOOGLE_SHEET_RANGE`: The range within the spreadsheet to append data (default: "Sheet1!A:F")

## Google Cloud Setup

1. **Create a Google Cloud Project**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one

2. **Enable Google Sheets API**
   - In the Google Cloud Console, go to "APIs & Services" > "Library"
   - Search for "Google Sheets API" and enable it

3. **Create Service Account**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Fill in the service account details
   - Download the JSON key file

4. **Set up the Spreadsheet**
   - Create a Google Spreadsheet
   - Copy the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)
   - Share the spreadsheet with the service account email address (found in the JSON file)
   - Give the service account "Editor" permissions

## Environment Setup Examples

### Docker/Production
```bash
export GOOGLE_CREDENTIALS_JSON='{"type":"service_account","project_id":"your-project",...}'
export GOOGLE_SPREADSHEET_ID="1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
export GOOGLE_SHEET_RANGE="Sheet1!A:F"
```

### Local Development
```bash
# Option 1: Use service account JSON
export GOOGLE_CREDENTIALS_JSON='$(cat /path/to/service-account.json)'
export GOOGLE_SPREADSHEET_ID="your-spreadsheet-id"

# Option 2: Use Application Default Credentials
# Place service-account.json in your home directory and run:
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/service-account.json"
export GOOGLE_SPREADSHEET_ID="your-spreadsheet-id"
```

## Spreadsheet Format

The visitor data will be appended to the spreadsheet in the following column order:
1. Name
2. Lastname  
3. Email
4. Phone
5. Company Name
6. Company Role

Make sure your spreadsheet has headers in the first row if desired:
| Name | Lastname | Email | Phone | Company Name | Company Role |
|------|----------|-------|-------|--------------|--------------|

## Testing the Integration

You can test the integration using GraphQL:

```graphql
mutation {
  createVisitor(
    name: "John"
    lastname: "Doe" 
    email: "john.doe@example.com"
    phone: "+1234567890"
    companyName: "Example Corp"
    companyRole: "Developer"
  ) {
    name
    lastname
    email
    phone
    companyName
    companyRole
  }
}
```

## Troubleshooting

- **Authentication errors**: Make sure the service account JSON is valid and the Sheets API is enabled
- **Permission errors**: Ensure the spreadsheet is shared with the service account email
- **Spreadsheet not found**: Verify the spreadsheet ID is correct and accessible
