import './App.css';
import Influencer from './components/Influencer/influencer.jsx';
import './components/Influencer/influencer.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Services from './components/Services/services.jsx';
import Brands from './components/Brands/brands.jsx';
import Tools from './components/Tools/tools.jsx';
import Home from './components/Home/home.jsx';
import TestimonialProfile from './components/Testimonial-profile';
import ContactUs from './components/contactUs';
import { BrowserRouter as Router,Routes ,Switch ,Route, BrowserRouter } from 'react-router-dom';
import LetsTalk from './components/LetsTalk';
import About from './components/About/About.js';
import Influencerpage from './components/Influencerpage/Influencerpage'
import Brandform from './components/Brandform/Brandform'
import B2c from './components/Services/B2c';
import ScrollToTop from './components/ScrollToTop';
import Influencermarketing from './components/Influencermarketing/Influencermarketing';

function App() {  
  return (
    <>

    <Router>
      <ScrollToTop/>
        <Navbar/>
            <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/influencer' element={<Influencer/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/brands' element={<Brands/>}/>
            <Route path='/tools' element={<Tools/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/influencer/testimonial' element={<TestimonialProfile/>}/>
            <Route path='/influencerpage' element={<Influencerpage/>}/>
            <Route path='/brandform' element={<Brandform/>}/>
            <Route path='/b2c' element={<B2c/>} />
            <Route path='/marketing' element={<Influencermarketing/>} />

            </Routes>
        <LetsTalk/>
        <Footer/>
    
        </Router>
    
    </>
  );
}

export default App;
