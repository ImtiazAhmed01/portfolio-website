import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Component/Home/Home.jsx'
import Services from './Component/Services/Services.jsx'
import BlogsNews from './Component/Blogs & News/BlogsNews.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/blogs",
        element: <BlogsNews></BlogsNews>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
// import Home from './Component/Home/Home.jsx'
// import Services from './Component/Services/Services.jsx'
// import BlogsNews from './Component/Blogs & News/BlogsNews.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       { path: '/', element: <Home /> },
//       { path: '/services', element: <Services /> },
//       { path: '/blogs', element: <BlogsNews /> },
//     ]
//   }
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// )
