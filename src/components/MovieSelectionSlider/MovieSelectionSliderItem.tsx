import './MovieSelectionSliderItem.css'

export interface MovieSelectionSliderItemProps {
    image: string;
    title: string;
    height: number;
    width: number;
}

function MovieSelectionSliderItem(props: MovieSelectionSliderItemProps) {
    return (
            <div className='slider-item-card' style={{backgroundImage: `url(${props.image})`, height: props.height, width: props.width}}>
                <div className="slider-item-title" style={{width: props.width}}>
                    <h4>{props.title}</h4>
                </div>
            </div>
    )
}

export default MovieSelectionSliderItem;