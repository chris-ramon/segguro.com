package services

import (
	"context"
	authTypes "github.com/chris-ramon/golang-scaffolding/domain/auth/types"
	userTypes "github.com/chris-ramon/golang-scaffolding/domain/users/types"
	visitorTypes "github.com/chris-ramon/golang-scaffolding/domain/visitors/types"
)

type AuthService interface {
	CurrentUser(ctx context.Context, jwtToken string) (*authTypes.CurrentUser, error)
	AuthUser(ctx context.Context, username string, pwd string) (*authTypes.CurrentUser, error)
}

type UserService interface {
	FindUsers(ctx context.Context) ([]*userTypes.User, error)
}

type VisitorService interface {
	CreateVisitor(ctx context.Context, name, lastname, email, phone, companyName, companyRole string) (*visitorTypes.Visitor, error)
}

type Services struct {
	AuthService    AuthService
	UserService    UserService
	VisitorService VisitorService
}
