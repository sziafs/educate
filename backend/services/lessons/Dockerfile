# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install all dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the code to the working directory
COPY . .

# Build the application
RUN yarn build

# Expose port 3000 for the application
EXPOSE 3000

# Run the application
CMD ["yarn", "start:dev"]