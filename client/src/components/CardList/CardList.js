import React, { useState, useEffect } from "react"
import styles from "./CardList.module.css"
import { Button } from "reactstrap"
import Card from "../Card"
import {
  allProduct,
  soccerBall,
  allShirts,
  ascending,
  descendingOrder,
  allProductAdmin
} from "../../data/produit"
import BigCard from "../BigCard"
import Search from "../../components/Search"
// import {open } from "../ShoppingCart/"

// import {ballon} from '../../data/categoriesNames'
var getProduit
const CardList = () => {
  const [zoomId, setZoomId] = useState(null)
  const [display, setDisplay] = useState("menu")
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState("")
const [refresh , setRefresh] = useState("")
const [admin ,setAdmin] =  useState(false)

  switch (display) {
    case "menu":
      if (window.localStorage.admin === undefined || JSON.parse(window.localStorage.admin) !== true){
      
      getProduit = allProduct
      
    
  }else{
      getProduit = allProductAdmin
    // setAdmin(true) 
   
    }
      break
    case "ball":
      getProduit = soccerBall
      break
    case "ascending": {
      getProduit = ascending
      break
    }
    case "descending": {
      getProduit = descendingOrder
      break
    }
    case "shirts":
      getProduit = allShirts
      break
      case "admin":
        getProduit =allProductAdmin
        break
    default:
      getProduit = allProduct
  }
  useEffect(() => {
    getProduit().then((products) => setProducts(products))
  }, [display])

  if (zoomId !== null) {
    const element = products.filter((produit) => produit.id === zoomId)[0]

    return (
      <BigCard
        item={element}
        key={element.id}
        onCloseClick={() => setZoomId(null)}
        name={element.name}
        photo={element.photo}
        title={element.name}
        description={element.description}
        price={element.price}
        curency={element.curency}
        isPromo={element.isPromo}
        newPrice={element.newPrice}
        logo={element.logo}
      />
    )
  }

  return (
    <>
    {/* {console.log(JSON.parse(window.localStorage.admin))} */}
    {console.log(window.localStorage.getItem("admin"))}
      <Search
        filter={filter}
        setFilter={(e) => {
          setFilter(e.target.value)
          if (display !== "menu") setDisplay("menu")
        }}
      />
      {console.log(soccerBall)}
      {/* <Button color='primary'>Primary</Button>{' '} */}
      <button onClick={() => setDisplay("ball")} className={styles.categories}>
        Ballon
      </button>
      <button
        onClick={() => setDisplay("shirts")}
        className={styles.categories}
      >
        Maillot
      </button>
      <button onClick={() => setDisplay("menu")} className={styles.categories}>
        Menu
      </button>
      <button
        onClick={() => setDisplay("ascending")}
        className={styles.categories}
      >
        croissant
      </button>
      <button
        onClick={() => setDisplay("descending")}
        className={styles.categories}
      >
        decroissant
      </button>
     { <button 
        onClick={() => setDisplay("admin")}
        className={((window.localStorage.admin === undefined || JSON.parse(window.localStorage.admin) !== true))? styles.noDisplay: styles.categories} 
      >
        admin
      </button>}

      <div className={styles.cardlist}>
        { }
        {products
          .filter(
            (element) =>
              element.name.includes(filter) || element.marque.includes(filter)
          )
          .map((element) => {
            return (
              <Card
                key={element.id}
                onZoom={() => setZoomId(element.id)}
                photo={element.photo}
                title={element.name}
                marque={element.marque}
                description={element.description}
                price={element.price}
                curency={element.curency}
                isPromo={element.isPromo}
                newPrice={element.newPrice}
                logo={element.logo}
              />
            )
          })}
      </div>
    </>
  )
}

export default CardList
