import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ContentDetails = () => {

    const [content, setContent] = useState(null)

    const params = useParams()
    const imdbID = params.imdbID

    const fetchContentDetails = async () => {
        try {
            const response = await fetch(`https://hs-omdb-proxy.herokuapp.com/omdb?i=${imdbID}`)
            if (response.ok) {

                const data = await response.json()
                setContent(data)
            } else {
                console.error('Fetch Failed')
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchContentDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            { content ?
                <Container>
                    <Row className="mt-5 text-center">
                        <Col xs='12' md='6' lg='4' className='mb-4'>
                            <img src={content.Poster} alt={`content Poster of ${content.Title}`}/>
                        </Col>

                        <Col xs='12' md='6' lg='8'>
                            <h2>{content.Title}</h2>
                            <h5 className='font-weight-normal my-3'>{content.Plot}</h5>
                            <p>Genre - {content.Genre}</p>
                            <p>Age Rating - {content.Rated}</p>
                            <p>Realesed - {content.Year}</p>
                            <p>IMDB Rating - {content.imdbRating}</p>
                        </Col>
                    </Row>
                </Container>
                :
                <h2 className='text-danger'>This does not exist</h2>
            }
        </>
    )
}

export default ContentDetails