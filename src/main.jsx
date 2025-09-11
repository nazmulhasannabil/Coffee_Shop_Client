import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/rancho'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddCoffee from './components/AddCoffee.jsx'
import UpdateCoffee from './components/UpdateCoffee.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import Users from './components/Users.jsx'
import MainLayout from './layout/MainLayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <App />,
        loader: () => fetch('https://coffee-shop-server-5wsk.onrender.com/coffee')
      },
      {
        path: 'addCoffee',
        element: <AddCoffee />
      },
      {
        path: 'updateCoffee/:id',
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`https://coffee-shop-server-5wsk.onrender.com/coffee/${params.id}`)
      },
      {
        path: 'signIn',
        element: <SignIn />
      },
      {
        path: 'signUp',
        element: <SignUp />
      },
      {
        path: 'users',
        element: <Users />,
        loader: () => fetch('https://coffee-shop-server-5wsk.onrender.com/users')
      },
    ]

  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
