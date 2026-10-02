import type { ImageMetadata } from 'astro';
import tony from '../assets/tony.png';
import goodTime from '../assets/goodtime.png';
import tsdacm from '../assets/camp-miasma.png';

export interface Movie {
  slug: string;
  title: string;
  year: number;
  directors: string[];
  image: ImageMetadata;
  imageDescription: string;
}

export const movies: Movie[] = [
  {
    slug: 'teenage-sex-and-death-at-camp-miasma',
    title: 'Teenage Sex and Death at Camp Miasma',
    year: 2026,
    directors: ['Jane Schoenbrun'],
    image: tsdacm,
    imageDescription: 'Teenage Sex and Death at Camp Miasma rendered as vertical colour stripes',
  },
  {
    slug: 'tony',
    title: 'Tony',
    year: 2026,
    directors: ['Matt Johnson'],
    image: tony,
    imageDescription: 'Tony rendered as vertical colour stripes, with earthy browns, muted golds, grey blues, and deep shadows.',
  },
  {
    slug: 'good-time',
    title: 'Good Time',
    year: 2017,
    directors: ['Josh Safdie', 'Benny Safdie'],
    image: goodTime,
    imageDescription: 'Good Time rendered as vertical colour stripes, shifting from muted pinks and greens to midnight blues and flashes of neon.',
  },
];
