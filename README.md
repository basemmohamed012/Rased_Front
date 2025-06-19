# Rased Frontend - راصد

![Rased Banner](https://github.com/user-attachments/assets/d3c0e412-6522-4bc0-8af8-0bc3b9551aba)

> **Intelligent Financial Analytics Frontend** - A modern, responsive React application for smart money management with AI-powered features and collaborative financial tools.

## 🚀 Overview

Rased Frontend is the user-facing interface of the Rased financial analytics platform. Built with React and modern web technologies, it provides an intuitive, responsive, and feature-rich experience for users to manage their finances, collaborate with others, and leverage AI-powered insights for better financial decisions.

## ✨ Key Features

### 💰 **Wallet Management Interface**
- Clean and intuitive personal wallet dashboard
- Shared wallet collaboration with real-time updates
- Visual balance tracking and transaction history
- Drag-and-drop transaction organization
- Interactive charts and financial visualizations

### 📱 **Responsive Design**
- Mobile-first approach with TailwindCSS
- Seamless experience across all devices
- Touch-friendly interface elements
- Progressive Web App (PWA) capabilities
- Dark/Light mode toggle

### 🤖 **AI-Powered Features UI**
- **Smart Invoice Scanner**: Camera integration for receipt capture
- **Visual OCR Results**: Interactive preview of extracted data
- **Recommendation Dashboard**: Personalized financial insights
- **Spending Analytics**: Beautiful charts and trend analysis

### 🎯 **Financial Tools Interface**
- Goal setting with progress visualization
- Savings tracker with milestone celebrations
- Budget management with spending alerts
- Loan calculator and repayment strategies
- Interactive financial planning tools

### 👥 **Social Features**
- User profile management
- Friend request system
- Experience sharing feed
- Collaborative wallet invitations
- Real-time notifications

### 🔐 **Security & Authentication**
- Secure login/registration forms
- Two-factor authentication interface
- Password strength indicators
- Session management
- Secure data handling

## 🛠️ Technology Stack

- **Framework**: React 18.2+ with Hooks
- **Styling**: TailwindCSS 3.0+ for utility-first CSS
- **Routing**: React Router DOM v6
- **State Management**: Context API + useReducer
- **HTTP Client**: Axios for API communication
- **Forms**: React Hook Form + Yup validation
- **Charts**: Chart.js with React-Chartjs-2
- **Icons**: React Icons (Lucide, Heroicons)
- **Animations**: Framer Motion
- **Camera**: React Webcam for invoice scanning
- **Notifications**: React Hot Toast
- **Date Handling**: date-fns
- **Build Tool**: Vite for fast development
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint + Prettier

## 📁 Project Structure

```
rased-frontend/
├── public/                     # Static assets
│   ├── icons/                 # App icons and favicons
│   ├── images/                # Static images
│   └── manifest.json          # PWA manifest
│
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── common/           # Shared components
│   │   │   ├── Button/
│   │   │   ├── Modal/
│   │   │   ├── Loading/
│   │   │   └── Layout/
│   │   ├── forms/            # Form components
│   │   ├── charts/           # Chart components
│   │   └── ui/               # UI elements
│   │
│   ├── pages/                # Page components
│   │   ├── Auth/             # Authentication pages
│   │   ├── Dashboard/        # Main dashboard
│   │   ├── Wallets/          # Wallet management
│   │   ├── Transactions/     # Transaction pages
│   │   ├── Goals/            # Goals management
│   │   ├── Social/           # Social features
│   │   └── Settings/         # User settings
│   │
│   ├── hooks/                # Custom React hooks
│   │   ├── useAuth.js
│   │   ├── useWallet.js
│   │   ├── useCamera.js
│   │   └── useLocalStorage.js
│   │
│   ├── context/              # React Context providers
│   │   ├── AuthContext.js
│   │   ├── WalletContext.js
│   │   └── ThemeContext.js
│   │
│   ├── services/             # API service functions
│   │   ├── api.js            # Axios configuration
│   │   ├── authService.js
│   │   ├── walletService.js
│   │   ├── transactionService.js
│   │   └── aiService.js
│   │
│   ├── utils/                # Utility functions
│   │   ├── formatters.js     # Data formatting
│   │   ├── validators.js     # Form validation
│   │   ├── constants.js      # App constants
│   │   └── helpers.js        # Helper functions
│   │
│   ├── styles/               # Global styles
│   │   ├── globals.css       # Global CSS
│   │   ├── components.css    # Component styles
│   │   └── tailwind.css      # Tailwind imports
│   │
│   ├── assets/               # Static assets
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── App.js                # Main App component
│   ├── index.js              # React entry point
│   └── App.css               # App-specific styles
│
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies and scripts
└── README.md
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/rased-frontend.git
   cd rased-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_API_BASE_URL=https://localhost:7001/api/v1
   VITE_APP_NAME=Rased
   VITE_OCR_TIMEOUT=30000
   VITE_ENABLE_PWA=true
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at `http://localhost:5173`

## 📱 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Format code with Prettier
npm run format

# Analyze bundle size
npm run analyze
```

## 🔌 API Integration

### API Configuration
```javascript
// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

### Service Examples
```javascript
// Wallet Service
export const walletService = {
  getWallets: () => api.get('/wallets'),
  createWallet: (data) => api.post('/wallets', data),
  updateWallet: (id, data) => api.put(`/wallets/${id}`, data),
  deleteWallet: (id) => api.delete(`/wallets/${id}`),
};

// AI Service
export const aiService = {
  processInvoice: (imageFile) => {
    const formData = new FormData();
    formData.append('invoice', imageFile);
    return api.post('/ai/process-invoice', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  getRecommendations: () => api.get('/ai/recommendations'),
};
```

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm run test -- WalletComponent.test.js
```

### Testing Structure
```
src/
├── components/
│   └── __tests__/          # Component tests
├── hooks/
│   └── __tests__/          # Hook tests
├── services/
│   └── __tests__/          # Service tests
└── utils/
    └── __tests__/          # Utility tests
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel --prod
```

### Environment Variables for Production
```env
VITE_API_BASE_URL=https://your-production-api.com/api/v1
VITE_APP_NAME=Rased
VITE_OCR_TIMEOUT=30000
VITE_ENABLE_PWA=true
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

## 📱 Progressive Web App (PWA)

Rased Frontend includes PWA capabilities:
- **Offline Support**: Basic functionality works offline
- **Install Prompt**: Users can install the app on their devices
- **Push Notifications**: Real-time transaction alerts
- **Background Sync**: Sync data when connection is restored

## 🎯 Performance Optimization

- **Code Splitting**: Route-based code splitting with React.lazy()
- **Image Optimization**: WebP format with fallbacks
- **Bundle Analysis**: Webpack Bundle Analyzer integration
- **Lazy Loading**: Components and images loaded on demand
- **Caching**: Service worker for static asset caching
- **Tree Shaking**: Unused code elimination

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Write tests for new components
- Update documentation for new features
- Use semantic commit messages
- Ensure responsive design on all screen sizes

## 📝 License

Graduation Project 2025, FCI - KFSU

## 👥 Team

- **Mohamed Adel Elsayed** - FullStack Engineer
- **Ayman Mohamed** - Backend Engineer
- **Fawzy Shaker** - Backend Engineer
- **Mohamed Elmahallawy** - CyberSecurity Engineer
- **Basem Mohamed** - Frontend Engineer
- **Basant Selima** - Product Designer

## 📞 Support

For support and questions:
- 📧 Email: rased.fci@gmail.com
- 🎨 Design System: [Figma Design](https://www.figma.com/design/cgcUBuFcyck4PK70W3Irc5/RASED?node-id=0-1&p=f&t=wSR1Ocd1LbpKrzYf-0)
- 🚀 Live Demo: [Rased App](http://rased-app.surge.sh/)

---

**⭐ Star this repo if you find it helpful!**

**🌟 Try the live demo: [Rased App](http://rased-app.surge.sh/)**
