import axiosConfig from "../../app/axiosconfig";

export const Signup = async (SignupData) => {
  try {
    const response = await axiosConfig.post(
      `/auth/send-signupdata`,
      SignupData
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error signup", error);
    throw error;
  }
};

export const signin = async (signinData) => {
  try {
    const response = await axiosConfig.post(`/auth/send-logindata`, signinData);
    return response;
  } catch (error) {
    console.error("error in signin", error);
    throw error;
  }
};
