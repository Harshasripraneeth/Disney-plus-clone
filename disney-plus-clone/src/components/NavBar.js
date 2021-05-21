import {useEffect} from 'react'
import styled from 'styled-components'
import { auth, provider } from './firebase/Firebase';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, NavLink} from 'react-router-dom';
import { selectUserPhoto,selectUserName,setUserDetails,setSignOutState } from './redux/userSlice';

const NavBar = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 60px;
background-color: #090b13;
display: flex;
justify-content: space-between;
align-itemsL center;
padding: 0 25px;
z-index: 3;
`

const Logo = styled.a`
width: 80px;
margin-top: 5px;
max-height: 80px;
display: inline-block;
img{setSignOutState
    display: block;
    width: 100%;
}
`
const NavMenu = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin-top: 5px;
padding: 0px;
margin-right: auto;
margin-left: 30px;

@media (max-width: 768px){
    display: none
}

a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 100%;
      min-width: 30px;
      width: 20px;
      z-index: auto;
    }
  span {
    margin-top: 4px;
    color: rgb(249, 249, 249);
    font-size: 16px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;
    &:before {
      background-color: rgb(249, 249, 249);
      border-radius: 0px 0px 4px 4px;
      bottom: -6px;
      content: "";
      height: 2px;
      left: 0px;
      opacity: 0;
      position: absolute;
      right: 0px;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
      width: auto;
      }
    }
  &:hover {
    span:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
      }
    }
}
/* @media (max-width: 768px) {
  display: none;
} */
`

const Login = styled.a`
margin-top: 10px;
background-color: rgba(0, 0, 0, 0.6);
padding: 8px;
height: 40px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
border-radius: 4px;
transition: all 0.2s ease 0s;
&:hover {
  background-color: #f9f9f9;
  color: #000;
  border-color: transparent;
}
`;

const UserImg = styled.img`
height: 100%;
`

const DropDown = styled.div`
position: absolute;
top: 48px;
right: 0px;
background: rgb(19, 19, 19);
border: 1px solid rgba(151, 151, 151, 0.34);
border-radius: 4px;
box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
padding: 10px;
font-size: 14px;
letter-spacing: 3px;
width: 100px;
opacity: 0;
`

const SignOut = styled.div`
margin-top:5px;
position: relative;
height: 48px;
width: 48px;
display: flex;
cursor: pointer;
align-items: center;
justify-content: center;
${UserImg} {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
&:hover {
  ${DropDown} {
    opacity: 1;
    transition-duration: 1s;
  }
}
`

const Header = (props) =>{

  const dispatch = useDispatch()
  const history = useHistory()
  const username = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if(user){
        setUser(user)
        history.push('/home')
      }
    })
  }, [username])

  const handleAuthentication = () =>{
    if(username === ""){
        auth.signInWithPopup(provider).then(result => {
          setUser(result.user)
        })
        .catch( error =>{
          alert(error.message) 
        })
    } 
    else {

      auth.signOut().then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));

    }
  }

  const setUser = (user) =>{

    dispatch(setUserDetails({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL
    }))

  }

    return <NavBar>
        <Logo>
            <img src = 'images/logo.svg' alt= "LOGO"/>
        </Logo>
        {
          username === ""
           ? <Login onClick = {handleAuthentication}>Login</Login>
           : <>
           <NavMenu>
               
                <NavLink to="/home" name = "home" >
                  <img src= '/images/home-icon.svg'/>
                  <span>Home</span>
                </NavLink>

                <NavLink to= '/search' name = "search">
                  <img src="/images/search-icon.svg" alt="SEARCH" />
                  <span>SEARCH</span>
                </NavLink>
                
                <NavLink to= '/watchlist'>
                  <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                  <span>WATCHLIST</span>
                </NavLink>
                <NavLink to= '/originals'>
                  <img src="/images/original-icon.svg" alt="ORIGINALS" />
                  <span>ORIGINALS</span>
                </NavLink>
                <NavLink to= '/movies'>
                  <img src="/images/movie-icon.svg" alt="MOVIES" />
                  <span>MOVIES</span>
                </NavLink>
                <NavLink to = '/series'>
                  <img src="/images/series-icon.svg" alt="SERIES" />
                  <span>SERIES</span>
                </NavLink>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={username.substr(0,5)} />
            <DropDown>
              <span onClick={handleAuthentication}>Sign out</span>
            </DropDown>
          </SignOut>
          
            </>
        }
        
        
    </NavBar>

}

export default Header