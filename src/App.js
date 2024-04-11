import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavPractice from './components/NavPractice';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from './components/SlickSlider';
import SwiperSlider from './components/SwiperSlider';
import FormValidation from './components/FormValidation';
import MapCard from './components/MapCard';
import MapNav from './components/MapNav';
function App() {
  return (
    <div className="">
      <NavPractice />
      <SwiperSlider />
      <SlickSlider />
      <FormValidation />
      <MapCard />
      <MapNav />

    </div>
  );
}

export default App;
