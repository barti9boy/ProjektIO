export default `
<div>
    <style>
            html, body {
                margin: 0;
            }

            #map {
                height: 100%;
                width: 100%;
            }

            .marker {

                background-size: cover;
                width: 32;
                height: 32px;
                background-color: red;
                background-image: url('./icons8-pin-32.png');
                border-radius: 16px;

            }
    </style>
    
    <div id='map' class='map'></div>

    <!-- load TomTom Maps Web SDK from CDN -->
    <link rel='stylesheet' type='text/css' href='https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.13.0/maps/maps.css'/>
    <script src='https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.13.0/maps/maps-web.min.js'></script>

    <script>
        // create the map
        tt.setProductInfo('Hit the road truck', '1.0');
        const convertToPoints = (lngLat) => {
            return {
              point: {
                latitude: lngLat.lat,
                longitude: lngLat.lng
              }
            }
          }
        const addDeliveryMarker = (lngLat, map) => {
            const element = document.createElement('div')
            element.className = 'marker-delivery'
            new tt.Marker({
              element: element
            })
            .setLngLat(lngLat)
            .addTo(map)
          }

        

        let map = tt.map({
            key: '${process.env.TOM_TOM_KEY}',
            container: 'map',
            center: [19.906, 50.071],
            zoom: 13
        });
        
        map.on('dragend', function() {
            let center = map.getCenter();
            window.ReactNativeWebView.postMessage(center.lng.toFixed(3) + ", " + center.lat.toFixed(3));
        })

        const addMarker = ([lng, lat]) => {
            const element = document.createElement('div')
            element.className = 'marker'
            const marker = new tt.Marker({
              draggable: true,
              element: element,
            })
            .setLngLat([lng, lat])
            .addTo(map)
        }

        

    </script>
</div>
`;