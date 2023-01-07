import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';
import img1 from '../image/25921173_7160161.jpg';
import img2 from '../image/doctor-with-stethoscope-hand-hospital-background-medical-medicine-concept.jpg'
import img3 from '../image/doctor-with-stethoscope-hand-hospital-background.jpg'
import img4 from '../image/successful-medical-team.jpg'
import img5 from '../image/young-male-psysician-with-patient-measuring-blood-pressure.jpg'
import 'swiper/css';
// import 'swiper/navigation';
// import 'swiper/effect-fade';

export default function Home() {
    return (
        <>
            <Swiper modules={[Navigation, EffectFade]}
                navigation
                effect=''
                speed={500}
                slidesPerView={1}
                loop
                className='myswiper'
            >
                <SwiperSlide className='swiper-slide'>
                    <div className='flex-img'>
                    
                    <img src={img1} alt='image' />
                    <div>hfvbdjohgiufshiiu</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={img2} alt='image' />
                </SwiperSlide >
                <SwiperSlide className='swiper-slide'>
                    <img src={img3} alt='image' />
                </SwiperSlide >
                <SwiperSlide className='swiper-slide'>
                    <img src={img4} alt='image' />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={img5} alt='image' />
                </SwiperSlide>
            </Swiper>

        </>
    );
}