worker_processes  1;

events {
    worker_connections  1024;
}

http {
    server {
        listen 80;

        root   /usr/share/nginx/html;
        index  index.html index.htm;
        include /etc/nginx/mime.types;

        gzip on;
        gzip_min_length 1000;
        gzip_proxied expired no-cache no-store private auth;
        gzip_types text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript;
        
        add_header Access-Control-Allow-Origin *;
    }
}