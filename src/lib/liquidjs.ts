import type { Liquid } from 'liquidjs';

export function initEngine(): Liquid {
	if (typeof window === 'undefined') {
		return null;
	}

	const BrowserLiquid = window.liquidjs.Liquid;

	return new BrowserLiquid({ cache: true, strictFilters: true, strictVariables: true });
}
