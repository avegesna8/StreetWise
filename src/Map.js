import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; // Import Mapbox GL JS CSS

function Map() {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXZlZ2VzbmEiLCJhIjoiY2x3Nm9sZ2Q4MXZyMjJpbnZ2ZXZqZjQ1byJ9.dfKHQyz0vCl1vAFF6wBJrQ';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11', // Specify the map style
      center: [-84.3963, 33.7756], // Starting position [longitude, latitude]
      zoom: 14.8 // Starting zoom level
    });
  }, []);

  return <div id="map" />;
}

export default Map;
