/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZHViaTM5NCIsImEiOiJjbDhseXl6djIwYmJlM3NvYTh4Zm02NXhiIn0.C6ZbzusU9dStSpwybuYLxw';

  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/dubi394/cl8n810wg003z15mtqpgckiw3', // style URL
    scrollZoom: false,
    //   center: [-118.113491, 34.111745], // starting position [lng, lat]
    //   zoom: 9, // starting zoom
    //   projection: 'globe', // display the map as a 3D globe
    //   interactive: false,
  });

  map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add Popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map to include current locationsd
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
