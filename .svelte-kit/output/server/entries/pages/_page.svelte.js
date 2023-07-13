import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav><a href="${escape(base, true) + "/"}">Home</a> <a href="${escape(base, true) + "/about"}">About</a></nav> <h1 data-svelte-h="svelte-130tms">Welcome to My fucking blog</h1> <p data-svelte-h="svelte-jl9sbz">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>`;
});
export {
  Page as default
};
