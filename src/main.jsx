import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RootLayout from './RootLayout'
import SingleProduct from './SingleProduct'
import { FetchDatas, SingleFetchData } from './FetchDatas'


const router=createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    children:[
      {index:true , element:<App/>, loader:FetchDatas},
      {path:":id", element:<SingleProduct/> , loader:SingleFetchData}
    ]

  }
])





createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}/>

    
  </StrictMode>
)
