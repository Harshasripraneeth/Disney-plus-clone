import styled from 'styled-components'
import HoverVideoPlayer from 'react-hover-video-player';

const Container = styled.div`
  margin-top:20px;
  padding: 20px 0px 20px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`

const Player = styled(HoverVideoPlayer)`
  padding-top: 50%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    height: 100%;
    object-fit: cover;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`

const Categories = ()=>{
    return (
    <Container>
      <Player videoSrc="/videos/disney.mp4"
        pausedOverlay={
          <img src="/images/categories-disney.png" alt="no-image" />
        }
        loadingOverlay={
          <div className="loading-spinner-overlay" />
        } />

      <Player videoSrc="/videos/pixar.mp4"
      pausedOverlay={
        <img src="/images/categories-pixar.png" alt="no-image" />
      }
      loadingOverlay={
        <div className="loading-spinner-overlay" />
      } />

      <Player videoSrc="/videos/marvel.mp4"
      pausedOverlay={
        <img src="/images/categories-marvel.png" alt="no-image" />
      }
      loadingOverlay={
        <div className="loading-spinner-overlay" />
      } />
    
      <Player videoSrc="/videos/star-wars.mp4"
      pausedOverlay={
        <img src="/images/categories-starwars.png" alt="no-image" />
      }
      loadingOverlay={
        <div className="loading-spinner-overlay" />
      } />

      <Player videoSrc="/videos/national-geographic.mp4"
      pausedOverlay={
        <img src="/images/categories-national.png" alt="no-image" />
      }
      loadingOverlay={
        <div className="loading-spinner-overlay" />
      } />
    
    </Container>
    )
}



export default Categories