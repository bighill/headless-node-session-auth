FROM node
WORKDIR /server
COPY package.json .
RUN npm install --quiet
COPY . .

CMD ["npm", "start"]