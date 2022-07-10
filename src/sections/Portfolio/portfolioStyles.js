import styled from "styled-components";

export const PortfolioContainer = styled.section`
  .port__container {
    overflow: initial;

    .port__content {
      padding: 0 1.5rem;
      position: relative;

      .port__img {
        wdith: 265px;
        border-radius: 0.5rem;
        justify-content: center;
        max-height: 300px;
        object-fit: cover;
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

      .port__modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: var(--z-modal);
        padding: 0 1rem;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease-in-out;

        &.active-modal {
          opacity: 1;
          visibility: visible;
        }

        .port__modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          font-size: 1.5rem;
          color: var(--first-color);
          cursor: pointer;
        }
      }
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    font-weight: bold;
    color: var(--first-color);

    &:after {
      font-size: 18px;
    }
  }
  .swiper-button-next {
    right: -0.7rem;
  }
  .swiper-button-prev {
    left: -0.7rem;
  }

  .swiper-horizontal > .swiper-pagination-bullets {
    bottom: -2.5rem;

    .swiper-pagination-bullet-active {
      background: var(--first-color);
    }
  }

  @media screen and (min-width: 568px) {
    .port__content {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 768px) {
    .port__content {
      align-items: center;

      .port__img {
        width: 320px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .port__content {
      column-gap: 5rem;
    }

    .swiper-button-next,
    .swiper-button-prev {
      &:after {
        font-size: 2rem;
      }
    }

    .swiper-button-next {
      right: -2.5rem;
    }
    .swiper-button-prev {
      left: -2.5rem;
    }

    .swiper-horizontal > .swiper-pagination-bullets {
      bottom: -4rem;
    }
  }
`;
