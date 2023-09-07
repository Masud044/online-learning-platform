

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const Banner = () => {
    return (
      
           <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[500px]">
                <SwiperSlide><img  className='' src="https://i.ibb.co/QbZx437/pexels-george-milton-7014337.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/yhKrqVk/pexels-tirachard-kumtanom-733856.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/NZf0rgS/pexels-julia-m-cameron-4144923.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/2nJqC6T/pexels-peter-olexa-4012966.jpg" alt="" /></SwiperSlide>
                
            </Swiper>
      
    );
};

export default Banner;