import styled from "styled-components";

export const StyledAddForm = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  .form {
    display: flex;
    align-items: flex-end;
    gap: 10px;
  }
  label {
    color: var(--white);
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    gap: 5px;
    width: 260px;
    height: 40px;
    border-radius: 5px;
    font-weight: 600;
    font-size: 22px;
    background: var(--primary);
    color: var(--white);
  }
  .input-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-height: 106px;
  }
  .icon {
    font-size: 20px;
    color: var(--white);
  }
  .error {
    color: red;
  }
`;
