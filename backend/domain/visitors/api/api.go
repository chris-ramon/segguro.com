package api

type Visitor struct {
	Name        string `json:"name"`
	Lastname    string `json:"lastname"`
	Email       string `json:"email"`
	Phone       string `json:"phone"`
	CompanyName string `json:"companyName"`
	CompanyRole string `json:"companyRole"`
}
