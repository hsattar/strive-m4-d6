import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link, useLocation } from 'react-router-dom'

const MyNavbar = ({ handleChange, handleSubmit, searchQuery }) => {

    const location = useLocation()
    const path = location.pathname

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>
            <Link to='/' className="navbar-brand "><img className="netflix-logo" src="../assets/netflix_logo.png" alt=""/></Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Link to='/' className={ path === '/' ? 'nav-link active' : 'nav-link' }>Home</Link>
                <Link to='/shows' className={ path === '/shows' ? 'nav-link active' : 'nav-link' }>TV Shows</Link>
                <Link to='/movies' className={ path === '/movies' ? 'nav-link active' : 'nav-link' }>Movies</Link>
            </Nav>

            <Nav className="form-inline my-2 my-lg-0">
            
                <Form inline onSubmit={handleSubmit}>
                    <FormControl
                        className='bg-dark text-white'
                        type="text"
                        placeholder="Search here"
                        value={searchQuery}
                        onChange={handleChange} 
                    />
                    <Button type="submit" variant="dark"><i className="bi bi-search mx-2"></i></Button>
                </Form>

                <span className="mx-2 profile-type">Kids</span>
                <i className="bi bi-bell-fill mx-2"></i>
                
                <img className="drop-down-avatar mr-2" src="../assets/avatar.png" alt=""/>

            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar