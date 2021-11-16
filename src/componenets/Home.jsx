import { useState } from 'react'
import MyNavbar from './MyNavbar'
import SearchResults from './SearchResults'
import HeroMovie from './HeroMovie'
import Footer from './Footer'
import SubHeading from './SubHeading'
import BrowseMovies from './BrowseMovies'

const Home = () => {

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

    const handleChange = e => {
        setSearchQuery(e.target.value)
    }

    return (
        <>
            <MyNavbar 
                isLoading={isLoading} 
                searchQuery={searchQuery}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

            { showSearchResults && <SearchResults movies={data} searchQuery={searchQuery} /> }
            
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

export default Home