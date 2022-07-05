import styled from "styled-components";

export const PortfolioContainer = styled.section`
  .port__container {
    overflow: initial;

    .port__content {
      padding: 0 1.5rem;

      .port__img {
        wdith: 265px;
        border-radius: 0.5rem;
        justify-content: center;
      }

      .port__title {
        font-size: var(--h3-font-size);
        margin-bottom: var(--mb-0-5);
      }

      .port__description {
        margin-bottom: var(--mb-0-75);
        font-size: var(--small-font-size);
      }

      .port__btn:hover .btn__icon {
        transform: translateX(0.25rem);
      }
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    font-weight: bold;
    border-radius: 50%;
    background: white;
    border: 1px solid var(--first-color);
    color: var(--first-color);
    width: 35px;
    height: 35px;

    &:after {
      font-size: 15px;
    }
  }
  .swiper-button-next {
    right: -0.5rem;
  }
  .swiper-button-prev {
    left: -0.5rem;
  }

  .swiper-horizontal > .swiper-pagination-bullets {
    bottom: -2.5rem;

    .swiper-pagination-bullet-active {
      background: var(--first-color);
    }
  }
`;
