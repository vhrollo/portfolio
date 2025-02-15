# Use Node.js LTS version
FROM oven/bun:latest

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN bun run build

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["bun", "run", "start"]

