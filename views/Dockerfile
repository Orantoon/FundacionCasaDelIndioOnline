# Usa una imagen base con Node.js preinstalado
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el package.json y el package-lock.json a la imagen
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto al directorio de trabajo
COPY . .

# Expone el puerto en el que el servidor de desarrollo de React se ejecuta por defecto
EXPOSE 3000

# Comando para ejecutar la aplicación React
CMD ["npm", "start"]
