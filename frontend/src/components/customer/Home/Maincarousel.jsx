import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CarouselData } from './CarouselData';

const items = CarouselData.map((item)=>(
    // eslint-disable-next-line react/jsx-key
    <img src={item.image}/>
))
 
const MainCarousel = ()=>(
    <AliceCarousel
      disableButtonsControls
      items={items}
      autoPlay
      autoPlayInterval={1000}
      infinite
      disableDotsControls
    />
)

export default MainCarousel