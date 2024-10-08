import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TopBannerFile } from "../TopBannerFile";

export const TopBanner = () => {
  const pagination = {
    clickable: true,
  };
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={pagination}
      effect={"fade"}
      modules={[Pagination, Autoplay, EffectFade]}
      className="mySwiper"
      style={{
        "--swiper-pagination-color": "#c24c56",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "12px",
      }}
    >
      <SwiperSlide>
        <TopBannerFile
          fileLocation={"muslim-wedding.jpg"}
          heading={"A Day to Remember"}
          passage={
            "Experience the magic of your wedding day, where every detail is crafted to perfection, making memories that will last a lifetime"
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <TopBannerFile
          fileLocation={"hindu-wedding.jpg"}
          heading={"Cultural Elegance"}
          passage={
            "Celebrate your heritage with a wedding that honors timeless traditions, blending rich cultural elements with modern flair"
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <TopBannerFile
          fileLocation={"christian-wedding.jpg"}
          heading={"Love in Every Detail"}
          passage={
            "From the vows to the venue, every aspect of your wedding is a reflection of your unique love story, beautifully told"
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <TopBannerFile
          fileLocation={"bohemian-wedding.jpg"}
          heading={"Your Dream, Our Mission"}
          passage={
            "We turn your wedding dreams into reality, creating an unforgettable day that exceeds your expectations in every way"
          }
        />
      </SwiperSlide>
    </Swiper>
  );
};
