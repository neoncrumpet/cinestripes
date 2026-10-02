import type { ImageMetadata } from 'astro';
import episodeOne from '../assets/tv/widowsbay/wb-01.png';
import episodeTwo from '../assets/tv/widowsbay/wb-02.png';
import episodeThree from '../assets/tv/widowsbay/wb-03.png';
import episodeFour from '../assets/tv/widowsbay/wb-04.png';
import episodeFive from '../assets/tv/widowsbay/wb-05.png';
import episodeSix from '../assets/tv/widowsbay/wb-06.png';
import episodeSeven from '../assets/tv/widowsbay/wb-07.png';
import episodeEight from '../assets/tv/widowsbay/wb-08.png';
import episodeNine from '../assets/tv/widowsbay/wb-09.png';
import episodeTen from '../assets/tv/widowsbay/wb-10.png';

export interface Artwork {
  image: ImageMetadata;
  imageDescription: string;
}

export interface Episode extends Artwork {
  season: number;
  number: number;
  title: string;
}

export interface Series {
  slug: string;
  title: string;
  year: number;
  creators: string[];
  // At least one episode is required to publish a series.
  episodes: [Episode, ...Episode[]];
  // Optional custom artwork. Omit to use the earliest season/episode.
  cover?: Artwork;
}

// Titles and credits: https://tv.apple.com/us/show/widows-bay/umc.cmc.1zzly0vah46bnvnwf0qkrjhh2
const widowsBayEpisodes: Series['episodes'] = [
  {
    season: 1,
    number: 1,
    title: 'Welcome to Widow’s Bay!',
    image: episodeOne,
    imageDescription: 'The colour timeline of Widow’s Bay, season 1, episode 1, rendered as vertical stripes.',
  },
  {
    season: 1,
    number: 2,
    title: 'Lodging',
    image: episodeTwo,
    imageDescription: 'The colour timeline of Widow’s Bay, season 1, episode 2, rendered as vertical stripes.',
  },
  {
    season: 1,
    number: 3,
    title: 'The Inaugural Swim',
    image: episodeThree,
    imageDescription: 'The colour timeline of Widow’s Bay, season 1, episode 3, rendered as vertical stripes.',
  },
  {
    season: 1,
    number: 4,
    title: 'Beach Reads',
    image: episodeFour,
    imageDescription: 'The colour timeline of Widow’s Bay, season 1, episode 4, rendered as vertical stripes.',
  },
  {
    season: 1,
    number: 5,
    title: 'What to Expect on Your Trip',
    image: episodeFive,
    imageDescription: 'The colour timeline of Widow’s Bay, season 1, episode 5, rendered as vertical stripes.',
  },
  {
    season: 1,
    number: 6,
    title: 'Our History',
    image: episodeSix,
    imageDescription: 'The colour timeline of Widow’s Bay, season 1, episode 6, rendered as vertical stripes.',
  },
  {
    season: 1,
    number: 7,
    title: 'Seasickness',
    image: episodeSeven,
    imageDescription: 'The colour timeline of Widow’s Bay, season 1, episode 7, rendered as vertical stripes.',
  },
  {
    season: 1,
    number: 8,
    title: 'Your Baggage',
    image: episodeEight,
    imageDescription: 'The colour timeline of Widow’s Bay, season 1, episode 8, rendered as vertical stripes.',
  },
  {
    season: 1,
    number: 9,
    title: 'Emergency Shelter',
    image: episodeNine,
    imageDescription: 'The colour timeline of Widow’s Bay, season 1, episode 9, rendered as vertical stripes.',
  },
  {
    season: 1,
    number: 10,
    title: 'We Hope You Enjoyed Your Time!',
    image: episodeTen,
    imageDescription: 'The colour timeline of Widow’s Bay, season 1, episode 10, rendered as vertical stripes.',
  },
];

export const series: Series[] = [
  {
    slug: 'widows-bay',
    title: 'Widow’s Bay',
    year: 2026,
    creators: ['Katie Dippold'],
    episodes: widowsBayEpisodes,
    cover: widowsBayEpisodes[0],
  },
];

export function getOrderedEpisodes(show: Series): Episode[] {
  return [...show.episodes].sort((a, b) => a.season - b.season || a.number - b.number);
}

export function getSeriesCover(show: Series): Artwork {
  const { image, imageDescription } = show.cover ?? getOrderedEpisodes(show)[0]!;
  return { image, imageDescription };
}
