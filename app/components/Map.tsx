'use client'
import { GoogleMap, Marker } from "@react-google-maps/api"
import { useEffect, useState } from "react";

const defaultMapContainerStyle = {
    width: '100%',
    height: '100%'
};

const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'auto',
    mapTypeId: 'roadmap',
};

export default function Map () {
    const [locationPermitted, setLocationPermitted] = useState(false); // Use this for error handling later on!
    const [mapCenter, setMapCenter] = useState({ lat: 31.2001, lng: 29.9187 });
    const [mapZoom, setMapZoom] = useState(15)

    useEffect(() => {
        if ('geolocation' in navigator) {
            setLocationPermitted(true);

            navigator.geolocation.getCurrentPosition((location) => {
                const { latitude, longitude } = location.coords;
                setMapCenter({ lat: latitude, lng: longitude });
            })
        } else {
            setLocationPermitted(false);
        }
    }, [])

    return (
        <div className="h-full w-full">
            <GoogleMap mapContainerStyle={defaultMapContainerStyle} center={mapCenter} zoom={mapZoom} options={defaultMapOptions}>
                <Marker position={mapCenter}/>
            </GoogleMap>
        </div>
    )
}