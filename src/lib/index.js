import 'leaflet';
import 'leaflet.markercluster';
import { composeControls, composeMarkers, composeLayers } from './utils';

export default (sel, model) => {   
        model.L = window['L'];
        
        const mapLayers = composeLayers(model);    
        const map = L.map(sel, { 
            layers: mapLayers.map(layer => layer.tileLayer),
            zoom: model.zoom,
            center: model.center,
            scrollWheelZoom: false
        });

        if(model.center === undefined) map.fitBounds(model.locations.map(location => location.location), { maxZoom: model.maxZoom });
        if(model.locations.length > 0) map.addLayer(composeMarkers(model)); 
        if(model.tileLayers.length > 1) L.control.layers(composeControls(mapLayers)).addTo(map);
        // if(model.polygons !== undefined) model.polygons.map(polygon => {
        //     L.polygon(polygon.features, {color: polygon.color.fill, stroke: polygon.color.stroke}).addTo(map);
        // });
        if(model.geojson !== undefined) model.geojson.map(feature => {
            console.log(feature);
            L.geoJSON(feature, {
                onEachFeature(feature, layer){
                    layer.on('click', e => {
                        console.log(e);
                    })
                },
                style(feature){
                    return {
                        fillColor: feature.properties.fillColor,
                        color: feature.properties.fillColor,
                        weight: 1,
                        opacity: 0.4
                    }
                }
            }).addTo(map);
        });

        return map;
};