import EstiloGlobal from './styles'
import Header from './components/header'
import Banner from './components/banner'
import Footer from './components/footer'

function App() {
  return (
    <main>
      <EstiloGlobal />
      <div className="container">
        <Header />
      </div>
      <Banner />
      <Footer />
    </main>
  )
}

export default App
