FROM node:10-alpine

RUN npm install -g @vue/cli @vue/cli-service-global

ADD entrypoint.sh /entrypoint

ENTRYPOINT ["/entrypoint"]