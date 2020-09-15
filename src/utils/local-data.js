import path from "path";
import jdown from "jdown";
import { reverse } from "named-urls";

import renderer from "./renderer";
import routes from "../constants/routes";
import { slugify, createMarkup } from "./text";


export function prepareCases (data) {
    return data.map(caseObj => {
        const slug = slugify(caseObj.title);
        return {
            slug: slug,
            url: reverse(routes.cases.detail.show, { slug: slug }),
            body: createMarkup(caseObj.contents),
            ...caseObj
        }
    })
}

export async function fetchLocalData() {
  const folderPath = path.resolve(process.cwd(), 'content');
  const json = await jdown(folderPath, { markdown: { renderer } });
  return json
}
