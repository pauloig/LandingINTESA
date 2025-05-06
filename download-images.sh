#!/bin/bash

# Create necessary directories
mkdir -p public/images
mkdir -p public/services
mkdir -p public/testimonials

# Download hero background
curl -L "https://images.unsplash.com/photo-1497366216548-37526070297c" -o public/hero-bg.jpg

# Download about image
curl -L "https://images.unsplash.com/photo-1522071820081-009f0129c71c" -o public/about.jpg

# Download service images
curl -L "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7" -o public/services/social.jpg
curl -L "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da" -o public/services/amazon.jpg
curl -L "https://images.unsplash.com/photo-1596526131083-e8c633c948d2" -o public/services/email.jpg

# Download testimonial profile pictures
curl -L "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" -o public/testimonials/john.jpg
curl -L "https://images.unsplash.com/photo-1494790108377-be9c29b29330" -o public/testimonials/sarah.jpg
curl -L "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" -o public/testimonials/michael.jpg 