import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const SubHeading = ({ initialLoad, handleChange, category }) => (
    <>
    { !initialLoad && 
    <Container fluid>

        <Row className="pt-3">

            <Col xs='12' className="d-flex align-items-center justify-content-between px-4">

                <div className="left-headings d-flex align-items-center">
                    <h2 className="pl-0 pr-3">Movies</h2>
                    <Form.Control 
                        as="select" 
                        className='bg-dark text-white' 
                        value={category} 
                        onChange={handleChange}
                    >
                        <option>Action</option>
                        <option>Comedy</option>
                        <option>Romance</option>
                    </Form.Control>
                </div>
            
                <div className="d-none d-md-flex">
                    <i className="bi bi-list"></i>
                    <i className="bi bi-grid-3x2-gap"></i>
                </div>

            </Col>

        </Row>

    </Container>
    }
    </>
)

export default SubHeading 