import axiosConfig from "../../app/axiosConfig";

export const register = async (SignupData) => {
  try {
    const response = await axiosConfig.post(
      `/auth/send-signupdata`,
      SignupData
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error Register", error);
    throw error;
  }
};
export const login = async (SigninData) => {
  try {
    const response = await axiosConfig.post(`/auth/send-logindata`, SigninData);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Logi Error", error);
    throw error;
  }
};
