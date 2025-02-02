FROM python:3.12-slim

ADD . /app
WORKDIR /app
RUN mkdir -p static

RUN apt update && apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_22.x | bash -
RUN apt install -y nodejs

RUN npm ci
RUN npm run build

RUN pip install -r requirements.txt

ENTRYPOINT [ "gunicorn" ]