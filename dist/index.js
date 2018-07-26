/**
 * @name storm-azure-map: 
 * @version 0.1.0: Thu, 26 Jul 2018 17:06:35 GMT
 * @author stormid
 * @license MIT
 */
import factory from './lib';
import defaults from './lib/defaults';

export default { 
	init: (sel, opts) => factory(sel, Object.assign({}, defaults, opts))
 };