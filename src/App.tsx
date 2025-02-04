import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal from './styles'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { store } from './store'
import Cart from './components/Cart'
import Address from './components/Address'
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
    path: '/profile/:id',
    element: (
      <>
        <Profile />
      </>
    )
  }
])
function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <div className="container">
        <RouterProvider router={routes} />
      </div>
      <Cart />
    </Provider>
  )
}

export default App
