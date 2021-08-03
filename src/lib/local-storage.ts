type Nullable<T> = T | null;

const DEFAULT_LOCAL_STORAGE_KEY = 'liquidjs-playground';

export function initialize(): boolean {
	const result = getItem(DEFAULT_LOCAL_STORAGE_KEY);

	if (result !== null) {
		return true;
	}

	return setItem(DEFAULT_LOCAL_STORAGE_KEY, {});
}

export function get<T>(key: string): Nullable<T> {
	const result = getItem<Record<string, T>>(DEFAULT_LOCAL_STORAGE_KEY);

	if (result === null) {
		return null;
	}

	return result[key];
}

export function add<T>(key: string, value: T): boolean {
	const result = getItem<Record<string, T>>(DEFAULT_LOCAL_STORAGE_KEY);

	if (result === null) {
		return false;
	}

	return setItem(DEFAULT_LOCAL_STORAGE_KEY, { ...result, [key]: value });
}

export function remove(key: string): boolean {
	const result = getItem(DEFAULT_LOCAL_STORAGE_KEY);

	if (result === null || !result[key]) {
		return false;
	}

	// JSON.stringify() will remove value=undefined
	return setItem(DEFAULT_LOCAL_STORAGE_KEY, { ...result, [key]: undefined });
}

// when T is an object and we want to update some of its key
export function update<T extends Record<string, unknown>>(key: string, value: T): boolean {
	const result = getItem<Record<string, T>>(DEFAULT_LOCAL_STORAGE_KEY);

	if (result === null) {
		return false;
	}

	return setItem(DEFAULT_LOCAL_STORAGE_KEY, { ...result, [key]: { ...result[key], ...value } });
}

function getItem<T extends Record<string, unknown>>(storageKey: string): Nullable<T> {
	if (typeof window === 'undefined') {
		return null;
	}

	try {
		const result = window.localStorage.getItem(storageKey);
		return JSON.parse(result);
	} catch (error) {
		console.error(error);
		return null;
	}
}

function setItem<T extends Record<string, unknown>>(storageKey: string, value: T): boolean {
	if (typeof window === 'undefined') {
		return false;
	}

	try {
		window.localStorage.setItem(storageKey, JSON.stringify(value));
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
}
