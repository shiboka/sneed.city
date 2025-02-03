FROM python:3.12-alpine

ADD . /app
WORKDIR /app

RUN apk update && apk add --update npm

RUN npm ci
RUN npm run build
RUN pip install -r requirements.txt

ENTRYPOINT [ "gunicorn" ]
