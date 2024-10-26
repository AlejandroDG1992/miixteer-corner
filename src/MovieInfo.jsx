import { moviesArray } from "./dataDB/MoviesSeriesDB.jsx";
import { Image } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";

export function MovieInfo() {
  const listItems = moviesArray.map((movie) => (
    <>
      <div className="movieGridSection">
        <h2 className="movieTitle">{movie.nameMovie}</h2>
        <div className="gridSection" key={movie.id}>
          <div className="movieImage">
            <Image
              className="avatar"
              isZoomed
              width="70"
              height="70"
              src={movie.imageFilm}
            />
          </div>
          <Spacer x={4} />
          <div className="movieGridInfo">
            <Accordion variant="bordered">
              <AccordionItem
                key="1"
                aria-label="Director"
                title="Director"
                className="styleAcordeonItem"
              >
                {movie.nameDirector}
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Year"
                title="Year"
                className="styleAcordeonItem"
              >
                {movie.yearFilm}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Watched date"
                title="Watched date"
                className="styleAcordeonItem"
              >
                {movie.watchedDate}
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Genres"
                title="Genres"
                className="styleAcordeonItem"
              >
                {movie.genres.map((genre) => (
                  <li>{genre}</li>
                ))}
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <h1>REVIEW</h1>
            <ScrollShadow size={80} className="w-[400px] h-[250px]">
              {movie.review}
            </ScrollShadow>
          </div>
        </div>  
        <Spacer x={4} />
      </div>
    </>
  ));
  return listItems;
}
