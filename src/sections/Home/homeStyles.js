import styled from "styled-components";

export const HomeContainer = styled.section`
  .home__container {
    gap: 1rem;

    .home__content {
      grid-template-columns: 0.5fr 3fr;
      padding-top: 3.5rem;
      align-items: center;

      .home__social {
        display: grid;
        grid-template-columns: max-content;
        row-gap: 1rem;

        .home__social-icon {
          font-size: 1.25rem;
          color: var(--first-color);

          &:hover {
            color: var(--first-color-alt);
          }
        }
      }

      .home__blob {
        width: 200px;
        fill: var(--first-color);

        .home__blob-img {
          width: 170px;
        }
      }

      .home__data {
        grid-column: 1 / 3;

        .home__title {
          font-size: var(--big-font-size);
        }

        .home__subtitle {
          font-size: var(--h3-font-size);
          color: var(--text-color);
          font-weight: var(--font-medium);
          margin-bottom: var(--mb-0-75);
        }

        .home__description {
          margin-bottom: var(--mb-2);
        }
      }
    }

    .home__scroll {
      display: none;

      .home__scroll-btn {
        color: var(--first-color);
        transition: color 0.3s ease-in-out;

        &:hover {
          transform: translateY(0.25rem);
        }

        .home__scroll-mouse {
          font-size: 2rem;
        }

        .home__scroll-text {
          font-size: var(--small-font-size);
          color: var(--title-color);
          font-weight: var(--font-medium);
          margin-right: var(--mb-0-25);
        }

        .home__scroll-arrow {
          font-size: 1.25rem;
        }
      }
    }

    @media screen and (max-width: 350px) {
      .home__content {
        grid-template-columns: 0.25fr 3fr;

        .home__blob {
          width: 180px !important;
        }
      }
    }

    @media screen and (min-width: 568px) {
      .home__content {
        grid-template-columns: max-content 1fr 1fr;

        .home__data {
          grid-column: initial;
        }

        .home__img {
          order: 1;
          justify-self: center;
        }
      }
    }

    @media screen and (min-width: 768px) {
      row-gap: 5rem;

      .home__content {
        //make 3 later
        padding-top: 5.5rem;
        column-gap: 2rem;

        .home__blob {
          width: 270px;
        }
      }

      .home__scroll {
        display: block;

        .home__scroll-btn {
          margin-left: 3rem;
        }
      }
    }

    @media screen and (min-width: 1024px) {
      .home__blob {
        width: 320px !important;
      }

      .home__social {
        transform: translateX(-6rem);
      }
    }
  }
`;
