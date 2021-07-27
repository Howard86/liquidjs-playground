/// <reference types="@sveltejs/kit" />

import type { Liquid } from 'liquidjs';
declare global {
	interface Window {
		liquidjs: {
			Liquid: typeof Liquid;
		};
	}
}
