```markdown
# Awcean E-Commerce Platform

A full-stack e-commerce application built with modern web technologies.
This project includes a Node.js/Express backend and a React TypeScript frontend, providing a complete shopping experience with product browsing, cart management, checkout, and order tracking.

## 🎯 Features

- **Product Catalog** - Browse and view detailed product information
- **Shopping Cart** - Add/remove items with real-time updates
- **Checkout Process** - Complete purchase flow with delivery options
- **Order Tracking** - View order history and track status
- **Payment Summary** - Calculate totals with tax and delivery costs
- **User Authentication** - Login functionality
- **Responsive Design** - Works on desktop and mobile devices

## 🏗️ Tech Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** SQLite (sql.js)
- **ORM:** Sequelize
- **Package Manager:** npm

### Frontend
- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **Routing:** React Router
- **HTTP Client:** Axios
- **Utilities:** Day.js for date handling

## 📁 Project Structure

```
awcean/
├── awcean-backend/          # Express REST API
│   ├── routes/              # API endpoints
│   ├── models/              # Database models
│   ├── backend/             # Data files (JSON)
│   └── server.js            # Entry point
├── awcean-frontend/         # React TypeScript frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   └── utils/           # Utilities
│   └── vite.config.ts       # Vite configuration
└── awcean-js/               # Vanilla JavaScript version
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v22 or higher)
- npm or yarn

### Installation & Setup

1. **Backend Setup**
   ```bash
   cd awcean-backend
   npm install
   npm run dev
   ```
   Backend will run on `http://localhost:3000` (or configured port)

2. **Frontend Setup**
   ```bash
   cd awcean-frontend
   npm install
   npm run dev
   ```
   Frontend will run on `http://localhost:5173` (Vite default)

## 📝 Available Scripts

### Backend
- `npm run dev` - Start development server with hot reload (nodemon)
- `npm start` - Start production server
- `npm run zip` - Create zip file of the project

### Frontend
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🔗 API Endpoints

The backend provides RESTful endpoints for:
- `/products` - Product management
- `/cartItems` - Shopping cart operations
- `/orders` - Order management
- `/deliveryOptions` - Delivery option retrieval
- `/paymentSummary` - Payment calculations
- `/reset` - Reset data to defaults

## 🧪 Testing

Frontend includes:
- `money.test.js` - Unit tests for utility functions
- Vitest configuration for running tests

## 📚 Documentation

- [Backend Documentation](awcean-backend/documentation.md)
- [Backend Troubleshooting](awcean-backend/troubleshooting.md)
- [Exercise Solutions](awcean-backend/exercise-solutions/)

## 🎓 Learning Resources

This project includes multiple implementations:
- **TypeScript + React** - Modern type-safe approach
- **Vanilla JavaScript** - Pure JavaScript implementation
- Exercise solutions for educational purposes

## 📝 License

ISC

## 🤝 Contributing

This project was created for my learning and educational purposes

---

**Ready to get started?** Follow the installation steps above and start developing!
```

This README:
- ✅ Describes the full-stack architecture
- ✅ Lists all features and tech stack
- ✅ Shows the project structure
- ✅ Provides setup instructions for both backend and frontend
- ✅ Lists available npm scripts
- ✅ Documents API endpoints
- ✅ References included documentation
