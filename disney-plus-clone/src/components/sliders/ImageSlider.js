import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'


const Carousel = styled(Slider)`
margin-top: 10px;
& > button{
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1; 

    &:hover{
        opacity: 1;
        transition: opacity 0.2s ease 0s;
    }
}

ul li button {

    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
}

li.slick-active button:before {
color: white;
}

.slick-list {
overflow: initial;
}

.slick-prev {
left: -45px;
}

.slick-next {
right: -45px;
}
`

const Wrap = styled.div`
  cursor: pointer;
  a {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 3px solid rgba(249, 249, 249, 0.8);
      transition-duration: 200ms;
    }
  }
`;

const ImageSlider = () =>{

    let settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll:1,
        autoplay: true,
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <a>
                <img src="/images/slider-images/slider-badging.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                <img src="/images/slider-images/slider-scale.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                <img src="/images/slider-images/slider-badag.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                <img src="/images/slider-images/slider-scales.jpg" alt="" />
                </a>
            </Wrap>
        </Carousel>
    )

}

export default ImageSlider;