import multiprocessing

wsgi_app = "app:app"
bind = "0.0.0.0:5000"
workers = multiprocessing.cpu_count() * 2 + 1
preload_app = True