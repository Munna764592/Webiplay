import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper';
import img1 from '../image/My project.png';
import img2 from '../image/1img.png'
import img3 from '../image/My project12.png'
// import 'swiper/css';

export default function Home() {
    return (
        <>
            <Swiper modules={[Navigation, EffectFade, Autoplay]}
                navigation
                effect=''
                speed={500}
                slidesPerView={1}
                loop
                autoplay={true
                }
                className='myswiper'
            >
                <SwiperSlide className='swiper-slide'>
                    <div className='flex-img'>
                        <img src={img1} alt='image' />
                        <div className='content'><h1 className='heading'>Search Engine Optimization</h1>
                            <div className='para'>Our team uses cutting-edge SEO services and digital marketing tactics to enhance your site's organic traffic and search engine rankings for sales-generating keywords and long-tail terms.</div>
                            <button className='btn_front'>Learn More</button></div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide2'>
                    <div className='flex-img'>
                        <div className='content'>hfvbdjohgiufshiiu</div>
                        <img src={img2} alt='image' />
                    </div>
                </SwiperSlide >
                <SwiperSlide className='swiper-slide3'>
                    <div className='flex-img'>
                        <img src={img3} alt='image' />
                        <div>hfvbdjohgiufshiiu</div>
                    </div>
                </SwiperSlide >
                {/* <SwiperSlide className='swiper-slide'>
                    <img src={img4} alt='image' />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={img5} alt='image' />
                </SwiperSlide> */}
            </Swiper>
            <div className='h'></div>
        </>
    );
}
