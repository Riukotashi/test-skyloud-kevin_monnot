FROM node:10.19-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY app.js .
EXPOSE 3000
USER node
CMD ["node", "app.js"]