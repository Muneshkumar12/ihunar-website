import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home,AboutUs,OurTeam,SoftwareDevelopment ,WebDevelopment,WordPress,MobileAppDevelopment,ProductAndDesign,Ecommerce,Internship,Jobs,Contact } from '../../pages';
const Router = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about-us' element={<AboutUs/>}/>
    <Route path='/team' element={<OurTeam/>}/>
    <Route path='/software-development' element={<SoftwareDevelopment/>}/>
    <Route path='/web-development' element={<WebDevelopment/>}/>
    <Route path='/wordpress' element={<WordPress/>}/>
    <Route path='/mobile-app-development' element={<MobileAppDevelopment/>}/>
    <Route path='/prodect-design' element={<ProductAndDesign/>}/>
    <Route path='/ecommerce' element={<Ecommerce/>}/>
    <Route path='/internship' element={<Internship/>}/>
    <Route path='/jobs' element={<Jobs/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Router
