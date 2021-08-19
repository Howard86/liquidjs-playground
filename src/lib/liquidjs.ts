import type { Liquid } from 'liquidjs';

let engine: Liquid = null;

export function initEngine(): Liquid {
	if (engine !== null) {
		return engine;
	}

	if (typeof window === 'undefined') {
		return null;
	}

	engine = new window.liquidjs.Liquid({ cache: true, strictFilters: true, strictVariables: true });
	engine.registerFilter('decimal', decimal);

	return engine;
}

function decimal(value: string): string {
	return window.numeral(value).format('0,0');
}
