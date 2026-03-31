FROM nginx:alpine

# Копируем HTML файлы в директорию Nginx
COPY html /usr/share/nginx/html

# Копируем конфиг Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Открываем порт 8081 (второй проект на другом порту чтобы не конфликтовать)
EXPOSE 8081

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]