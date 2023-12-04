FROM node:16.17.1-alpine3.16 as build

WORKDIR /usr/app/radio  
COPY . /usr/app/radio

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build


FROM nginx:1.23.1-alpine
EXPOSE 80
COPY ./default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /usr/app/radio/dist /usr/share/nginx/html