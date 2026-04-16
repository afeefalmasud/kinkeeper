import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './Routes/routes';
import { TimeLineContext, TimeLineProvider } from './Context/TimeLineContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimeLineProvider>
      <RouterProvider router={router}></RouterProvider>
    </TimeLineProvider>
  </StrictMode>,
)
