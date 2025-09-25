export interface Movie{
    id:string;
    title:string;
    coverImage:string;
    thumbnail:string;
    genre:string[];
    year:number;
    rating:number;
    description:string;
    isFeatured?: boolean;
}

export const movies: Movie[] = [
  {
    id: "1",
    title: "Inception",
    coverImage: "/assets/images/inception-cover.jpg",
    thumbnail: "/assets/images/inception-thumb.jpg",
    genre: ["Action", "Sci-Fi"],
    year: 2010,
    rating: 8.8,
    description: "A thief steals corporate secrets through dream-sharing technology and takes lead.",
    isFeatured: true
  },
  {
    id: "2",
    title: "Interstellar",
    coverImage: "/assets/images/interstellarcover.jpg",
    thumbnail: "/assets/images/interstellar-thumb.jpg",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    year: 2014,
    rating: 8.6,
    description: "A team travels through a wormhole in space to ensure humanity's survival.",
    isFeatured: false
  },
  {
  id: "3",
  title: "The Dark Knight",
  coverImage: "/assets/images/darkknight-cover.jpg",
  thumbnail: "/assets/images/darkknight-thumb.jpg",
  genre: ["Action", "Crime", "Drama"],
  year: 2008,
  rating: 9.1,
  description: "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.",
  isFeatured: true
}

  // More...
];