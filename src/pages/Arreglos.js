import {useContext} from 'react'
import {ArregloContext} from '../contex/areglosContex'
import {Link} from 'react-router-dom'
const Arreglos = () => {
    const {arreglos} = useContext(ArregloContext)
    console.log(arreglos)
  return (
    <div className="container">
     {arreglos.map((item , i )=> {
        return (
           <div className="arreglos-container">
             <Link to ={`/arreglos/${item.id}`}>
             <h1>{item.name}</h1>
      <div className ='imageArreglos'>
        <img className ='imageArreglos' src={item.picture} alt ={item.name}/>
      </div>
            </Link>
           </div>
        )
     })}
    </div>
  )
}

export default Arreglos
