/**
 * @name storm-map: 
 * @version 0.1.0: Thu, 26 Jul 2018 12:39:53 GMT
 * @author stormid
 * @license MIT
 */
import defaults from './lib/defaults';
import factory from './lib';

export default { 
	init: (sel, opts) => factory(sel, Object.assign({}, defaults, opts))
 };