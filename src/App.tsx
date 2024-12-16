import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal from './styles'
import Home from './pages/Home'
import Profile from './pages/Profile'
const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home />
      </>
    )
  },
  {
    path: '/profile',
    element: (
      <>
        <Profile />
      </>
    )
  }
])
function App() {
  return (
    <>
      <EstiloGlobal />
      <div className="container">
        <RouterProvider router={routes} />
      </div>
    </>
  )
}

export default App
