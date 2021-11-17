import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const SearchResults = (props) => {
    return (
        <>
            {
                props.movies.Search &&
                <>
                    <h2 className='mx-3 my-3'>Showing {props.movies.Search.length} results for {props.searchQuery}</h2>
                    <Row className="mx-1 mb-4 justify-content-center">
                    {               
                        props.movies.Search.map(({imdbID, Poster}) => (
                            <Col key={imdbID} xs='12' sm='6' md='4' lg='3' className="mb-3">
                                <Link to={`/movies/${imdbID}`}>
                                    <img src={Poster} className="w-100 img-fluid rounded images" alt="" />
                                </Link>
                            </Col>
                        ))
                    }
                    </Row> 
                </>
            }
            {
                !props.movies.Search && 
                <h2 className='text-center mt-5'>No Results Found</h2>
            }
        </>
    )
}

export default SearchResults