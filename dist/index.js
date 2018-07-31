/**
 * @name storm-leaflet: 
 * @version 0.1.0: Tue, 31 Jul 2018 14:52:54 GMT
 * @author stormid
 * @license MIT
 */
import factory from './lib';
import defaults from './lib/defaults';

export default { 
	init: (sel, opts) => factory(sel, Object.assign({}, defaults, opts))
 };