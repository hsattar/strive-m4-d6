import { useState, useEffect } from 'react'
import MyNavbar from './componenets/MyNavbar'
import Movies from './componenets/Movies'
import Shows from './componenets/Shows'
import Footer from './componenets/Footer'
import NotFound from './componenets/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  const [initialLoad, setInitialLoad] = useState(true)
  const [movies, setMovies] = useState(null)
  const [movies2, setMovies2] = useState(null)
  const [movies3, setMovies3] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [category, setCategory] = useState('Action')
  const [movieGridLayout, setMovieGridLayout] = useState(true)
    
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

    const actionMovies = [
        { name: 'fast%20furious', number: 1 }, { name: 'marvel', number: 2 }, { name: 'batman', number: 3 }
    ]

    const comedyMovies = [
        { name: 'home%20alone', number: 1 }, { name: 'diary%20of%20a%20wimpy%20kid', number: 2 }, { name: 'jumanji', number: 3 }
    ]

    const romanceMovies = [
        { name: 'high%20school%20musical', number: 1 }, { name: 'bridget%20jones', number: 2 }, { name: 'last%20christmas', number: 3 }
    ]

    useEffect(() => {
        category === 'Action' ? actionMovies.map(({name, number}) => fetchMovies(name, number)) :
        category === 'Comedy' ? comedyMovies.map(({name, number}) => fetchMovies(name, number)) :
        romanceMovies.map(({name, number}) => fetchMovies(name, number))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])

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
    <Router>

      <MyNavbar 
        searchQuery={searchQuery}
        handleChange={e => setSearchQuery(e.target.value)}
        handleSubmit={handleSubmit}
      />

      <Routes>

        <Route path='/movies' element={ <Movies 
          isLoading={isLoading}
          showSearchResults={showSearchResults}
          data={data}
          searchQuery={searchQuery}
          initialLoad={initialLoad}
          category={category}
          movieGridLayout={movieGridLayout}
          movies={movies}
          movies2={movies2}
          movies3={movies3}
          handleChange={e => setCategory(e.target.value)}
          handleGridLayoutClick={() => setMovieGridLayout(true)}
          handleListLayoutClick={() => setMovieGridLayout(false)}
        /> } />

        <Route path='/shows' element={ <Shows /> } />
        
        <Route path='*' element={ <NotFound /> } />
      
      </Routes>

      <Footer />

    </Router>
      
    </>
  );
}

export default App
