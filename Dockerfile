FROM node:22-alpine AS final
WORKDIR /app
COPY package.json package-lock.json server.js ./
RUN npm ci
CMD [ "npm" , "start" ]
