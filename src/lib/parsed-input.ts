import { get, add } from './local-storage';

const DEFAULT_INPUT = 'Your name is {{ name | capitalize }}!';

export function getInput(): string {
	return get<string>('input') || DEFAULT_INPUT;
}

export function updateInput(input: string): boolean {
	return add<string>('input', input);
}
