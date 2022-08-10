import {useContext} from 'react';
import {useParams} from 'react-router-dom'; 
import {ArregloContext} from '../contex/areglosContex' ; 

const Arreglo = () => {
    const {id} = useParams()
    const {arreglos} = useContext(ArregloContext);
    
    const single = arreglos.find(item => item.id === id);
    const {name, description , picture }= single
  return (
    <div className ='arregloContainer'>
    
      <h1>{name}</h1>{name}
      <h3>{description}</h3>
      <div className ='imageArregloContainer'>
        <img className ='imageArreg' src={picture} alt ={name}/>
      </div>

    </div>
  );
}

export default Arreglo;
