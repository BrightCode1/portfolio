import styled from "styled-components";

export const QualificationContainer = styled.section`
  .qua__tabs {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: var(--mb-2);

    .qua__btn {
      font-size: var(--normal-font-size);
      font-weight: var(--font-medium);
      cursor: pointer;
      position: relative;

      &.active:before,
      &:hover:before {
        content: "";
        position: absolute;
        width: 50%;
        height: 2px;
        background-color: var(--first-color);
        bottom: -5px;
        left: 0;
        transition: all 0.3s ease-in-out;
        border-radius: 2px;
      }

      &:hover {
        color: var(--first-color);
      }

      .qua__icon {
        font-size: 1.4rem;
        margin-right: var(--mb-0-25);
      }
    }
  }

  .qua__sections .qua__content:nth-child(2) {
    .qua__data {
      display: grid;
      grid-template-columns: 1fr max-content 1fr;
      column-gap: 1.5rem;
    }

    .qua__rounder {
      display: inline-block;
      width: 13px;
      height: 13px;
      background-color: var(--first-color);
      border-radius: 50%;
    }

    .qua__linear {
      display: block;
      width: 2px;
      height: 100%;
      background-color: var(--first-color);
      transform: translate(6px, -7px);
    }
  }

  .qua__title {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
  }

  .qua__subtitle {
    display: inline-block;
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-1);
  }

  .qua__calendar {
    font-size: var(--smaller-font-size);
    color: var(--text-color-light);
    display: flex;
    align-items: center;

    .qua__calendar-icon {
      font-size: 1rem;
      margin-right: var(--mb-0-25);
    }
  }

  .qua__content {
    display: none;
  }

  .qua__content.qua__active {
    display: block;
  }
`;
