

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.57f537b7.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.0719bd3d.js","_app/immutable/chunks/paths.407244a3.js"];
export const stylesheets = [];
export const fonts = [];
