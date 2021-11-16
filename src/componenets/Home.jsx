import { useState, useEffect } from 'react'
import MyNavbar from './MyNavbar'
import SearchResults from './SearchResults'
import HeroMovie from './HeroMovie'
import Footer from './Footer'
import SubHeading from './SubHeading'
import BrowseMovies from './BrowseMovies'
import Loading from './Loading'


const Home = () => {
    
    const [initialLoad, setInitialLoad] = useState(true)
    const [movies, setMovies] = useState(null)
    const [movies2, setMovies2] = useState(null)
    const [movies3, setMovies3] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [showSearchResults, setShowSearchResults] = useState(false)
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [category, setCategory] = useState('Action')
    
    // const movies =  ['harry%20potter', 'home%20alone', 'marvel']
  
    const fetchMovies = async (query, num) => {
  
      let url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}`
      try {
        const response = await fetch(url)
        const data = await response.json()
        if (response.ok) {
          num === 1 ? setMovies(data.Search) :
          num === 2 ? setMovies2(data.Search) :
          setMovies3(data.Search)
          setInitialLoad(false)
        } else {
          setInitialLoad(false)
        }
      } catch (error) {
        console.error(error)
        setInitialLoad(false)
      }
    }
  
    useEffect(() => {
      fetchMovies('fast%20furious', 1)
      fetchMovies('marvel', 3)
      fetchMovies('batman', 2)
    }, [])


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
            <MyNavbar 
                searchQuery={searchQuery}
                handleChange={e => setSearchQuery(e.target.value)}
                handleSubmit={handleSubmit}
            />

            { isLoading && <Loading /> }

            { (!isLoading && showSearchResults) && <SearchResults movies={data} searchQuery={searchQuery} /> }
            
            {
                (!isLoading && !showSearchResults) &&      
                <>
                    <HeroMovie initialLoad={initialLoad}/>
                    <SubHeading
                        initialLoad={initialLoad}
                        category={category}
                        handleChange={e => setCategory(e.target.value)}
                    />
                    <BrowseMovies 
                        initialLoad={initialLoad} 
                        movies={movies}
                        movies2={movies2}
                        movies3={movies3}
                    />
                    <Footer />
                </>
            }
        </>
    )
}

export default Home