import './MapPage.css'
import { Map } from './Map/Map';

function MapPage(){
    return(
        <>
        <h1 className='title'>
            Карта загруженности
        </h1>
        <button className='addPoint'>
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <           path d="M14 27L14 2M27 15L2 15" stroke="black" stroke-width="4" stroke-linecap="round" />
            </svg>
        </button>
        <div className="mapContainer">
        <div className="map">
            <Map/>
        </div>
        </div>
        </>
    )

}

export default MapPage;