mapboxgl.accessToken = mapboxToken;

const map = new mapboxgl.Map({
  container: 'map',
  style: mapboxStyle,
  center: [144.9631, -37.8136],
  zoom: 12
});

map.on('style.load', function() {
  map.addSource('tram_lines', {
      'type': 'geojson',
      'data': 'data/tram_lines.geojson'
  });

  map.addLayer({
      'id': 'foobar1',
      'type': 'line',
      'source': 'tram_lines',
      'interactive': true,
      'paint': {
        'line-color': '#00ff00',
        'line-opacity': 0.8,
        'line-width': 3
      }
  });
});
