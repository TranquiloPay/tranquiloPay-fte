import { styled } from "@stitches/react";
import { Grid, Typography } from "@material-ui/core";

const StyledContainer = styled("div", {
  display: "flex ",
  flexDirection: "row ",
});

const ContainerContent = styled("div", {
  padding: "16px",
  display: "flex ",
  flexDirection: "row",
  alignItems: "center",
  maxHeigth: "80vh",

  // Estilos para o breakpoint 'xs' com largura mínima de 0px
  "@media (min-width: 0px) and (max-width: 415px)": {
    flexDirection: "column",
    marginTop: "150px",
  },

  // Estilos para o breakpoint 'sm' com largura mínima de 400px
  "@media (min-width: 416px) and (max-width: 600px)": {
    flexDirection: "column",
    marginTop: "150px",
  },

  // Estilos para o breakpoint 'md' com largura mínima de 960px
  "@media (min-width: 551px) and (max-width: 960px)": {
    marginTop: "150px",
  },

  // Estilos para o breakpoint 'lg' com largura mínima de 1280px
  "@media (min-width: 961px) and (max-width: 1280px)": {},
});

const ContainerTexts = styled(Grid, {
  maxWidth: "50%",
  // Estilos para o breakpoint 'sm' com largura mínima de 400px
  "@media (min-width: 0px) and (max-width: 724px)": {
    maxWidth: "100%",
  },
  "@media (min-width: 551px) and (max-width: 724px)": {},
});

const ContainerLottie = styled("div", {});

const StyledTypography = styled(Typography, {
  // Estilos para o breakpoint 'xs' com largura mínima de 0px
  "@media (min-width: 0px) and (max-width: 415px)": {
    fontSize: "15px !important",
  },

  // Estilos para o breakpoint 'sm' com largura mínima de 400px
  "@media (min-width: 416px) and (max-width: 550px)": {
    fontSize: "15px !important",
  },

  // Estilos para o breakpoint 'md' com largura mínima de 960px
  "@media (min-width: 551px) and (max-width: 960px)": {
    fontSize: "15px !important",
  },

  // Estilos para o breakpoint 'lg' com largura mínima de 1280px
  "@media (min-width: 961px) and (max-width: 1280px)": {},
});

export {
  StyledContainer,
  ContainerContent,
  ContainerTexts,
  ContainerLottie,
  StyledTypography,
};
