FROM node:15
WORKDIR /app
COPY package.json .
RUN npm install
# RUN npm install -g nodemon
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi

COPY . ./
EXPOSE 3030
CMD ["node", "server.js"]