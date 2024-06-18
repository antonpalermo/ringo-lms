import { Outlet, createBrowserRouter } from 'react-router-dom'

import CoursePage from './pages/course'
import CoursesPage from './pages/courses'
import DashboardPage from './pages/dashboard'
import EditCoursePage from './pages/course-edit'
import CreateCoursePage from './pages/course-create'

import SignInPage from './pages/sign-in'
import SignUpPage from './pages/sign-up'

const route = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: 'dashboard',
        element: <Outlet />,
        children: [
          { index: true, element: <DashboardPage /> },
          {
            path: 'courses',
            element: <CoursesPage />
          }
        ]
      },
      {
        path: 'courses',
        element: <Outlet />,
        children: [{ path: ':courseId', element: <CoursePage /> }]
      },
      {
        path: 'create',
        element: <Outlet />,
        children: [
          {
            path: 'course',
            element: <CreateCoursePage />
          }
        ]
      },
      {
        path: 'edit',
        element: <Outlet />,
        children: [
          {
            path: 'course/:courseId',
            element: <EditCoursePage />
          }
        ]
      },
      {
        path: 'auth',
        element: <Outlet />,
        children: [
          { path: 'signin', element: <SignInPage /> },
          { path: 'signup', element: <SignUpPage /> }
        ]
      }
    ]
  }
])

export default route
