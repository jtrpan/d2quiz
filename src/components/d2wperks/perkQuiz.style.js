import styled from 'styled-components';

export const Heading = styled.h1`

.questionLine {
  position: absolute;
  left: 22%;
  top: 6%;
  right: 0;
  font-size: calc(10px + (64 - 28) * ((100vw - 320px) / (1700 - 320))) !important;
  text-align: left;
  font-family: Lato;
  color: #FFFFFF;
  pointer-events: none;
}

.chatLine {
  position: absolute;
  left: 55%;
  top: 6%;
  right: 0;
  font-size: calc(10px + (64 - 28) * ((100vw - 320px) / (1700 - 320))) !important;
  text-align: left;
  font-family: Lato;
  color: #c0c3c4
  pointer-events: none;
}

.contactLine {
  position: absolute;
  left: 22%;
  bottom: 10%;
  right: 0;
  font-size: calc(12px + (64 - 34) * ((100vw - 320px) / (1700 - 320))) !important;
  text-align: left;
  font-family: Montserrat;
  color: #c0c3c4;
  pointer-events: none;
}

.quizBlock {
  position: absolute;
  left: 22%;
  top: 10%;
  right: 0;
  text-align: left;
  font-family: Montserrat;
  color: #c0c3c4;
}

@media (min-width: 1400px){
  .break-small {
    display: none;
  }
}

.contact-link {
  position: absolute;
  top: 30%;
  left: 22%;
  text-align: left;
  text-decoration: none;
  user-select: none;  
  -webkit-tap-highlight-color: transparent;
  font-size: calc(50px + (64 - 22) * ((100vw - 320px) / (1700 - 320))) !important;
  font-family: Fjalla One;

  :active {
    transform: scale(1.2);
  }
}

.contact-link_content {
  display: block;
  color: #7300ea;
}

.contact-link:hover > .contact-link_content {
  color: #f4aff3;
  transform: scale(1.1);

  /* Block "sticky hover" effect on mobile devices */
  @media (hover: none) {
    color: inherit;
  }
}

/* Remove default focus from target elements */  
.contact-link:focus,
.contact-link_content:focus {
  outline: none;
}

/* Only when the outer element is reached by a keyboard, apply the focus styles. Now clicking on the element won't focus the link */  
.contact-link:focus > .contact-link_content {
  color: #557a95;

  /* Apply default focus styles */
  outline: 3px solid turquoise;
}

.buttonGroup {
  position: absolute;
  left: 22%;
  bottom: 11%;
  right: 0;
  size: calc(12px + (64 - 28) * ((100vw - 320px) / (1700 - 320))) !important;
}

.contactIcon {
  padding-right: 30px;
}


.contactButton:hover {
  transform: scale(1.6);
}

.removed{
  pointer-events: none;
  opacity:0;
  width:0;
  height:0;
}
`;


export const Wrapper = styled.section`
  padding: 1em;
  background: #070B34;
`;