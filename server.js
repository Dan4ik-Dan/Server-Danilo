const express = require('express');
const app = express();
const port = 3000;

// Middleware для виведення IP-адреси підключення
app.use((req, res, next) => {
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || (req.connection.socket ? req.connection.socket.remoteAddress : null);
    console.log(`Новий запит від IP: ${clientIp}`);
    next();
});

// Маршрут для головної сторінки
app.get('/', (req, res) => {
    const now = new Date();
    const dateTime = now.toLocaleString();

    res.send(`
        <html>
        <head>
            <title>Сторінка з часом запиту</title>
        </head>
        <body>
            <h1>Вигівський Даниїл</h1>
            <p>Дата і час запиту: ${dateTime}</p>
        </body>
        </html>
    `);
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
});
