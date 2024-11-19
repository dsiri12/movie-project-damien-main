import './MovieSelectionSliderItem.css'

export interface MovieSelectionSliderItemProps {
    color: string;
    title: string;
    height: number;
    width: number;
}

function MovieSelectionSliderItem(props: MovieSelectionSliderItemProps) {
    return (
            <div className='slider-item-card' style={{backgroundColor: props.color, height: props.height}}>
                <div className="slider-item-title" style={{width: props.width}}>
                    <h3>{props.title}</h3>
                </div>
            </div>
    )
}

export default MovieSelectionSliderItem;