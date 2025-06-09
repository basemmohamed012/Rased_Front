import './App.css'
import HomePage from './components/Home/pageHome/HomePage.jsx'
import {Routes , Route } from 'react-router-dom';
import ErrorBoundary from './Hooks/Boundary/ErrorBoundary.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import DashboardNew from './components/Pages/Dashboardd/DashboardNew.jsx'
import LoginPage from './components/Pages/auth/LoginPage.jsx';
import SignupPage from './components/Pages/auth/SignupPage.jsx';
import VerifyOTPPage from './components/Pages/auth/VerifyOTPPage.jsx';
import ResetPassword from './components/auth/ResetPassword.jsx';
import ResetPwdVerify from './components/auth/ResetPwdVerify.jsx';
import Notification from './components/Pages/Notifications/Notifications.jsx'
import ShowWalletIndividualOnly from './components/Pages/Wallet/ShowWalletIndividualOnly.jsx';
import ShowSharedWalletOnly from './components/Pages/SharedWallet/ShowSharedWalletOnly.jsx'
import Profileuser from './components/Pages/User/ProfileUser.jsx'
import Budget from './components/Pages/Budget/Budget.jsx';
import AddNewBudget from './components/Pages/Budget/BudgetContent/AddNewBudget.jsx';
import Expenses from './components/Pages/Expenses/Expenses.jsx';
import Income from './components/Pages/Income/Income.jsx';
import BudgetWalletsPage from './components/Pages/Extensions/BudgetWalletsPage.jsx';
import EditUserPage from './components/Pages/User/EditUserPage.jsx';
import AddNewIncome from './components/Pages/Income/ContentIncome/AddNewIncome.jsx';
import ShowSharedWalletDetailsSection from './components/Pages/ShareWalletDetails/ShowSharedWalletDetailsSection.jsx';
import EditBudgetPage from './components/Pages/Budget/BudgetContent/EditBudgetPage.jsx';
import EditIncomePage from './components/Pages/Income/ContentIncome/EditIncomePage.jsx';
import AddExpenses from './components/Pages/Expenses/ContentExpenses/AddExpenses.jsx';
import EditExpensePage from './components/Pages/Expenses/ContentExpenses/EditExpensePage.jsx';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الأنيميشن بالمللي ثانية
      once: true,     // الأنيميشن يشتغل مرة واحدة بس
    });
  }, []);

  return (
    
    <div className='overflow-hidden'>
      <ErrorBoundary>
        <Routes >
          {/* Home Page */}
          <Route path='/' element={<HomePage />} />
          
          {/* Authentication */}
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/verify-otp' element={<VerifyOTPPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/reset-password/verify' element={<ResetPwdVerify />} />
          <Route path='/reset-password' element={<ResetPassword />} />

          {/* User Data */}
          <Route path="/profile" element={<Profileuser />} />
          <Route path="/edit-user" element={<EditUserPage />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<DashboardNew />} />

          {/* Wallets */}
          <Route path='/personal-wallets' element={<ShowWalletIndividualOnly />} />

          {/* Shared Wallets */}
          <Route path='/shared-wallets' element={<ShowSharedWalletOnly />} />
          <Route path='/shared-wallets/details' element={<ShowSharedWalletDetailsSection />} />
          
          {/* Budgets */}
          <Route path='/budget' element={<Budget />} />
          <Route path='/budget-wallets' element={<BudgetWalletsPage />} />
          <Route path='/add-budget' element={<AddNewBudget />} />
          <Route path='/edit-budget/:id' element={<EditBudgetPage />} />

          {/* Incomes */}
          <Route path='/income' element={<Income />} />
          <Route path='/add-income' element={<AddNewIncome />} />
          <Route path='/edit-income/:id' element={<EditIncomePage />} />
          
          {/* Expenses */}
          <Route path='/expenses' element={<Expenses />} />
          <Route path='/add-expense' element={<AddExpenses />} />
          <Route path='/edit-expense/:id' element={<EditExpensePage />} />

          {/* <Route path="/wallets" element={<Wallet />} /> */}          
          <Route path='/notification' element={<Notification />} />
        </Routes>

      </ErrorBoundary>
     
    </div>
    
  )
}

export default App
