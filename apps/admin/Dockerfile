# Use Node.js 20 as the base image
FROM node:20 AS build

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy all workspace files and source code
COPY . .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Accept build arguments
ARG VITE_API_URL
ENV VITE_API_URL=https://api-nexus.hecsanchez.com

# Build all packages (if using TypeScript references or a monorepo build)
RUN pnpm build:packages 
RUN pnpm --filter admin build

# Build the admin application
WORKDIR /app/apps/admin
RUN pnpm build

# Production stage
FROM nginx:alpine

# Copy the built assets from the build stage
COPY --from=build /app/apps/admin/dist /usr/share/nginx/html

# Copy nginx configuration
COPY apps/admin/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 