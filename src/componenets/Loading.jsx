import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LoadingCard from './LoadingCard'

const Loading = () => (
    <Row className='mx-1 mt-3'>
        {
            [1, 2, 3, 4].map(n => (
                <Col key={n} xs='12' sm='6' md='4' lg='3' className="mb-3">
                    <LoadingCard />
                </Col>
            ))
        }
    </Row>
)

export default Loading