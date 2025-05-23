import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SingleProduct from './SingleProduct.jsx'
import RootLayout from './RootLayout.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    children:[
      {index:true , element:<App/>},
      {path:":id" , element:<SingleProduct/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
