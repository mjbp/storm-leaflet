export const composeLayers = (L, layers, settings) => layers.map(({ name, url }) => ({
    name,
    tileLayer: L.tileLayer(url, settings),
}));

export const composeControls = mapLayers => mapLayers.reduce((acc, { name, tileLayer}) => (acc[name] = tileLayer, acc), {});

export const composeIcon = ({ url, size }) => ({
    iconUrl: url,
    iconSize: size,
    iconAnchor: [size[0]/2, size[1]],
    popupAnchor: [-3, -76]
});