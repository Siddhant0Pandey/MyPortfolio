import martheoMovieImg from "../../../../public/images/martheomovies.jpg";
import tradingCourseImg from "../../../../public/images/Stock-Trading-Courses.png";
import pokeSearchImg from "../../../../public/images/pokesearch.jpeg";
import notepod from "../../../../public/images/notepod.png";

interface ProjectItemProps {
  id: number;
  name: string;
  image: {
    src: string;
    alt?: string;
    width: number;
    height: number;
  };
  description: string;
  link: string;
}

export const projectItems: ProjectItemProps[] = [
  {
    id: 1,
    name: "Martheo Movies",
    image: {
      src: martheoMovieImg.src,
      alt: "Martheo Movies",
      width: martheoMovieImg.width,
      height: martheoMovieImg.height,
    },
    description:
      "A recreation of the Disney+ streaming service. The clone includes a dynamic homepage, and a detailed view for each title.",
    link: "https://martheomovies.vercel.app/",
  },

  {
    id: 2,
    name: "TradeAcademy",
    image: {
      src: tradingCourseImg.src,
      alt: "Martheo Movies",
      width: tradingCourseImg.width,
      height: tradingCourseImg.height,
    },
    description:
      "This site showcases a UI designed to explore and demonstrate the capabilities of the Next.js",
    link: "https://tradingacademy.vercel.app/",
  },
  {
    id: 3,
    name: "PokeSearch",
    image: {
      src: pokeSearchImg.src,
      alt: "Martheo Movies",
      width: pokeSearchImg.width,
      height: pokeSearchImg.height,
    },
    description:
      "This site contains the name, image and type of the pokemon, it includes the search feature to search the pokemons. up",
    link: "https://pokelist-search.vercel.app/",
  },
  {
    id: 4,
    name: "ClassManager",
    image: {
      src: martheoMovieImg.src,
      alt: "Martheo Movies",
      width: martheoMovieImg.width,
      height: martheoMovieImg.height,
    },
    description:
      "A student information system that supports adding and deleting students, managing grades, attendance, and more for schools and colleges.",
    link: "https://martheomovies.vercel.app/",
  },
  {
    id: 5,
    name: "NotePod",
    image: {
      src: notepod.src,
      alt: "Martheo Movies",
      width: notepod.width,
      height: notepod.height,
    },
    description:
      "Effortlessly create and delete notes with a clean, user-friendly interface. Keep your thoughts organized in one place!",
    link: "https://note-pod.vercel.app/",
  },
  {
    id: 6,
    name: "PokeSearch",
    image: {
      src: pokeSearchImg.src,
      alt: "Martheo Movies",
      width: pokeSearchImg.width,
      height: pokeSearchImg.height,
    },
    description:
      "This site contains the name, image and type of the pokemon, it includes the search feature to search the pokemons. up",
    link: "https://pokelist-search.vercel.app/",
  },

  {
    id: 7,
    name: "TradeAcademy",
    image: {
      src: tradingCourseImg.src,
      alt: "Martheo Movies",
      width: tradingCourseImg.width,
      height: tradingCourseImg.height,
    },
    description:
      "This site showcases a UI designed to explore and demonstrate the capabilities of the Next.js",
    link: "https://tradingacademy.vercel.app/",
  },
  {
    id: 8,
    name: "Martheo Movies",
    image: {
      src: martheoMovieImg.src,
      alt: "Martheo Movies",
      width: martheoMovieImg.width,
      height: martheoMovieImg.height,
    },
    description:
      "A recreation of the Disney+ streaming service. The clone includes a dynamic homepage, and a detailed view for each title.",
    link: "https://martheomovies.vercel.app/",
  },
];
