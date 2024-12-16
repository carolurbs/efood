import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal from './styles'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Footer from './components/Footer'
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
        <Footer/>
      </div>
    </>
  )
}

export default App
