import { useEffect, useState } from "react"
import MovieRow from "./MovieRow"
import Loading from './Loading'


const BrowseMovies = () => {

  const [movies, setMovies] = useState(null)
  const [movies2, setMovies2] = useState(null)
  const [movies3, setMovies3] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchMovies = async (query, updateMovie) => {

    let url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (response.ok) {
        setMovies(data.Search)
        // this.setState({
        //     [updateMovie]: data.Search
        //   })
        setIsLoading(false)
      } else {
        setIsLoading(false)
      }
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMovies('harry%20potter', 'movies')
    // fetchMovies('home%20alone', 'movies2')
    // fetchMovies('marvel', 'movies3')
  }, [])

    return (
      <>
        { isLoading &&  <Loading /> }
        { movies && <MovieRow movies={movies}/> }
        { movies2 && <MovieRow movies={movies2}/> }
        { movies3 && <MovieRow movies={movies3}/> }
      </>
    )
}

export default BrowseMovies;