// node_modules/@storybook/addon-docs/dist/preview.mjs
var excludeTags = Object.entries(globalThis.TAGS_OPTIONS ?? {}).reduce((acc, entry) => {
  let [tag, option] = entry;
  return option.excludeFromDocsStories && (acc[tag] = true), acc;
}, {});
var parameters = { docs: { renderer: async () => {
  let { DocsRenderer } = await import("./DocsRenderer-CFRXHY34-5CFKOCX6.js");
  return new DocsRenderer();
}, stories: { filter: (story) => {
  var _a;
  return (story.tags || []).filter((tag) => excludeTags[tag]).length === 0 && !((_a = story.parameters.docs) == null ? void 0 : _a.disable);
} } } };

export {
  parameters
};
//# sourceMappingURL=chunk-45R3EHJH.js.map
