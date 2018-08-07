export const composeLayers = ({L, tileLayers, attribution, crossOrigin, subscriptionKey }) => tileLayers.map(({ name, url }) => ({
    name,
    tileLayer: L.tileLayer(url, {
        attribution,
        crossOrigin,
        subscriptionKey
    }),
}));

export const composeControls = mapLayers => mapLayers.reduce((acc, { name, tileLayer}) => (acc[name] = tileLayer, acc), {});

export const composeIcon = ({ url, size }) => ({
    iconUrl: url,
    iconSize: size,
    iconAnchor: [size[0]/2, size[1]],
    popupAnchor: [0, -(size[1])]
});

export const composeMarkers = ({L, locations, icon, renderPopup}) => {
    return locations.reduce((acc, location) => {
        const marker = L.marker(location.location, Object.assign({}, icon ? { icon: L.icon(composeIcon(icon)) } : {}));
        
        if(location.properties && renderPopup) {
            marker.properties = location.properties;
            marker.bindPopup(renderPopup.bind(marker));
        }
        acc.addLayer(marker);
        return acc;
    }, L.markerClusterGroup());
}