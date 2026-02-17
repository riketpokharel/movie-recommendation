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
    id: 1,
    title: "Inception",
    image: "/assets/images/inception-thumb.jpg",
  },
  {
    id: 2,
    title: "Interstellar",
    image: "/assets/images/interstellar-thumb.jpg",
  },
  {
    id: 3,
    title: "SpiderMan",
    image: "/assets/images/spiderman1.jpg",
  },
  {
    id: 4,
    title: "SpiderMan 2",
    image: "/assets/images/spiderman2.jpg",
  },
  {
    id: 5,
    title: "SpiderMan 3",
    image: "/assets/images/spiderma3.jpg",
  },
  {
    id: 6,
    title: "John Wick",
    image: "/assets/images/johnwick.jpg",
  },
  {
    id: 7,
    title: "John Wick 2",
    image: "/assets/images/johnwick2.jpg",
  },
  {
    id: 8,
    title: "John Wick 3",
    image: "/assets/images/johnwick3.jpg",
  },
  {
    id: 9,
    title: "John Wick 4",
    image: "/assets/images/johnwick4.jpg",
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
