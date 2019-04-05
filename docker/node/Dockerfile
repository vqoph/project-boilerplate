FROM node:10-alpine

RUN npm install -g @vue/cli

ADD entrypoint.sh /entrypoint

ENTRYPOINT ["/entrypoint"]