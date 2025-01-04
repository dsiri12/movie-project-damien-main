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
      <MovieSelectionSlider itemsPerSlide={0} items={[{
        image: '/spiderMan2002.png', title: 'Spider-Man (2002)',
        itemsPerSlide: 0
      }, {
        image: '/sonicTheHedgehogMovie.png', title: 'Sonic the Hedgehog (2020)',
        itemsPerSlide: 0
      }, {
        image: '/gladiatorMovie.png', title: 'Gladiator (2000)',
        itemsPerSlide: 0
      }, {
        image: '/justiceLeagueMovie.png', title: 'Justice League (2017)',
        itemsPerSlide: 0
      }]} />
      <MovieSelectionSliderItem image={'/spiderMan2002.png'} title={'Spider-Man (2002)'} itemsPerSlide={0} />
      <MovieSelectionSliderItem image={'/sonicTheHedgehogMovie.png'} title={'Sonic the Hedgehog (2020)'} itemsPerSlide={0} />
      <MovieSelectionSliderItem image={'/gladiatorMovie.png'} title={'Gladiator (2000)'} itemsPerSlide={0} />
      <MovieSelectionSliderItem image={'/justiceLeagueMovie.png'} title={'Justice League (2017)'} itemsPerSlide={0} />
      <NearbyTheatersContainer items={[{ title: 'Movie Theater 1', subtitle: '401 Passaic Drive New York, NY 010101' }]} />
      <BottomFooter background='#242424' />
    </>
  );
}

export default App;
