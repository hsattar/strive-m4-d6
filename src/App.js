import { useState } from 'react'
import MyNavbar from './componenets/MyNavbar'
import Movies from './pages/Movies'
import ContentDetails from './componenets/ContentDetails'
import Shows from './pages/Shows'
import SearchResults from './pages/SearchResults'
import Footer from './componenets/Footer'
import NotFound from './pages/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'


function App() {

  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
    <Router>

      <MyNavbar 
        searchQuery={searchQuery}
        handleChange={e => setSearchQuery(e.target.value)}
      />

      <Routes>

        <Route path='/' element={ <Home /> } />
        <Route path='/movies' element={ <Movies /> } />
        <Route path='/details/:imdbID' element={ <ContentDetails /> } />
        <Route path='/shows' element={ <Shows /> } />
        <Route path='/search' element={ <SearchResults searchQuery={searchQuery} /> } />
        <Route path='*' element={ <NotFound /> } />
      
      </Routes>

      <Footer />

    </Router>
      
    </>
  );
}

export default App
