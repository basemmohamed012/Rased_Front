import React from 'react'
import Signup from '../../auth/Signup'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SignupPage = () => {
  return (
    <>
        <Signup />
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

export default SignupPage