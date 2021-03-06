FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g @vue/cli

# make the 'app' folder the current working directory
WORKDIR /opt/front/

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory
COPY . .

# build app for production with minification
RUN npm run build

WORKDIR /opt/front/dist/
