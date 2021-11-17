import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const SearchResults = ({ searchQuery }) => {

    const [results, setResults] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    
    const fetchSearchResults = async () => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchQuery}`)
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                console.log(data.Search)
                setResults(data.Search)
            } else {
                console.error('Fetch Failed')
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchSearchResults()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery])

    return (
        <>
            {
                results &&
                <>
                    <h2 className='mx-3 my-3'>Showing {results.length} results for {searchQuery}</h2>
                    <Row className="mx-1 mb-4 justify-content-center">
                    {               
                        results.map(({imdbID, Poster}) => (
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
                !results && 
                <h2 className='text-center mt-5'>No Results Found</h2>
            }
        </>
    )
}

export default SearchResults