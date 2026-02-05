# FROM node:20-slim
# WORKDIR /app
# COPY package.json ./
# RUN npm install --production
# COPY dist ./dist
# COPY server.js ./
# EXPOSE 3000
# CMD ["node", "server.js"]

# #elpack cambio
# FROM node:20-slim
# RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*
# WORKDIR /app
# RUN rm -rf ./* && git clone https://github.com/juniorguira2012/webpage-onered.git .
# RUN npm install --production
# EXPOSE 3000
# CMD ["node", "server.js"]
FROM node:20-slim

# Instalamos git
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# TRUCO: Cambia este número cada vez que quieras forzar un refresh de Git
ENV CACHE_BYPASS=1

# Borramos y clonamos (ahora Docker no usará la caché por la variable de arriba)
RUN rm -rf ./* && git clone https://github.com/juniorguira2012/webpage-onered.git .

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]