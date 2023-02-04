import { ClientResponseError } from "pocketbase";
import { redirect } from "react-router-dom";
import status from "http-status";
import client from "../../services/pocketbase";
import { IUserCredentials } from "./components/form";

export const useLoginPageController = () => {
  const getMessageByStatus = (e: ClientResponseError) => {
    switch (e.status) {
      case status.BAD_REQUEST: {
        return {
          success: false,
          message: "Неверный логин или пароль",
        };
      }
      default: {
        return {
          success: false,
          message: "Ошибка сервера, попробуйте снова",
        };
      }
    }
  };

  const redirectToDashboard = () => {
    redirect("/");
    return { success: true };
  };

  const onLogin = async (values: IUserCredentials) =>
    client
      .collection("users")
      .authWithPassword(values.login, values.password)
      .then(redirectToDashboard)
      .catch(getMessageByStatus);

  return {
    onLogin,
  };
};
