

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.bccc8844.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.0719bd3d.js","_app/immutable/chunks/paths.407244a3.js"];
export const stylesheets = [];
export const fonts = [];
