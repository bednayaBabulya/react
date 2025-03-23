import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { AuhtProvider } from './AuthContext.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuhtProvider>
      <RouterProvider router={router} />
    </AuhtProvider>
  </StrictMode>,
)
