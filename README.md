# Guestara Backend Assignment - Menu Management (Node.js)

## 🧩 Overview

This project is a Node.js + Express backend for managing hotel menus with **Categories, Subcategories, and Items**.  
It supports CRUD operations and search functionality.

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Postman (for testing)
- dotenv (for environment variables)

---

## 🗂 Project Structure

src/
├── config/db.js
├── models/
├── controllers/
├── routes/
└── app.js

---

## 🚀 Setup Instructions

### 1️⃣ Clone the repo

````bash
git clone https://github.com/<your-username>/guestara-backend.git
cd guestara-backend

2️⃣ Install dependencies
npm install

3️⃣ Create .env file
PORT=5000
MONGO_URI=your_mongo_connection_string

4️⃣ Run the server
npm run dev


Server will start on:
👉 http://localhost:5000/

🔗 API Endpoints Summary
Category Routes
Method	Endpoint	Description
POST	/api/categories	Create category
GET	/api/categories	Get all categories
GET	/api/categories/:idOrName	Get category by name or ID
PUT	/api/categories/:id	Edit category
Subcategory Routes
Method	Endpoint	Description
POST	/api/subcategories/:categoryId	Create subcategory
GET	/api/subcategories	Get all subcategories
GET	/api/subcategories/category/:categoryId	Get subcategories under a category
PUT	/api/subcategories/:id	Edit subcategory
Item Routes
Method	Endpoint	Description
POST	/api/items	Create item
GET	/api/items	Get all items
GET	/api/items/category/:categoryId	Get items under category
GET	/api/items/subcategory/:subCategoryId	Get items under subcategory
GET	/api/items/search?name=Tea	Search item by name
PUT	/api/items/:id	Edit item
🔍 Short Answers

1️⃣ Which database you have chosen and why?
I used MongoDB because it’s fast, flexible, and ideal for hierarchical JSON-like data structures such as categories, subcategories, and items.

2️⃣ 3 things I learned from this assignment:

Designing relationships between collections in MongoDB

Writing modular Express controllers and routes

Managing CRUD and search operations efficiently

3️⃣ Most difficult part:
Maintaining relationships between category → subcategory → items and testing all combinations cleanly.

4️⃣ What I would do differently with more time:
Implement authentication, pagination, and integrate a simple frontend (React/Next.js) to visualize menu data.

🎥 Loom Video

Loom Demo Link: [Add your Loom video link here]

💻 Deployment (optional)

If deployed:
👉 Live Link


---

### 🎥 2️⃣ Record a Short Loom Video (2–4 minutes)

**Video Flow:**
1. Introduce yourself (name + assignment intro)
2. Show Postman testing:
   - Create → Get → Edit APIs for Category/SubCategory/Item
   - Search item example
3. Show code briefly (folder structure + one controller)
4. Mention the tech stack and what you learned

✅ Keep it short, clear, confident.

---

### 🧠 3️⃣ Push Code to GitHub

Commands:
```bash
git init
git add .
git commit -m "Guestara Node.js Backend Assignment"
git branch -M main
git remote add origin https://github.com/<your-username>/guestara-backend.git
git push -u origin main
````
