import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.js'
import { AuhtProvider } from './AuthContext.js'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404</div>
  },
  {
    path: '/about-us',
    element: <div>About-us</div>
  }
]);

createRoot(rootElement).render(
  <StrictMode>
    <AuhtProvider>
      <RouterProvider router={router} />
    </AuhtProvider>
  </StrictMode>,
)
