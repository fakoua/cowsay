import replacer from './replacer.ts'

var textCache = {};

export const get = async function (cow: string) {
	var text = textCache[cow];
	if (!text) {
		let cowPath = `./cows/${cow}.cow.ts`
		let template = await import(cowPath)
		text = template.cow
		textCache[cow] = text;
	}

	return function (options) {
		return replacer(text, options);
	};
}

export const listSync = function () {
	return [
		'atom',
		'bearface',
		'biohazard',
		'box',
		'cat',
		'cat2',
		'coffee',
		'cube',
		'default',
		'fox',
		'hand',
		'kitten',
		'mule',
		'world',
		'yasuna',
	]
}
