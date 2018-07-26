import defaults from './lib/defaults';
import factory from './lib';

export default { 
	init: (sel, opts) => factory(sel, Object.assign({}, defaults, opts))
 };