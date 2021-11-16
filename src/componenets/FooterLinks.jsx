import Col from 'react-bootstrap/Col'

const FooterLinks = (props) => {
    return (
        <Col xs='12' sm='6' md='3'>  
            {
                props.text.map((text, index) => (
                    <p key={index}>{text}</p>
                ))
            }
        </Col>
    )
}

export default FooterLinks