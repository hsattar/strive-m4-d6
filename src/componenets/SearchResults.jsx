import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SearchResults = (props) => {
    return (
        <>
            {
                props.movies.Search &&
                <>
                    <h2 className='mx-3 my-3'>Showing {props.movies.Search.length} results for {props.searchQuery}</h2>
                    <Row className="mx-1 mb-4 justify-content-center">
                    {               
                        props.movies.Search.map(movie => (
                            <Col key={movie.imdbID} xs='12' sm='6' md='4' lg='3' className="mb-3">
                                    <img src={movie.Poster} className="w-100 img-fluid rounded images" alt="" />
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