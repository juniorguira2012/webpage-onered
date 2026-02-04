# Usamos una versión ligera de Node
FROM node:20-slim

# Directorio de trabajo
WORKDIR /app

# Copiamos solo lo necesario para que el servidor funcione
COPY package*.json ./
RUN npm install --production

# Copiamos tu carpeta dist (el React ya compilado) y el server.js
COPY dist ./dist
COPY server.js ./

# Exponemos el puerto que configuraste
EXPOSE 3000

# Arrancamos el servidor
CMD ["node", "server.js"]