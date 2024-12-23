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
      <MovieSelectionSlider items={[{
        image: '/moon-and-earth-header.png', title: 'Movie One',
        itemsPerSlide: 0
      }, {
        image: '/moon-and-earth-header.png', title: 'Movie Two',
        itemsPerSlide: 0
      }, {
        image: '/moon-and-earth-header.png', title: 'Movie Three',
        itemsPerSlide: 0
      }, {
        image: '/moon-and-earth-header.png', title: 'Movie Four',
        itemsPerSlide: 0
      } ]} />
      <NearbyTheatersContainer items={[{ title: 'Movie Theater 1', subtitle: '401 Passaic Drive New York, NY 010101' }]} />
      <BottomFooter background='#242424' />
    </>
  );
}

export default App;
