FROM node:14

WORKDIR /app

COPY . .

RUN npm install && npm run build


WORKDIR /app/dist/src

EXPOSE 3000

CMD ["node","index.js"]