FROM node:10.16.3

# Atualizando / Instalando pacotes
RUN apt-get update && apt-get install apt-utils nano vim libcups2-dev -y

RUN mkdir -p /app/home
WORKDIR /app/home

# Copiando aplicacao pro lado do volume
COPY . .

# Clonando env
COPY .env.example .env

# Instalando dependencias
RUN npm install

EXPOSE 3333
