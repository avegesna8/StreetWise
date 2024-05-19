import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; // Import Mapbox GL JS CSS
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

function Map({ start, end }) {
  const [map, setMap] = useState(null);
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXZlZ2VzbmEiLCJhIjoiY2x3Nm9sZ2Q4MXZyMjJpbnZ2ZXZqZjQ1byJ9.dfKHQyz0vCl1vAFF6wBJrQ';
    const initializeMap = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11', // Specify the map style
      center: [-84.3963, 33.7756], // Starting position [longitude, latitude]
      zoom: 14.8 // Starting zoom level
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving',
    });
    initializeMap.addControl(directions, 'top-left');

    setMap(initializeMap);
    return () => initializeMap.remove();
  }, []);
  
  useEffect(() => {
    if (map && start && end) {
      const [startLng, startLat] = start.split(',').map(Number);
      const [endLng, endLat] = end.split(',').map(Number);

      if (!isNaN(startLng) && !isNaN(startLat) && !isNaN(endLng) && !isNaN(endLat)) {
        const directions = new MapboxDirections({
          accessToken: mapboxgl.accessToken,
          unit: 'metric',
          profile: 'mapbox/driving',
        });

        directions.setOrigin([startLng, startLat]);
        directions.setDestination([endLng, endLat]);

        map.addControl(directions, 'top-left');
      }
    }
  }, [map, start, end]);

  return <div id="map" style={{ width: '100%', height: '100vh' }} />;

}

export default Map;
