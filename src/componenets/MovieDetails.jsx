import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MovieDetails = () => {

    const [movie, setMovie] = useState(null)

    const params = useParams()
    const imdbID = params.imdbID

    const fetchMovieDetails = async () => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${imdbID}`)
            const data = await response.json()
            setMovie(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchMovieDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            { movie &&
                <Container>
                    <Row className="mt-5">
                        <Col xs='12' md='4'>
                            <img src={movie.Poster} />
                        </Col>

                        <Col xs='12' md='8' className='text-center' alt={`Movie Poster of ${movie.Title}`}>
                            <h2>{movie.Title}</h2>
                            <h5 className='font-weight-normal my-3'>{movie.Plot}</h5>
                            <p>Genre - {movie.Genre}</p>
                            <p>Age Rating - {movie.Rated}</p>
                            <p>Realesed - {movie.Year}</p>
                            <p>IMDB Rating - {movie.imdbRating}</p>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}

export default MovieDetails