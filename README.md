# Ecommerce Backend API

A production-style Ecommerce Backend API built with Express.js, MongoDB, and Mongoose.
This project includes authentication, authorization, product management, validation, centralized error handling, filtering, searching, pagination, and security middleware.

---

# Features

* JWT Authentication
* Role-Based Authorization
* User Registration & Login
* Product CRUD Operations
* Search Functionality
* Filtering & Pagination
* Request Validation using Zod
* Centralized Error Handling
* Async Error Wrapper
* Secure Password Hashing
* Security Middleware (Helmet, Rate Limiting, CORS)
* Modular Scalable Architecture

---

# Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (jsonwebtoken)
* bcryptjs
* Zod
* Helmet
* Express Rate Limit
* CORS
* Dotenv

---

# Project Structure

src/
│
├── config/
├── middleware/
│   ├── auth.js
│   ├── authorize.js
│   ├── globalErrorHandler.js
│   └── validateRequest.js
│
├── modules/
│   ├── auth/
│   ├── user/
│   └── product/
│
├── routes/
│   └── api.js
│
├── utils/
│   └── catchAsync.js
│
├── app.js
└── server.js


# Installation

## Clone Repository

git clone YOUR_REPOSITORY_LINK


## Move Into Project Folder

cd ecommerce-backend

## Install Dependencies

npm install


# Environment Variables

Create a `.env` file in the root directory and add:

PORT=5000

DATABASE_URL=your_mongodb_connection_url

JWT_SECRET=your_secret_key

NODE_ENV=development


# Run Project

## Development Mode

npm run dev


## Production Mode

npm start


# API Base URL

http://localhost:5000/api/v1



# Authentication Endpoints

## Register User

POST /users


## Login User

POST /auth/login


# Product Endpoints

## Get All Products

GET /products


## Get Single Product

GET /products/:id


## Create Product (Admin Only)

POST /products


## Update Product (Admin Only)

PATCH /products/:id


## Delete Product (Admin Only)

DELETE /products/:id



# Query Features

## Search

/products?searchTerm=iphone


## Filter

/products?category=Electronics

## Pagination

/products?page=1&limit=5


---

# Security Features

* Password Hashing with bcryptjs
* JWT Authentication
* Role-Based Authorization
* Helmet Security Headers
* Rate Limiting
* Secure CORS Configuration
* Request Validation using Zod

---

# Learning Goals of This Project

This project was built to understand real-world backend development concepts including:

* REST API Architecture
* Express Middleware Flow
* Authentication & Authorization
* MongoDB Relationships
* Error Handling
* Validation Layer
* Production-Style Backend Structure

---

# Future Improvements

* Order Management
* Cart System
* Reviews & Ratings
* Payment Integration
* File Uploads
* Refresh Tokens
* Docker Support
* Automated Testing

---

# Author

Kamrul Hasan

```
```
