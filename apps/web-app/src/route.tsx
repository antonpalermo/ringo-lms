import { Outlet, createBrowserRouter } from 'react-router-dom'

import CoursePage from './pages/course'
import CoursesPage from './pages/courses'
import DashboardPage from './pages/dashboard'
import EditCoursePage from './pages/course-edit'
import CreateCoursePage from './pages/course-create'

import SignInPage from './pages/sign-in'
import SignUpPage from './pages/sign-up'
import AuthLayout from './pages/layouts/auth.layout'
import DashboardLayout from './pages/layouts/dashboard.layout'

const route = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />
      },
      {
        path: 'courses',
        element: <CoursesPage />
      }
    ]
  },
  {
    path: '/course',
    children: [
      {
        path: ':courseId',
        element: <CoursePage />
      },
      {
        path: ':courseId/edit',
        element: <EditCoursePage />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'signin', element: <SignInPage /> },
      { path: 'signup', element: <SignUpPage /> }
    ]
  },
  {
    path: '/create',
    element: <Outlet />,
    children: [
      {
        path: 'course',
        element: <CreateCoursePage />
      }
    ]
  }
])

export default route
