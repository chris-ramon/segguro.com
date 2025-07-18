package cors

import (
	"net/http"
	"strings"

	"github.com/chris-ramon/golang-scaffolding/config"
)

// Config holds the CORS configuration
type Config struct {
	AllowedOrigins   []string
	AllowedMethods   []string
	AllowedHeaders   []string
	AllowCredentials bool
}

// DefaultConfig returns a default CORS configuration suitable for multiple environments.
func DefaultConfig(cfg *config.Config) *Config {
	allowedOrigins := []string{}
	localAllowedOrigins := []string{"http://localhost:5173"}
	productionAllowedOrigins := []string{"https://gateway-segguro-com.onrender.com", "https://www.segguro.com", "https://segguro.com"}

	if cfg.Env == config.ProductionEnv {
		allowedOrigins = productionAllowedOrigins
	} else if cfg.Env == config.LocalEnv {
		allowedOrigins = localAllowedOrigins
	}

	return &Config{
		AllowedOrigins:   allowedOrigins,
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Origin", "Content-Type", "Accept", "Authorization", "X-Requested-With"},
		AllowCredentials: true,
	}
}

// Middleware creates a CORS middleware with the given config
func Middleware(config *Config) func(http.HandlerFunc) http.HandlerFunc {
	return func(next http.HandlerFunc) http.HandlerFunc {
		return func(w http.ResponseWriter, r *http.Request) {
			origin := r.Header.Get("Origin")

			// Check if origin is allowed
			if origin != "" && isOriginAllowed(origin, config.AllowedOrigins) {
				w.Header().Set("Access-Control-Allow-Origin", origin)
			}

			// Set other CORS headers
			w.Header().Set("Access-Control-Allow-Methods", strings.Join(config.AllowedMethods, ", "))
			w.Header().Set("Access-Control-Allow-Headers", strings.Join(config.AllowedHeaders, ", "))

			if config.AllowCredentials {
				w.Header().Set("Access-Control-Allow-Credentials", "true")
			}

			// Handle preflight request
			if r.Method == "OPTIONS" {
				w.Header().Set("Access-Control-Max-Age", "86400") // Cache preflight for 24 hours
				w.WriteHeader(http.StatusOK)
				return
			}

			// Continue to next handler
			next(w, r)
		}
	}
}

// isOriginAllowed checks if the origin is in the allowed origins list
func isOriginAllowed(origin string, allowedOrigins []string) bool {
	for _, allowedOrigin := range allowedOrigins {
		if allowedOrigin == "*" || allowedOrigin == origin {
			return true
		}
	}
	return false
}
