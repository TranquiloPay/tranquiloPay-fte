import { SUCCESS_CODE } from "../../constants/rest";
import Api from "../../api";

export const payment = async (paymentData: any): Promise<any> => {
  const body = paymentData;
  const response = await Api.post({
    url: `/payments`,
    body,
  });

  return new Promise((resolve, reject) => {
    if (SUCCESS_CODE.includes(response.status)) {
      resolve(response.data);
    } else {
      reject(response);
    }
  });
};
