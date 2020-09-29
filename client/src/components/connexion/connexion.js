import React , {useState} from 'react'
import axios from "axios"
var URLConnexion = "http://localhost:8080/connexion"
const Connexion=()=>{
    const[name, setName]=useState("")
    const [password, setPassword]= useState("")
    const [pass, setPass]= useState("")
    const connect = localStorage.connect
    // if (window.localStorage.address === undefined){
    //     connect = undefined
    // }else{
    //     connect = true
    //
    const [connexion ,setConnexion]= useState(connect)
    const check=()=>{
        console.log(name)
        console.log(password)
        let request= {userName:name, password:password}
        axios.post(URLConnexion , request, { withCredentials: true }).then(resp=>{
            console.log(resp);
            
            localStorage.setItem("email", resp.data.email);
            localStorage.setItem("address", resp.data.address)
            localStorage.setItem("userName", name)
            localStorage.setItem("admin", resp.data.isAdmin)
            localStorage.setItem("connect", "connect")
            
            if (localStorage.address !== undefined){
                setConnexion("connect")
            }
        })
        .catch(err=>{console.log(err)})
setPass("save")
    //     fetch('https://localhost:8080/connexion', {
    //     method: 'POST',
    //     // We convert the React state to JSON and send it as the POST body
    //     body: {"UserName": UserName, "Password":password}
    //   }).then(function(response) {
    //     console.log(response)
    //     return response.json();
    //   });
// console.log(connect)    
}
const logout =()=>{
    if (localStorage.getItem("email") !== null) {
        localStorage.removeItem("email")
        localStorage.removeItem("address")
        localStorage.removeItem("userName")
        localStorage.removeItem("admin")
        localStorage.removeItem("connect")
        axios.post(`${URLConnexion}/logout`, null, { withCredentials: true }).then(()=>{console.log('logout')}).catch(err=>{console.log(err)})
        setConnexion("no user get connect")
    }
}
 if (connexion !== "connect"){
    return(
        <div className="form-inline">
            <input className="form-control" placeholder="UserName" onChange={(e)=>{setName(e.target.value)}}/>
            <input className="form-control" type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
            <button className="btn btn-primary" onClick={check}>connexion</button>

        </div>
    )}else{
        return(
            <button onClick={logout} className="btn btn-secondary">se deconnecter</button>
        )
    }
}
export default Connexion