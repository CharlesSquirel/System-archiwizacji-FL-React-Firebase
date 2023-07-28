import styled from "styled-components";
const StyledTitle = styled.h1`
  text-align: center;
  color: var(--white);
  text-shadow: var(--primary-text-shadow);
`;

function Title({ text }) {
  return <StyledTitle>{text}</StyledTitle>;
}

export default Title;
