# Cinestripes

An Astro gallery of films and television episodes distilled into colour timelines.

## Development

- `npm install` installs dependencies.
- `npm run dev -- --background` starts the background server.
- `npm run astro -- dev status` checks the server; use `dev logs` or `dev stop` to manage it.
- `npm run build` generates the static site in `dist/`.

## Adding films

Add a 5:2 image to `src/assets/`, import it in `src/data/movies.ts`, and add a film with a unique slug, title, release year, directors, image, and image description. The collection card and `/movies/<slug>/` page are generated automatically.

## Adding TV series

Add episode images to `src/assets/tv/<series>/` and an entry to `src/data/series.ts`. Each series has a unique slug, title, release year, creators, and at least one episode. Episodes include a season number, episode number, title, image, and image description. Use unique season/episode pairs within each series.

The front page shows one card per series and links to `/series/<slug>/`, where episodes are sorted by season and episode number. Counts describe images in this collection, not the total number of episodes aired.

### Choosing a series cover

Set `cover` in the series data to an episode object (for example, `cover: widowsBayEpisodes[0]`), or provide a separate `{ image, imageDescription }` object. If `cover` is omitted, the earliest episode in season/episode order supplies the front-page image.

The shared collection is assembled in `src/data/collection.ts`. Artwork links on detail pages open the original image; collection cards open the film or series page.
