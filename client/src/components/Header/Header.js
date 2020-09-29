import React from 'react'
import styles from './Header.module.css'
import logo from '../../logo.svg'
import ShoppingCart from '../ShoppingCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import Connexion from "../connexion";
import Suscription from "../suscription"
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-black">
                <a className="navbar-brand text-light font-weight-bold" href="#">Go F<FontAwesomeIcon icon={faFutbol}/><FontAwesomeIcon icon={faFutbol}/>t</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link text-light" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Menu</a>
                        </li>
                    </ul>
                    <Connexion />
                      <ShoppingCart/>
                </div>
            </nav>
        </>
    )
}

export default Header
