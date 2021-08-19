import { writable } from 'svelte/store';
import { add, get, initialize } from './local-storage';

type ContextType = Record<string, unknown>;

function createContext() {
	initialize();

	const initialContext = get<ContextType>('context') || {
		name: 'Hello World'
	};

	const { subscribe, set } = writable(initialContext);

	const updateContext = (newContext: ContextType) => {
		set(newContext);
		if (!add('context', newContext)) {
			console.error(`Failed to update context = ${newContext}`);
		}
	};

	return {
		subscribe,
		updateContext,
		reset: () => set(initialContext)
	};
}

export const context = createContext();
