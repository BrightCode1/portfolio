import styled from "styled-components";

export const AboutContainer = styled.section`
  .about__img {
    width: 200px;
    border-radius: 0.5rem;
    justify-self: center;
    align-self: center;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  }

  .about__description {
    text-align: center;
    margin-bottom: var(--mb-2-5);
  }

  .about__info {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: var(--mb-2-5);

    .about__info-title {
      font-size: var(--h2-font-size);
      font-weight: var(--font-semi-bold);
      color: var(--title-color);
    }

    .about__info-subtitle {
      font-size: var(--smaller-font-size);
    }

    .about__info-title,
    .about__info-subtitle {
      display: block;
      text-align: center;
    }
  }

  .about__btns {
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 568px) {
    .about__container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 768px) {
    .about__container {
      column-gap: 5rem;

      .about__img {
        width: 350px;
      }

      .about__description {
        text-align: initial;
      }

      .about__info {
        justify-content: space-between;
      }

      .about__btns {
        justify-content: initial;
      }
    }
  }
`;
