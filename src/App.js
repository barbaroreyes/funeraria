import './App.css';
import {Amplify} from 'aws-amplify';
import awsConfi  from './aws-exports'
import {Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import Arreglos from './pages/Arreglos';
import Arreglo from './compo/Arreglo';
import Header from './compo/Header';
Amplify.configure(awsConfi) ; 

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/arreglos' element ={<Arreglos/>}/>
      <Route path='/arreglos/:id' element ={<Arreglo/>}/>
     </Routes>
    </div>
  );
}

export default App;
