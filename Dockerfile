# Use the official Node.js image as the base image
FROM node:latest

# Set the image name
LABEL name="Schedulr"

# Set the working directory
WORKDIR /app

# Copy the application code
COPY . .

# Install dependencies
RUN npm i
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

VOLUME [ "./.env" ]

# Start the application
CMD ["npm", "start"]