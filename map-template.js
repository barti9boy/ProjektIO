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
                width: 16;
                height: 16px;
                background-color: red;
                background-image: url('./icons8-pin-32.png');
                border-radius: 8px;

            }
    </style>
    
    <div id='map' class='map'></div>

    <!-- load TomTom Maps Web SDK from CDN -->
    <link rel='stylesheet' type='text/css' href='https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.13.0/maps/maps.css'/>
    <script src='https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.13.0/maps/maps-web.min.js'></script>

    <script>
        // create the map
        tt.setProductInfo('Hit the road truck', '1.0');
        let map = tt.map({
            key: '${process.env.TOM_TOM_KEY}',
            container: 'map',
            center: [19.906, 50.071],
            zoom: 13
        });
        


        const addMarker = ([lng, lat]) => {
            const popupOffset = {
                bottom: [0, -25]
              }
            const popup = new tt.Popup({ offset: popupOffset }).setHTML('This is you!')
            const element = document.createElement('div')
            element.className = 'marker'
            const marker = new tt.Marker({
              draggable: true,
              element: element,
            })
            .setLngLat([lng, lat])
            .addTo(map)

            marker.setPopup(popup).togglePopup()

          }


          

    </script>
</div>
`;