#!/bin/bash

# Create optimized directories
mkdir -p public/optimized/services
mkdir -p public/optimized/testimonials

# Function to process images
process_image() {
    local input=$1
    local output=$2
    local width=$3
    local height=$4

    # Resize and optimize the image
    magick "$input" -resize "${width}x${height}^" -gravity center -extent "${width}x${height}" -quality 85 "$output"
    
    # Create WebP version
    cwebp -q 85 "$output" -o "${output%.*}.webp"
}

# Process hero background
process_image "public/hero-bg.jpg" "public/optimized/hero-bg.jpg" 1920 1080

# Process about image
process_image "public/about.jpg" "public/optimized/about.jpg" 800 600

# Process service images
process_image "public/services/social.jpg" "public/optimized/services/social.jpg" 400 300
process_image "public/services/amazon.jpg" "public/optimized/services/amazon.jpg" 400 300
process_image "public/services/email.jpg" "public/optimized/services/email.jpg" 400 300

# Process testimonial images
process_image "public/testimonials/john.jpg" "public/optimized/testimonials/john.jpg" 200 200
process_image "public/testimonials/sarah.jpg" "public/optimized/testimonials/sarah.jpg" 200 200
process_image "public/testimonials/michael.jpg" "public/optimized/testimonials/michael.jpg" 200 200

echo "Image compression completed!" 