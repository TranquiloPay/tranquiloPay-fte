import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppHeaderWrapper,
  Container,
  IconContainer,
  StyledLink,
} from "./styles";
import { PlusIcon } from "../../assets/icons";

const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <AppHeaderWrapper>
      <StyledLink onClick={() => navigate("/")}>TranquiloPay</StyledLink>
      <Container>
        <IconContainer onClick={() => navigate("/")}>
          <PlusIcon />
        </IconContainer>
      </Container>
    </AppHeaderWrapper>
  );
};

export default AppHeader;
