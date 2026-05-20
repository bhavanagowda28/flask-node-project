# 🚀 Flask + Node.js Dockerized Microservices Project

---

## 🧠 Overview

This project demonstrates a **containerized full-stack microservices architecture** using:

* **Frontend:** Node.js (Express + EJS)
* **Backend:** Python Flask REST API
* **Communication:** Axios (HTTP requests)
* **Containerization:** Docker
* **Orchestration:** Docker Compose

The system enables a frontend form to send data to a Flask backend API, process it, and return responses dynamically.

---

## 🏗️ Architecture

```
        ┌───────────────┐
        │  Frontend     │
        │ Node.js + EJS │
        │ Port: 3000    │
        └──────┬────────┘
               │ Axios HTTP
               ▼
        ┌───────────────┐
        │  Backend API  │
        │   Flask       │
        │  Port: 5001   │
        └───────────────┘
```

---

## 📂 Project Structure

```
flask-node-project/
│
├── frontend/
│   ├── server.js
│   ├── views/
│   │   └── index.ejs
│   ├── package.json
│   ├── Dockerfile
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── Dockerfile
│
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* EJS Templates
* Python Flask
* Axios
* Docker
* Docker Compose

---

## 🚀 How to Run (Local Setup)

### 🔹 Backend

```bash
cd backend
python3 app.py
```

### 🔹 Frontend

```bash
cd frontend
npm install
node server.js
```

---

## 🐳 Run with Docker Compose (Recommended)

```bash
docker compose up --build
```

---

## 🌐 Access Application

| Service  | URL                   |
| -------- | --------------------- |
| Frontend | http://localhost:3000 |
| Backend  | http://localhost:5001 |

---

## 🔗 API Endpoint

```
POST /api/data
```

Used for form submission from frontend → backend communication.

---

## 📦 Docker Hub Images

* Frontend Image:
  `bhavana2830/flask-node-project-frontend`

* Backend Image:
  `bhavana2830/flask-node-project-backend`

---

## ✨ Key Features

✔ Microservices-based architecture
✔ REST API communication
✔ Docker containerization
✔ Docker Compose orchestration
✔ Production-style project structure
✔ Frontend–backend separation
✔ Axios-based API calls

---

## 🧪 Learning Outcomes

* Containerizing full-stack applications
* Flask API development
* Node.js frontend integration
* Docker networking concepts
* Multi-container orchestration
* DevOps workflow understanding

---

## 👩‍💻 Author

**Bhavana S Gowda**
Aspiring Software / DevOps Engineer

---

## 📌 Notes

* Ensure Docker Desktop is running before execution
* If port conflict occurs:

  ```bash
  lsof -i :5000
  kill -9 <PID>
  ```

```

---

# 💡 Why this version is “portfolio level”
- Clean architecture diagram
- DevOps terminology (microservices, orchestration)
- Recruiter-friendly formatting
- Clear tech stack + learning outcomes
- Professional structure used in real projects
