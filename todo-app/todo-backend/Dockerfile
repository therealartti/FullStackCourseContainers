FROM node:16

WORKDIR /usr/src/todo-backend

COPY --chown=node:node . .
RUN npm ci

ENV DEBUG=playground:*

USER node
CMD npm start