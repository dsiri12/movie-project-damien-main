import './NearbyTheatersItem.css'

export interface NearbyTheatersItemProps {
    title: string;
    subtitle: string;
    height?: number;
    width?: number;
}

function NearbyTheatersItem(props: NearbyTheatersItemProps) {
    return (
        <div className='nearby-theaters-item-card'>
            <div className='nearby-theaters-item-title'>
                <h2>{props.title}</h2>
                <h4>{props.subtitle}</h4>
            </div>
        </div>
    )
}

export default NearbyTheatersItem;