#  Dockerfile for Node Express Backend
FROM node:20

# all commands executed relative to this directory where our code shall live in the container
WORKDIR /app

COPY ./package*.json ./

# Install dependencies and clear npm cache
RUN npm install && npm cache clean --force

#copy code
COPY . .

#default dev command
CMD ["npm", "run", "dev"]