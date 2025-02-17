from flask import Flask, current_app

app = Flask(__name__, static_folder='dist', static_url_path='')

@app.route('/')
def app_home():
    return current_app.send_static_file('index.html')

if __name__ == '__main__':
    app.run()
