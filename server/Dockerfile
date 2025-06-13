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
# Expone el puerto donde corre tu API (asegúrate que coincide con tu app, p.ej., 3000)
EXPOSE 3000

# CAMBIO AQUÍ: Usa el formato de shell para que && funcione correctamente
CMD ["sh", "-c", "npm run build && npm start"]

# Comando para desarrollo (puedes cambiar por otro si usas build separado)
# CMD ["npm", "run", "dev"]