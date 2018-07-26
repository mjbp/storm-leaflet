import 'leaflet';
import { composeControls, composeLayers, composeIcon } from './utils';

export default (sel, options) => {
    const L = window['L'];
    const settings = {
        attribution: `© ${new Date().getFullYear()} Microsoft, © 1992 - ${new Date().getFullYear()} TomTom`,
        crossOrigin: true,
        subscriptionKey: options.key
    };
    const mapLayers = composeLayers(L, options.tileLayers, settings);
    
    const map = L.map(sel, { layers: mapLayers.map(layer => layer.tileLayer) });
    map.fitBounds(options.locations, { maxZoom: options.maxZoom });
    options.locations.length > 0 && options.locations.map(location => {
        L.marker(location, { icon: L.icon(composeIcon(options.icon))}).addTo(map);
    });
    options.tileLayers.length > 1 && L.control.layers(composeControls(mapLayers)).addTo(map);
};