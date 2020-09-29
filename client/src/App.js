import React from "react"
import "./App.css"
import Header from "./components/Header"
import CardList from "./components/CardList"
import Connexion from './components/connexion'
import DataComponent from "./data/produit"
import Search from "./components/Search"
import Suscription from "./components/suscription"
import "tachyons"

import { CartProvider } from "./contexts/cartContext"

function App() {
  return (
    <div className="App">
      {/* <Connexion/>} */}
      {/*<Suscription/> */}
      <CartProvider>
        <Header />
        <CardList />
      </CartProvider>
    </div>
  )
}

export default App
