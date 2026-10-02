import type { ImageMetadata } from 'astro';
import tony from '../assets/tony.png';
import goodTime from '../assets/goodtime.png';
import tsdacm from '../assets/camp-miasma.png';
import brazil from '../assets/movies/brazil-1985.png'
import moment from '../assets/movies/the-moment-2026.png'
import ron from '../assets/movies/ready-or-not.png'
import ron2 from '../assets/movies/ready-or-not2.png'

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
    slug: 'brazil',
    title: 'Brazil',
    year: 1985,
    directors: ['Terry Gilliam'],
    image: brazil,
    imageDescription: 'Brazil rendered as vertical colour stripes',
  },
  {
    slug: 'ready-or-not-2',
    title: 'Ready or Not 2: Here I Come',
    year: 2026,
    directors: ['Tyler Gillett', 'Matt Bettinelli-Olpin'],
    image: ron2,
    imageDescription: 'Ready or Not 2 rendered as vertical colour stripes',
  },
  {
    slug: 'ready-or-not',
    title: 'Ready or Not',
    year: 2019,
    directors: ['Tyler Gillett', 'Matt Bettinelli-Olpin'],
    image: ron,
    imageDescription: 'Ready or Not rendered as vertical colour stripes',
  },
  {
    slug: 'the-moment',
    title: 'The Moment',
    year: 2026,
    directors: ['Aidan Zamiri'],
    image: moment,
    imageDescription: 'The Moment rendered as vertical colour stripes',
  },
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
