import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router.jsx'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './Provider/AuthProvider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='container mx-auto'>
          <Toaster

            position="top-right"
            reverseOrder={false}
          />

          <RouterProvider router={router}>



          </RouterProvider>
        </div>

      </QueryClientProvider>

    </AuthProvider>


  </React.StrictMode>,
)
