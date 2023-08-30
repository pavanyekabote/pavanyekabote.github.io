import { IProject } from "../types";

const projects: IProject[] = [

    { 
        title: "PyScrapper",
        tags: ["OpenSource", "python", "pip"],
        url: "https://pypi.org/project/pyscrapper/",
        descriptions: [
            "PyScrapper is a web scrapping tool. It helps to scrape webpages and form a meaningful json object, as per the given configuration. Configuration is what tells the scrapper, which blocks of the html needs to be parsed and how they should be structurized for ease of use."
        ]
    },
    {
        title: "Query Filter Kit",
        tags: ["OpenSource", "nodejs", "npm", "typescript"],
        url: "https://www.npmjs.com/package/query-filter-kit",
        descriptions: [
            "A javascript library, helps in building and parsing huge list of query filters."
        ]
    }
]

export const getProjects = () => projects;