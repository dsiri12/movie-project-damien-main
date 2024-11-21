import MovieSelectionSliderItem, { MovieSelectionSliderItemProps } from "./MovieSelectionSliderItem";
import './MovieSelectionSlider.css'

interface MovieSelectionSliderProps {
    items: MovieSelectionSliderItemProps[];
    itemsPerSlide: number;
}

function MovieSelectionSlider(props: MovieSelectionSliderProps) {
    return (
        <div className='movie-slider-container'>
            <button >←</button><button>→</button>
            <div className='movie-slider-wrapper' style={{color: 'red', gridTemplateColumns: `repeat(${props.itemsPerSlide}, 1fr)`}}>
                {props.items.map((item, index) => {
                    return <MovieSelectionSliderItem image={item.image} title={item.title} key={item.title}/>
                })}
            </div>
        </div>
    )
}

export default MovieSelectionSlider;

