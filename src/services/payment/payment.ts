import { SUCCESS_CODE } from "../../constants/rest";
import Api from "../../api";

export const payment = async (paymentData: any): Promise<any> => {
  const body = paymentData;
  const response = await Api.post({
    config: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        access_token:
          "$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAzMDI5NDM6OiRhYWNoXzNjMjM1YWFjLTZhNDAtNGY0Yi04NGY2LTA0Yjg0NDQxOGE4NA==",
      },
    },
    url: `https://www.asaas.com/api/v3/payments`,
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
