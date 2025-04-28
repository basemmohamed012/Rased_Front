import React from 'react'
import VerifyOTP from '../../auth/VerifyOTP'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const VerifyOTPPage = () => {
  return (
    <>
        <VerifyOTP />
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

export default VerifyOTPPage