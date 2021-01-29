import { MapContainer, TileLayer, Circle, useMap } from 'react-leaflet'
import "./Map.css";

const DinamicBounds = ({ position, distance, zoom }) => {
    const map = useMap();
    map.setView(position)
    map.setZoom(zoom - distance / 5 + 3)
    return null
}

const Map = ({ position, distance, zoom }) => {

    return (
        <MapContainer
            center={position}
            zoom={zoom}
            maxZoom={14}
            minZoom={8}
            scrollWheelZoom={false}
            zoomControl={false}
        >
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <Circle
                center={position}
                radius={distance * 1000}
                weight={2}
                color={'#8c30f5'}
                fillColor={'#f1e4ff'}
                fillOpacity={0.25} >
            </Circle>
            <DinamicBounds
                position={position}
                distance={distance}
                zoom={zoom} />
        </MapContainer>
    )
};

export default Map;