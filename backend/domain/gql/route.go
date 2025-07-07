package gql

import (
	"net/http"

	"github.com/graphql-go/handler"

	"github.com/chris-ramon/golang-scaffolding/config"
	"github.com/chris-ramon/golang-scaffolding/pkg/cors"
	"github.com/chris-ramon/golang-scaffolding/pkg/ctxutil"
	"github.com/chris-ramon/golang-scaffolding/pkg/route"
)

type Handlers interface {
	PostGraphQL() *handler.Handler
	GetGraphQL() *handler.Handler
}

type routes struct {
	handlers Handlers
	config   *config.Config
}

func (ro *routes) All() []route.Route {
	corsMiddleware := cors.Middleware(cors.DefaultConfig(ro.config))

	return []route.Route{
		route.Route{
			HTTPMethod: "GET",
			Path:       "/graphql",
			Handler: corsMiddleware(func(w http.ResponseWriter, r *http.Request) {
				r = r.WithContext(ctxutil.WithAuthHeader(r.Context(), r.Header))
				ro.handlers.GetGraphQL().ServeHTTP(w, r)
			}),
		},
		route.Route{
			HTTPMethod: "POST",
			Path:       "/graphql",
			Handler: corsMiddleware(func(w http.ResponseWriter, r *http.Request) {
				r = r.WithContext(ctxutil.WithAuthHeader(r.Context(), r.Header))
				ro.handlers.PostGraphQL().ServeHTTP(w, r)
			}),
		},
		route.Route{
			HTTPMethod: "OPTIONS",
			Path:       "/graphql",
			Handler: corsMiddleware(func(w http.ResponseWriter, r *http.Request) {
				// CORS middleware handles OPTIONS requests
			}),
		},
	}
}

func NewRoutes(config *config.Config, handlers Handlers) *routes {
	return &routes{
		config:   config,
		handlers: handlers,
	}
}
