import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import RootLayout from './layout/RootLayout'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      
    <Route path='/' element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path='product' element={<Product />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<ContactLayout />} > 

      <Route path='info' element={<ContactInfo />} />
      <Route path='form' element={<ContactForm />} />
      
      
      
      </Route>
      
     
    </Route>
  )
)

  return (
    <RouterProvider router={router} />
  )
}

export default App