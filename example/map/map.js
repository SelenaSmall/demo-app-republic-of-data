mapboxgl.accessToken = mapboxToken;

const map = new mapboxgl.Map({
  container: 'map',
  style: mapboxStyle,
  center: [144.9645, -37.8020],
  zoom: 14
});

var scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'metric'
});
map.addControl(scale);

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

var hoveredStateId =  null;

map.on('style.load', function() {

  map.addSource('tram_lines', {
      'type': 'geojson',
      'data': 'data/tram_lines.geojson'
  });

  map.addLayer({
      'id': 'tram_lines',
      'type': 'line',
      'source': 'tram_lines',
      'interactive': true,
      'paint': {
        'line-color': '#00ff00',
        'line-opacity': 0.8,
        'line-width': 3
      }
  });

  map.addSource('tram_stops', {
      'type': 'geojson',
      'data': 'data/tram_stops.geojson'
  });

  map.addLayer({
      'id': 'stops',
      'type': 'circle',
      'source': 'tram_stops',
      'interactive': true,
      "layout": {},
        'paint': {
          'circle-radius': 4,
          'circle-color': '#0000ff',
          'circle-opacity': 0.3,
          // 'circle-radius': ["case",
          //   ["boolean", ["feature-state", "hover"], false],
          //     5,
          //     10
          //   ],
          'circle-stroke-width': 1,
          'circle-stroke-color': '#0000ff'
        }
  });

// map.on("mousemove", "stops", function(e) {
//     if (e.features.length > 0) {
//       if (hoveredStateId) {
//         map.setFeatureState({source: 'tram_stops', id: hoveredStateId}, {hover: false});
//       }
//       hoveredStateId = e.features[0].id; // <------ this is the problem i think
//       map.setFeatureState({source: 'tram_stops', id: hoveredStateId}, {hover: true});
//       console.log(hoveredStateId);
//     }
//   });
//
//   map.on("mouseleave", "stops", function() {
//     if (hoveredStateId) {
//       map.setFeatureState({source: 'tram_stops', id: hoveredStateId}, {hover: false});
//     }
//     hoveredStateId =  null;
//     console.log(hoveredStateId);
//   });



// When the user moves their mouse over the states-fill layer, we'll update the filter in
// the state-fills-hover layer to only show the matching state, thus making a hover effect.
// map.on("mousemove", "stops", function(e) {
//     map.setPaintProperty("stops", 'circle-radius', ["case", ["==", ["get", "STOP_ID"], e.features[0].properties.STOP_ID], 0.8, 0.5]);
// });
//
// // Reset the state-fills-hover layer's filter when the mouse leaves the layer.
// map.on("mouseleave", "stops", function() {
//   map.setPaintProperty("stops", 'circle-radius', 0.5);
// });


});
