import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

const Header = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Title = styled.h1`
  font-size: 1.3em;
`;

const Intro = styled.p`
  font-size: large;
`;

const Link = styled.a`
  color: #61dafb;
`;

const AppWrapper = Wrapper;
AppWrapper.Logo = Logo;
AppWrapper.Header = Header;
AppWrapper.Title = Title;
AppWrapper.Intro = Intro;
AppWrapper.Link = Link;

export default AppWrapper;
