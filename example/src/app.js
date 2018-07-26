import Map from '../../dist';

const onDOMContentLoadedTasks = () => {
    Map.init('js-map', { locations: [50.7929694199227, -4.55790996551514]});
};
    
if('addEventListener' in window) window.addEventListener('DOMContentLoaded', onDOMContentLoadedTasks);