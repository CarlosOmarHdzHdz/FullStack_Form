# Etapa 1: Build y entorno de desarrollo/producción
FROM node:18
# Establece el directorio de trabajo
WORKDIR /app
# Copia los archivos de configuración de npm para optimizar la caché
COPY package*.json tsconfig.json ./
# Instala dependencias
RUN npm install
# Copia el código fuente
COPY src ./src
# Expone el puerto donde corre tu API
EXPOSE 3000
# Comando para producción (compila y luego ejecuta el JS compilado)
CMD ["sh", "-c", "npm run build && npm start"]

# Comando para desarrollo (puedes cambiar por otro si usas build separado)
# CMD ["npm", "run", "dev"]