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
                <h3>{props.title}</h3>
                <h5>{props.subtitle}</h5>
            </div>
        </div>
    )
}

export default NearbyTheatersItem;