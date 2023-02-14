mapboxgl.accessToken = 'pk.eyJ1IjoibWVnaGFua29saW4iLCJhIjoiY2xkbTByamQyMDRzajN1bGlxbHJnYm56bSJ9.FAxkUWsOApq-qNHJhlT4xg'; //The public access token for all of my maps
 
const map = new mapboxgl.Map({ 
    container: 'map', //Which div tag does the map belong under?
    style: 'mapbox://styles/meghankolin/cldm18djg001v01nq0ed2vtts', //Add link to style URL 
    center: [-79.399, 43.661], //Starting position [longitude, latitude] 
    zoom: 14, //Decides the starting zoom level.
})

map.on('load', () => {
    //I couldn't make anything on the map load without at least one GeoJSON layer, so I included the layer I was trying to upload as a GeoJSON.
    map.addSource('food-spots', { //This command adds a data source to the map.
        type: 'geojson', //What kind of data are you adding? In this case, it's a GeoJSON.
        data: {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": { //Everything in this section is information you would typically find in an attribute table.
                  "name": "Mother's Dumplings",
                  "cuisine": "Chinese",
                  "seating type": "Dine-in",
                  "address": "421 Spadina Ave",
                  "city": "Toronto",
                  "province": "ON",
                  "postal": "M5T 2G6"
                },
                "geometry": { //Explains exactly where in space the point is.
                  "coordinates": [
                    -79.39953590674644,
                    43.65712052428347
                  ],
                  "type": "Point" //What kind of feature is this?
                }
              }, //
              {
                "type": "Feature",
                "properties": {
                  "name": "Kinton Ramen",
                  "cuisine": "Japanese",
                  "seating type": "Dine-in",
                  "address": "51 Baldwin St",
                  "city": "Toronto",
                  "province": "ON",
                  "postal": "M5T 1L1"
                },
                "geometry": {
                  "coordinates": [
                    -79.39405236441846,
                    43.6557939999995
                  ],
                  "type": "Point"
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "name": "Sid's Cafe",
                  "cuisine": "American, Japanese, Mexican",
                  "seating type": "Food court",
                  "address": "100 St. George St",
                  "city": "Toronto",
                  "province": "ON",
                  "postal": "M5S 3G3"
                },
                "geometry": {
                  "coordinates": [
                    -79.39850063558303,
                    43.66200823849178
                  ],
                  "type": "Point"
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "name": "Seven Lives Tacos y Mariscos",
                  "cuisine": "Mexican",
                  "seating type": "Dine-in",
                  "address": "69 Kensington Avenue",
                  "city": "Toronto",
                  "province": "ON",
                  "postal": "M5T 2K2"
                },
                "geometry": {
                  "coordinates": [
                    -79.4005396355816,
                    43.654417999999794
                  ],
                  "type": "Point"
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "name": "Robarts Cafeteria",
                  "cuisine": "American, Italian, Japanese, Mexican",
                  "seating type": "Food court",
                  "address": "130 St. George St",
                  "city": "Toronto",
                  "province": "ON",
                  "postal": "M5S 2G4"
                },
                "geometry": {
                  "coordinates": [
                    -79.39984010633336,
                    43.6646855328155
                  ],
                  "type": "Point"
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "name": "MedSci Cafeteria",
                  "cuisine": "American, Italian, Japanese, Mediterranean, Vegan",
                  "seating type": "Food court",
                  "address": "1 King's College Cir",
                  "city": "Toronto",
                  "province": "ON",
                  "postal": "M5S 1A8"
                },
                "geometry": {
                  "coordinates": [
                    -79.39296814930661,
                    43.6602547869723
                  ],
                  "type": "Point"
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "name": "Burrito Bandidos",
                  "cuisine": "Mexican",
                  "seating type": "Dine-in",
                  "address": "362 Bloor St West",
                  "city": "Toronto",
                  "province": "ON",
                  "postal": "M5R 2W7"
                },
                "geometry": {
                  "coordinates": [
                    -79.40571411905015,
                    43.66660171725769
                  ],
                  "type": "Point"
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "name": "Sizzler Kabab",
                  "cuisine": "Indian",
                  "seating type": "Dine-in",
                  "address": "381 Spadina Ave",
                  "city": "Toronto",
                  "province": "ON",
                  "postal": "M5T 2G6"
                },
                "geometry": {
                  "coordinates": [
                    -79.3990572711631,
                    43.65631052449453
                  ],
                  "type": "Point"
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "name": "New College Dining Hall",
                  "cuisine": "Varies",
                  "seating type": "Dining hall",
                  "address": "40 Willcocks St",
                  "city": "Toronto",
                  "province": "ON",
                  "postal": "M5S 2Z3"
                },
                "geometry": {
                  "coordinates": [
                    -79.4008117288363,
                    43.66193999999945
                  ],
                  "type": "Point"
                }
              }
            ]
          }
    })

    map.addLayer({ //This actually adds the layer to the map!
        'id': 'best-food',  //This will be used to identify the drawing order, and should always be unique.
        'type': 'circle', //This determines what kind of data the layer should be drawn as! In this case, we want to draw points, so this is listed as a circle.
        'source': 'food-spots', //This is where the map will get the information! This should match the previous .addSource command above!
        'paint': { //This determines the symbology of the layer! The commands vary based on what you're drawing.
            'circle-radius': 3,
            'circle-color': '#4ddbff'
        }

    })
    
    map.addSource('future-transit', {
      'type': 'vector', //In this case, we're adding a vector layer instead of a GeoJSON!
      'url': 'mapbox://meghankolin.1gh7cy8m' //This should be your tileset's ID.
      });
      
    map.addLayer({
      'id': 'downtown-transit',
      'type': 'line',
      'source': 'future-transit', 
      'paint': {
          'line-color': '#FFFFFF',
          'line-width': 1,
        },
      'source-layer': 'futurettc-bzs1bg' //The Mapbox source layer, which can be found on the Mapbox page where you found the layer.
        },
      //Everything below this determines the drawing order, which should always be done along the same conventions as typical GIS maps (i.e. points go on top of lines, which go on top of polygons).
      'best-food',
      'downtown-transit'
    )
  }
)