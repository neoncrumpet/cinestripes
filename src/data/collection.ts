import { movies, type Movie } from './movies';
import { series, getSeriesCover, type Series } from './series';

export type CollectionEntry =
  | (Movie & { kind: 'movie'; href: string })
  | (Series & ReturnType<typeof getSeriesCover> & { kind: 'series'; href: string });

export const collection: CollectionEntry[] = [
  ...movies.map((movie) => ({ ...movie, kind: 'movie' as const, href: `/movies/${movie.slug}/` })),
  ...series.map((show) => ({ ...show, ...getSeriesCover(show), kind: 'series' as const, href: `/series/${show.slug}/` })),
];
