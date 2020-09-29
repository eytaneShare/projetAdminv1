import React from "react"
import reactDom from "react-dom"
import PropTypes from "prop-types"
import Quantity from "../Quantity"
import nombre from "../Quantity"

import styles from "./BigCard.module.css"
class BigCard extends React.Component {
  state = { isOpen: false }
  onClose = () => {
    this.props.onCloseClick()
  }

  render() {
    const {
      id,
      photo,
      name,
      description,
      price,
      curency,
      isPromo,
      newPrice,
      marque,
      logo,
    } = this.props

    console.log(id)

    return (
      <div className={styles}>
        <div onClick={this.onClose} className={styles.close}>
          X{" "}
        </div>
        <div className={styles.card}>
          <img className={styles.logo} src={logo} />
          <img className={styles.image} src={photo}></img>
        </div>
        <h1 className={styles.title}>{name + " " + description}</h1>

        <div className={styles.price}>
          {" "}
          prix unitaire: {price}
          {curency}
        </div>

        <Quantity
          item={this.props.item}
          price={price}
          curency={curency}
          name={name}
          description={description}
        />
      </div>
    )
  }
}
BigCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  isPromo: PropTypes.bool,
}

BigCard.defaultProps = {
  title: "Pas de titre",
  description: "Pas de description",
  isPromo: false,
}

export default BigCard
