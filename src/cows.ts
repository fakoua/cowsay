import replacer from "./replacer.ts";
import * as cows from "./cows/cows.ts";
import type { IOptions } from "./models/IOptions.ts";

export const get = (cow: string) => {
  const text = (cows as Record<string, string>)[cow];
  return (options: IOptions) => {
    return replacer(text, options);
  };
};

export const listSync = (): string[] => {
  return [
    "atom",
    "bearface",
    "biohazard",
    "box",
    "cat",
    "cat2",
    "coffee",
    "cube",
    "cow",
    "fox",
    "hand",
    "kitten",
    "mule",
    "world",
    "yasuna",
  ];
};
