# Stage 1 - React Build
FROM node:latest as builder
LABEL maintainer="Santiago valle <santiagovj0422@gmail.com>"

WORKDIR /react/app
COPY . .
RUN yarn install && yarn build

# Stage 2 - Nginx Assets
FROM nginx:alpine
LABEL maintainer="Santiago valle <santiagovj0422@gmail.com>"

WORKDIR /usr/share/nginx/html

COPY --from=builder /react/app/build .
COPY ./nginx.conf /etc/nginx/nginx.conf