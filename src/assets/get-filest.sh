#!/bin/bash

# Define files as an array for better handling
files=(
  meta.png
  shopify.png
  starbucks.png
  tesla.png
)

# Ensure the 'company' directory exists
mkdir -p company

# Loop through the files and download them
for file in "${files[@]}"; do
  wget "https://raw.githubusercontent.com/adrianhajdin/project_3D_developer_portfolio/refs/heads/main/src/assets/company/${file}" -O "company/${file}"
done
