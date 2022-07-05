import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--body-color);

  .nav {
    max-width: 968px;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav__logo,
    .nav__toggle {
      color: var(--title-color);
      font-weight: var(--font-medium);
    }

    .nav__logo:hover {
      color: var(--first-color);
    }

    .nav__toggle {
      font-size: 1.1rem;
      cursor: pointer;

      &:hover {
        color: var(--first-color);
      }
    }
  }

  @media screen and (max-width: 767px) {
    .nav__menu {
      position: fixed;
      bottom: -100%;
      left: 0;
      width: 100%;
      background-color: var(--body-color);
      padding: 2rem 1.5rem 4rem;
      box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.15);
      border-radius: 1.5rem 1.5rem 0 0;
      transition: all 0.3s ease-in-out;
    }
  }

  .nav__list {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    .nav__link {
      color: var(--title-color);
      display: flex;
      align-items: center;
      flex-direction: column;
      font-size: var(--small-font-size);

      &:hover {
        color: var(--first-color);
      }

      .nav__icon {
        font-size: 1.2rem;
      }
    }
  }

  .nav__close {
    position: absolute;
    right: 1.5rem;
    bottom: 0.8rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--first-color);

    &:hover {
      color: var(--first-color-alt);
    }
  }

  .show-menu {
    bottom: 0;
  }
`;

export const FooterContainer = styled.footer`
  padding-top: 2rem;

  .footer__bg {
    background-color: var(--first-color-second);
    padding: 2rem 0 3rem;

    .footer__container {
      row-gap: 3.5rem;

      .footer__title {
        font-size: var(--h1-font-size);
        margin-bottom: var(--mb-0-25);
      }
      .footer__subtitle {
        font-size: var(--small-font-size);
      }

      .footer__links {
        display: flex;
        flex-direction: column;
        row-gap: 1.5rem;

        .footer__link:hover {
          color: var(--first-color-lighter);
        }
      }

      .footer__social {
        font-size: 1.2rem;
        margin-right: var(--mb-1-5);

        &:hover {
          color: var(--first-color-lighter);
        }
      }
    }
  }
  .footer__copy {
    font-size: var(--smaller-font-size);
    text-align: center;
    color: var(--first-color-light);
    margin-top: var(--mb-3);
  }

  .footer__title,
  .footer__subtitle,
  .footer__link,
  .footer__social {
    color: #fff;
  }
`;

export const ScrollToTop = styled.div`
  visibility: ${(props) => (props.isScroll ? "visible" : "hidden")};
  position: fixed;
  bottom: 4rem;
  right: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--first-color-lighter);
  border-radius: 10%;
  background-color: var(--first-color);
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
