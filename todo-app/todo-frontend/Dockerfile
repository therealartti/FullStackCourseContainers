FROM node:16

WORKDIR /usr/src/todo-frontend

COPY . .

RUN npm ci

ENV REACT_APP_BACKEND_URL=http://localhost:3000

RUN npm run build

RUN npm install -g serve
CMD ["serve", "build"]