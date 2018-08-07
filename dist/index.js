/**
 * @name storm-leaflet: 
 * @version 0.1.0: Tue, 07 Aug 2018 07:54:53 GMT
 * @author stormid
 * @license MIT
 */
import factory from './lib';
import defaults from './lib/defaults';

export default { 
	init: (sel, opts) => factory(sel, Object.assign({}, defaults, opts))
 };