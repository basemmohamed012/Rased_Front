import React from 'react'
import ResetPwdVerify from '../../auth/ResetPwdVerify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ResetPasswordPage = () => {
  return (
    <>
        <ResetPwdVerify />
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