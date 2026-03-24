# Figma UI Optimization Rules

When translating components and raw CSS from Figma frames into the Next.js React codebase, the code builder MUST prioritize performance, maintainability, and clean DOM structures.

Figma's structure is inherently deeply nested due to Auto Layout and framing. The raw output must not be copy-pasted directly without these core optimizations:

## 1. Eliminate "Div Soup" (Wrapper Pollution)
Figma adds empty frames for grouping that translates to `<div>` elements with generic flexbox padding.
* **Rule:** Systematically remove wrapper generic `<div>` elements that only contain a single child or have no semantic value. Merge the styles of the wrapper into the child node whenever possible.
* **Example:** Do not nest an `<input>` inside 3 distinct `<div>` grouping frames if a single padded form flex container achieves the same responsive design.

## 2. Implement DRY Arrays for Repetitive Groupings
Figma output hard-codes repetitive elements like Navigations, Footers, Social Media grids, and Feature Cards.
* **Rule:** If 3 or more structurally identical elements exist side-by-side, extract the raw data into a constant configuration array (e.g., `const LINKS = [{...}]`) and use React's `.map()` to render the elements dynamically.
* **Inline Variant Rule:** For smaller, highly-localized repeated elements (e.g., a short list of icon blocks or text stats), it is acceptable to declare the array inline directly within the component (e.g., `const CAROUSEL_IMAGES = [{...}]`) to keep the data contextually close to its usage without polluting global scope.
* **Why:** This drastically reduces JSX file size, prevents spelling/class mistakes across children, and makes it immensely easier to update routing links in the future.

## 3. Merge Layout Constraints
* **Rule:** Figma often splits width, maximum width, flex direction, and overflow across multiple frames. Consolidate these into a distinct single parent container using Tailwind. Avoid redundant classes (e.g., using `w-full max-w-full` on flex children that inherently stretch).

---
**Directive:** The Code Builder must execute these steps *before* declaring a Figma UI translation task complete to ensure production-grade code quality.
