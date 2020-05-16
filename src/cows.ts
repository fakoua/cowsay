import replacer from './replacer.ts'
import * as cows from './cows/cows.ts'
import { IOptions } from './models/IOptions.ts';

export const get = function (cow: string) {
	let text = (cows as Record<string, string>)[cow]
	return function (options: IOptions) {
		return replacer(text, options);
	};
}

export const listSync = function (): Array<string> {
	return [
		'atom',
		'bearface',
		'biohazard',
		'box',
		'cat',
		'cat2',
		'coffee',
		'cube',
		'cow',
		'fox',
		'hand',
		'kitten',
		'mule',
		'world',
		'yasuna',
	]
}
