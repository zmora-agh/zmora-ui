FROM ubuntu:16.04

RUN apt-get update \
  && apt-get install -qq -y nginx gettext-base --fix-missing --no-install-recommends

WORKDIR /var/www/html

RUN rm * \
  && ln -sf /dev/stdout /var/log/nginx/access.log \
  && ln -sf /dev/stderr /var/log/nginx/error.log

copy config/nginx.config /etc/nginx/sites-enabled/default 

COPY build/* ./

EXPOSE 80

STOPSIGNAL SIGTERM

CMD ["/bin/bash", "-c","envsubst < index.html.template > index.html && nginx -g 'daemon off;'"]
