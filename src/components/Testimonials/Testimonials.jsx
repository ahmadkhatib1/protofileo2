import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import { clients } from './Clinet'
import { Blur, HeadingText, ImgClint, ReviewClint, Testimonial, TestimonialHeading, TWrap } from './StyledTestimonials'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import "./swipe.css";
import 'swiper/css/pagination';
import 'swiper/css';
const Testimonials = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <Testimonial id='testimonial' >
            <TestimonialHeading>
                <HeadingText>Client always get </HeadingText>
                <HeadingText>Exceptional work</HeadingText>
                <HeadingText> For me .... </HeadingText>
                <Blur />
                <Blur />
            </TestimonialHeading>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <TWrap>
                                <ImgClint src={client.img} />
                                <ReviewClint
                                    style={{ color: darkMode ? 'white`' : '', }}
                                >{client.review}</ReviewClint>
                            </TWrap>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Testimonial>
    )
}

export default Testimonials