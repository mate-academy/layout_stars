# Stars block

Implement the [Stars Block](#Stars block) used in a card and catalog.

Hold `Alt` key (`Option` on MacOS) to measure distances in Figma.

> Here are the [Layout Tasks Instructions](https://mate-academy.github.io/layout_task-guideline)

## Requirements:
- Reset browser's default `margin`
- Add 6 `stars` blocks with 5 `stars__star` elements each.
- Add `stars--0`, `stars--1`, `stars--2` ... `stars--5` modifiers to the blocks one per each
- Don't add any other classes to the elements.
- The block with `stars--N` modifier should have exactly `N` first stars active.
- use `background-image` for stars (see `images` folder). Don't use `<img>` or `<svg>` tags.
- The star size and the distance should be taken from Figma
- Use `display: flex` for the `stars` block to avoid an issue with extra spaces between individual stars
- Don't add vertical margins between blocks.
- DON'T use `gap` property for `flex` container because it does not work in tests

## Checklist

❗️ Replace `<your_account>` with your Github username and copy the links to `Pull Request` description:

- [DEMO LINK](https://github.com/Artem08-06/layout_stars.git)
- [TEST REPORT LINK](https://github.com/Artem08-06/layout_stars.git)

❗️ Copy this `Checklist` to the `Pull Request` description after links, and put `- [x]` before each point after you checked it.

- [ ] Yellow stars are added with container modifier + pseudo-selector (NO extra classes)
- [ ] Each BEM block has its own separate file
- [ ] All `Typical Mistakes` from `BEM` lesson theory are checked.
- [ ] Code follows all the [Code Style Rules ❗️](./checklist.md)
