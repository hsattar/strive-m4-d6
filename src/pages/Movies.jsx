import { useState, useEffect } from 'react'
import HeroMovie from '../componenets/HeroMovie'
import SubHeading from '../componenets/SubHeading'
import BrowseContent from '../componenets/BrowseContent'


const Movies = () => {

        const [isLoading, setIsLoading] = useState(true)
        const [movies, setMovies] = useState(null)
        const [movies2, setMovies2] = useState(null) 
        const [movies3, setMovies3] = useState(null)
        const [category, setCategory] = useState('Action')
        const [contentGridLayout, setContentGridLayout] = useState(true)
          
        const fetchMovies = async (query, num) => {
      
        let url = `https://hs-omdb-proxy.herokuapp.com/omdb?s=${query}`
            try {
              const response = await fetch(url)
              const data = await response.json()
              if (response.ok) {
                num === 1 ? setMovies(data.Search) :
                num === 2 ? setMovies2(data.Search) :
                setMovies3(data.Search)
                setIsLoading(false)
              } else {
                setIsLoading(false)
              }
            } catch (error) {
              console.error(error)
              setIsLoading(false)
            }
          }
      
          const actionMovies = [
              { name: 'fast furious', number: 1 }, { name: 'marvel', number: 2 }, { name: 'batman', number: 3 }
          ]
      
          const comedyMovies = [
              { name: 'home alone', number: 1 }, { name: 'diary of a wimpy kid', number: 2 }, { name: 'jumanji', number: 3 }
          ]
      
          const romanceMovies = [
              { name: 'high school musical', number: 1 }, { name: 'bridget jones', number: 2 }, { name: 'last christmas', number: 3 }
          ]
      
          useEffect(() => {
            category === 'Action' ? actionMovies.map(({name, number}) => {
                const string = name.split(' ').join('%20')
                return fetchMovies(string, number) 
            }) :
            category === 'Comedy' ? comedyMovies.map(({name, number}) => {
                const string = name.split(' ').join('%20')
                return fetchMovies(string, number) 
            }) :
            romanceMovies.map(({name, number}) => {
                const string = name.split(' ').join('%20')
                return fetchMovies(string, number) 
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [category])
    
    return (
        <>
            <HeroMovie isLoading={isLoading}/>
            <SubHeading
                isLoading={isLoading}
                category={category}
                handleChange={e => {
                    setCategory(e.target.value)
                    setIsLoading(true)
                }}
                contentGridLayout={contentGridLayout}
                handleGridLayoutClick={() => setContentGridLayout(true)}
                handleListLayoutClick={() => setContentGridLayout(false)}
                title='Movies'
                option1='Action'
                option2='Comedy'
                option3='Romance'
            />
            <BrowseContent 
                isLoading={isLoading} 
                content={movies}
                content2={movies2}
                content3={movies3}
                contentGridLayout={contentGridLayout}
            />
        </>
    )
}

export default Movies