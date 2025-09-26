# EmailJS Setup Guide

## Что делает кнопка Submit:
Кнопка отправляет письма через сервис EmailJS прямо с фронтенда без необходимости бэкенда.

## Настройка для получения писем на твою почту:

### 1. Создай аккаунт на EmailJS
- Перейди на https://www.emailjs.com/
- Зарегистрируйся (бесплатно до 200 писем в месяц)

### 2. Подключи свой Gmail
- В панели EmailJS перейди в "Email Services"
- Нажми "Add New Service" 
- Выбери "Gmail"
- Авторизуйся через свой Google аккаунт

### 3. Создай Email Template
- Перейди в "Email Templates"
- Нажми "Create New Template"
- Используй эти переменные в шаблоне:
  - {{from_name}} - имя отправителя
  - {{from_email}} - email отправителя  
  - {{to_name}} - твое имя
  - {{message}} - сообщение

Пример шаблона:
```
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

From: {{from_name}} ({{from_email}})
Message: {{message}}

Best regards,
Your Portfolio Website
```

### 4. Получи API ключи
- Service ID: скопируй из раздела "Email Services"
- Template ID: скопируй из созданного шаблона
- Public Key: найди в "Account" → "General"

### 5. Создай .env файл в корне проекта:
```
VITE_APP_EMAILJS_SERVICE_ID=твой_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=твой_template_id  
VITE_APP_EMAILJS_PUBLIC_KEY=твой_public_key
```

### 6. Перезапусти проект:
```bash
npm run dev
```

## Текущие настройки:
✅ Email получателя: assylbek.oteubayev@gmail.com
✅ Имя получателя: Assylbek Oteubayev

После настройки EmailJS форма будет отправлять письма прямо на твою почту!
