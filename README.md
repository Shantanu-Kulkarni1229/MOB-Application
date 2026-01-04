# 🚔 e-Modus Operandi Bureau (e-MOB)

## Maharashtra Police - Local Crime Branch Management System

<div align="center">

![Maharashtra Police](https://csn.mahapolice.gov.in/t.webp)

**A comprehensive digital solution for managing accused records, crime data, and police operations**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-v16+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-v18.3.1-blue.svg)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v5+-green.svg)](https://www.mongodb.com/)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [System Architecture](#-system-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Installation](#backend-installation)
  - [Frontend Installation](#frontend-installation)
- [Configuration](#-configuration)
- [Usage Guide](#-usage-guide)
- [API Documentation](#-api-documentation)
- [User Roles & Permissions](#-user-roles--permissions)
- [Database Schema](#-database-schema)
- [Security Features](#-security-features)
- [Screenshots](#-screenshots)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

The **e-Modus Operandi Bureau (e-MOB)** is a sophisticated web-based application designed specifically for the **Maharashtra Police - Local Crime Branch, Chhatrapati Sambhajinagar Rural**. This system digitizes and streamlines the management of accused persons, crime records, and operational workflows across multiple police stations and divisions.

### Purpose

This application addresses the need for:
- **Centralized Database**: Unified storage of accused persons across all police stations
- **Quick Access**: Rapid search and retrieval of criminal records
- **Data Analysis**: Statistical insights on crime patterns and trends
- **Accountability**: Complete audit trail through comprehensive logging
- **Multilingual Support**: Interface available in English and Marathi
- **Professional Reporting**: Generate official PDFs and Excel reports

---

## ✨ Key Features

### 🔐 Authentication & Authorization
- **Role-Based Access Control (RBAC)**
  - Admin (LCB Admin) - Full system access
  - Police - Limited access for viewing and reporting
- **JWT Token-Based Authentication**
- **Secure Password Hashing** using bcrypt
- **Session Management** with automatic token expiration
- **Protected Routes** on both frontend and backend

### 👥 User Management
- **Create, Read, Update, Delete (CRUD) Operations** for users
- **User Profile Management**
  - First Name, Last Name
  - Email & Phone Number
  - Police Station Assignment
  - Profile Photo Upload (max 500KB)
- **Role Assignment** (Admin/Police)
- **User Activity Tracking**

### 📁 Accused Management
- **Comprehensive Accused Records**
  - Personal Information (Name, Photo, Address)
  - Contact Details (Mobile, Aadhar Number)
  - Crime Details (Type, Sub-Type, Section)
  - Division and Police Station
  - Date of Incident
  - Detailed Description
- **Photo Upload** (max 500KB with validation)
- **Advanced Search & Filtering**
  - By Division
  - By Police Station
  - By Crime Type
  - By Sub Crime Type
  - By Name or Section
- **Bulk Operations**
  - Export to PDF (Official Format)
  - Export to Excel
  - Pagination Support

### 📊 Dashboard & Analytics
- **Real-Time Statistics**
  - Total Accused Count
  - Total Police Stations
  - Total Divisions
- **Visual Data Representation**
  - Accused by Police Station (Tabular View)
  - Accused by Crime Type (Tabular View)
- **Auto-Refreshing Data**

### 🗂️ Master Data Management
Four comprehensive modules for managing reference data:

#### 1. **Divisions Management**
- Add, Edit, Delete divisions
- Hierarchical organization structure

#### 2. **Police Stations (Villages) Management**
- Link police stations to divisions
- Division-based filtering

#### 3. **Crime Types Management**
- Main crime categories
- Unique crime type names

#### 4. **Sub Crime Types Management**
- Subcategories under crime types
- Crime type association

### 📝 System Logging & Auditing
- **Comprehensive Activity Logging**
  - Login/Logout tracking
  - View operations
  - Add/Edit/Delete operations
  - All CRUD operations on cases, users, and master data
- **Detailed Log Information**
  - User identification
  - Action type
  - Timestamp
  - IP Address
  - User Agent (Browser/Device)
  - Action details
- **Log Analytics**
  - Action counts
  - User activity reports
  - Daily activity trends
- **Filtering & Searching**
  - By action type
  - By date range
  - By user
  - Pagination support

### 🌐 Internationalization (i18n)
- **Bilingual Support**
  - English (en)
  - Marathi (mr)
- **Dynamic Language Switching**
- **Complete UI Translation**
- **Browser Language Detection**

### 🎨 User Interface Features
- **Modern, Responsive Design**
  - Tailwind CSS styling
  - Mobile-friendly layout
  - Dark mode support (toggle)
- **Rich Components**
  - Data tables with sorting
  - Modal dialogs
  - Image preview
  - Toast notifications
  - Loading states
  - Form validations
- **Professional PDF Generation**
  - Official Maharashtra Police letterhead
  - Proper formatting for legal documents
  - Case details and accused information
- **Excel Export**
  - Structured data export
  - Filter-based exports

### 📄 Document Generation
- **PDF Reports**
  - Official format with police department header
  - Complete case details
  - Accused information table
  - Photo inclusion
  - Professional layout
- **Excel Exports**
  - Filtered data export
  - All case details
  - Easy data analysis

### 🔍 Advanced Search
- **Multi-Criteria Filtering**
  - Cascading dropdowns (Division → Police Station)
  - Cascading dropdowns (Crime Type → Sub Type)
  - Text-based search
- **Real-Time Results**
- **Pagination**
  - Configurable items per page (10, 25, 50, 100)
  - Page navigation
  - Total records count

### ✏️ In-Line Editing
- **Quick Edit** accused records
- **Photo Update** capability
- **Validation** on all fields
- **Instant Save** with feedback

---

## 🛠️ Technology Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI Framework |
| **TypeScript** | 5.5.3 | Type Safety |
| **Vite** | 5.4.2 | Build Tool & Dev Server |
| **React Router DOM** | 6.29.0 | Routing |
| **Tailwind CSS** | 3.4.1 | Styling |
| **Zustand** | 4.5.2 | State Management |
| **Axios** | 1.8.1 | HTTP Client |
| **React Hot Toast** | 2.4.1 | Notifications |
| **i18next** | 23.10.0 | Internationalization |
| **jsPDF** | 2.5.1 | PDF Generation |
| **jsPDF-AutoTable** | 3.8.2 | PDF Tables |
| **XLSX** | 0.18.5 | Excel Export |
| **html2canvas** | Latest | HTML to Image |
| **html2pdf.js** | 0.10.3 | HTML to PDF |
| **Lucide React** | 0.344.0 | Icons |
| **JWT Decode** | 4.0.0 | Token Parsing |
| **date-fns** | 3.3.1 | Date Formatting |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 16+ | Runtime Environment |
| **Express** | 4.21.2 | Web Framework |
| **MongoDB** | 8.10.1 | Database |
| **Mongoose** | 8.10.1 | ODM |
| **JWT** | 9.0.2 | Authentication |
| **bcrypt** | 5.1.1 | Password Hashing |
| **Multer** | 1.4.5 | File Upload |
| **CORS** | 2.8.5 | Cross-Origin Support |
| **dotenv** | 16.4.7 | Environment Variables |
| **Express Validator** | 7.2.1 | Input Validation |
| **PM2** | 6.0.5 | Process Management |
| **Nodemon** | 3.1.9 | Development Hot Reload |

### Development Tools
- **ESLint** - Code Linting
- **PostCSS** - CSS Processing
- **Autoprefixer** - CSS Vendor Prefixes
- **TypeScript ESLint** - TypeScript Linting

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                          │
│  ┌──────────────────────────────────────────────────────┐   │
│  │           React Frontend (MOB-main)                   │   │
│  │  • TypeScript + Vite                                 │   │
│  │  • Tailwind CSS Styling                              │   │
│  │  • Zustand State Management                          │   │
│  │  • React Router Navigation                           │   │
│  │  • i18next Internationalization                      │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↕ HTTP/HTTPS (Axios)
┌─────────────────────────────────────────────────────────────┐
│                      APPLICATION LAYER                       │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         Node.js Express Backend (MOB-Back-main)      │   │
│  │                                                      │   │
│  │  ┌──────────────┐  ┌───────────────┐  ┌──────────┐ │   │
│  │  │ Controllers  │  │  Middleware   │  │  Routes  │ │   │
│  │  │              │  │               │  │          │ │   │
│  │  │ • Auth       │  │ • JWT Verify  │  │ • Auth   │ │   │
│  │  │ • Case       │  │ • Role Check  │  │ • Cases  │ │   │
│  │  │ • User       │  │ • Multer      │  │ • Users  │ │   │
│  │  │ • Dashboard  │  │ • Logger      │  │ • Master │ │   │
│  │  └──────────────┘  └───────────────┘  └──────────┘ │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↕ Mongoose ODM
┌─────────────────────────────────────────────────────────────┐
│                       DATABASE LAYER                         │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                  MongoDB Database                     │   │
│  │                                                      │   │
│  │  Collections:                                        │   │
│  │  • users         • cases         • divisions        │   │
│  │  • crimetypes    • subcrimetypes • villages         │   │
│  │  • logs                                             │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Request Flow
1. **User Interaction** → React Component
2. **State Update** → Zustand Store (if needed)
3. **API Call** → Axios HTTP Request with JWT Token
4. **Backend Processing**:
   - Route Handler
   - Middleware (Auth, Logging, File Upload)
   - Controller Logic
   - Database Operations (Mongoose)
5. **Response** → JSON Data
6. **UI Update** → React Re-render
7. **User Feedback** → Toast Notification

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v5 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **Git** - [Download](https://git-scm.com/)
- **npm** or **yarn** package manager

### Backend Installation

1. **Navigate to Backend Directory**
```bash
cd MOB-Back-main
```

2. **Install Dependencies**
```bash
npm install
```

3. **Configure Environment Variables**

Create a `.env` file in the `MOB-Back-main` directory:

```env
# Database Configuration
MONGO_URI=mongodb://localhost:27017/mob

# Server Configuration
PORT=5000

# Security
JWT_SECRET=YourSuperSecretJWTKeyChangeThis123!

# Optional: Production MongoDB URI
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/mob?retryWrites=true&w=majority
```

4. **Start MongoDB Service**

**Windows:**
```bash
net start MongoDB
```

**Linux/Mac:**
```bash
sudo systemctl start mongod
# or
mongod --dbpath /path/to/your/db
```

5. **Run the Backend Server**

**Development Mode (with auto-reload):**
```bash
npm run server
```

**Production Mode:**
```bash
npm start
```

The backend server will start on `http://localhost:5000`

6. **Verify Backend is Running**
```bash
# Test the API
curl http://localhost:5000/
# Expected Response: "API is running..."
```

---

### Frontend Installation

1. **Navigate to Frontend Directory**
```bash
cd MOB-main
```

2. **Install Dependencies**
```bash
npm install
```

3. **Configure Environment Variables**

Create a `.env` file in the `MOB-main` directory:

```env
# Backend API URL
VITE_BACKEND_URL=http://localhost:5000
```

**For Production:**
```env
VITE_BACKEND_URL=https://your-production-domain.com
```

4. **Run the Frontend Development Server**
```bash
npm run dev
```

The frontend will start on `http://localhost:5173` (or another available port)

5. **Build for Production**
```bash
npm run build
```

The optimized build will be created in the `dist` directory.

6. **Preview Production Build**
```bash
npm run preview
```

---

## ⚙️ Configuration

### Backend Configuration

#### Environment Variables Explained

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/mob` |
| `PORT` | Server port number | `5000` |
| `JWT_SECRET` | Secret key for JWT tokens (CHANGE IN PRODUCTION!) | `YourSecureRandomString123!@#` |

#### File Upload Configuration

Located in `middleware/uploadMiddleware.js`:
- **Max File Size**: Enforced at application level (500KB recommended)
- **Allowed File Types**: Images (JPEG, PNG, JPG)
- **Storage**: Local file system in `uploads/` directory

### Frontend Configuration

#### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_BACKEND_URL` | Backend API base URL | `http://localhost:5000` |

#### Build Configuration

The `vite.config.ts` file contains build settings:
- Output directory: `dist`
- Base URL: `/`
- Asset handling
- Plugin configuration

---

## 📖 Usage Guide

### First Time Setup

1. **Start the Application**
   - Ensure MongoDB is running
   - Start backend server: `cd MOB-Back-main && npm run server`
   - Start frontend server: `cd MOB-main && npm run dev`
   - Open browser to `http://localhost:5173`

2. **Create First Admin User**

You need to manually insert the first admin user into MongoDB:

```javascript
// Connect to MongoDB
use mob

// Create admin user (password: admin123 - CHANGE THIS!)
db.users.insertOne({
  firstName: "Admin",
  lastName: "User",
  email: "admin@mob.gov.in",
  phone: "9999999999",
  policeStation: "Local Crime Branch",
  // Password hash for "admin123" - GENERATE YOUR OWN!
  password: "$2b$10$rKjQlH8QiL0tF.WlqPZdsuI.4OvY7Ev7K6TdOC2zM7CsGW.HvqG7G",
  role: "admin",
  photo: ""
})
```

3. **Login**
   - Email: `admin@mob.gov.in`
   - Password: `admin123`
   - Role: Select "LCB Admin"

4. **Setup Master Data**
   - Navigate to "Master Data"
   - Add Divisions (e.g., "North Division", "South Division")
   - Add Police Stations and link them to divisions
   - Add Crime Types (e.g., "Theft", "Robbery", "Murder")
   - Add Sub Crime Types under each crime type

5. **Create Users**
   - Navigate to "User Management"
   - Add police station users
   - Assign roles and police stations

6. **Add Accused Records**
   - Navigate to "New Accused"
   - Fill in all required information
   - Upload photo (optional, max 500KB)
   - Submit

### Daily Operations

#### For Police Station Users
1. **View Dashboard** - See overall statistics
2. **Search Accused** - Find records by various criteria
3. **View Details** - Check complete accused information
4. **Export Reports** - Generate PDF or Excel reports
5. **Update Profile** - Manage personal information

#### For Admin Users
All police operations PLUS:
1. **Add New Accused** - Register new accused persons
2. **Edit Accused Records** - Update existing information
3. **Delete Records** - Remove accused entries
4. **Manage Users** - Create, edit, delete user accounts
5. **Manage Master Data** - Update divisions, police stations, crime types
6. **View System Logs** - Monitor all system activities

### Searching Accused

1. **Navigate to "Search Accused"**
2. **Apply Filters**:
   - Select Division (cascades to Police Stations)
   - Select Police Station
   - Select Crime Type (cascades to Sub Types)
   - Select Sub Crime Type
   - Enter Name or Section number
3. **View Results** in table format
4. **Actions**:
   - Click "View" to see details
   - Click "Edit" to modify (Admin only)
   - Click "Delete" to remove (Admin only)
5. **Export**:
   - Click "Export PDF" for official document
   - Click "Export Excel" for data analysis

### Generating Reports

#### PDF Export
- Automatically formats data in official Maharashtra Police template
- Includes:
  - Department header
  - Reference number
  - Addressee information
  - Case details
  - Accused list with photos
  - Official footer
- Suitable for official correspondence

#### Excel Export
- Exports all filtered records
- Columns include all accused information
- Suitable for data analysis and record keeping

---

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "role": "police"
}

Response:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d5ec49f1b2c8b8f8e8e8e8",
    "firstName": "John",
    "lastName": "Doe",
    "email": "user@example.com",
    "role": "police",
    "policeStation": "Station Name"
  }
}
```

#### Logout
```http
POST /auth/logout
Authorization: Bearer {token}

Response:
{
  "message": "Logged out successfully"
}
```

---

### Case Endpoints

#### Get All Cases
```http
GET /cases
Authorization: Bearer {token}

Response: Array of case objects
```

#### Get Single Case
```http
GET /cases/:id
Authorization: Bearer {token}

Response: Case object
```

#### Create New Case (Admin Only)
```http
POST /cases
Authorization: Bearer {token}
Content-Type: multipart/form-data

Form Data:
- name: string (required)
- division: ObjectId (required)
- village: ObjectId (required)
- crimeType: ObjectId (required)
- subType: ObjectId (required)
- section: string (required)
- description: string (required)
- date: date (required)
- address: string (required)
- aadhar: string
- mobile: string
- photo: file (max 500KB)

Response:
{
  "_id": "60d5ec49f1b2c8b8f8e8e8e8",
  "name": "Accused Name",
  ...
}
```

#### Update Case (Admin Only)
```http
PUT /cases/:id
Authorization: Bearer {token}
Content-Type: multipart/form-data

Form Data: Same as Create

Response: Updated case object
```

#### Delete Case (Admin Only)
```http
DELETE /cases/:id
Authorization: Bearer {token}

Response:
{
  "message": "Case deleted successfully"
}
```

---

### User Management Endpoints

#### Get All Users (Admin Only)
```http
GET /users
Authorization: Bearer {token}

Response: Array of user objects
```

#### Create User (Admin Only)
```http
POST /users
Authorization: Bearer {token}
Content-Type: multipart/form-data

Form Data:
- firstName: string (required)
- lastName: string (required)
- email: string (required, unique)
- phone: string (required)
- policeStation: string (required)
- password: string (required)
- role: enum ['admin', 'police'] (required)
- photo: file

Response: Created user object
```

#### Update User (Admin Only)
```http
PUT /users/:id
Authorization: Bearer {token}
Content-Type: multipart/form-data

Response: Updated user object
```

#### Delete User (Admin Only)
```http
DELETE /users/:id
Authorization: Bearer {token}

Response:
{
  "message": "User deleted successfully"
}
```

---

### Dashboard Endpoints

#### Get Statistics
```http
GET /dashboard/stats
Authorization: Bearer {token}

Response:
{
  "totalCases": 1250,
  "totalPoliceStation": 23,
  "totalDivisions": 16,
  "casesByVillage": [
    { "_id": "villageId1", "count": 45 },
    { "_id": "villageId2", "count": 32 }
  ],
  "casesByTheftType": [
    { "_id": "crimeTypeId1", "count": 120 },
    { "_id": "crimeTypeId2", "count": 85 }
  ]
}
```

---

### Master Data Endpoints

#### Divisions
```http
GET    /divisions              # Get all divisions
POST   /divisions              # Create division (Admin)
PUT    /divisions/:id          # Update division (Admin)
DELETE /divisions/:id          # Delete division (Admin)
```

#### Villages (Police Stations)
```http
GET    /villages               # Get all villages
GET    /villages?divisionId=:id  # Get by division
POST   /villages               # Create village (Admin)
PUT    /villages/:id           # Update village (Admin)
DELETE /villages/:id           # Delete village (Admin)
```

#### Crime Types
```http
GET    /crime-types            # Get all crime types
POST   /crime-types            # Create crime type (Admin)
PUT    /crime-types/:id        # Update crime type (Admin)
DELETE /crime-types/:id        # Delete crime type (Admin)
```

#### Sub Crime Types
```http
GET    /sub-crime-types        # Get all sub crime types
GET    /sub-crime-types?crimeTypeId=:id  # Get by crime type
POST   /sub-crime-types        # Create sub crime type (Admin)
PUT    /sub-crime-types/:id    # Update sub crime type (Admin)
DELETE /sub-crime-types/:id    # Delete sub crime type (Admin)
```

---

### Logs Endpoints

#### Get Logs
```http
GET /logs?page=1&limit=20&action=login&startDate=2025-01-01&endDate=2025-01-31
Authorization: Bearer {token}

Response:
{
  "logs": [
    {
      "_id": "60d5ec49f1b2c8b8f8e8e8e8",
      "userId": {
        "_id": "userId",
        "firstName": "John",
        "lastName": "Doe",
        "email": "john@example.com",
        "role": "police"
      },
      "action": "add_case",
      "details": "Added new case for Accused Name",
      "ipAddress": "192.168.1.1",
      "userAgent": "Mozilla/5.0...",
      "timestamp": "2025-01-04T10:30:00.000Z"
    }
  ],
  "totalPages": 5,
  "currentPage": 1,
  "totalLogs": 98
}
```

#### Get Log Statistics
```http
GET /logs/stats
Authorization: Bearer {token}

Response:
{
  "actionCounts": [
    { "_id": "add_case", "count": 45 },
    { "_id": "edit_case", "count": 23 }
  ],
  "topUserActivity": [
    {
      "userId": "userId",
      "count": 67,
      "user": "John Doe",
      "email": "john@example.com"
    }
  ],
  "dailyActivity": [
    { "_id": "2025-01-01", "count": 15 },
    { "_id": "2025-01-02", "count": 22 }
  ]
}
```

---

### Error Responses

All endpoints may return the following error responses:

```json
{
  "message": "Error description",
  "error": "Detailed error (in development only)"
}
```

**Status Codes:**
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized (No token or invalid token)
- `403` - Forbidden (Insufficient permissions)
- `404` - Not Found
- `500` - Internal Server Error

---

## 👤 User Roles & Permissions

### Admin (LCB Admin)
**Full System Access**

✅ **Cases**
- View all cases
- Add new cases
- Edit existing cases
- Delete cases
- Export to PDF/Excel

✅ **Users**
- View all users
- Create new users
- Edit user details
- Delete users
- Assign roles

✅ **Master Data**
- Manage divisions
- Manage police stations
- Manage crime types
- Manage sub crime types

✅ **Logs**
- View all system logs
- Filter and search logs
- View log statistics

✅ **Dashboard**
- View all statistics
- Access all analytics

✅ **Profile**
- Update personal profile
- Change password
- Update profile photo

---

### Police (Police Station User)
**Limited Access**

✅ **Cases**
- View all cases
- Search and filter
- Export to PDF/Excel

❌ **Cannot:**
- Add new cases
- Edit cases
- Delete cases

✅ **Dashboard**
- View statistics
- View analytics

✅ **Profile**
- Update personal profile
- Change password
- Update profile photo

❌ **Cannot Access:**
- User Management
- Master Data Management
- System Logs

---

## 💾 Database Schema

### Users Collection
```javascript
{
  _id: ObjectId,
  firstName: String (required),
  lastName: String (required),
  email: String (required, unique),
  phone: String (required),
  policeStation: String (required),
  password: String (required, hashed),
  role: String (enum: ['admin', 'police'], required),
  photo: String (filename or URL)
}
```

### Cases Collection
```javascript
{
  _id: ObjectId,
  name: String (required),
  division: ObjectId (ref: Division, required),
  village: ObjectId (ref: Village, required),
  crimeType: ObjectId (ref: CrimeType, required),
  subType: ObjectId (ref: SubCrimeType, required),
  section: String (required),
  description: String (required),
  date: Date (required),
  address: String (required),
  aadhar: String,
  mobile: String,
  photo: String (filename),
  createdAt: Date (default: Date.now)
}
```

### Divisions Collection
```javascript
{
  _id: ObjectId,
  name: String (required, unique)
}
```

### Villages Collection
```javascript
{
  _id: ObjectId,
  name: String (required),
  divisionId: ObjectId (ref: Division, required)
}
```

### CrimeTypes Collection
```javascript
{
  _id: ObjectId,
  name: String (required, unique)
}
```

### SubCrimeTypes Collection
```javascript
{
  _id: ObjectId,
  name: String (required),
  crimeTypeId: ObjectId (ref: CrimeType, required)
}
```

### Logs Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User, required),
  action: String (enum: [
    'login', 'logout', 'view_case', 'add_case', 'edit_case',
    'delete_case', 'view_profile', 'update_profile',
    'view_users', 'add_user', 'edit_user', 'delete_user',
    'view_crime_types', 'add_crime_type', 'edit_crime_type',
    'delete_crime_type', 'view_divisions', 'add_division',
    'edit_division', 'delete_division', 'view_villages',
    'add_village', 'edit_village', 'delete_village',
    'view_sub_crime_types', 'add_sub_crime_type',
    'edit_sub_crime_type', 'delete_sub_crime_type', 'other'
  ], required),
  details: String,
  ipAddress: String,
  userAgent: String,
  timestamp: Date (default: Date.now)
}
```

---

## 🔒 Security Features

### Authentication & Authorization
- **JWT Token-Based Authentication**
  - Tokens expire after configured time
  - Secure token storage in localStorage
  - Token validation on every request
  
- **Password Security**
  - Passwords hashed using bcrypt (cost factor: 10)
  - Never stored in plain text
  - Automatic hashing on user creation/update

- **Role-Based Access Control (RBAC)**
  - Middleware checks on all protected routes
  - Fine-grained permission system
  - Prevents unauthorized access

### API Security
- **CORS Configuration**
  - Controlled cross-origin access
  - Configurable allowed origins

- **Input Validation**
  - Express-validator for all inputs
  - Sanitization of user data
  - Type checking

- **File Upload Security**
  - File size limits (500KB)
  - File type validation
  - Secure file naming (timestamp-based)
  - Stored outside web root (optional)

### Frontend Security
- **Protected Routes**
  - Authentication checks before rendering
  - Automatic redirect to login
  
- **XSS Prevention**
  - React's built-in XSS protection
  - No dangerouslySetInnerHTML usage
  
- **CSRF Protection**
  - Token-based requests
  - SameSite cookie attributes (if implemented)

### Database Security
- **MongoDB Security**
  - Connection string in environment variables
  - Mongoose schema validation
  - Input sanitization

### Logging & Monitoring
- **Comprehensive Audit Trail**
  - All actions logged
  - IP address tracking
  - User agent tracking
  - Timestamp on all operations

### Best Practices
✅ Environment variables for sensitive data  
✅ HTTPS recommended for production  
✅ Regular security updates  
✅ Strong JWT secret (minimum 32 characters)  
✅ Password complexity requirements (implement as needed)  
✅ Account lockout after failed attempts (implement as needed)  
✅ Session timeout configuration  
✅ Regular database backups  

---

## 📸 Screenshots

### Login Page
<div align="center">
Modern and secure authentication interface with role selection.
</div>

### Dashboard
<div align="center">
Real-time statistics and analytics at a glance.
</div>

### Search Accused
<div align="center">
Powerful search with multiple filters and export options.
</div>

### Add New Accused
<div align="center">
Comprehensive form with photo upload and validation.
</div>

### User Management
<div align="center">
Complete user administration interface.
</div>

### Master Data Management
<div align="center">
Organized tabs for managing divisions, police stations, crime types.
</div>

### System Logs
<div align="center">
Detailed activity tracking with filtering and analytics.
</div>

---

## 🐛 Troubleshooting

### Backend Issues

#### MongoDB Connection Failed
```
Error: MongoServerError: connect ECONNREFUSED
```
**Solution:**
1. Ensure MongoDB service is running
2. Check MONGO_URI in .env file
3. Verify MongoDB is installed correctly
4. Check firewall settings

#### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::5000
```
**Solution:**
1. Change PORT in .env file
2. Or kill process using port 5000:
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -i :5000
kill -9 <PID>
```

#### JWT Token Invalid
```
Error: Invalid token
```
**Solution:**
1. Ensure JWT_SECRET matches between sessions
2. Clear browser localStorage and login again
3. Check token expiration time

### Frontend Issues

#### API Connection Failed
```
Error: Network Error / Failed to fetch
```
**Solution:**
1. Verify VITE_BACKEND_URL in .env
2. Ensure backend server is running
3. Check for CORS issues
4. Verify network connectivity

#### Build Fails
```
Error: [vite]: Rollup failed to resolve import
```
**Solution:**
1. Delete node_modules and package-lock.json
2. Run `npm install` again
3. Clear npm cache: `npm cache clean --force`

#### Images Not Displaying
```
404 Error on image requests
```
**Solution:**
1. Ensure uploads directory exists in backend
2. Check file permissions
3. Verify backend static file serving: `app.use("/uploads", express.static("uploads"))`
4. Check image path in database

### Common Issues

#### File Upload Fails
**Solution:**
1. Check file size (must be < 500KB)
2. Verify file type (JPEG, PNG, JPG only)
3. Check multer configuration
4. Ensure uploads directory has write permissions

#### Dark Mode Not Working
**Solution:**
1. Clear browser cache
2. Check localStorage for theme setting
3. Verify Tailwind dark mode configuration

#### Language Not Switching
**Solution:**
1. Check i18n configuration
2. Verify locale files exist (en.json, mr.json)
3. Clear browser cache

---

## 🤝 Contributing

We welcome contributions to the e-MOB system! Here's how you can help:

### Development Process
1. **Fork the Repository**
2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Make Your Changes**
4. **Commit Your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
5. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
6. **Open a Pull Request**

### Coding Standards
- Follow existing code style
- Write clear commit messages
- Add comments for complex logic
- Update documentation as needed
- Test your changes thoroughly

### Areas for Contribution
- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🌐 Additional language translations
- 🎨 UI/UX enhancements
- ⚡ Performance optimizations
- 🧪 Test coverage
- 🔒 Security improvements

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 Maharashtra Police - Local Crime Branch

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Contact

### Official Contact
**Maharashtra Police - Local Crime Branch**  
Office of Superintendent of Police  
Chhatrapati Sambhajinagar Rural  
T.C.K Center Road, Tilakdi, Pin-7  
Chhatrapati Sambhajinagar  

📞 **Phone:** 0240-2380978  
🌐 **Website:** [https://csn.mahapolice.gov.in/](https://csn.mahapolice.gov.in/)  

### Project Maintainers
For technical support or inquiries about this software:
- Create an issue in the repository
- Contact the development team through official channels

---

## 🙏 Acknowledgments

- **Maharashtra Police** for the opportunity to digitize operations
- **Local Crime Branch, Chhatrapati Sambhajinagar Rural** for requirements and feedback
- All police personnel for their valuable input
- Open source community for the amazing tools and libraries

---

## 📚 Additional Resources

### Documentation
- [React Documentation](https://react.dev/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

### Tutorials
- Node.js and Express API development
- React and TypeScript best practices
- MongoDB database design
- JWT authentication implementation

### Related Projects
- Police management systems
- Case management software
- Government digital initiatives

---

## 🔄 Version History

### Version 1.0.0 (Current)
- Initial release
- Complete CRUD operations for cases
- User management with RBAC
- Master data management
- Dashboard with analytics
- Bilingual support (English/Marathi)
- PDF and Excel export
- Comprehensive logging system
- Dark mode support

### Planned Features (Future Versions)
- [ ] Advanced analytics and charts
- [ ] Mobile application
- [ ] SMS notifications
- [ ] Email integration
- [ ] Fingerprint integration
- [ ] Face recognition
- [ ] API rate limiting
- [ ] Two-factor authentication
- [ ] Backup automation
- [ ] Cloud deployment guide

---

<div align="center">

**Built with ❤️ for Maharashtra Police**

Made with modern technologies for efficient law enforcement

**Star ⭐ this repository if you find it helpful!**

[Report Bug](../../issues) · [Request Feature](../../issues) · [Documentation](../../wiki)

</div>

---

## 📊 Project Statistics

- **Lines of Code**: 15,000+
- **Components**: 50+
- **API Endpoints**: 30+
- **Database Collections**: 7
- **Supported Languages**: 2
- **Dependencies**: 40+
- **Development Time**: Ongoing
- **Status**: Production Ready ✅

---

**© 2025 Maharashtra Police - Local Crime Branch, Chhatrapati Sambhajinagar Rural. All Rights Reserved.**
