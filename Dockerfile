FROM debian:latest

RUN apt-get update && apt-get install -y apache2

COPY index.html /var/www/html/
COPY assets/ /var/www/html/assets/

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
