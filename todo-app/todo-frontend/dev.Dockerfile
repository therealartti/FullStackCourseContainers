FROM node:16

WORKDIR /usr/src/todo-frontend

COPY . .

RUN npm install

ENV REACT_APP_BACKEND_URL=http://localhost:8080/api

CMD ["npm", "start"]