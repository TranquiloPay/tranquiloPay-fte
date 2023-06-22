import { styled } from "@stitches/react";
import { Grid, Typography } from "@material-ui/core";

const StyledContainer = styled("div", {
  display: "flex ",
  flexDirection: "row ",
  marginLeft: "72px !important",

  // Estilos para o breakpoint 'xs' com largura mínima de 0px
  "@media (min-width: 0px) and (max-width: 415px)": {
    marginLeft: "0px !important",
  },

  // Estilos para o breakpoint 'sm' com largura mínima de 400px
  "@media (min-width: 416px) and (max-width: 768px)": {
    marginLeft: "0px !important",
  },
});

const ContainerContent = styled("div", {
  padding: "16px",
  display: "flex ",
  flexDirection: "column-reverse",
  alignItems: "center",

  // Estilos para o breakpoint 'xs' com largura mínima de 0px
  "@media (min-width: 0px) and (max-width: 415px)": {
    flexDirection: "column-reverse",
  },

  // Estilos para o breakpoint 'sm' com largura mínima de 400px
  "@media (min-width: 416px) and (max-width: 550px)": {
    flexDirection: "column-reverse",
  },

  // Estilos para o breakpoint 'lg' com largura mínima de 1280px
  "@media (min-width: 769px)": {
    flexDirection: "column-reverse",
    maxWidth: "40vw !important",
  },
});

const ContainerTexts = styled(Grid, {
  // Estilos para o breakpoint 'sm' com largura mínima de 400px
  "@media (min-width: 400px) and (max-width: 550px)": {},
});

const ContainerLottie = styled("div", {});

const StyledTypography = styled(Typography, {
  // Estilos para o breakpoint 'xs' com largura mínima de 0px
  "@media (min-width: 0px) and (max-width: 415px)": {
    fontSize: "18px !important",
  },

  // Estilos para o breakpoint 'sm' com largura mínima de 400px
  "@media (min-width: 416px) and (max-width: 550px)": {},

  // Estilos para o breakpoint 'md' com largura mínima de 960px
  "@media (min-width: 551px) and (max-width: 960px)": {
    fontSize: "30px !important",
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
