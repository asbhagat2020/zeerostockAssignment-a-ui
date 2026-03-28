# Inventory Search Feature

## 📌 Overview

This project implements a simple inventory search system where users can search products using multiple filters such as product name, category, and price range. It simulates how buyers can search surplus inventory across suppliers.

---

## 🚀 Features

### Backend

* `GET /search` API
* Supports query parameters:

  * `q` → product name (partial match)
  * `category`
  * `minPrice`
  * `maxPrice`
* Case-insensitive search
* Multiple filters can be combined
* Returns all products if no filters are applied
* Handles invalid price range

### Frontend

* Search input box
* Category dropdown
* Price range inputs (min & max)
* Displays results in a clean list UI
* Shows **"No results found"** state
* Error handling for invalid inputs

---

## ⚙️ Tech Stack

* Frontend: React.js (Vite)
* Backend: Node.js + Express.js
* Styling: Tailwind CSS
* Data Source: In-memory array (static data)

---

## 🔍 Search Logic

* Filtering is implemented using JavaScript array methods (`filter()`).
* Product name search uses partial matching with `includes()`.
* Case-insensitive comparison using `toLowerCase()`.
* Filters are applied sequentially:

  1. Product name (`q`)
  2. Category
  3. Minimum price
  4. Maximum price
* If no filters are provided, all products are returned.

---

## ⚠️ Edge Cases Handled

* Empty search query → returns all products
* Invalid price range (`minPrice > maxPrice`) → returns error
* No matching results → displays "No results found"

---

## 📈 Performance Improvement (For Large Datasets)

For large-scale applications, the following optimizations can be implemented:

* Use a database like MongoDB instead of in-memory data
* Add indexing on frequently searched fields:

  * `product name`
  * `category`
  * `price`
* Implement pagination to limit the number of results per request
* Use debouncing on frontend to reduce API calls during typing

---

## ▶️ How to Run

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend/client
npm install
npm run dev
```

---

## 🌐 API Example

```bash
GET /search?q=shirt&category=clothing&minPrice=500&maxPrice=2000
```

---

## 📊 Folder Structure

```bash
backend/
  src/
    controllers/
    routes/
    data/
  server.js

frontend/
  src/
    components/
    pages/
    services/
```

---

## ✅ Conclusion

This project demonstrates:

* Clean API design
* Efficient filtering logic
* Proper handling of edge cases
* Simple and user-friendly UI

---
