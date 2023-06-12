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
