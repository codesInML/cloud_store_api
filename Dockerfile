FROM node:15
WORKDIR /app
COPY package.json .
RUN npm install

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "production" ]; \
        then npm install; \
        else npm install --only=production; \
        fi

COPY . ./
EXPOSE 3030
CMD ["node", "server.js"]