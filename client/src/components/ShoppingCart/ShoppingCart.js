import React, { useState, Fragment, useEffect } from "react"
import styles from "./ShoppingCart.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faShoppingCart,
  faRemoveFormat,
} from "@fortawesome/free-solid-svg-icons"
import Paypal from "../Payment/Paypal"
import { useCart } from "../../contexts/cartContext"
import Axios from "axios"

const ShoppingCart = (props) => {
  const [cart, dispatch] = useCart()
  const [open, setOpen] = useState(false)

  const [mail, setMail] = useState(localStorage.getItem("email") || "")
  const [address, setAddress] = useState(localStorage.getItem("address")|| "")

  const [status, setStatus] = useState([])
  const remove = (id) => {
    dispatch({
      type: "remove",
      id,
    })
    console.log("item")
  }

  useEffect(() => {
    if (cart.length === 0) setOpen(false)
    setStatus(cart.map((item) => ({ id: item.id, available: true })))
  }, [cart])

  useEffect(() => {
    if (open) {
      Axios.post("http://localhost:8080/cart/validate", cart, { withCredentials: true })
        .then(() =>
          setStatus(status.map((s) => ({ id: s.id, available: true })))
        )
        .catch((err) => {
          const items = err.response.data.items.map((item) => item.id)

          setStatus(
            status.map((s) =>
              items.includes(s.id)
                ? { id: s.id, available: false }
                : { id: s.id, available: true }
            )
          )
        })
    }
  }, [open])

  const onSuccess = async (payment) => {
    // Envoyer la commande au server
    const order = cart.map((item) => ({ id: item.id, count: item.count ,name:item.name, description:item.description ,price: item.price, curency: item.curency, photo:item.photo  }))
    await Axios.post("http://localhost:8080/cart", { order, mail, address }, { withCredentials: true })

    // Vider le cart
    dispatch({ type: "empty" })

    // Afficher un message
    alert("Payment effectué !")

    // Congratulation, it came here means everything's fine!
    console.log("The payment was succeeded!", payment)
  }

  const total = cart.reduce((acc, item) => acc + item.count * item.price, 0)

  if (open == true && cart.length > 0) {
    return (
      <>
        <div className={styles.cart}>
          <FontAwesomeIcon icon={faShoppingCart} className={styles.cartIcon} />
          <div className={styles.numberOfItems}><div className="alignMiddle">{cart.length}</div></div>
        </div>
        <div className={styles.panier}>
          <div onClick={() => setOpen(false)} className={styles.close}>
            X
          </div>
          {cart.map((item) => (
            <div className={styles.item}>
              <h3 className={styles.title}>
                {item.name} {item.description}
              </h3>
              <img src={item.photo} alt="photo" className={styles.photo} />
              <div className={styles.details}>
                <strong>
                  Prix: {item.price} {item.curency}
                  <br />
                  quantite: {item.count}
                  <br />
                  {!status.find((s) => s.id === item.id).available && (
                    <h2 style={{"color":"red"}}>OUT OF STOCK</h2>
                  )}
                  Total: {item.price * item.count} {item.curency}
                </strong>
              </div>
              <div
                onClick={() => {
                  if (cart.length === 1) setOpen(false)
                  remove(item.id)
                }}
                className={styles.removeItem}
              >
                X
              </div>
            </div>
          ))}
          {/* <Paypal/> */}

          {console.log(cart.photo)}
        </div>

        <div className={styles.form}>
          <input
            className={styles.input}
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            placeholder="votre mail"
          />
          <br />
          <input
            className={styles.input}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="votre adresse"
          />
          <p>Total: {total} €</p>
          {status.every((s) => s.available) && (
            <Paypal onSuccess={onSuccess} toPay={total} />
          )}
          {console.log(cart)}
        </div>
      </>
    )
  } else {
    return (
      <div
        className={styles.cart}
        onClick={() => {
          if (cart.length > 0) setOpen(true)
        }}
      >
        <FontAwesomeIcon icon={faShoppingCart} className={styles.cartIcon} />
        <div className={styles.numberOfItems}>{cart.length}</div>
      </div>
    )
  }
}
export default ShoppingCart
