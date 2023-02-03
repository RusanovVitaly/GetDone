import React from "react";
import BasicLayout from "../../components/basicLayout";
import { Box, Center, Heading, VStack } from "@chakra-ui/react";
import LoginForm from "../../components/loginForm";
import { IFormFields } from "../../components/loginForm/types";
import client from "../../services/pocketbase";
import { redirect } from "react-router-dom";

const LoginPage: React.FC = () => {
  const onLogin = async (values: IFormFields) => {
    // authWithPassword автоматически кладет данные о пользователе в local storage
    // https://pocketbase.io/docs/authentication
    client
      .collection("users")
      .authWithPassword(values.login, values.password)
      .then(() => {
        redirect("/");
      })
      .finally(() => {
        // stop loading
      });
    return { success: true };
  };
  return (
    <BasicLayout>
      <Center w="100%" h="100%">
        <Box w="400px" h="350px" bg="gray.700" borderRadius="18px">
          <VStack h="100%" justifyContent="space-between" alignItems="center">
            <Heading mt={5} size="lg">
              Добро пожаловать!
            </Heading>
            <Center w="100%">
              <Box w="80%" mb={20}>
                <LoginForm onFormSubmit={onLogin} />
              </Box>
            </Center>
          </VStack>
        </Box>
      </Center>
    </BasicLayout>
  );
};
export default LoginPage;
