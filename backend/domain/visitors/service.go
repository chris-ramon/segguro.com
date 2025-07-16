package visitors

import (
	"context"
	"fmt"
	"os"

	"google.golang.org/api/option"
	"google.golang.org/api/sheets/v4"
	"golang.org/x/oauth2/google"

	visitorTypes "github.com/chris-ramon/golang-scaffolding/domain/visitors/types"
)

type service struct {
	sheetsService   *sheets.Service
	spreadsheetID   string
	sheetRange      string
}

func (s *service) CreateVisitor(ctx context.Context, name, lastname, email, phone, companyName, companyRole, termsAndConditions string) (*visitorTypes.Visitor, error) {
	visitor := &visitorTypes.Visitor{
		Name:               name,
		Lastname:           lastname,
		Email:              email,
		Phone:              phone,
		CompanyName:        companyName,
		CompanyRole:        companyRole,
		TermsAndConditions: termsAndConditions,
	}

	// Convert visitor data to spreadsheet row
	values := []interface{}{
		visitor.Name,
		visitor.Lastname,
		visitor.Email,
		visitor.Phone,
		visitor.CompanyName,
		visitor.CompanyRole,
		visitor.TermsAndConditions,
	}

	// Create the request to append data
	valueRange := &sheets.ValueRange{
		Values: [][]interface{}{values},
	}

	// Append the data to the spreadsheet
	_, err := s.sheetsService.Spreadsheets.Values.Append(
		s.spreadsheetID,
		s.sheetRange,
		valueRange,
	).ValueInputOption("RAW").Context(ctx).Do()

	if err != nil {
		return nil, fmt.Errorf("failed to append visitor data to spreadsheet: %w", err)
	}

	return visitor, nil
}

func NewService() (*service, error) {
	// Get Google credentials from environment variable or default path
	credentialsJSON := os.Getenv("GOOGLE_CREDENTIALS_JSON")
	var creds *google.Credentials
	var err error

	if credentialsJSON != "" {
		// Use credentials from environment variable
		creds, err = google.CredentialsFromJSON(
			context.Background(),
			[]byte(credentialsJSON),
			sheets.SpreadsheetsScope,
		)
	} else {
		// Use default credentials (for local development)
		creds, err = google.FindDefaultCredentials(
			context.Background(),
			sheets.SpreadsheetsScope,
		)
	}

	if err != nil {
		return nil, fmt.Errorf("failed to get Google credentials: %w", err)
	}

	// Create the sheets service
	sheetsService, err := sheets.NewService(
		context.Background(),
		option.WithCredentials(creds),
	)
	if err != nil {
		return nil, fmt.Errorf("failed to create sheets service: %w", err)
	}

	// Get configuration from environment variables with defaults
	spreadsheetID := os.Getenv("GOOGLE_SPREADSHEET_ID")
	if spreadsheetID == "" {
		// Default spreadsheet ID - should be configured in production
		spreadsheetID = "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
	}

	sheetRange := os.Getenv("GOOGLE_SHEET_RANGE")
	if sheetRange == "" {
		// Default range - append to Sheet1 starting from column A
		sheetRange = "Sheet1!A:G"
	}

	return &service{
		sheetsService: sheetsService,
		spreadsheetID: spreadsheetID,
		sheetRange:    sheetRange,
	}, nil
}
