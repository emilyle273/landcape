import React, { Component, useState, useCallback, forwardRef, useImperativeHandle } from 'react';
import loadable from '@loadable/component';

const GoogleMapReact = loadable(() => import('google-map-react'));

const GoogleMap = ({ location, draggable }, ref) => {
  const [center, setCenter] = useState({
    lat: +location?.lat,
    lng: +location?.lng
  })

  const loadMap = (map , maps) => {
    let marker = new maps.Marker({
      position: center,
      map,
      draggable,
    });

    maps.event.addListener(marker, 'drag', () => onDragMarket(marker), { passive: true }) 
  };

  useImperativeHandle(ref, () => ({
    location: center
  }));

  const onDragMarket = useCallback((marker) => {
    setTimeout(() => {
      setCenter({
        lat: marker.getPosition().lat(),
        lng: marker.getPosition().lng(),
      });

    }, 500);
  }, [])

  return (
    <div className="h-[400px] w-full mt-[30px]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDJXPMrpL6gtbhBUSH_UUMkjB-eYJBDtf8' }}
        defaultCenter={center}
        defaultZoom={8}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => loadMap(map, maps)}
      />
    </div>
  );
}

export default forwardRef(GoogleMap);
