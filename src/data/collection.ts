import { movies, type Movie } from './movies';
import { series, getSeriesCover, type Series } from './series';
import { withBase } from '../utils/paths';

export type CollectionEntry =
  | (Movie & { kind: 'movie'; href: string })
  | (Series & ReturnType<typeof getSeriesCover> & { kind: 'series'; href: string });

export const collection: CollectionEntry[] = [
  ...movies.map((movie) => ({ ...movie, kind: 'movie' as const, href: withBase(`movies/${movie.slug}/`) })),
  ...series.map((show) => ({ ...show, ...getSeriesCover(show), kind: 'series' as const, href: withBase(`series/${show.slug}/`) })),
];
