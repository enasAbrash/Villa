

import './App.css'
import Container from './components/Container/Container';
import Header from './components/Header/Header'
import InfoTable from './components/InfoTable/InfoTable'
import MiniCard from './components/MiniCard/MiniCard';
import NavBar from './components/NavBar/NavBar'
import {infoTable1} from './InfoTable';
import {infoTable2} from './InfoTable';
import videoBg from './assets/images/video-bg.jpg';
import videoFrame from "./assets/images/video-frame.jpg"
import Map from './components/Map/Map';
import Contact from './pages/Contact/Contact';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import VideoContent from './components/VideoContent/VideoContent';
import Background from './components/Background/Background';
import { Route, Routes } from 'react-router-dom';
import Properties from './pages/Properties/Properties';

import SlideShow from './components/SlideShow/SlideShow';
import Home from './pages/Home/Home';
import PropertyDetails from './pages/PropertyDetails/PropertyDetails';



function App() {


  return (
  
      <div className="App">
<Header/>
<NavBar logo="VILLA" navItems={[{content:"Home",path:"/"},{content:"Properties",path:"/properties"},{content:"Property Details",path:"/property-detail"},{content:"Contact Us",path:"/contact"}]} btn="Scheduale a visit"/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/properties" element={<Properties/>} />
<Route path="/property-detail" element={<PropertyDetails/>}/>
</Routes>


  
     
    
  

{/* <Accordion accordion={[{title:"Best useful links ?",
  content:"Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it."},
  {title:"How does this work ?",content:"Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {title:"Why is Villa Agency the best ?", content:"Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} ]} /> */}
     <Footer/>
      </div>
       
  
  )
}

export default App
