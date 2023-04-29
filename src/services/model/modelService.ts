import { SUCCESS_CODE } from "../../constants/rest";
import Api from "../../api";

export const get = async (): Promise<any> => {
  const response = await Api.get({
    url: ``,
  });

  return new Promise((resolve, reject) => {
    if (SUCCESS_CODE.includes(response.status)) {
      resolve(response.data);
    } else {
      reject(response);
    }
  });
};
