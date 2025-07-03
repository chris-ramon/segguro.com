#!/bin/bash

source .env && ./bin/production/build.sh && ./bin/production/start.sh
