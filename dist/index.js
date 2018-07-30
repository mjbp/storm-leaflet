/**
 * @name storm-azure-map: 
 * @version 0.1.0: Mon, 30 Jul 2018 20:58:13 GMT
 * @author stormid
 * @license MIT
 */
import factory from './lib';
import defaults from './lib/defaults';

export default { 
	init: (sel, opts) => factory(sel, Object.assign({}, defaults, opts))
 };