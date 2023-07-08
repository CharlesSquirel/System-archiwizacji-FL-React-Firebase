import styled from "styled-components";
import { StyledButton } from "../GlobalStyle/GlobalComponents";

export const UserInfoWrapper = styled.div`
  display: flex;
  gap: 5px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px 20px 0 0;
  color: var(--white);
`;
export const UserInfoText = styled.p`
  text-shadow: var(--primary-text-shadow);
`;
export const LogoutButton = styled(StyledButton)`
  width: 100px;
  height: auto;
  font-size: 16px;
`;
