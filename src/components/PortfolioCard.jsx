import { useState } from "react";

import { BsArrowRightShort } from "react-icons/bs";
import { IoBan } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";

const PortfolioCard = ({ portfolio }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="port__content grid">
      <img
        src={portfolio.img}
        alt="Portfolio logo"
        className="port__img"
        onClick={() => setOpenModal(true)}
      />
      <div className="port__data">
        <h3 className="port__title">{portfolio.title}</h3>
        <p
          className="port__description"
          dangerouslySetInnerHTML={{ __html: portfolio.desc }}
        ></p>
        {portfolio.isAvailable ? (
          <a
            href={portfolio.link}
            className="btn btn--flex btn--small port__btn"
            target="_blank"
            rel="noreferrer"
          >
            Demo
            <BsArrowRightShort className="btn__icon" />
          </a>
        ) : (
          <span className="btn btn--flex btn--small btn--disabled port__btn">
            Unavailable
            <IoBan className="btn__icon" />
          </span>
        )}
      </div>

      <div className={`port__modal ${!openModal ? "" : "active-modal"}`}>
        <div className="port__modal-content">
          <span onClick={() => setOpenModal(false)}>
            <IoIosCloseCircleOutline className="port__modal-close" />
          </span>
          <img src={portfolio.img} alt="" className="port__modal-img" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
