FROM node:8

EXPOSE 3000

RUN apt-get update \
  && apt-get install -qq -y apt-transport-https ca-certificates --fix-missing --no-install-recommends

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update \
  && apt-get install -qq -y yarn --fix-missing --no-install-recommends

ENV INSTALL_PATH /opt/zmora-ui
RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY . .

CMD ["/bin/bash", "-c", "yarn && yarn run start"]
