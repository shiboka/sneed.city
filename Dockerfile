FROM python:3.12.6-slim-bookworm

RUN apt update && apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_22.x | bash -
RUN apt install -y nodejs

ADD . /app

WORKDIR /app/sneed_client
RUN npm ci
RUN npm run build
RUN cp -r dist/* /app/sneed_server/static/

WORKDIR /app/sneed_server
RUN pip install -r requirements.txt

EXPOSE 5000
ENTRYPOINT [ "gunicorn" ]