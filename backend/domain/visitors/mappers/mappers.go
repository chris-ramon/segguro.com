package mappers

import (
	"github.com/chris-ramon/golang-scaffolding/domain/visitors/api"
	"github.com/chris-ramon/golang-scaffolding/domain/visitors/types"
)

func VisitorFromTypeToAPI(visitor *types.Visitor) api.Visitor {
	return api.Visitor{
		Name:               visitor.Name,
		Lastname:           visitor.Lastname,
		Email:              visitor.Email,
		Phone:              visitor.Phone,
		CompanyName:        visitor.CompanyName,
		CompanyRole:        visitor.CompanyRole,
		TermsAndConditions: visitor.TermsAndConditions,
	}
}
