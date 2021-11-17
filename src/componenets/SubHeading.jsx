import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const SubHeading = ({ initialLoad, handleChange, category, contentGridLayout, handleGridLayoutClick, handleListLayoutClick, 
                        title, option1, option2, option3 }) => (
    <>
    { !initialLoad && 
    <Container fluid>

        <Row className="pt-3">

            <Col xs='12' className="d-flex align-items-center justify-content-between px-4">

                <div className="left-headings d-flex align-items-center">
                    <h2 className="pl-0 pr-3">{title}</h2>
                    <Form.Control 
                        as="select" 
                        className='bg-dark text-white' 
                        value={category} 
                        onChange={handleChange}
                    >
                        <option>{option1}</option>
                        <option>{option2}</option>
                        <option>{option3}</option>
                    </Form.Control>
                </div>
            
                <div className="d-none d-md-flex">
                    <i 
                        className={!contentGridLayout ? "bi bi-list text-white" : "bi bi-list"}
                        onClick={handleListLayoutClick}
                    >
                    </i>
                    <i 
                        className={contentGridLayout ? "bi bi-grid-3x2-gap text-white" : "bi bi-grid-3x2-gap"}
                        onClick={handleGridLayoutClick}
                    >
                    </i>
                </div>

            </Col>

        </Row>

    </Container>
    }
    </>
)

export default SubHeading 