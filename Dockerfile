FROM node:18.17.0
WORKDIR /test22weather
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "run", "dev" ]
