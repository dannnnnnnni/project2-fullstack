// Импортируем необходимые библиотеки
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Включаем CORS - это позволяет фронтенду (на порту 8081) запрашивать данные с бэкенда (на порту 3000)
app.use(cors());

// Парсим JSON в теле запроса
app.use(express.json());

/**
 * КОНТРОЛЛЕР: Возвращает массив из 10 случайных чисел
 * Маршрут: GET /api/random-numbers
 */
app.get('/api/random-numbers', (req, res) => {
    // Генерируем массив из 10 случайных чисел от 0 до 99
    const randomNumbers = Array.from({ length: 10 }, () => 
        Math.floor(Math.random() * 100)
    );
    
    // Отправляем JSON ответ
    res.json({
        success: true,
        numbers: randomNumbers,
        timestamp: new Date().toISOString()
    });
});

/**
 * Проверка здоровья сервиса (health check)
 * Используется для проверки что бэкенд работает
 */
app.get('/health', (req, res) => {
    res.json({ 
        status: 'Backend is running',
        port: PORT
    });
});

// Запускаем сервер на всех интерфейсах (0.0.0.0) чтобы он был доступен из других контейнеров
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Backend server running on port ${PORT}`);
    console.log(`📍 Health check: http://localhost:${PORT}/health`);
    console.log(`📍 Random numbers: http://localhost:${PORT}/api/random-numbers`);
});