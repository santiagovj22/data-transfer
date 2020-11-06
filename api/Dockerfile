# Stage 1 - Javascript Build
FROM node:14.4-alpine as builder
LABEL maintainer="Santiago valle <santiagovj0422@gmail.com>"

ENV NODE_ENV=development
WORKDIR /node/app
COPY . .
RUN npm install --no-cache && npm build 

# Stage 2 - NodeJS Image
FROM node:14.4-alpine
LABEL maintainer="Santiago valle <santiagovj0422@gmail.com>"

WORKDIR /node/app
COPY --from=builder /node/app .
RUN npm install --no-cache

EXPOSE 3001
CMD npm start
