FROM node:16.14.2-alpine
WORKDIR /app/
RUN cd /app/
COPY ["./package*.json", "./tsconfig.json", "./babel.config.js", ".env*", "./"]

RUN npm install
COPY ./src ./src
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start"]
