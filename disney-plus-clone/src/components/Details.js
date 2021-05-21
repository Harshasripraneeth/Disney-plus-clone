import styled from 'styled-components'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "./firebase/Firebase";
const Container = styled.div`
position: relative;
min-height: calc(100vh-250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);
`
const Background = styled.div`
left: 0px;
opacity: 0.8;
position: fixed;
right: 0px;
top: 0px;
z-index: -1;
img {
width: 100vw;
height: 100vh;
@media (max-width: 768px) {
    width: initial;
}
}
`;

const ImageTitle = styled.div`
align-items: flex-end;
display: flex;
-webkit-box-pack: start;
justify-content: flex-start;
margin: 0px auto;
height: 30vw;
min-height: 170px;
padding-bottom: 20px;
width: 100%;
img {
max-width: 600px;
min-width: 200px;
width: 35vw;
}
`;

const ContentMeta = styled.div`
  max-width: 874px;
  margin-bottom: 50px;
`;

const Controls = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
margin: 25px 0px;
min-height: 55px;
`;

const Player = styled.button`
font-size: 15px;
margin: 0px 20px 0px 0px;
padding: 0px 20px;
height: 50px;
border-radius: 4px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
letter-spacing: 1.5px;
text-align: center;
text-transform: uppercase;
background: rgb (249, 249, 249);
border: none;
color: rgb(0, 0, 0);
img {
width: 30px;
}
&:hover {
background: rgb(198, 198, 198);
}
@media (max-width: 768px) {
height: 45px;
padding: 0px 10px;
font-size: 10px;
margin: 0px 10px 0px 0px;
img {
    width: 25px;
}
}
`;

const Trailer = styled(Player)`
background: rgba(0, 0, 0, 0.3);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
`;

const AddList = styled.div`
margin-right: 15px;
height: 40px;
width: 40px;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.6);
border-radius: 50%;
border: 2px solid white;
cursor: pointer;
span {
background-color: rgb(249, 249, 249);
display: inline-block;
&:first-child {
    height: 2px;
    transform: translate(1px, 0px) rotate(0deg);
    width: 15px;
}
&:nth-child(2) {
    height: 15px;
    transform: translateX(-8px) rotate(0deg);
    width: 2px;
}
}
`;

const GroupWatch = styled.div`
height: 40px;
width: 40px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
background: white;
div {
height: 35px;
width: 35px;
background: rgb(0, 0, 0);
border-radius: 50%;
img {
    width: 100%;
}
}
`;

const SubTitle = styled.div`
color: rgb(249, 249, 249);
font-size: 15px;
min-height: 20px;
@media (max-width: 768px) {
font-size: 12px;
}
`;

const Description = styled.div`
line-height: 1.2;
font-size: 17px;
padding: 12px 0px;
color: rgb(249, 249, 249);
@media (max-width: 768px) {
font-size: 14px;
}
`;
const Details = () => {
    const { id } = useParams();
    const [movie, setmovie] = useState({});
  
    useEffect(() => {
      db.collection("movies").doc(id).get()
      .then((doc) => {
          if(doc.exists){
              setmovie(doc.data())
          }
          else{
              console.log("movie not found in firebase");
          }
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        })
    }, [id])
  
    return (
      <Container>
        <Background>
          <img alt={movie.title} src={movie.backgroundImg} />
        </Background>
  
        <ImageTitle>
          <img alt={movie.title} src={movie.titleImg} />
        </ImageTitle>
        <ContentMeta>
          <Controls>
            <Player>
              <img src="/images/play-icon-black.png" alt="" />
              <span>Play</span>
            </Player>
            <Trailer>
              <img src="/images/play-icon-white.png" alt="" />
              <span>Trailer</span>
            </Trailer>
            <AddList>
              <span />
              <span />
            </AddList>
            <GroupWatch>
              <div>
                <img src="/images/group-icon.png" alt="" />
              </div>
            </GroupWatch>
          </Controls>
          <SubTitle>{movie.subTitle}</SubTitle>
          <Description>{movie.description}</Description>
        </ContentMeta>
      </Container>
    );
  };

export default Details