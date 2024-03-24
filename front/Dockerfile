FROM node:18.10.0-alpine3.15 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY public public
COPY src src
COPY tailwind.config.js tailwind.config.js
COPY .eslintrc.cjs .eslintrc.cjs
COPY index.html index.html
COPY vite.config.js vite.config.js
COPY postcss.config.js postcss.config.js
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80