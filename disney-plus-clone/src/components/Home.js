import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import db from './firebase/Firebase'
import {setMovies} from './redux/moviesSlice'
import {selectUserName} from './redux/userSlice'
import styled from 'styled-components'
import ImageSlider from './sliders/ImageSlider'
import Categories from './sliders/Categories'
import Recommendations from './sliders/Recommendations'
import LatestReleases from './sliders/LatestReleases'
import Originals from './sliders/Originals'
import Trending from './sliders/Trending'
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

const Home = () =>{

  const dispatch = useDispatch()
  const username = useSelector(selectUserName)
  let recommendations = []
  let originals = []
  let latest = []
  let trending = []

  useEffect(() => {

    db.collection('movies').onSnapshot((snapshot)=> {
      snapshot.docs.map( (doc) => {
        switch(doc.data().type){
          case 'recommend':
             recommendations = [...recommendations,{id: doc.id, ...doc.data()}]
              break;
          case 'latest': 
              latest = [...latest,{id: doc.id, ...doc.data()}]
              break;
          case 'original': 
              originals = [...originals,{id: doc.id, ...doc.data()}]
              break;
          case 'trending': 
              trending = [...trending,{id: doc.id, ...doc.data()}]
              break;
        }
        dispatch(setMovies({
          recommendations: recommendations,
          originals: originals,
          trending: trending,
          latest: latest
        }))

      })
    })

    
  }, [username])
    return (
    <>
    {username !== "" 
    ? <div>
        <Container>
            <ImageSlider/>
            <Categories/>
            <Recommendations/>
            <LatestReleases/>
            <Originals/>
            <Trending/>
        </Container>
    </div>
    : null
 }
    </>
    )
}

export default Home