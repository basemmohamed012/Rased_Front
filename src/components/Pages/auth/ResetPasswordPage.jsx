import React from 'react'
import ResetPassword from '../../auth/ResetPassword'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ResetPasswordPage = () => {
  return (
    <>
        <ResetPassword />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" />
    </>
  )
}

export default ResetPasswordPage