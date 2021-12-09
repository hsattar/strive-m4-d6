import { useState, useEffect } from 'react'
import SubHeading from '../componenets/SubHeading'
import BrowseContent from '../componenets/BrowseContent'


const Shows = () => {

        const [isLoading, setIsLoading] = useState(true)
        const [shows, setShows] = useState(null)
        const [shows2, setShows2] = useState(null) 
        const [shows3, setShows3] = useState(null)
        const [category, setCategory] = useState('Popular')
        const [contentGridLayout, setContentGridLayout] = useState(true)
          
        const fetchShows = async (query, num) => {
      
        let url = `https://hs-omdb-proxy.herokuapp.com/omdb?s=${query}&type=series`
            try {
              const response = await fetch(url)
              const data = await response.json()
              if (response.ok) {
                num === 1 ? setShows(data.Search) :
                num === 2 ? setShows2(data.Search) :
                setShows3(data.Search)
                setIsLoading(false)
              } else {
                setIsLoading(false)
              }
            } catch (error) {
              console.error(error)
              setIsLoading(false)
            }
          }
      
          const popular = [
              { name: 'prison break', number: 1 }, { name: 'suits', number: 2 }, { name: 'white collar', number: 3 }
          ]
      
          const trending = [
              { name: 'designated survivor', number: 1 }, { name: 'quantico', number: 2 }, { name: 'scorpion', number: 3 }
          ]
      
          const recentlyWatched = [
              { name: 'person of interest', number: 1 }, { name: 'manifest', number: 2 }, { name: 'homeland', number: 3 }
          ]
      
          useEffect(() => {
            category === 'Popular' ? popular.map(({name, number}) => {
                const string = name.split(' ').join('%20')
                return fetchShows(string, number) 
            }) :
            category === 'Trending' ? trending.map(({name, number}) => {
                const string = name.split(' ').join('%20')
                return fetchShows(string, number) 
            }) :
            recentlyWatched.map(({name, number}) => {
                const string = name.split(' ').join('%20')
                return fetchShows(string, number) 
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [category])
    
    return (
        <>
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
                title='Shows'
                option1='Popular'
                option2='Trending'
                option3='Recently Watched'
            />
            <BrowseContent 
                isLoading={isLoading} 
                content={shows}
                content2={shows2}
                content3={shows3}
                contentGridLayout={contentGridLayout}
            />
        </>
    )
}

export default Shows