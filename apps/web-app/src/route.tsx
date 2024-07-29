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
import courseLoader from './lib/loaders/course'
import PageNotFound from './pages/not-found'
import getCourses from './lib/loaders/get-courses'

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
        loader: getCourses,
        element: <CoursesPage />
      }
    ]
  },
  {
    path: 'courses',
    children: [
      {
        path: ':courseId',
        loader: courseLoader,
        element: <CoursePage />
      },
      {
        path: ':courseId/edit',
        loader: courseLoader,
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
  },
  {
    path: '*',
    element: <PageNotFound />
  }
])

export default route
