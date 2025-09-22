import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import Board from './Board'
import Events from './Events'
import Resources from './Resources'

const base = import.meta.env.BASE_URL || '/'

const router = createBrowserRouter(
  [
    { path: '/', element: <App /> },
    { path: '/board', element: <Board /> },
    { path: '/events', element: <Events /> },
    { path: '/resources', element: <Resources /> },
  ],
  { basename: base }
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
