import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Root } from './Components/Root/Root';
import { Home } from './Components/Home/Home';
import { Timeline } from './Components/Timeline/Timeline';
import { Stats } from './Components/Stats/Stats';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: "timeline", Component: Timeline},
      {path:"stats", Component: Stats},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
