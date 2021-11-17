import SearchResults from './SearchResults'
import HeroMovie from './HeroMovie'
import SubHeading from './SubHeading'
import BrowseMovies from './BrowseMovies'
import Loading from './Loading'


const Movies = ({ isLoading, showSearchResults, data, searchQuery, initialLoad, category, movieGridLayout, 
            movies, movies2, movies3, handleChange, handleGridLayoutClick, handleListLayoutClick }) => {
    
    return (
        <>

            { isLoading && <Loading /> }

            { (!isLoading && showSearchResults) && <SearchResults movies={data} searchQuery={searchQuery} /> }
            
            {
                (!isLoading && !showSearchResults) &&      
                <>
                    <HeroMovie initialLoad={initialLoad}/>
                    <SubHeading
                        initialLoad={initialLoad}
                        category={category}
                        handleChange={handleChange}
                        movieGridLayout={movieGridLayout}
                        handleGridLayoutClick={handleGridLayoutClick}
                        handleListLayoutClick={handleListLayoutClick}
                    />
                    <BrowseMovies 
                        initialLoad={initialLoad} 
                        movies={movies}
                        movies2={movies2}
                        movies3={movies3}
                        movieGridLayout={movieGridLayout}
                    />
                </>
            }
        </>
    )
}

export default Movies