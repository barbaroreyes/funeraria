import {createContext , useState ,useEffect} from 'react';
import { API , graphqlOperation } from 'aws-amplify';
import {listArreglos} from  '../graphql/queries'
const ArregloContext = createContext(null)


const AreglosProvider = ({children}) => {

  const [arreglos, setAreglos] = useState([])
  const [loading, setLoading] = useState(false);




  useEffect(() => {
     fechProjets();
  }, []);
   const  fechProjets = async () => {

      try{
          setLoading(true)
          const projectData = await API.graphql(graphqlOperation(listArreglos) );
          const projectList = await projectData.data.listArreglos.items ;
         console.log('projectList', projectList);
         setAreglos(projectList)
      }catch(error){}
   }
  

  return (
    <ArregloContext.Provider value={{arreglos ,loading}}>
      {children}
    </ArregloContext.Provider>
  );
}

export {ArregloContext ,AreglosProvider } ;
