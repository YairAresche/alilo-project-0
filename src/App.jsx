import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';

import NavBar from './components/NavBar/NavBar'
import CartContainer from './containers/CartContainer/CartContainer';
import Welcome from './components/Welcome/Welcome';
import Carousel from './components/Carousel/Carousel'; // Utilizar luego
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import FAQ from './components/FAQ/FAQ';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <CartContextProvider >

      <BrowserRouter className="App">

        <NavBar />

        <main> {/* encierro el contenido para dar margin top = al heigth del navbar fixed así no tapa contenido. */}
          <Routes>

            <Route path='/' element={<>
              <Carousel />
              <Welcome />
              <ItemListContainer />
              <AboutMe />
            </>} />

            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/categoria/:categoryId' element={<ItemListContainer />} />
            <Route path='/detalles/:productId' element={<ItemDetailContainer />} />
            <Route path='/sobreMi' element={<AboutMe />} />
            <Route path='/FAQ' element={<FAQ />} />
            <Route path='/cart' element={<CartContainer />} />


            <Route path='/*' element={<Navigate to='/' />} />

          </Routes>

          <Footer />
        </main>

      </BrowserRouter>

        
    </CartContextProvider>
  )
}

export default App
