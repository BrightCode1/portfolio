import React from "react";
import { FaAngleUp } from "react-icons/fa";

import { ScrollToTop } from "./componentStyles";

const ScrollTop = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isScroll, setIsScroll] = React.useState(false);

  React.useEffect(() => {
    const onScroll = (e) => {
      setIsScroll(e.target.documentElement.scrollTop > 100);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [isScroll]);
  return (
    <ScrollToTop onClick={scrollToBottom} isScroll={isScroll}>
      <FaAngleUp />
    </ScrollToTop>
  );
};

export default ScrollTop;
