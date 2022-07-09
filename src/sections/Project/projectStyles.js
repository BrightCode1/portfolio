import styled from "styled-components";

export const ProjectContainer = styled.section`
  text-align: center;

  .project__bg {
    background-color: var(--first-color-second);
    padding-top: 3rem;

    .project__title {
      font-size: var(--h2-font-size);
      margin-bottom: var(--mb-0-75);
    }

    .project__description {
      margin-bottom: var(--mb-1-5);
    }

    .project__title,
    .project__description {
      color: #fff;
    }

    .project__img {
      width: 232px;
      justify-self: center;
    }
  }

  @media screen and (max-width: 350px) {
    .project__img {
      width: 200px !important;
    }
  }

  @media screen and (min-width: 568px) {
    .project__container {
      grid-template-columns: repeat(2, 1fr);

      .project__description {
        margin-bottom: var(--mb-1);
      }
    }
  }

  @media screen and (min-width: 768px) {
    text-align: initial;

    .project__bg {
      background: none;
    }

    .project__container {
      background-color: var(--first-color-second);
      border-radius: 1rem;
      padding: 3rem 2.5rem 0;
      grid-template-columns: 1fr max-content;
      column-gap: 3rem;
    }
  }
`;
