import { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import SearchResults from './SearchResults'
import HeroMovie from './HeroMovie'
import Footer from './Footer'
import SubHeading from './SubHeading'
import BrowseMovies from './BrowseMovies'
import Loading from './Loading'

const MyNavbar = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const [showSearchResults, setShowSearchResults] = useState(false)
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()
        setIsLoading(true)
        try {
            if (searchQuery.length === 0) {
                setShowSearchResults(false)
                setIsLoading(false)
            } 
            else {
                const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchQuery}`)
                const data = await response.json()
                setData(data)
                if (searchQuery) {
                    setShowSearchResults(true)
                    setIsLoading(false)
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>
                <a className="navbar-brand " href="/"><img className="netflix-logo" src="../assets/netflix_logo.png" alt=""/></a>
                </Navbar.Brand>

                <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">TV Shows<span className="sr-only">(current)</span></a></li>
                        <li className="nav-item active"><a className="nav-link" href="/">Movies</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Recently Added</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">My List</a></li>
                    </ul>

                    <div className="form-inline my-2 my-lg-0">
                    
                        <span className="mx-2 profile-type">Kids</span>
                        <i className="bi bi-bell-fill mx-2"></i>
                        
                        <img className="drop-down-avatar mr-2" src="../assets/avatar.png" alt=""/>


                        <Form inline onSubmit={handleSubmit}>
                            <FormControl
                                className='bg-dark text-white'
                                type="text"
                                placeholder="Search here"
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)} 
                            />
                            {
                                isLoading && 
                                <Loading />
                            }
                            <Button type="submit" variant="dark"><i className="bi bi-search mx-2"></i></Button>
                        </Form>
                    </div>

                </div>
            
            </Navbar>

            {showSearchResults && 
                <SearchResults movies={data} searchQuery={searchQuery}/>
            }
            {
                !showSearchResults &&      
                <>
                    <HeroMovie />
                    <SubHeading />
                    <BrowseMovies />
                    <Footer />
                </>
            }
        </>
    )
}





export default MyNavbar