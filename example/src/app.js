import Map from './libs/component';

const init = () => {
    Map.init('js-map', { 
        key: '',
        locations: [[50.7929694199227, -4.55790996551514]],
        tileLayers: [
            { 
                name: 'Map',
                url:  'https://atlas.microsoft.com/map/tile/png?api-version=1.0&layer=basic&style=main&zoom={z}&x={x}&y={y}&subscription-key={subscriptionKey}'
            },
            { 
                name: 'Satellite',
                url: 'https://atlas.microsoft.com/map/imagery/png?subscription-key={subscriptionKey}&api-version=1.0&style=satellite&zoom={z}&x={x}&y={y}'
            }
        ],
        icon: {
            url: '../marker.svg',
            size: [35, 49]
        }
    });
};
    
if('addEventListener' in window) window.addEventListener('DOMContentLoaded', init);