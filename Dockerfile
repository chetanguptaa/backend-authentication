FROM node:14-alpine
WORKDIR /home/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 8000
CMD ["node", "/home/app/index.js"]