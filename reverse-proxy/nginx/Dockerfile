FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
RUN mkdir /usr/src/app -p && touch /usr/src/app/index.js && mkdir /usr/src/app/err -p
COPY 502.html /usr/src/app/err