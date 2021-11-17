import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from 'react-router-dom'

const MovieRow = ({movies, movieGridLayout}) => {
    return (
        <Row className="mx-1 my-4 justify-content-center">
            { movieGridLayout ? 
            <>
            {
                movies.map(({imdbID, Poster}, index) => (
                    index < 4 &&
                    <Col key={imdbID} xs='12' sm='6' md='4' lg='3' className="mb-3">
                            <Link to={`/movies/${imdbID}`}>
                                <img src={Poster} className="w-100 img-fluid rounded images" alt="" />
                            </Link>
                    </Col>
                ))
            }
            </>
            : 
            <>
            {
                movies.map(({imdbID, Poster, Title, Year}, index) => (
                    index < 4 &&
                    <Col key={imdbID} xs='12' sm='6' md='4' lg='3' className="mb-3">
                        <Row>
                            <Col lg='8'>
                                <Link to={`/movies/${imdbID}`}>
                                    <img src={Poster} className="w-100 img-fluid rounded images" alt="" />
                                </Link>
                            </Col>
                            <Col lg='4 text-center'>
                                <h3>{Title}</h3>
                                <h4>{Year}</h4>
                            </Col>
                        </Row>
                    </Col>
                ))
            }
            </>
            }
        </Row>
    )
}

export default MovieRow;