import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
// import project from "./sanity/schemas/project-schema";
import schemas from "./sanity/schemas";


const config = defineConfig({

    projectId: "rrqqk782",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2023-03-09",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
});

export default config;