import * as baloon from './src/balloon.ts'
import * as cows from './src/cows.ts'
import { faces } from './src/faces.ts'
import {IOptions} from './src/models/IOptions.ts'

export const say = async function (options: IOptions): Promise<string> {
	return await doIt(options, true);
};

export const think = async function (options: IOptions): Promise<string> {
	return await doIt(options, false);
};

export const list = function(): Array<string> {
	return cows.listSync();
}

async function doIt (options: IOptions, sayAloud: boolean): Promise<string> {
	var cowFile;
	if (options.random) {
		var cowsList = cows.listSync();
		cowFile = cowsList[Math.floor(Math.random() * cowsList.length)];
	} else {
		cowFile = options.cow || "default";
	}

	var cow = await cows.get(cowFile);
	var face = faces(options);
	face.thoughts = sayAloud ? "\\" : "o";

	var action = sayAloud ? "say" : "think";

	return baloon[action](options.text, options.wrap ? options.wrapLength : null) + "\n" + cow(face);
}
