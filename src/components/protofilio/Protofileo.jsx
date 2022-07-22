import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import { ProtfiloHeading, ProtfiloImage, Protofilo } from './StyledProtofileo';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swipe.css';
import 'swiper/css';
// impor image 
import Hoc from '../../img/hoc.png';
import Musicapp from '../../img/musicapp.png';
import Ecommerce from '../../img/ecommerce.png';
import Sidebar from '../../img/sidebar.png';
// context
const Protofileo = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Protofilo className='portfolio' id='protofileo' >
      <ProtfiloHeading
        style={{ color: darkMode ? 'white' : '', }}
      >Recent Projects</ProtfiloHeading>
      <ProtfiloHeading>Protofileo</ProtfiloHeading>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
      >
        <SwiperSlide >
          <ProtfiloImage src={Sidebar} />
        </SwiperSlide>
        <SwiperSlide>
          <ProtfiloImage src={Ecommerce} />
        </SwiperSlide>
        <SwiperSlide>
          <ProtfiloImage src={Musicapp} />
        </SwiperSlide>
        <SwiperSlide>
          <ProtfiloImage src={Hoc} />
        </SwiperSlide>
      </Swiper>
    </Protofilo>
  )
}
export default Protofileo