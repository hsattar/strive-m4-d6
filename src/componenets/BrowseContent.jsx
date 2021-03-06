import ContentRow from "./ContentRow"
import Loading from './Loading'


const BrowseMovies = ({ isLoading, content, content2, content3, contentGridLayout }) => {

    return (
      <>
        { isLoading ? <Loading /> :
        <>
          { content && <ContentRow content={content} contentGridLayout={contentGridLayout} /> }
          { content2 && <ContentRow content={content2} contentGridLayout={contentGridLayout} /> }
          { content3 && <ContentRow content={content3} contentGridLayout={contentGridLayout} /> }
        </>
        }
      </>
    )
}

export default BrowseMovies;