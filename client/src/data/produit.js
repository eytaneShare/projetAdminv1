
const URL = "http://localhost:8080/"
export  function allProduct(){
 
    return fetch(`${URL}`, {credentials: 'include'})
        .then(res => res.json()) //.json
        
  
  }
export  function soccerBall() {
    return fetch(`${URL}categories/ballon`, {credentials: 'include'})
        .then(res => res.json()) //.json
        
  
  }
  
  export function allShirts(){

    return fetch(`${URL}categories/maillot`, {credentials: 'include'})
    .then(res=>res.json())
  }
  export function ascending() {
    return fetch(`${URL}order/ascending/`, {credentials: 'include'}).then((res) => res.json());
  }
  export function descendingOrder() {
    return fetch(`${URL}order/descending/`, {credentials: 'include'}).then((res) => res.json());
  }
  export  function allProductAdmin(){
 
    return fetch(`${URL}admin`, {
      credentials: 'include'
    })
        .then(res => res.json()) //.json
        
  
  }

  // format des donnees recu
// [
//     {
//         id: '0',
//         photo: realD,
//         name: 'maillot real madrid',
//         description:'domicile',
//         price:"90€",
//         isPromo:false,
//         newPrice:"",
//         marque:"addidas",
//         logo:addidas
        
//     },
//     {
//         id: '1',
//         photo: realE2,
//         name: 'maillot real madrid',
//         description: "exterieur",
//         price:"90€",
//         isPromo:false,
//         newPrice:"",
//         marque:"addidas",
//         logo:addidas
//     }]


