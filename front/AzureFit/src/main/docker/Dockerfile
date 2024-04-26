FROM openjdk:17-oracle

ENV JAVA_OPTS="-Xmx256m"

ADD AzureFit*.jar app.jar

COPY entrypoint.sh entrypoint.sh

RUN apk add --no-cache tzdata; \
  cp /usr/share/zoneinfo/Europe/Moscow /etc/localtime; \
  echo "Europe/Moscow" >  /etc/timezone; \
  chmod 755 /entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
