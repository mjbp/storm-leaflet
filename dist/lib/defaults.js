export default {
    locations: [],
    zoom: 12,
    maxZoom: 13, //maxZoom level of Azure maps imagery tiles of sea 
    attribution: `© ${new Date().getFullYear()} Microsoft, © 1992 - ${new Date().getFullYear()} TomTom`,
    crossOrigin: true,
    renderPopup(){
        return `<a href="${this.properties.link}">${this.properties.name}</a>`
    }
};