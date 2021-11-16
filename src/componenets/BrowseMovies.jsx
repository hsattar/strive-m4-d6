import { useEffect, useState } from "react"
import MovieRow from "./MovieRow"
import Loading from './Loading'


const BrowseMovies = ({ initialLoad, movies }) => {

    return (
      <>
        { initialLoad &&  <Loading /> }
        { movies && <MovieRow movies={movies}/> }
        {/* { movies2 && <MovieRow movies={movies2}/> }
        { movies3 && <MovieRow movies={movies3}/> } */}
      </>
    )
}

export default BrowseMovies;