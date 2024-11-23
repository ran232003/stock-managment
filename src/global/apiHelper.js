// src/utils/apiHelper.js
import { apiCall } from "../apiCall";

import { useDispatch } from "react-redux";
import { loadingAction } from "../store/loadingData";

export const useApiHelper = () => {
  const dispatch = useDispatch();

  const handleApiCall = async (
    method,
    url,
    body,
    onSuccess,
    onFailure,
    componentAction,
    dealy
  ) => {
    dispatch(loadingAction.toggleLoading(true));
    //await new Promise((resolve) => setTimeout(resolve, (dealy = 1000)));
    try {
      const data = await apiCall(method, url, body);
      if (data.status === "ok") {
        onSuccess(data);
        console.log("final");
      } else {
        if (onFailure) onFailure(data);
        console.log("final");
      }
    } catch (error) {
      console.error(error);
      console.log("final");
      if (onFailure) {
        console.log("final");
        onFailure(error);
      }
    } finally {
      console.log("final");
      dispatch(loadingAction.toggleLoading(false));
    }
  };

  return { handleApiCall };
};
