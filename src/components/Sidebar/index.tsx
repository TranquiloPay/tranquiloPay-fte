import {
  sidebarHomeAnimation,
  cardPaymentAnimation,
  donationBoxAnimation,
  menuToCloseAnimation,
} from "../../assets/animations";
import { useNavigate } from "react-router-dom";
import {
  ContainerDesktop,
  ContainerMobile,
  IconMobileContainer,
  SidebarLink,
  SidebarWrapper,
  StyledCollapse,
  WhiteSpaceBorderRadius,
} from "./styles";
import Lottie from "react-lottie";
import { createLottieOptions, isCurrentPage } from "../../utils/generic";
import { useState } from "react";
import { Divider, Typography } from "@mui/material";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();

  const tabNames = {
    closeMenu: "Fechar Menu",
    dashboard: "Dashboard",
    paymentsList: "Lista de Pagamentos",
    payments: "Gerar Doação",
  };

  const [onHover, setOnHover] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <>
      <ContainerMobile>
        {!openMenu ? (
          <IconMobileContainer>
            <FaBars
              onClick={() => {
                setOnHover(true);
                setOpenMenu(true);
              }}
            />
          </IconMobileContainer>
        ) : (
          <SidebarWrapper
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
          >
            <WhiteSpaceBorderRadius />
            <StyledCollapse
              onClick={() => {
                setOpenMenu(false);
              }}
              isOpen={onHover}
              style={{ height: "10px", display: "flex" }}
            >
              <SidebarLink style={{ alignItems: "center" }}>
                <Lottie
                  speed={0.5}
                  options={createLottieOptions(menuToCloseAnimation)}
                  isClickToPauseDisabled={true}
                  height={75}
                  width={75}
                  style={{ cursor: "pointer" }}
                />
                <Typography variant="body1" style={{ alignItems: `center` }}>
                  {onHover ? tabNames.closeMenu : ""}
                </Typography>
              </SidebarLink>
            </StyledCollapse>
            <Divider />
            <StyledCollapse
              isNotVisible={isCurrentPage("/dashboard")}
              isOpen={onHover}
            >
              <SidebarLink
                style={{ alignItems: "center" }}
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                <Lottie
                  speed={0.3}
                  options={createLottieOptions(sidebarHomeAnimation)}
                  isClickToPauseDisabled={true}
                  height={50}
                  width={50}
                  style={{ cursor: "pointer" }}
                />
                <Typography variant="h5" style={{ alignItems: `center` }}>
                  {onHover ? tabNames.dashboard : ""}
                </Typography>
              </SidebarLink>
            </StyledCollapse>
            <StyledCollapse
              isNotVisible={isCurrentPage("/paymentsList")}
              isOpen={onHover}
            >
              <div style={{ textAlign: `left` }}>
                <SidebarLink
                  style={{ alignItems: "center" }}
                  onClick={() => {
                    navigate("/paymentsList");
                  }}
                >
                  <div>
                    <Lottie
                      options={createLottieOptions(cardPaymentAnimation)}
                      isClickToPauseDisabled={true}
                      height={50}
                      width={50}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div>
                    <Typography variant="h5" style={{ alignItems: `center` }}>
                      {onHover ? tabNames.paymentsList : ""}
                    </Typography>
                  </div>
                </SidebarLink>
              </div>
            </StyledCollapse>
            <StyledCollapse
              isNotVisible={isCurrentPage("/payments")}
              isOpen={onHover}
            >
              <SidebarLink
                style={{ alignItems: "center" }}
                onClick={() => {
                  navigate("/payments");
                }}
              >
                <Lottie
                  options={createLottieOptions(donationBoxAnimation)}
                  isClickToPauseDisabled={true}
                  height={50}
                  width={50}
                  style={{ cursor: "pointer" }}
                />
                <Typography variant="h5" style={{ alignItems: `center` }}>
                  {onHover ? tabNames.payments : ""}
                </Typography>
              </SidebarLink>
            </StyledCollapse>
            <WhiteSpaceBorderRadius />
          </SidebarWrapper>
        )}
      </ContainerMobile>
      <ContainerDesktop>
      <SidebarWrapper
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
          >
            <WhiteSpaceBorderRadius />
            <StyledCollapse
              isNotVisible={isCurrentPage("/dashboard")}
              isOpen={onHover}
            >
              <SidebarLink
                style={{ alignItems: "center" }}
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                <Lottie
                  speed={0.3}
                  options={createLottieOptions(sidebarHomeAnimation)}
                  isClickToPauseDisabled={true}
                  height={50}
                  width={50}
                  style={{ cursor: "pointer" }}
                />
                <Typography variant="h5" style={{ alignItems: `center` }}>
                  {onHover ? tabNames.dashboard : ""}
                </Typography>
              </SidebarLink>
            </StyledCollapse>
            <StyledCollapse
              isNotVisible={isCurrentPage("/paymentsList")}
              isOpen={onHover}
            >
              <div style={{ textAlign: `left` }}>
                <SidebarLink
                  style={{ alignItems: "center" }}
                  onClick={() => {
                    navigate("/paymentsList");
                  }}
                >
                  <div>
                    <Lottie
                      options={createLottieOptions(cardPaymentAnimation)}
                      isClickToPauseDisabled={true}
                      height={50}
                      width={50}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div>
                    <Typography variant="h5" style={{ alignItems: `center` }}>
                      {onHover ? tabNames.paymentsList : ""}
                    </Typography>
                  </div>
                </SidebarLink>
              </div>
            </StyledCollapse>
            <StyledCollapse
              isNotVisible={isCurrentPage("/payments")}
              isOpen={onHover}
            >
              <SidebarLink
                style={{ alignItems: "center" }}
                onClick={() => {
                  navigate("/payments");
                }}
              >
                <Lottie
                  options={createLottieOptions(donationBoxAnimation)}
                  isClickToPauseDisabled={true}
                  height={50}
                  width={50}
                  style={{ cursor: "pointer" }}
                />
                <Typography variant="h5" style={{ alignItems: `center` }}>
                  {onHover ? tabNames.payments : ""}
                </Typography>
              </SidebarLink>
            </StyledCollapse>
            <WhiteSpaceBorderRadius />
          </SidebarWrapper>
      </ContainerDesktop>
    </>
  );
};

export default Sidebar;
