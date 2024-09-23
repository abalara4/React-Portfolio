import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Project from './pages/Project.jsx'
import About from './pages/About.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Contact",
        element: <Contact /> 
      },
      {
        path: "/Project",
        element: <Project />,
        component: { ProjectCard }
      },
      {
        path: "/About",
        element: <About />
      }
    ]
  }
]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
