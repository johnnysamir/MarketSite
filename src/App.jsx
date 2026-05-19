import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Products } from './components/Nav/Products'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="product/:id" element={<ItemDetailContainer />} />
          <Route path="products" element={<Products />} />
          <Route path="carrito" element={<h1>Carrito</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
