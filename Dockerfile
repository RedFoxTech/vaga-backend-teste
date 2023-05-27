FROM node:14

WORKDIR /app

COPY . .

RUN npm install && npx tsc

WORKDIR /app/dist

EXPOSE 3000

CMD ["node","index.js"]