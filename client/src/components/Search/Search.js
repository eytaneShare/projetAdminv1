import React, {Component} from 'react'
import styles from './Search.module.css'
import { Circle } from 'react-spinners-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
//export class Search extends Component{
  //  constructor(props){
    //super(props)
    //this.state= {
    //    produit: produit,
      //  search: ''
   // };
//}
//}
const Search=({filter, setFilter})=>{
    return(
        <div className={styles.searchBar}>
            <input
            filter= {filter}
            onChange={setFilter}
            
             className=' pa3 ba b--green bg-lightest-blue'
            type='search' placeholder= "rechercher..."/> <FontAwesomeIcon icon ={faSearch} className={styles.searchIcon}/>
            
        </div>
    );
};
export default Search