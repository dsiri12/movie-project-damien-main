import './MovieSelectionSliderItem.css'

export interface MovieSelectionSliderItemProps {
    image: string;
    title: string;
    height?: number;
    width?: number;
    itemsPerSlide: number;
}

function MovieSelectionSliderItem(props: MovieSelectionSliderItemProps) {
    return (
            <div className='slider-item-card' style={{ width: `calc((100% / ${props.itemsPerSlide}) - 60px)` }}>
                <img className='slider-item-image' src={props.image} alt={props.title} />
                <div className="slider-item-title">
                    <h4>{props.title}</h4>
                </div>
            </div>
    )
}

export default MovieSelectionSliderItem;