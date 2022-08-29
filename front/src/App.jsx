import CartProvider from './context';
import Footer from './components/footer';
import Header from './components/header';
import Main from './screens/main';
import Product from './screens/product'
import './sass/_variable.scss';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='*' element={<>Error 404</>} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;