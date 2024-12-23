import MovieSelectionSliderItem, { MovieSelectionSliderItemProps } from "./MovieSelectionSliderItem";
import './MovieSelectionSlider.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface MovieSelectionSliderProps {
    itemsPerSlide: number;
    items: MovieSelectionSliderItemProps[];
}

function MovieSelectionSlider(props: MovieSelectionSliderProps) {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
            <div className='movie-slider-wrapper'>
                <Carousel responsive={responsive} swipeable={false}
  draggable={true}
  showDots={false}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all ."
  transitionDuration={1500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px">
                   {props.items.map((item, index) => {
                    return <MovieSelectionSliderItem itemsPerSlide={props.itemsPerSlide} image={item.image} title={item.title} key={item.title}/>
                })} 
                
                </Carousel>
            </div>
        
    )
}

export default MovieSelectionSlider;

