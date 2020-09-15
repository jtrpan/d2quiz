import styled from 'styled-components';

export const Heading = styled.h1`
  font-size: calc(28px + (64 - 28) * ((100vw - 220px) / (1700 - 320))) !important;
  text-align: left;
  font-family: Poppins;
  white-space: nowrap;
  overflow: hidden;

  .city-link {
    font-family: Montserrat;
    color: #000000;
    text-decoration: none;
    display: inline-block;
    user-select: none;  
    -webkit-tap-highlight-color: transparent;
    transition: transform 0.4s ease-in-out;
    pointer-events: auto;
    text-align: center;

    :active {
      transition: transform 0s;
    }
  }

  .city-link_content {
    font-family: Fjalla One;
    display: block;
    color: #D7E5E6;
    text-align: center;
  }

  .city-link:hover > .city-link_content {
    color: #070B34;

    /* Block "sticky hover" effect on mobile devices */
    @media (hover: none) {
      color: inherit;
    }
  }

  /* Remove default focus from target elements */  
  .city-link:focus,
  .city-link_content:focus {
    outline: none;
  }

  .scrollTitle {
    font-family: Raleway;
      color: #C9BEFF;
      pointer-events: none;
      text-align: center;
  }

  .helloTitle {
    font-family: Raleway;
    color: #ACA9BB;
    pointer-events: none;
    text-align: center;
  }

  .landingBlock {
    position: fixed;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -80%);
    color: #8B3881
    pointer-events: none;
    text-align: center;
  }
`;

export const Wrapper = styled.section`
  padding: 1em;
  background: #2B2F77;
`;