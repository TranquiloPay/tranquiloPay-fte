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

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <SidebarWrapper>
      <WhiteSpaceBorderRadius />
      <StyledCollapse>
        <SidebarLink
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
        </SidebarLink>
      </StyledCollapse>
      <StyledCollapse>
        <SidebarLink
          onClick={() => {
            navigate("/paymentsList");
          }}
        >
          <Lottie
            options={createLottieOptions(cardPaymentAnimation)}
            isClickToPauseDisabled={true}
            height={50}
            width={50}
            style={{ cursor: "pointer" }}
          />
        </SidebarLink>
      </StyledCollapse>

      <StyledCollapse>
        <SidebarLink
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
        </SidebarLink>
      </StyledCollapse>
      <WhiteSpaceBorderRadius />
    </SidebarWrapper>
  );
};

export default Sidebar;
