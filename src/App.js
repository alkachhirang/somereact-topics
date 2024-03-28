import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from './components/SlickSlider';
import SwiperSlider from './components/SwiperSlider';
import FormValidation from './components/FormValidation';
function App() {
  return (
    <div className="">
      <SwiperSlider />
      <SlickSlider />
      <FormValidation />
    </div>
  );
}

export default App;
