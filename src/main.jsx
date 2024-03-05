import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Mountain from './components/Mountain/Mountain.jsx'
import Random from './components/Random/Random.jsx'
import Forest from './components/Forest/Forest.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/> }>
     <Route path='/about' element={<About/>} />   
     <Route path='' element={<Home />}/>   
     <Route path='/mountain' element={<Mountain/>}  />   
     <Route path='/random' element={<Random/>}  />   
     <Route path='/forest' element={<Forest/>}  />   


    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
