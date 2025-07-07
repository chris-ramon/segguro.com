package config

import "os"

const ProductionEnv string = "production"
const LocalEnv string = "local"

type Config struct {
	Port string
	Env  string
}

type DBConfig struct {
	User    string
	PWD     string
	Host    string
	Name    string
	SSLMode string
}

func New() *Config {
	return &Config{
		Port: os.Getenv("PORT"),
		Env:  os.Getenv("ENV"),
	}
}

func NewDBConfig() *DBConfig {
	return &DBConfig{
		User:    os.Getenv("DB_USER"),
		PWD:     os.Getenv("DB_PWD"),
		Host:    os.Getenv("DB_HOST"),
		Name:    os.Getenv("DB_NAME"),
		SSLMode: os.Getenv("DB_SSL_MODE"),
	}
}
