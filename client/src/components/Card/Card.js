import React, { Component } from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import styles from './Card.module.css'
import BigCard from '../BigCard'
const checkpromo = promo => {}
class Card extends Component {
    state = { isOpen: false }
    zoom = () => {
        this.setState({ isOpen: true })
    }
    onBigCardCloseClick = () => {
        this.setState({ isOpen: false })
    }

    render() {
        const { id, title, onZoom, description, photo, price,curency, isPromo, newPrice, marque, logo } = this.props
        const isOpen = this.state.isOpen

        
            return (
                <div className={styles.card} onClick={onZoom}>
                    <div>
                        <img src={photo} alt="maillot du" className={styles.photo} />
                    </div>
                    <div className={styles.title}>{title}</div>
                    <div>{description}</div>
                    <div className={styles.price}>{price}{curency}</div>
                    <img src={logo} className={styles.logo} />
                </div>
            )
        
        }
    }


Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    ispromo: PropTypes.bool,
}

Card.defaultProps = {
    title: 'Pas de titre',
    description: 'Pas de description',
    ispromo: false,
}

export default Card
