
import About from './About';
import Services from './Services';
import Home from './Home';

import {BrowserRouter, Routes, Route,Link} from 'react-router-dom'
function App(){
  return(
  <div>
    <BrowserRouter>
    <ul>
    <li>  <Link to="/home">Home</Link></li>
    <li>  <Link to="/about">About</Link></li>
    <li>  <Link to="/services">Services</Link></li>
    </ul>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/about/:message" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  
    )
  

}
export default App