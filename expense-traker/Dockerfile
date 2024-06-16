FROM node:20

#app directory
WORKDIR /app

#install dependencies
COPY /pakage*.json ./
RUN npm install

#copy sourcecode
COPY . .

RUN npm run build

# use EXPOSE command to have our port mapped by the docker daemon
EXPOSE 3000

#default dev command
CMD ["npm" , "run" , "start"]