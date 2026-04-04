# Use an official Node.js image as the base image, but we tag it "AS build" to enable multi-stage builds, 
# which allows us to use another base image later for our "final" image.
FROM node:24 AS build 
# During build time, we also set the VITE_BACKEND_URL environment variable to "http://localhost:3000/api/v1". 
# This is the URL that our frontend will use to communicate with the backend during development.
# We can use "ARG" instruction to define environment variables that are only relevant when the image is being built.
# ARG instruction defines an envrionement variable that can be changed at build time using the "--build-arg" flag with the docker build command.
# the "ENV" instruction, sets the environment variable to a fixed value that will persist when the container is run from the resulting image.
ARG VITE_BACKEND_URL=http://localhost:3000/api/v1

# We set the working directory.
WORKDIR /build
# Copy package.json and package-lock.json files
COPY package.json .
COPY package-lock.json .
# Run npm install to install all dependcies in the container
RUN npm install 
# Copy all other files
COPY . .

# Additionally, we execute "npm run build" to create a static build of our Vite app
RUN npm run build

# We also need to create the "final" stage
# This time our base image "nginx", which runs an nginx web server
FROM nginx AS final  
# We set our working directory for this stage to "/var/www/html", which is the folder that nginx serves static files from.
WORKDIR /usr/share/nginx/html
# We copy everything from the "/build/dist" folder, which is where Vite puts the built static files from the "build" stage into the final stage
COPY --from=build /build/dist .