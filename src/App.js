import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from './components/SlickSlider';
import SwiperSlider from './components/SwiperSlider';
import FormValidation from './components/FormValidation';
import Todo from './components/Todo';
function App() {
  return (
    <div className="">
      <SwiperSlider />
      <SlickSlider />
      <FormValidation />
      <Todo/>
    </div>
  );
}

export default App;
