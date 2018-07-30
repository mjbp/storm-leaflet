import 'leaflet';
import 'leaflet.markercluster';
import { composeControls, composeMarkers, composeLayers } from './utils';

export default (selector, model) => {   
        model.L = window['L'];
        
        const mapLayers = composeLayers(model);    
        const map = L.map(selector, { 
            layers: mapLayers.map(layer => layer.tileLayer),
            zoom: model.zoom,
            center: model.center,
            scrollWheelZoom: model.scrollWheelZoom
        });

        if(model.center === undefined) map.fitBounds(model.locations.map(location => location.location), { maxZoom: model.maxZoom });
        if(model.locations.length > 0) map.addLayer(composeMarkers(model)); 
        if(model.tileLayers.length > 1) L.control.layers(composeControls(mapLayers)).addTo(map);
        if(model.geojson !== undefined) model.geojson.map(feature => {
            L.geoJSON(feature, {
                onEachFeature: model.onEachFeature,
                style: model.featureStyle
            }).addTo(map);
        });

        return map;
};