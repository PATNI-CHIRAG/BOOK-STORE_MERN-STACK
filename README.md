# 📚 Book Store – MERN Stack
A full‑stack **Book Store** application built with **MongoDB, Express.js, React, and Node.js (MERN)**. Users can browse books, add to cart, checkout, and manage orders. Includes an admin panel for inventory and order management.
## ✨ Features
- Responsive React UI with routing
- User authentication (JWT) & protected routes
- Browse/search/filter books
- Cart, checkout, and order history
- Admin dashboard: CRUD for books, manage orders/users
- API with Express.js + MongoDB (Mongoose)
- Environment‑based config, error handling, and logging

## 🗂️ Folder Structure (excerpt)
```text
bookstore_mern_project_retry/
  BOOK-STORE_MERN-STACK /
    book-store.fig
    backend/
      .env
      .gitignore
      index.js
      package-lock.json
      package.json
    frontend/
      .env.local
      .gitignore
      eslint.config.js
      index.html
      package-lock.json
      package.json
```

## ✅ Prerequisites
- Node.js ≥ 18, npm ≥ 9
- MongoDB Community Server ≥ 6.0 (local or Atlas)
- Git

## 🚀 Getting Started

### 1) Clone the repository
```bash
git clone https://github.com/PATNI-CHIRAG/BOOK-STORE_MERN-STACK.git
cd BOOK-STORE_MERN-STACK
```

### 2) Install dependencies
If your repo is split into client/server folders, run:
```bash
cd BOOK-STORE_MERN-STACK/backend && npm install
cd ../BOOK-STORE_MERN-STACK/frontend && npm install
cd ..
```

### 3) Configure environment
Create `.env` files as shown below.

**Server `.env`:**
```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/<your_database_name>
JWT_SECRET=replace_with_strong_secret
Note: Please setup mongodb and change the MongoDB url and set your jwt secret key above.
```

**Client `.env`:**
```env
# For Vite:
VITE_API_BASE_URL=http://localhost:5000/api
VITE_API_KEY="AIzaSyCXvDIC4MPrkaMdeg_O2iij88wLpfj3qBA"
VITE_Auth_Domain="book-store-mern-app.firebaseapp.com"
VITE_PROJECT_ID="book-store-mern-app"
VITE_STORAGE_BUCKET="book-store-mern-app.appspot.com"
VITE_MESSAGING_SENDERID="205632822247"
VITE_APPID="1:205632822247:web:b0db0ec66bf6de0bbb3b42"
# For CRA:
# REACT_APP_API_BASE_URL=http://localhost:5000/api
```

### 4) Run in development
Open two terminals:

**Terminal 1 – API**
```bash
cd BOOK-STORE_MERN-STACK /backend
npm run start:dev
```

**Terminal 2 – Client**
```bash
cd BOOK-STORE_MERN-STACK /frontend
npm run dev
```

The React app will open on something like `http://localhost:5173`, and the API on `http://localhost:5000` 

### 5) Build for production
```bash
# Build client
cd BOOK-STORE_MERN-STACK /frontend && npm run build
# Start server (should serve API; you can also serve the built client statically or deploy separately)
cd ../BOOK-STORE_MERN-STACK /backend && npm start
```

## 🔗 API Base URL
- Local: `http://localhost:5000/api`
- Configure the client with `VITE_API_BASE_URL` or `REACT_APP_API_BASE_URL`.

## 🧪 Useful NPM Scripts
- `dev` – start dev server(s)
- `start` – start production server
- `build` – build client for production
- `test` – run tests (if available)
- `seed` – seed database (if available)

## 🔒 Environment Variables
- `MONGO_URI` – MongoDB connection string (local or Atlas)
- `JWT_SECRET` – secret for signing tokens
- `PORT` – API server port (default 5000)
- Client: `VITE_API_BASE_URL` or `REACT_APP_API_BASE_URL`

## 🛠️ Tech Stack
- **Frontend:** React (Vite), React Router, Axios/Fetch, Tailwind 
- **Backend:** Node.js, Express.js, Mongoose
- **Database:** MongoDB (Atlas or local)
- **Auth:** JWT with http-only cookies or headers


## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

