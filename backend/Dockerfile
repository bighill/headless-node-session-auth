FROM node
WORKDIR /backend
COPY package.json .
RUN npm install --quiet
COPY . .

CMD ["npm", "start"]