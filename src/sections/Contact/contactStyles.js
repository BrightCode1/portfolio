import styled from "styled-components";

export const ContactContainer = styled.section`
  .contact__container {
    row-gap: 3rem;

    .contact__info {
      display: flex;
      margin-bottom: var(--mb-2);

      .contact__icon {
        font-size: 1.5rem;
        color: var(--first-color);
        margin-right: var(--mb-0-75);
      }

      .contact__title {
        font-size: var(--h3-font-size);
        font-weight: var(--font-medium);
      }

      .contact__subtitle {
        font-size: var(--small-font-size);
        color: var(--text-color-light);
      }
    }

    .contact__content {
      background: var(--input-color);
      border-radius: 0.5rem;
      padding: 0.75rem 1rem 0.25rem;

      .contact__label {
        color: var(--title-color);
        font-size: var(--smaller-font-size);
      }

      .contact__input {
        width: 100%;
        background: var(--input-color);
        color: var(--text-color);
        font-family: var(--body-font);
        font-size: var(--normal-font-size);
        border: none;
        outline: none;
        padding: 0.25rem 0.5rem 0.5rem 0;
      }
      textarea.contact__input {
        resize: vertical;
      }
    }
  }
`;
