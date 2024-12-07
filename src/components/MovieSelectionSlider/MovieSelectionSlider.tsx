import MovieSelectionSliderItem, { MovieSelectionSliderItemProps } from "./MovieSelectionSliderItem";
import './MovieSelectionSlider.css'

interface MovieSelectionSliderProps {
    items: MovieSelectionSliderItemProps[];
    itemsPerSlide: number;
}

function MovieSelectionSlider(props: MovieSelectionSliderProps) {
    return (
        <div className='movie-slider-container'>
            <div className='left-button navigation'>
                <button className='left-arrow-button'>
                    <img src="leftArrowButton.png" alt="LeftArrowButton" />
                </button> 
            </div>
            <div className='right-button navigation'>
                <button className='right-arrow-button'>
                    <img src="rightArrowButton.png" alt="RightArrowButton" />
                </button>
            </div>
            <div className='movie-slider-wrapper'>
                {props.items.map((item, index) => {
                    return <MovieSelectionSliderItem itemsPerSlide={props.itemsPerSlide} image={item.image} title={item.title} key={item.title}/>
                })}
            </div>
        </div>
    )
}

export default MovieSelectionSlider;

