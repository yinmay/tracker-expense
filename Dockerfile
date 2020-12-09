FROM node:12 
WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
RUN yarn build
COPY . . 
EXPOSE 8000 
CMD [ "yarn", "start" ] 