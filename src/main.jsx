import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Home from './routes/Home.jsx'
import Meal from './routes/Meal.jsx'
import CategoryDetail from './components/sectionsApp/CategoryDetail.jsx'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'meal/:idMeal',
        element: <Meal/>
      },
      {
        path: 'category/:categoryName',
        element: <CategoryDetail/>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
