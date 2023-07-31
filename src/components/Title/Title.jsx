import styled from "styled-components";
const StyledTitle = styled.h1`
  text-align: center;
  color: var(--white);
  text-shadow: var(--primary-text-shadow);
`;

const StyledTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  width: 30%;
  height: 60px;
  border-radius: 10px;
`;

function Title({ text }) {
  return (
    <StyledTitleBox>
      <StyledTitle>{text}</StyledTitle>;
    </StyledTitleBox>
  );
}

export default Title;
