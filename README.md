# Ecommerce Backend API

A production-style Ecommerce Backend API built with Express.js, MongoDB, and Mongoose.

This project includes authentication, authorization, product management, order management, validation, centralized error handling, filtering, searching, pagination, and security middleware.

---

# Features

- JWT Authentication
- Role-Based Authorization
- User Registration & Login
- Product CRUD Operations
- Order Management System
- Search Functionality
- Filtering & Pagination
- Request Validation using Zod
- Centralized Error Handling
- Async Error Wrapper
- Secure Password Hashing
- Security Middleware (Helmet, Rate Limiting, CORS)
- SSLCommerz Payment Integration Basics

---

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- Zod
- Helmet
- Express Rate Limit
- CORS
- Dotenv
- SSLCommerz

---

# Project Structure

```bash
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
│   ├── product/
│   ├── order/
│   └── payment/
│
├── routes/
│   └── api.js
│
├── utils/
│   └── catchAsync.js
│
├── app.js
└── server.js
```

---

# Installation

## Clone Repository

```bash
git clone YOUR_REPOSITORY_LINK
```

## Move Into Project Folder

```bash
cd ecommerce-backend-api
```

## Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=5000

DATABASE_URL=your_mongodb_connection_url

JWT_SECRET=your_secret_key

NODE_ENV=development

STORE_ID=your_sslcommerz_store_id

STORE_PASSWORD=your_sslcommerz_store_password
```

---

# Run Project

## Development Mode

```bash
npm run dev
```

## Production Mode

```bash
npm start
```

---

# API Base URL

```bash
http://localhost:5000/api/v1
```

---

# Authentication Endpoints

## Register User

```http
POST /users
```

## Login User

```http
POST /auth/login
```

---

# Product Endpoints

## Get All Products

```http
GET /products
```

## Get Single Product

```http
GET /products/:id
```

## Create Product (Admin Only)

```http
POST /products
```

## Update Product (Admin Only)

```http
PATCH /products/:id
```

## Delete Product (Admin Only)

```http
DELETE /products/:id
```

---

# Order Endpoints

## Create Order

```http
POST /orders
```

## Get My Orders

```http
GET /orders/my-orders
```

---

# Payment Endpoints

## Initiate Payment

```http
POST /payments/initiate-payment/:orderId
```

---

# Security Features

- Password Hashing with bcryptjs
- JWT Authentication
- Role-Based Authorization
- Helmet Security Headers
- Rate Limiting
- Secure CORS Configuration
- Request Validation using Zod

---

# Learning Goals of This Project

This project was built to understand real-world backend development concepts including:

- REST API Architecture
- Express Middleware Flow
- Authentication & Authorization
- MongoDB Relationships
- Error Handling
- Validation Layer
- Production-Style Backend Structure
- Payment Gateway Integration

---

# Future Improvements

- Cart System
- Reviews & Ratings
- File Uploads
- Refresh Tokens
- Docker Support
- Automated Testing

---

# Author

Kamrul Hasan