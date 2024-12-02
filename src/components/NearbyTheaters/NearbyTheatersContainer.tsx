import NearbyTheatersItem, { NearbyTheatersItemProps } from './NearbyTheatersItem'
import './NearbyTheatersContainer.css'

export interface NearbyTheatersContainerProps {
    items: NearbyTheatersItemProps[];
}

function NearbyTheatersContainer(props: NearbyTheatersContainerProps) {
    return (
        <div className='nearby-theaters-container'>
            <div className='nearby-theaters-item-card'>
                <div className='nearby-theaters-content'>
                    {props.items.map((_item, _index) => {
                        return <NearbyTheatersItem title={'Movie Theater 1'} subtitle={'401 Passaic Drive New York, NY 10101'} width={250} height={250}/>
                    })} 
                </div>
            </div>
            
        </div>
    )
}

export default NearbyTheatersContainer;