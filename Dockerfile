FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN npm install -g typescript

RUN tsc

CMD ["node", "dist/index.js"]

EXPOSE 3000