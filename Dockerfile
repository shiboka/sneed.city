FROM alpine:latest

ADD . /app
WORKDIR /app

RUN apk update && apk add --update npm py3-pip

RUN npm ci
RUN npm run build

RUN python3 -m venv venv
RUN . venv/bin/activate
RUN pip install -r requirements.txt

ENTRYPOINT [ "gunicorn" ]
