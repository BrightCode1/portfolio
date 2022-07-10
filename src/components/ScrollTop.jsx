import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

import { ScrollToTop } from "./componentStyles";

const ScrollTop = ({ setCurrentSection, setIsCurrentSection }) => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      const scrollY = window.pageYOffset;
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setCurrentSection(sectionId);
        }
      });
      setIsScroll(e.target.documentElement.scrollTop > 100);
      setIsCurrentSection(e.target.documentElement.scrollTop > 100);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [isScroll, setCurrentSection, setIsCurrentSection]);
  return (
    <ScrollToTop onClick={scrollToBottom} isScroll={isScroll}>
      <FaAngleUp />
    </ScrollToTop>
  );
};

export default ScrollTop;
