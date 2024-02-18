import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import BrowseJob from './components/BrowseJob'
import UploadResume from './components/UploadResume'
//import HomeImage from '../images/MainImage.png';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
 BrowserRouter,
Routes,
Route
} from "react-router-dom";


function App() {

  return (
    <>
         <BrowserRouter>
         <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Navbar at the top */}
            <Navbar/>
            <div style={{ flex: 1 }}>
                <Routes>
                    <Route path="/" element={<Home/>}/>   
                    <Route  path="/contact" element={<Contact/>} />   
                    <Route  path="/browseJob" element={<BrowseJob/>}/>     
                    <Route path='/uploadResume' element={<UploadResume/>}/>           
                </Routes>
              </div>
              <Footer/>
          </div>
         </BrowserRouter>
         
    </>
  );
}

export default App;
