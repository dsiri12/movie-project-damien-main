import './App.css'
import BottomFooter from './components/BottomFooter/BottomFooter';
import HeroHeader from './components/HeroHeader/HeroHeader';
import MovieSelectionSlider from './components/MovieSelectionSlider/MovieSelectionSlider';
import MovieSelectionSliderItem from './components/MovieSelectionSlider/MovieSelectionSliderItem';
import Nav from './components/Nav/Nav';
import NearbyTheatersContainer from './components/NearbyTheaters/NearbyTheatersContainer';

function App() {
  return (
    <>
      <Nav background='#242424' />
      <HeroHeader title='Space-Themed Movies' image='/moon-and-earth-header.png' subtitle='Check out these movies that immerse you into an adventure within interplanetary space!' height={400} />
      <MovieSelectionSlider itemsPerSlide={2} items={[{image: '/moon-and-earth-header.png', title: 'Movie One'}, {image: '/moon-and-earth-header.png', title: 'Movie Two'}, {image: '/moon-and-earth-header.png', title: 'Movie Three'}, {image: '/moon-and-earth-header.png', title: 'Movie Four'} ]} />
      <NearbyTheatersContainer items={[{ title: 'Movie Theater 1', subtitle: '401 Passaic Drive New York, NY 010101' }]} />
      <BottomFooter background='#242424' />
    </>
  );
}

export default App;
