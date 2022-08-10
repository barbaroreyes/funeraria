import {useContext} from 'react'
import {ArregloContext} from '../contex/areglosContex'
import {Link} from 'react-router-dom'
const Arreglos = () => {
    const {arreglos} = useContext(ArregloContext)
    console.log(arreglos)
  return (
    <div>
     {arreglos.map((item , i )=> {
        return (
            <Link to ={`/arreglos/${item.id}`}>
                {item.name}
                {item.description}
            </Link>
        )
     })}
    </div>
  )
}

export default Arreglos
