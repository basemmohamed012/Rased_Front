import React from 'react'
import Navbar from '../../../Layout/Navbar/Navbar.jsx'
import Header from '../../Home/Header/Header.jsx'
 import GoogleAppStore from '../../Home/Google&ApStore/GoogleAppStore'
 import Financial from '../../Home/Finaicail/Finaicail'
 import AnalysisCard from '../ِAnalysisCard/AnalysisCard.jsx'
 import  Card  from '../../Home/Cards/Card'
 import Advantage from '../../Home/Advantages/advantage.jsx'
 import Examples from '../../Home/Examples/Examples'
 import Qrcode from '../../Home/Qrcode/Qrcode'
 import Management from '../../Home/Management/Management'
  import Footer from '../../Home/Footer/Footer'
// import OneTouch from '../../Home/OneTouch/OneTouch'
// import Analysis from '../../Home/Analysis/Analysis'
// import Features from '../../Home/Features/Features'




const Home = () => {
  return (
    
   <>
   <Navbar/>
    
    <Header />
    
   
   <Financial />
  
   
    <GoogleAppStore />
    <AnalysisCard />
    <Card/>
    <Advantage />
    <Management />
    <Qrcode/>
    <Examples />
    <Footer />
    {/*
   <OneTouch />
   <Analysis />
   <Features />
  
  
  
   
  */}
   </>
   
  
   
    
  )
}

export default Home
