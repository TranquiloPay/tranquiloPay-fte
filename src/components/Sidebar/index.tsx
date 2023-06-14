import sidebarHomeAnimation from "../../assets/animations/sidebarhome.json";
import cardPaymentAnimation from "../../assets/animations/card.json";
import donationBoxAnimation from "../../assets/animations/donationBox.json";
import { useNavigate } from "react-router-dom";
import {
  SidebarLink,
  SidebarWrapper,
  StyledCollapse,
  WhiteSpaceBorderRadius,
} from "./styles";
import Lottie from "react-lottie";
import { createLottieOptions } from "../../utils/generic";
import { useState } from "react";
import { Button, Typography } from "@mui/material";

const Sidebar = () => {
  const navigate = useNavigate();

  const tabNames = {
    dashboard: "Dashboard",
    paymentsList: "Lista de Pagamentos",
    payments: "Pagamentos Pagamentos Pagamentos",
  };

  const [onHover, setOnHover] = useState<boolean>(false);

  return (
    <SidebarWrapper
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <WhiteSpaceBorderRadius />
      <StyledCollapse isOpen={onHover}>
        <SidebarLink
            style={{ alignItems: "center" }}

          onClick={() => {
            navigate("/dashboard");
          }}
        >
          <Lottie
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
      <StyledCollapse isOpen={onHover}>
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

      <StyledCollapse isOpen={onHover}>
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
  );
};

export default Sidebar;
