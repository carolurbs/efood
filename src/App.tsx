import EstiloGlobal from './styles'
import Header from './components/header'
import Hero from './components/hero'
import Banner from './components/banner'

function App() {
  return (
    <main>
      <EstiloGlobal />
      <div className="container">
        <Header />
      </div>
      <Banner />
    </main>
  )
}

export default App
