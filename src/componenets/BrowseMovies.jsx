import MovieRow from "./MovieRow"
import Loading from './Loading'


const BrowseMovies = ({ initialLoad, movies, movies2, movies3, movieGridLayout }) => {

    return (
      <>
        { initialLoad &&  <Loading /> }
        { movies && <MovieRow movies={movies} movieGridLayout={movieGridLayout} /> }
        { movies2 && <MovieRow movies={movies2} movieGridLayout={movieGridLayout} /> }
        { movies3 && <MovieRow movies={movies3} movieGridLayout={movieGridLayout} /> }
      </>
    )
}

export default BrowseMovies;