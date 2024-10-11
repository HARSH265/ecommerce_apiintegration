import axiosConfig from "../../app/axiosconfig";

export const createItem = async (CreateItemData) => {
  try {
    const response = await axiosConfig.post(
      "/auth/send-itemdata",
      CreateItemData
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error("Create Item Error", error);
    throw error;
  }
};

export const updateItem = async (UpdateItemData) => {
  try {
    const response = await axiosConfig.put(
      "/auth/update-itemdata",
      UpdateItemData
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error("Update Item Error", error);
    throw error;
  }
};

export const GetItem = async (GetItemData) => {
  try {
    const response = await axiosConfig.get("/auth/get-itemdata", GetItemData);

    return response;
  } catch (error) {
    console.error("Get Item Error", error);
    throw error;
  }
};

export const deleteItem = async (DeleteItemData) => {
  try {
    const response = await axiosConfig.delete(
      "/auth/delete-itemdata",
      DeleteItemData
    );
    return response;
  } catch (error) {
    console.error("Delete Item Error", error);
    throw error;
  }
};
