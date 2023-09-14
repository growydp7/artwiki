import { createBrowserRouter } from 'react-router-dom'

import Layout from '../layout'
import Index from '../pages/Index'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/index",
        element: <Index />
      }
    ]
  }
])

export default router