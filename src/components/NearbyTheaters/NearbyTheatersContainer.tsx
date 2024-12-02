import NearbyTheatersItem, { NearbyTheatersItemProps } from './NearbyTheatersItem'
import './NearbyTheatersContainer.css'

export interface NearbyTheatersContainerProps {
    items: NearbyTheatersItemProps[];
}

function NearbyTheatersContainer(props: NearbyTheatersContainerProps) {
    return (
        <div className='nearby-theaters-container'>
            {props.items.map((_item, _index) => {
                return <NearbyTheatersItem title={'Movie Theater 1'} subtitle={'401 Passaic Drive New York, NY 010101'} width={250} height={250}/>
            })}
        </div>
    )
}

export default NearbyTheatersContainer;