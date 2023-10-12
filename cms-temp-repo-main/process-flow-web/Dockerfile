# ### STAGE 1: Build ###
# FROM node:18.16 AS build
# RUN npm install -g @angular/cli@16
# WORKDIR /process-flow-web
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN ng version
# RUN ng build --aot --output-hashing=all

### STAGE 2: Run ###
FROM nginx:1.23.3
COPY ./process-flow-web/cms-pf-web.conf /etc/nginx/nginx.conf
COPY ./process-flow-web/process-flow-web/ /usr/share/nginx/html
