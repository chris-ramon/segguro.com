#!/bin/bash
go version

# Disabling Cgo-based DNS: The -tags netgo build flag in Golang is used with the go build command to explicitly disable the use of the Cgo-based DNS resolver in the net package.
# Stripping Symbols: The -s flag removes the symbol table, reducing the binary size.
# Disabling DWARF Generation: The -w flag disables DWARF debug information, also reducing binary size.
go build -tags netgo -ldflags '-s -w' -o main
