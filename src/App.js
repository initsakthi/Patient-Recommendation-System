import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/AboutPages";
import BlogDeatil from "./pages/BlogDeatilPage";
import BlogPages from "./pages/BlogPages";
import Booking from "./pages/BookingPages";
import Contact from "./pages/ContactPages";

import Home from "./pages/HomePages";
import Price from "./pages/PricePages";
import Services from "./pages/ServicesPages";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Appointment from "./pages/Appointment";
import ReadMore from "./pages/ReadMore";
import ReadMore1 from "./pages/ReadMore1";
import DentalCare from "./pages/Dentalcare";
import Arthritis from "./pages/Arthritis";
import Anemia from "./pages/Anemia";
import Cancer from "./pages/Cancer";
import Hair from "./pages/Hair";
import Jaundice from "./pages/Jaundice";
import SkinDiseases from "./pages/SkinDiseases";
import Typhoid from "./pages/Typhoid";
import Dengue from "./pages/Dengue";
import Cold from "./pages/Cold ";
import Asthma from "./pages/Asthma";
import Acney from "./pages/Acney";
import KidneyStones from "./pages/KidneyStones";
import Depression from "./pages/Depression";
import LiverDisorders from "./pages/LiverDisorders";
import Backpain from "./pages/Backpain";
import LearnMore from "./pages/LearnMore";
import NutritionMetrix from "./pages/NutritionMetrix";





function App() {
  return (
    <>
      <Router >
      <Header />
        <Routes >
          <Route exact path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/blogdeatil' element={<BlogDeatil/>} />
          <Route path='/blogpages' element={<BlogPages/>} />
          <Route path='/booking' element={<Booking/>} />
          <Route path='/price' element={<Price/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/appointment' element={<Appointment/>} />
          <Route path='/readmore' element={<ReadMore />} />
          <Route path='/readmore1' element={<ReadMore1 />} />
          <Route path='/dentalCare' element={<DentalCare />} />
          <Route path='/learnmore' element={<LearnMore />} />
          <Route path='/arthritis' element={<Arthritis />} />
          <Route path='/anemia' element={<Anemia />} />
          <Route path='/cancer' element={<Cancer />} />
          <Route path='/hair' element={< Hair />} />
          <Route path='/cold' element={<Cold/>} />
          <Route path='/asthma' element={<Asthma/>} />
          <Route path='/kidneystones' element={<KidneyStones />} />
          <Route path='/depression' element={<Depression />} />
          <Route path='/liverDisorders' element={<LiverDisorders />} />
          <Route path='/skinDiseases' element={<SkinDiseases />} />
          <Route path='/acney' element={<Acney />} />
          <Route path='/typhoid' element={<Typhoid />} />
          <Route path='/backpain' element={<Backpain />} />
          <Route path='/dengue' element={<Dengue />} />
          <Route path='/jaundice' element={<Jaundice />} />
          <Route path='/nutri' element={<NutritionMetrix />} />
          
         
         
        </Routes >
        <Footer />
      </Router>
    </>
  );
}

export default App;
