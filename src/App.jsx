import {Routes, Route} from 'react-router-dom'

import { Home, ProductList, Product, Cart, Login , Register} from "../src/pages"

const App = () => {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>

  )
};

export default App;