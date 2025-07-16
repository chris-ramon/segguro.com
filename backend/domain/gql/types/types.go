package types

import (
	"github.com/graphql-go/graphql"
)

var CurrentUserType = graphql.NewObject(graphql.ObjectConfig{
	Name: "CurrentUserType",
	Fields: graphql.Fields{
		"id": &graphql.Field{
			Description: "The id of the user.",
			Type:        graphql.String,
		},
		"username": &graphql.Field{
			Description: "The username of the user.",
			Type:        graphql.String,
		},
		"jwt": &graphql.Field{
			Description: "The current JWT of the user.",
			Type:        graphql.String,
		},
	},
})

var UserType = graphql.NewObject(graphql.ObjectConfig{
	Name: "UserType",
	Fields: graphql.Fields{
		"id": &graphql.Field{
			Description: "The id of the user.",
			Type:        graphql.String,
		},
		"username": &graphql.Field{
			Description: "The username of the user.",
			Type:        graphql.String,
		},
	},
})

var VisitorType = graphql.NewObject(graphql.ObjectConfig{
	Name: "VisitorType",
	Fields: graphql.Fields{
		"name": &graphql.Field{
			Description: "The name of the visitor.",
			Type:        graphql.String,
		},
		"lastname": &graphql.Field{
			Description: "The lastname of the visitor.",
			Type:        graphql.String,
		},
		"email": &graphql.Field{
			Description: "The email of the visitor.",
			Type:        graphql.String,
		},
		"phone": &graphql.Field{
			Description: "The phone number of the visitor.",
			Type:        graphql.String,
		},
		"companyName": &graphql.Field{
			Description: "The company name of the visitor.",
			Type:        graphql.String,
		},
		"companyRole": &graphql.Field{
			Description: "The company role of the visitor.",
			Type:        graphql.String,
		},
		"termsAndConditions": &graphql.Field{
			Description: "The terms and conditions acceptance of the visitor.",
			Type:        graphql.String,
		},
	},
})
