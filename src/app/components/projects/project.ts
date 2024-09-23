import martheoMovieImg from "../../../../public/images/martheomovies.jpg";
import tradingCourseImg from "../../../../public/images/Stock-Trading-Courses.png";
import pokeSearchImg from "../../../../public/images/pokesearch.jpeg";

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
  },
  {
    id: 5,
    name: "ClassManager",
    image: {
      src: martheoMovieImg.src,
      alt: "Martheo Movies",
      width: martheoMovieImg.width,
      height: martheoMovieImg.height,
    },
    description:
      "A student information system that supports adding and deleting students, managing grades, attendance, and more for schools and colleges.",
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
  },
];
