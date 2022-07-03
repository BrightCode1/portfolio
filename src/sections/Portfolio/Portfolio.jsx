import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import PortfolioCard from "../../components/PortfolioCard";
import { portfolioList } from "./portfolioContent";
import { PortfolioContainer } from "./portfolioStyles";

const Portfolio = () => {
  return (
    <PortfolioContainer className="section portfolio" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="port__container container"
      >
        {portfolioList.map((portfolio) => (
          <SwiperSlide key={portfolio.id}>
            <PortfolioCard portfolio={portfolio} />
          </SwiperSlide>
        ))}
      </Swiper>
    </PortfolioContainer>
  );
};

export default Portfolio;
