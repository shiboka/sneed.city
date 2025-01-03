from flask import Flask, current_app, redirect, request

app = Flask(__name__, static_url_path='')

@app.before_request
def enforce_https():
    if request.headers.get('X-Forwarded-Proto') == 'http':
        return redirect(request.url.replace('http://', 'https://'), code=301)

@app.route('/')
def app_home():  # put application's code here
    return current_app.send_static_file('index.html')

if __name__ == '__main__':
    app.run()
