export interface Movie {
  id: string;
  title: string;
  coverImage: string;
  thumbnail: string;
  genre: string[];
  year: number;
  rating: number;
  description: string;
  isFeatured?: boolean;
}

export const covermovies: Movie[] = [
  {
    id: "1",
    title: "Inception",
    coverImage: "/assets/images/inception-cover.jpg",
    thumbnail: "/assets/images/inception-thumb.jpg",
    genre: ["Action", "Sci-Fi"],
    year: 2010,
    rating: 8.8,
    description:
      "A thief steals corporate secrets through dream-sharing technology and takes lead.",
    isFeatured: true,
  },
  {
    id: "2",
    title: "Interstellar",
    coverImage: "/assets/images/interstellarcover.jpg",
    thumbnail: "/assets/images/interstellar-thumb.jpg",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    year: 2014,
    rating: 8.6,
    description:
      "A team travels through a wormhole in space to ensure humanity's survival.",
    isFeatured: false,
  },
  {
    id: "3",
    title: "The Dark Knight",
    coverImage: "/assets/images/darkknight-cover.jpg",
    thumbnail: "/assets/images/darkknight-thumb.jpg",
    genre: ["Action", "Crime", "Drama"],
    year: 2008,
    rating: 9.1,
    description:
      "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.",
    isFeatured: true,
  },

  // More...
];

export interface MovieCard {
  id: string;
  image: string;
  title: string;
}

// data.ts
export const movies = [
  {
    id: "1",
    title: "Inception",
    image: "/assets/images/inception-thumb.jpg",
    genre: ["Action", "Sci-Fi"],
    year: 2010,
    rating: 8.8,
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    duration: "2h 28m",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
  },
  {
    id: "2",
    title: "Interstellar",
    image: "/assets/images/interstellar-thumb.jpg",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    year: 2014,
    rating: 8.6,
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    duration: "2h 49m",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
  },
  {
    id: "3",
    title: "SpiderMan",
    image: "/assets/images/spiderman1.jpg",
    genre: ["Action", "Adventure", "Sci-Fi"],
    year: 2002,
    rating: 7.3,
    description: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.",
    duration: "2h 1m",
    cast: ["Tobey Maguire", "Kirsten Dunst", "Willem Dafoe"],
  },
  {
    id: "4",
    title: "SpiderMan 2",
    image: "/assets/images/spiderman2.jpg",
    genre: ["Action", "Adventure", "Sci-Fi"],
    year: 2004,
    rating: 7.4,
    description: "Peter Parker is beset with troubles in his failing personal life as he battles a brilliant scientist named Doctor Otto Octavius.",
    duration: "2h 7m",
    cast: ["Tobey Maguire", "Kirsten Dunst", "Alfred Molina"],
  },
  {
    id: "5",
    title: "SpiderMan 3",
    image: "/assets/images/spiderma3.jpg",
    genre: ["Action", "Adventure", "Sci-Fi"],
    year: 2007,
    rating: 6.2,
    description: "A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.",
    duration: "2h 19m",
    cast: ["Tobey Maguire", "Kirsten Dunst", "Topher Grace"],
  },
  {
    id: "6",
    title: "John Wick",
    image: "/assets/images/johnwick.jpg",
    genre: ["Action", "Crime", "Thriller"],
    year: 2014,
    rating: 7.4,
    description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
    duration: "1h 41m",
    cast: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"],
  },
  {
    id: "7",
    title: "John Wick 2",
    image: "/assets/images/johnwick2.jpg",
    genre: ["Action", "Crime", "Thriller"],
    year: 2017,
    rating: 7.5,
    description: "After returning to the criminal underworld to repay a debt, John Wick discovers that a large bounty has been put on his life.",
    duration: "2h 2m",
    cast: ["Keanu Reeves", "Riccardo Scamarcio", "Ian McShane"],
  },
  {
    id: "8",
    title: "John Wick 3",
    image: "/assets/images/johnwick3.jpg",
    genre: ["Action", "Crime", "Thriller"],
    year: 2019,
    rating: 7.4,
    description: "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
    duration: "2h 10m",
    cast: ["Keanu Reeves", "Halle Berry", "Ian McShane"],
  },
  {
    id: "9",
    title: "John Wick 4",
    image: "/assets/images/johnwick4.jpg",
    genre: ["Action", "Crime", "Thriller"],
    year: 2023,
    rating: 7.7,
    description: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    duration: "2h 49m",
    cast: ["Keanu Reeves", "Donnie Yen", "Bill Skarsgård"],
  },
];


export interface GoldenGlobe {
  id: string;
  image: string;
  title: string;
}

export const goldenglobe = [
  { id: 1, title: "Oppenheimer", image: "/assets/images/oppenheimer.jpg" },
  { id: 2, title: "The Brutalist", image: "/assets/images/thebrutalist.jpg" },
  {
    id: 3,
    title: "Killers of the flower moon",
    image: "/assets/images/thekillers.jpg",
  },
  { id: 4, title: "Barbie", image: "/assets/images/barbie.jpg" },
];
