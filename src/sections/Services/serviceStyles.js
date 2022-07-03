import styled from "styled-components";

export const ServiceContainer = styled.section`
  .services__container {
    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);

    .services__content {
      position: relative;
      background-color: var(--container-color);
      padding: 3.5rem 0.5rem 1.25rem 1.5rem;
      border-radius: 0.25rem;
      box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.15);
      transition: all 0.3s ease-in-out;

      &:hover {
        box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
      }

      .services__icon {
        display: block;
        font-size: 1.5rem;
        color: var(--first-color);
        margin-bottom: 1rem;
      }

      .services__title {
        font-size: var(--h3-font-size);
        margin-bottom: 1rem;
        font-weight: var(--font-medium);
      }

      .services__btn {
        cursor: pointer;
        font-size: var(--small-font-size);

        &:hover .btn__icon {
          transform: translateX(0.5rem);
        }
      }

      .services__modal {
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

        .services__modal-content {
          position: relative;
          background-color: var(--container-color);
          padding: 1.5rem;
          border-radius: 0.5rem;

          .services__modal-title {
            font-size: var(--h3-font-size);
            margin-bottom: var(--mb-1-5);
            font-weight: var(--font-medium);
          }

          .services__modal-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            font-size: 1.5rem;
            color: var(--first-color);
            cursor: pointer;
          }

          .services__modal-services {
            row-gap: 1rem;

            .services__modal-service {
              display: flex;
              align-items: center;

              .services__modal-icon {
                color: var(--first-color);
                margin-right: var(--mb-0-25);
              }
            }
          }
        }
      }
    }
  }
`;
