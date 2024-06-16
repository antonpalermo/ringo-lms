import { createBrowserRouter } from 'react-router-dom'
import App from './App'

const route = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/dashboard',
        element: <App />
      },
      {
        path: '/courses'
      }
    ]
  }
])

export default route
