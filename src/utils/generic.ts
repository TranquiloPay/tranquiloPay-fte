export const createLottieOptions = (
  animationData: any,
  loop?: boolean,
  autoplay?: boolean
) => {
  const lottieOptions = {
    loop: loop || true,
    autoplay: autoplay || true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return lottieOptions;
};

export const redirectToExternalURL = (url: string) => {
  return window.location.replace(url);
};

export const ShowMessageWithCondition = (condicao: any, mensagem: any) => {
  if (condicao) {
    return `${mensagem}`;
  }
};