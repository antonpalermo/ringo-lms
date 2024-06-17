import { Outlet, createBrowserRouter } from 'react-router-dom'

import CoursePage from './pages/course'
import CoursesPage from './pages/courses'
import DashboardPage from './pages/dashboard'
import EditCoursePage from './pages/course-edit'
import CreateCoursePage from './pages/course-create'

const route = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <DashboardPage />
      },
      {
        path: 'courses',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <CoursesPage />
          },
          {
            path: 'create',
            element: <CreateCoursePage />
          },
          {
            path: ':courseId',
            element: <Outlet />,
            children: [
              { index: true, element: <CoursePage /> },
              { path: 'edit', element: <EditCoursePage /> }
            ]
          }
        ]
      }
    ]
  }
])

export default route
