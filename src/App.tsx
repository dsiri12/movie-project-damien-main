import './App.css'
import HeroHeader from './components/HeroHeader/HeroHeader';
import MovieSelectionSliderItem from './components/MovieSelectionSlider/MovieSelectionSliderItem';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <>
      <Nav background='#242424' />
      <HeroHeader title='Space-Themed Movies' image='/moon-and-earth-header.png' subtitle='Check out these movies that immerse you into an adventure within interplanetary space!' height={400} />
      <MovieSelectionSliderItem image='/moon-and-earth-header.png' title='Slider' height={250} width={200}/>
    </>
  );
}

export default App;
