FROM node:21

WORKDIR /project
COPY package.json .
COPY . .
RUN npm install
ENV NODE_OPTIONS=--max_old_space_size=2048
EXPOSE 4000
CMD ["npm" ,"run","server"]