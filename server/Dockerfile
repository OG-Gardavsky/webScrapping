FROM node:16.16.0-alpine3.15
WORKDIR /app
COPY . .
RUN npm install --production
CMD ["node", "src/app.js"]
EXPOSE 4000