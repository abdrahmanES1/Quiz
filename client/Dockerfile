# Stage 1
FROM node:21 as build-stage

WORKDIR /project/client
COPY package.json .
COPY . .
RUN npm install
ENV NODE_OPTIONS=--max_old_space_size=2048


RUN npm run build

# Stage 2
FROM nginx:1.17.0-alpine

COPY --from=build-stage /project/client/build /usr/share/nginx/html
EXPOSE 3000

CMD nginx -g 'daemon off;'