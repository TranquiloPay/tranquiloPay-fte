import { SUCCESS_CODE } from "../../constants/rest";
import Api from "../../api";

export const registerNewUser = async (userData: any): Promise<any> => {
  const body = userData;
  const response = await Api.post({
    url: `/auth/register`,
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
