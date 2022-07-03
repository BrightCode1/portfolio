import { BsArrowRightShort } from "react-icons/bs";
import { IoBan } from "react-icons/io5";

const PortfolioCard = ({ portfolio }) => {
  return (
    <div className="port__content grid">
      <img src={portfolio.img} alt="Portfolio logo" className="port__img" />
      <div className="port__data">
        <h3 className="port__title">{portfolio.title}</h3>
        <p className="port__description">{portfolio.desc}</p>
        {portfolio.isAvailable ? (
          <a
            href={portfolio.link}
            className="btn btn--flex btn--small port__btn"
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
    </div>
  );
};

export default PortfolioCard;
