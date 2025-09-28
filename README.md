# Laravel + React Todo App

A simple Todo List app using **Laravel 12** backend, **React (Vite)** frontend, and **Tailwind CSS** for styling.  

Features: Add, edit, delete, toggle completion of tasks. Responsive UI.

---

## Requirements

- PHP 8.1+
- Composer
- Node.js 18+
- npm
- SQLite (comes preinstalled with PHP in most environments)

---

## Setup & Installation

1. **Clone the repo**

```bash
git clone <your-repo-url>
cd laravel-react

Install Laravel dependencies

composer install


Copy .env file

cp .env.example .env


Configure SQLite

Open .env and set:

DB_CONNECTION=sqlite
DB_DATABASE=/absolute/path/to/database/database.sqlite


Or create a database file:

mkdir database
touch database/database.sqlite


Make sure the DB_DATABASE path points to this database/database.sqlite file.

Generate application key

php artisan key:generate


Run migrations & seeders

php artisan migrate --seed


(This will create the tasks table and populate sample tasks.)

Install Node.js dependencies

npm install


Run frontend

npm run dev


Vite dev server: http://localhost:5173

Run backend

php artisan serve --host=127.0.0.1 --port=8000


Laravel API: http://127.0.0.1:8000

CORS Setup

Ensure React can access Laravel API:

// config/cors.php
'allowed_origins' => ['http://localhost:5173', 'http://127.0.0.1:5173'],

Usage

Open React app: http://localhost:5173

Tasks are fetched from Laravel API.

Features:

Add new tasks via form

Edit tasks inline

Toggle completed

Delete tasks

Folder Structure
laravel-react/
├─ app/                # Laravel backend
├─ resources/js/       # React frontend
│   ├─ components/     # TaskForm, TaskList, TaskItem
│   ├─ api.js          # Axios instance
│   └─ app.jsx         # React entry point
├─ resources/css/      # Tailwind CSS file
├─ routes/api.php      # API routes
├─ database/migrations/ # DB tables
├─ database/seeders/   # Seeders
├─ database/database.sqlite # SQLite database file
└─ ...

Tailwind CSS

Already configured for React + Vite.

resources/css/app.css contains Tailwind directives:

@import "tailwindcss";


Imported in app.jsx:

import '../css/app.css';


Customize in tailwind.config.js if needed.

Notes

Functional components use useEffect to fetch tasks on mount.

Axios handles API requests (GET, POST, PATCH, DELETE).

CORS middleware in Laravel ensures React frontend can call API.

SQLite database is file-based, so migrations create database/database.sqlite.
