import { ICondition } from "./types";

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
  window.open(url, '_blank');
};

export const validateConditionsForRow = (
  row: Record<string, any>,
  conditions: Record<string, ICondition[]>
) => {
  const messages: Record<string, string> = {};

  for (const prop in row) {
    if (conditions[prop]) {
      console.log(conditions[prop]);
      const matchedCondition = conditions[prop].find((item) =>
        item.condition(row)
      );

      if (matchedCondition) {
        console.log(matchedCondition.message)
        messages[prop] = matchedCondition.message;
      }
    }
  }
  return messages;
};
