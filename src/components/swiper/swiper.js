// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";
import slideImage from "../../assets/images/Slider1.png"

const SwiperComponent = ()=>{
    return(
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper w-full h-full"
        >
          <SwiperSlide><img src={slideImage} alt="slide-imgage"/></SwiperSlide>
          <SwiperSlide><img src={slideImage} alt="slide-imgage"/></SwiperSlide>
          <SwiperSlide><img src={slideImage} alt="slide-imgage"/></SwiperSlide>
          <SwiperSlide><img src={slideImage} alt="slide-imgage"/></SwiperSlide>
          <SwiperSlide><img src={slideImage} alt="slide-imgage"/></SwiperSlide>
        </Swiper>
    )
}

export default SwiperComponent;