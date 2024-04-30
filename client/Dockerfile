# Stage 1
FROM node:21 as build-stage

WORKDIR /project/client
COPY package.json .
RUN npm install
COPY . .



RUN npm run build

# Stage 2
FROM nginx:1.17.0-alpine

COPY --from=build-stage /ui/build /usr/share/nginx/html
EXPOSE $REACT_DOCKER_PORT

CMD nginx -g 'daemon off;'