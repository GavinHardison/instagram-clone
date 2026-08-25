# Oldagram

A small Instagram-style feed built with plain HTML, CSS, and JavaScript, featuring portraits of famous painters (Van Gogh, Courbet, Ducreux) as the "posts." Built as a Scrimba course project.

## Features

- Static feed of three posts, each with an avatar, name, location, image, and caption
- Post data driven from a JS array (`posts`) rather than hardcoded in HTML
- Double-click a post image to like it, Instagram-style — the like count updates live

## Getting Started

No build step or dependencies required. Just open [index.html](index.html) in a browser, or serve the folder with any static server, e.g.:

```
npx serve .
```

## Project Structure

- [index.html](index.html) — page markup for the header and the three post cards
- [index.css](index.css) — layout and styling
- [index.js](index.js) — post data and DOM logic (rendering posts, handling double-click likes)
- [images/](images/) — avatars, post images, and UI icons

## Notes

The like-double-click handlers and DOM population code are duplicated per post (one block for Van Gogh, one for Courbet, one for Ducreux) rather than looped — a natural next refactor would be to iterate over the `posts` array and generate each post's markup and event listeners dynamically.
