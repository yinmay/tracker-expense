FROM node:12 
WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
COPY . . 
EXPOSE 8000 
CMD [ "yarn", "start" ] 