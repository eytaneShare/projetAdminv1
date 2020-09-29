import React, {useState} from "react"
import styles from "./suscription.module.css"
import axios from "axios"
import { findAllByPlaceholderText } from "@testing-library/react"
const Suscription =()=>{
    const[name, setName]=useState("")
    const [password, setPassword]= useState("")
    const [address, setAddress] =useState("")
    const [mail ,setMail] = useState("")
    const [displayLogOut, setDisplayLogOut]=useState(false)
    var URLConnexion = "http://localhost:8080/connexion/suscription"
    var URLLogOut = "http://localhost:8080/connexion/logout"
    const addUser=()=>{
        console.log(name)
        console.log(password)
        let request= {userName:name, password:password ,email:mail, address }
        axios.post(URLConnexion , request, { withCredentials: true }).then(resp=>{localStorage.setItem("email", resp.data.email) }).catch(err=>{console.log(err)})
    }
 
    return(
        <>
            <div className="form-inline">
            <input className="form-control" placeholder="UserName" onChange={(e)=>{setName(e.target.value)}}/>
            <input className="form-control" type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
            <input className="form-control" placeholder="Addresse" onChange={(e)=>{setAddress(e.target.value)}}/>
            <input className="form-control" type="text" placeholder="votre mail" onChange={(e)=>{setMail(e.target.value)}} />
            <button className="btn btn-primary" onClick={addUser}>inscription</button>
            {/* {localStorage.getItem("email") !== null && <button onClick={logout} className="btn btn-secondary">se deconnecter</button>} */}
            </div>
        </>
    )
}
export default Suscription