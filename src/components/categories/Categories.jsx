import { useContext, useEffect, useState } from "react";
import CategoryBox from "./CategoryBox";
import Container from "../../shared/Container";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import { AuthContext } from "../../providers/AuthProvider";


const Categories = () => {
    const [categoriesData, setCategoriesData] = useState([]);
    const { activeCategory, handleCategoryClick } =
      useContext(AuthContext);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    
    useEffect(() => {
        fetch("propertyType.json")
        .then((res) => res.json())
        .then((data) => setCategoriesData(data))
        .catch((error)=> console.log(error))
    }, [])


    // const [activeCategory, setActiveCategory] = useState("");

    // const handleCategoryClick = (label) => {
    //   setActiveCategory((prevActiveCategory) =>
    //     prevActiveCategory === label ? "" : label
    //   );
    // };

    // console.log(activeCategory)



  return (
    <Container>
      {/* <div className="pt-16 flex flex-row items-center justify-between overflow-x-auto"> */}
      <div className="pt-16">
        <Swiper
          // spaceBetween={50}
          // slidesPerView={windowWidth <= 640 ? 5 : windowWidth <= 992 ? 6 : 8}

          slidesPerView={"auto"}
                        centeredSlides={false}
                         spaceBetween={0}
                        freeMode={true}
                        grabCursor={true}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"

                        breakpoints={{
                          // when window width is >= 640px
                          375: {
                            width: 375,
                            slidesPerView: 5,
                          },
                          480: {
                            width: 480,
                            slidesPerView: 7,
                          },
                          // when window width is >= 768px
                          // 768: {
                          //   width: 768,
                          //   slidesPerView: 7,
                          // },
                          
                        }}
          
        >
          {categoriesData.map((item) => (
            <SwiperSlide key={item.label} className="swiper-slide-margin">
              <CategoryBox
                label={item.label}
                iconUrl={item.iconUrl}
                value={item.value}
                isActive={activeCategory === item.label}
                onClick={() => handleCategoryClick(item.label)}
              ></CategoryBox>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* {categoriesData.map((item) => (
          <CategoryBox
            label={item.label}
            iconUrl={item.iconUrl}
            value={item.value}
            key={item.label}
          ></CategoryBox>
        ))} */}
      </div>
    </Container>
  );
}

export default Categories