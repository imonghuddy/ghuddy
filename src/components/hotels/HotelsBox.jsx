import { faGem, faHeart, } from "@fortawesome/free-regular-svg-icons";
import { addToDb, getShoppingCart, removeFromDb, isInCart } from "../../shared/fakeDb";
import './Hotels.css';


import {
  faHouse,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useState } from "react";




const HotelsBox = ({ hotelData }) => {
  let {
    property_name,
    class_rating,
    short_address,
    display_facilities,
    discount_percent,
    black_price,
    red_price,
    images,
    rpredi
  } = hotelData;
  const [isItemInCart, setIsItemInCart] = useState(isInCart(rpredi));

  // console.log(hotelData)

  const handleAddData = (id) => {
    if (isInCart(id)) {
      removeFromDb(id);
      setIsItemInCart(false); // Item removed from cart
    } else {
      addToDb(id);
      setIsItemInCart(true); // Item added to cart
    }
  };


  return (
    <div className="shadow-customShadow2 hover:customShadow2 my-8 mr-4
     bg-white rounded-xl h-[442px] w-[279px] dark:bg-slate-800 dark:text-white dark:hover:shadow-white">
      <div>
        {/* <img className="rounded-t-xl" src={thumb_image} alt="" /> */}

        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <div >
          {images.slice(0, 6).map((image, indx) => (
            <SwiperSlide key={indx}>
              <div className="relative ">
                <img className="rounded-t-xl h-[205px] w-full" src={image} alt="" />
                <div className="absolute top-0 right-0 h-16 w-16 flex items-center justify-center  text-bg-white rounded-full">
                  <FontAwesomeIcon
                    onClick={() => handleAddData(rpredi)}
                    className={`text-base11 hover:animate-pulse cursor-pointer ${isItemInCart ? "text-btn-red" : ""
                      }`}
                    icon={faHeart}
                  />
                </div>
                <div className="absolute top-5 left-0 px-2 py-1  text-bg-white bg-btn-red">
                  <div className="text-small7 font-medium">
                    <FontAwesomeIcon icon={faGem} />
                    <span className="">
                      {" "}
                      - {Math.ceil(discount_percent)}% off{" "}
                    </span>
                    <span className="bg-bg-white text-btn-red px-[2px] font-semibold">
                      Deal!
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          </div>
        
        </Swiper>
      </div>

      <div className="m-2 h-56 relative">
        <div>
        <div className="flex justify-between gap-5 dark:text-white">
            <p className="font-medium text-txt-primary_light mb-2 dark:text-white">{property_name}</p>
            <div className="flex items-start">
              <div className="flex items-center text-sm dark:text-white">
                {/* <FontAwesomeIcon
                  className="mr-1 text-yellow-400"
                  icon={faStar}
                /> */}
                <span className="mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
<path d="M18.273 7.11964L13.314 6.39893L11.0972 1.90479C11.0367 1.78175 10.9371 1.68214 10.814 1.62159C10.5054 1.46925 10.1304 1.5962 9.97615 1.90479L7.75935 6.39893L2.80036 7.11964C2.66364 7.13917 2.53864 7.20362 2.44294 7.30128C2.32724 7.42019 2.26348 7.58018 2.26568 7.74608C2.26788 7.91199 2.33585 8.07023 2.45466 8.18604L6.04255 11.6841L5.19489 16.6235C5.17502 16.7384 5.18773 16.8566 5.2316 16.9647C5.27546 17.0727 5.34872 17.1663 5.44307 17.2348C5.53742 17.3033 5.64909 17.3441 5.7654 17.3524C5.88171 17.3607 5.99803 17.3362 6.10114 17.2817L10.5367 14.9497L14.9722 17.2817C15.0933 17.3462 15.234 17.3677 15.3687 17.3442C15.7086 17.2856 15.9371 16.9634 15.8785 16.6235L15.0308 11.6841L18.6187 8.18604C18.7164 8.09034 18.7808 7.96534 18.8004 7.82862C18.8531 7.48682 18.6148 7.17042 18.273 7.11964Z" fill="#F6D731"/>
</svg>
                </span>
                {class_rating}
              </div>
            </div>
          </div>
          <div className="text-sm  justify-start  text-neutral-700 my-1 dark:text-white">
            {/* <FontAwesomeIcon className="mr-3" icon={faLocationDot} /> */}
            <div className="flex items-start">
            <span className="mt-1 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
<g clipPath="url(#clip0_356_570)">
<path d="M12.25 6.33252C12.25 10.4159 7 13.9159 7 13.9159C7 13.9159 1.75 10.4159 1.75 6.33252C1.75 4.94013 2.30312 3.60477 3.28769 2.62021C4.27226 1.63564 5.60761 1.08252 7 1.08252C8.39239 1.08252 9.72774 1.63564 10.7123 2.62021C11.6969 3.60477 12.25 4.94013 12.25 6.33252Z" stroke="#142B33" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 8.08252C7.9665 8.08252 8.75 7.29902 8.75 6.33252C8.75 5.36602 7.9665 4.58252 7 4.58252C6.0335 4.58252 5.25 5.36602 5.25 6.33252C5.25 7.29902 6.0335 8.08252 7 8.08252Z" stroke="#142B33" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_356_570">
<rect width="14" height="14" fill="white" transform="translate(0 0.500488)"/>
</clipPath>
</defs>
</svg>
            </span>
            

            <span className="font-normal text-txt-primary_light">
            {short_address}
            </span>
            </div>
          </div>
          <div className="text-sm text-neutral-700 dark:text-white">
            {/* <FontAwesomeIcon className="mr-2" icon={faHouse} /> */}
            <div className="flex items-start">
              <span className="mt-1 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
<g clipPath="url(#clip0_356_576)">
<path d="M13.4873 5.79048L9.06267 1.36531C8.51507 0.819304 7.77331 0.512695 7.00001 0.512695C6.2267 0.512695 5.48495 0.819304 4.93734 1.36531L0.512757 5.79048C0.349672 5.95252 0.220373 6.14532 0.132355 6.3577C0.0443376 6.57009 -0.000647734 6.79783 7.04637e-06 7.02773V12.7543C7.04637e-06 13.2184 0.184382 13.6636 0.51257 13.9917C0.840759 14.3199 1.28588 14.5043 1.75001 14.5043H12.25C12.7141 14.5043 13.1593 14.3199 13.4874 13.9917C13.8156 13.6636 14 13.2184 14 12.7543V7.02773C14.0007 6.79783 13.9557 6.57009 13.8677 6.3577C13.7796 6.14532 13.6503 5.95252 13.4873 5.79048ZM8.75001 13.3376H5.25001V11.0428C5.25001 10.5787 5.43438 10.1336 5.76257 9.80537C6.09076 9.47718 6.53588 9.29281 7.00001 9.29281C7.46414 9.29281 7.90926 9.47718 8.23744 9.80537C8.56563 10.1336 8.75001 10.5787 8.75001 11.0428V13.3376ZM12.8333 12.7543C12.8333 12.909 12.7719 13.0574 12.6625 13.1668C12.5531 13.2762 12.4047 13.3376 12.25 13.3376H9.91667V11.0428C9.91667 10.2693 9.60938 9.5274 9.0624 8.98042C8.51542 8.43343 7.77356 8.12614 7.00001 8.12614C6.22646 8.12614 5.48459 8.43343 4.93761 8.98042C4.39063 9.5274 4.08334 10.2693 4.08334 11.0428V13.3376H1.75001C1.5953 13.3376 1.44692 13.2762 1.33753 13.1668C1.22813 13.0574 1.16667 12.909 1.16667 12.7543V7.02773C1.16721 6.87313 1.22862 6.72497 1.33759 6.61531L5.76217 2.19189C6.091 1.8646 6.53606 1.68086 7.00001 1.68086C7.46395 1.68086 7.90902 1.8646 8.23784 2.19189L12.6624 6.61706C12.771 6.72629 12.8323 6.87374 12.8333 7.02773V12.7543Z" fill="#142B33"/>
</g>
<defs>
<clipPath id="clip0_356_576">
<rect width="14" height="14" fill="white" transform="translate(0 0.500488)"/>
</clipPath>
</defs>
</svg>
              </span>
            <span className="font-normal text-txt-primary_light">
            {display_facilities[0].name}, {display_facilities[1].name},{" "}
            {display_facilities[2].name}.
            </span>
            </div>

            
          </div>
        </div>

        <div className="text-center absolute inset-x-0 bottom-0 dark:text-white">
          <p className="text-center text-xs font-normal text-txt-primary_light dark:text-white">
            Checkout Price:
          </p>{" "}
          <span className=" text-neutral-700 font-medium dark:text-white">
            {Math.ceil(red_price)} BDT
          </span>{" "}
          <span className="text-txt-primary_light line-through font-medium">
            {" "}
            {black_price} BDT{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default HotelsBox