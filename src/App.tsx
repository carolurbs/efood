import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal from './styles'
import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
  }
])
function App() {
  return (
    <>
      <EstiloGlobal />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={routes} />
      <Footer />
    </>
  )
}

export default App
