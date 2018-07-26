import 'leaflet';
const L = window['L'];

export default (sel, options) => {
    const map = L.map(sel).setView(options.locations, 13);

    //Create a tile layer that points to the Azure Maps tiles.
    L.tileLayer('https://atlas.microsoft.com/map/imagery/png?subscription-key={subscriptionKey}&api-version=1.0&style=satellite&zoom={z}&x={x}&y={y}', {
        attribution: '© ' + new Date().getFullYear() + ' Microsoft, © 1992 - ' + new Date().getFullYear() + ' TomTom',
        // // maxZoom: 20,
        // crossOrigin: true,
        subscriptionKey: 'zD_fp0xJKCNg2fbMfeFDWcq71tn0Z6O9PEvTGu0YE1U'
    }).addTo(map);

    L.marker(options.locations, { icon: L.icon({
        iconUrl: '../marker.svg',
        iconSize: [35, 49],
        iconAnchor: [17, 49],
        popupAnchor: [-3, -76]
    })}).addTo(map);
    
};

//https://atlas.microsoft.com/map/tile/png?api-version=1.0&layer=basic&style=main&zoom={z}&x={x}&y={y}&subscription-key={subscriptionKey}
//https://atlas.microsoft.com/map/imagery/png?subscription-key={subscription-key}&api-version=1.0&style=satellite&zoom={zoom}&x={x}&y={y}

//there aren't satellite tiles available on azure, only 'imagery tile' which is 