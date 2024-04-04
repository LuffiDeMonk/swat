'use client'

import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'


import "leaflet/dist/leaflet.css";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';

const position: LatLngExpression = {
    lng: 85.33018661078617,
    lat: 27.693698371232152
}


export default function LocationMap() {
    return (
        <div className='basis-1/2 shrink-0 order-2 lg:order-1'>
            <MapContainer
                center={position}
                zoom={18}
                scrollWheelZoom={false}
                className='w-full h-80 lg:h-full'
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    position={position}
                />

            </MapContainer>
        </div>
    )
}
