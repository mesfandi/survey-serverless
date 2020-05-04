FROM nginx:1.17.1-alpine
COPY /dist/hwthree2 /usr/share/nginx/html
