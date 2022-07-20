import styled from "styled-components";

export const SkillsContainer = styled.section`
  .skills__container {
    row-gap: 0;

    .skills__header {
      display: flex;
      align-items: center;
      margin-bottom: var(--mb-2-5);
      cursor: pointer;

      .skills__icon,
      skills__arrow {
        font-size: 2rem;
        color: var(--first-color);
      }

      .skills__icon {
        margin-right: var(--mb-0-75);
      }

      .skills__title {
        font-size: var(--h3-font-size);
      }

      .skills__subtitle {
        font-size: var(--small-font-size);
        color: var(--text-color-light);
      }

      .skills__arrow {
        margin-left: auto;
        transition: transform 0.3s ease-in-out;
      }
    }

    .skills__list {
      flex-wrap: wrap;
      display: flex;

      .skills__titles {
        margin: var(--mb-0-5);
        border: 1px solid #eee;
        padding: var(--mb-0-5);
        border-radius: 5px;

        .skills__name {
          font-size: var(--normal-font-size);
          font-weight: var(--font-medium);
        }
      }

      .skills__bar,
      .skills__percentage {
        height: 5px;
        border-radius: 0.25rem;
      }

      .skills__bar {
        background-color: var(--first-color-lighter);
      }

      .skills__percentage {
        background-color: var(--first-color);
        display: block;
      }
    }
  }

  .skills__close .skills__list {
    height: 0;
    overflow: hidden;
  }

  .skills__open .skills__list {
    height: max-content;
    margin-bottom: var(--mb-2-5);
  }

  .skills__open .skills__arrow {
    transform: rotate(-180deg);
  }

  @media screen and (max-width: 350px) {
    .skills_title {
      font-size: var(--normal-font-size);
    }
  }

  @media screen and (min-width: 568px) {
    .skills__container {
      grid-template-columns: repeat(2, 1fr);

      .skills__title {
        font-size: var(--h2-font-size);
      }
    }
  }
`;
