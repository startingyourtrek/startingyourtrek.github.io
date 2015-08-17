L.mapbox.accessToken = 'pk.eyJ1IjoiamVmZnN0ZXJuIiwiYSI6IlAzRFFiN0EifQ.mNWvayrLEw9wULuq0sopyA';
var map = L.mapbox.map('map', 'mapbox.pirates')
  .setView([38.12367, -76.81229], 9);

var myLayer = L.mapbox.featureLayer().addTo(map);
var geojson;
var origjson;

$(document).ready(function(){
    var URL = "1vAgy-We0uSG12LNsbU8WfZuYtrrmgTEHsf51_MBxO3o";
    Tabletop.init( { key: URL, callback: convertToGeoJSON, simpleSheet: true } )
});

function convertToGeoJSON(data) {
    console.log(data);
    origjson = data;
    places = []
    for(i = 0; i < 26; i++) {
        console.log(data[i]);
        place = { type: 'Feature',             
        properties: {
					title: data[i]["nameofprogram"],
                    description: data[i]["locationofprogram"],
                    'marker-color':"#990099",
                    'marker-size': 'large',
                    'marker-symbol': "marker",
                },
                geometry: {
                    type: 'Point',
                    coordinates: [data[i]["longitude"], data[i]["latitude"]],
                }
		}
        places.push(place);
    }
    geojson = { type: 'FeaturesCollection', features: places};
    setupMap(geojson);
}

function setupMap(geo) {
    myLayer.setGeoJSON(geo); // Adds all of the points to the map
    map.fitBounds(myLayer.getBounds());
}