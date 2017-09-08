FROM node:latest
MAINTAINER Nikolai Vasilenko

ENV REFRESHED_AT=2017–10–08 \
  HOME=/opt/app/

RUN npm install -g pm2

ADD . $HOME

WORKDIR ${HOME}
RUN npm install
RUN npm run build

CMD ["/bin/sh"]
