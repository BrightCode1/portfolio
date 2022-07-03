import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import {
  IoIosCloseCircleOutline,
  IoMdCheckmarkCircleOutline,
} from "react-icons/io";

const ServicesCard = ({ service }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="services__content">
      <div>
        <service.icon className="services__icon" />
        <h3 className="services__title">
          {service.title1} <br />
          {service.title2}
        </h3>
      </div>
      <span
        className="btn btn--flex btn--small btn--link services__btn"
        onClick={() => setOpenModal(true)}
      >
        Learn More <BsArrowRightShort className="btn__icon" />
      </span>

      <div className={`services__modal ${!openModal ? "" : "active-modal"}`}>
        <div className="services__modal-content">
          <h4 className="services__modal-title">
            {service.title1} <br />
            {service.title2}
          </h4>
          <IoIosCloseCircleOutline
            className="services__modal-close"
            onClick={() => setOpenModal(false)}
          />

          <ul className="services__modal-services grid">
            {service.lists.map((list, i) => (
              <li className="services__modal-service" key={i}>
                <IoMdCheckmarkCircleOutline className="services__modal-icon" />
                {list}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
