import React from "react";
import { Box, Center, Heading, VStack } from "@chakra-ui/react";
import { useLoginPageController } from "./controller";
import { LoginForm } from "./components/form";
import { BasicLayout } from "../../components/layout/base";

export const LoginPage: React.FC = () => {
  const controller = useLoginPageController();

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
                <LoginForm onFormSubmit={controller.onLogin} />
              </Box>
            </Center>
          </VStack>
        </Box>
      </Center>
    </BasicLayout>
  );
};
