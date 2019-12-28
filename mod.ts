import * as baloon from './src/balloon.ts'
import * as cows from './src/cows.ts'
import { faces } from './src/faces.ts'

export const say = async function (options): Promise<string> {
	return await doIt(options, true);
};

export const think = async function (options): Promise<string> {
	return await doIt(options, false);
};

async function doIt (options: any, sayAloud: boolean): Promise<string> {
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

	return baloon[action](options.text || options._.join(" "), options.wrap ? options.wrapLength : null) + "\n" + cow(face);
}
