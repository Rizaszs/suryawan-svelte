import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav><a href="${escape(base, true) + "/"}">Home</a> <a href="${escape(base, true) + "/about"}">About</a></nav> <h1 data-svelte-h="svelte-10w2a4h">Welcome to My fucking about</h1>`;
});
export {
  Page as default
};
