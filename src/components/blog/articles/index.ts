import type { ArticleContent } from "../ArticleParts";
import { doterraDrinkable } from "./DoterraDrinkable";
import { lavender } from "./Lavender";
import { noDiffuser } from "./NoDiffuser";

/** 本文がある記事（slug → 本文）。ここにない記事は「準備中」と表示する */
export const articles: Record<string, ArticleContent> = {
  "doterra-drinkable": doterraDrinkable,
  "no-diffuser": noDiffuser,
  lavender,
};
