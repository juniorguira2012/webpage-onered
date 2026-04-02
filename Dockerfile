FROM node:20-slim

# Instalamos git
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Tu truco para bypass de caché (Actualízalo al subir a Git)
ENV CACHE_BYPASS=202604081

# Limpiamos y clonamos
RUN rm -rf ./* && git clone https://github.com/juniorguira2012/webpage-onered.git .

# 1. Instalamos dependencias
RUN npm install

# 2. ¡PASO CRUCIAL!: Construir el proyecto de Vite
# Esto genera la carpeta /dist con las imágenes y el código nuevo
RUN npm run build

EXPOSE 3000

# 3. Asegúrate de que server.js apunte a la carpeta /dist
CMD ["node", "server.js"]