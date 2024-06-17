import { createBrowserRouter } from 'react-router-dom'

import DashboardPage from './pages/dashboard'
import CoursesPage from './pages/courses'
import DashboardLayout from './pages/layouts/dashboard.layout'

const route = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />
          }
        ]
      },
      {
        path: 'courses',
        children: [{ index: true, element: <CoursesPage /> }]
      }
    ]
  }
])

export default route
