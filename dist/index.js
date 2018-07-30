/**
 * @name storm-azure-map: 
 * @version 0.1.0: Mon, 30 Jul 2018 16:45:49 GMT
 * @author stormid
 * @license MIT
 */
import factory from './lib';
import defaults from './lib/defaults';

export default { 
	init: (sel, opts) => factory(sel, Object.assign({}, defaults, opts))
 };