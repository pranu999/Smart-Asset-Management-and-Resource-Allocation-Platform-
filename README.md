# Smart-Asset-Management-and-Resource-Allocation-Platform-

## Overview

The Smart Asset Management and Resource Allocation Platform is a full-stack web application designed to streamline inventory tracking, asset booking, resource allocation, and operational monitoring within organizations.

The system provides a centralized platform where administrators can manage assets, approve booking requests, monitor utilization, track maintenance activities, and generate operational insights. Users can browse available resources, request bookings, track approvals, receive notifications, and view their borrowing history.

The project was developed as a solution for efficient management of shared organizational resources such as cameras, audio equipment, lighting systems, costumes, event infrastructure, and other inventory assets.

---

## Key Features

### Authentication & Authorization

* Secure JWT-based authentication
* User Registration and Login
* Role-Based Access Control (Admin/User)
* Protected Routes

### Asset Management

* Add New Assets
* Edit Asset Details
* Delete Assets
* Categorize Assets
* Inventory Quantity Management
* Asset Availability Tracking

### Asset Booking System

* Browse Available Assets
* Search and Filter Resources
* Create Booking Requests
* Booking Duration Selection
* Inventory Validation

### Approval Workflow

* Review Booking Requests
* Approve Requests
* Reject Requests
* Track Booking Status

### Asset Issue & Return Management

* Asset Issuance Tracking
* Return Processing
* Due Date Monitoring
* Inventory Synchronization

### Dashboard Analytics

* Asset Utilization Statistics
* Active Bookings Overview
* Available Inventory Monitoring
* Operational Insights
* Resource Allocation Trends

### Borrowing History

* User Booking History
* Active Borrowings
* Past Requests
* Booking Status Timeline

### Notifications

* Booking Approval Notifications
* Booking Rejection Notifications
* Return Reminders
* System Alerts

### Audit Logs

* Asset Creation Logs
* Inventory Update Logs
* Approval Activity Logs
* Return Tracking Logs

### Asset Maintenance Tracking

* Maintenance Scheduling
* Asset Health Monitoring
* Service Records
* Maintenance History

### QR Code Integration

* Asset QR Code Generation
* QR-Based Asset Identification
* Faster Asset Issue/Return Operations

---

## Technology Stack

### Frontend

* React.js
* Vite
* React Router
* Axios
* Context API

### Backend

* Node.js
* Express.js
* JWT Authentication
* RESTful APIs

### Database

* MySQL

### Additional Libraries

* QR Code Generation
* Authentication Middleware
* Role-Based Access Middleware

---

## System Architecture

Frontend (React + Vite)
↓
REST API Communication
↓
Backend (Node.js + Express)
↓
Authentication Layer (JWT)
↓
MySQL Database

---

## Project Structure

```text
AssetManagementProject/
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   └── pages/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── uploads/
│
├── database/
│   ├── schema.sql
│   └── seed.sql
│
└── docs/
```

---

## Installation Guide

### Clone Repository

```bash
git clone https://github.com/yourusername/Smart-Asset-Management-and-Resource-Allocation-Platform.git
cd Smart-Asset-Management-and-Resource-Allocation-Platform
```

---

## Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=asset_management

JWT_SECRET=your_secret_key
```

Start backend server:

```bash
npm start
```

or

```bash
node src/server.js
```

---

## Database Setup

Create database:

```sql
CREATE DATABASE asset_management;
```

Import schema:

```bash
mysql -u root -p asset_management < schema.sql
```

Insert sample data:

```bash
mysql -u root -p asset_management < seed.sql
```

---

## Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run application:

```bash
npm run dev
```

Application will start at:

```text
http://localhost:5173
```

---

## User Roles

### Administrator

Administrators can:

* Manage Assets
* Approve Bookings
* Reject Requests
* Track Inventory
* View Audit Logs
* Manage Maintenance
* Generate QR Codes
* Monitor Dashboard Analytics

### User

Users can:

* Register/Login
* Browse Assets
* Request Bookings
* Track Booking Status
* View Borrowing History
* Receive Notifications

---

## API Modules

### Authentication APIs

* Register User
* Login User
* JWT Validation

### Asset APIs

* Create Asset
* Update Asset
* Delete Asset
* Get Assets

### Booking APIs

* Create Booking
* Approve Booking
* Reject Booking
* Booking History

### Dashboard APIs

* Utilization Metrics
* Inventory Statistics
* Active Allocations

### Notification APIs

* Notification Management
* Alert Tracking

### Audit APIs

* Activity Logs
* Change Tracking

### Maintenance APIs

* Maintenance Scheduling
* Asset Health Tracking

---

## Security Features

* JWT Authentication
* Password Encryption
* Route Protection
* Role-Based Authorization
* Secure API Access
* Input Validation

---

## Future Enhancements

* Email Notifications
* Docker Deployment
* Advanced Reporting
* Mobile Application
* Predictive Maintenance Analytics
* Multi-Organization Support
* Cloud Deployment

---

## Project Deliverables

✔ User Authentication

✔ Inventory Management

✔ Asset Discovery & Booking

✔ Approval Workflow

✔ Asset Issue & Return Management

✔ Analytics Dashboard

✔ Borrowing History

✔ Notifications

✔ Audit Logs

✔ QR Code Operations

✔ Maintenance Tracking

---

## Contributors

Team Members:

* Pranathi Kokkiligadda


---

## License

This project was developed for educational and academic purposes.

## demonstration video
https://drive.google.com/drive/folders/1VwpRycnH3futmoxIQJd87Ga9Pzaj8GCj?usp=drive_link
